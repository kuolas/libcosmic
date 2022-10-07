use std::time::Instant;

use crate::{FontLayoutLine, FontLineIndex, FontMatches, FontShapeLine};

pub enum TextAction {
    Left,
    Right,
    Up,
    Down,
    Backspace,
    Delete,
    Insert(char),
}

#[derive(Default, Eq, PartialEq)]
pub struct TextCursor {
    pub line: usize,
    pub glyph: usize,
}

impl TextCursor {
    pub fn new(line: usize, glyph: usize) -> Self {
        Self { line, glyph }
    }
}

pub struct TextBuffer<'a> {
    font_matches: &'a FontMatches<'a>,
    text_lines: Vec<String>,
    shape_lines: Vec<FontShapeLine<'a>>,
    layout_lines: Vec<FontLayoutLine<'a>>,
    font_size: i32,
    line_width: i32,
    pub cursor: TextCursor,
    pub redraw: bool,
}

impl<'a> TextBuffer<'a> {
    pub fn new(font_matches: &'a FontMatches, text: &str, font_size: i32, line_width: i32) -> Self {
        let mut buffer = Self {
            font_matches,
            text_lines: text.lines().map(String::from).collect(),
            shape_lines: Vec::new(),
            layout_lines: Vec::new(),
            font_size,
            line_width,
            cursor: TextCursor::default(),
            redraw: true,
        };
        buffer.reshape();
        buffer
    }

    pub fn reshape(&mut self) {
        let instant = Instant::now();

        self.shape_lines.clear();
        for (line_i, text_line) in self.text_lines.iter().enumerate() {
            self.shape_lines.push(
                self.font_matches.shape_line(FontLineIndex::new(line_i), text_line)
            );
        }

        let duration = instant.elapsed();
        eprintln!("reshape: {:?}", duration);

        self.relayout();
    }

    pub fn reshape_line(&mut self, line_i: FontLineIndex) {
        let instant = Instant::now();

        self.shape_lines[line_i.get()] = self.font_matches.shape_line(line_i, &self.text_lines[line_i.get()]);

        let duration = instant.elapsed();
        eprintln!("reshape line {}: {:?}", line_i.get(), duration);

        self.relayout_line(line_i);
    }

    pub fn relayout(&mut self) {
        let instant = Instant::now();

        self.layout_lines.clear();
        for line in self.shape_lines.iter() {
            let layout_i = self.layout_lines.len();
            line.layout(self.font_size, self.line_width, &mut self.layout_lines, layout_i);
        }

        self.redraw = true;

        let duration = instant.elapsed();
        eprintln!("relayout: {:?}", duration);
    }

    pub fn relayout_line(&mut self, line_i: FontLineIndex) {
        let instant = Instant::now();

        let mut insert_opt = None;
        let mut layout_i = 0;
        while layout_i < self.layout_lines.len() {
            let layout_line = &self.layout_lines[layout_i];
            if layout_line.line_i == line_i {
                if insert_opt.is_none() {
                    insert_opt = Some(layout_i);
                }
                self.layout_lines.remove(layout_i);
            } else {
                layout_i += 1;
            }
        }

        let shape_line = &self.shape_lines[line_i.get()];
        shape_line.layout(self.font_size, self.line_width, &mut self.layout_lines, insert_opt.unwrap());

        self.redraw = true;

        let duration = instant.elapsed();
        eprintln!("relayout line {}: {:?}", line_i.get(), duration);
    }

    pub fn font_size(&self) -> i32 {
        self.font_size
    }

    pub fn set_font_size(&mut self, font_size: i32) {
        self.font_size = font_size;
        self.relayout();
    }

    pub fn line_width(&self) -> i32 {
        self.line_width
    }

    pub fn set_line_width(&mut self, line_width: i32) {
        self.line_width = line_width;
        self.relayout();
    }

    pub fn layout_lines(&self) -> &[FontLayoutLine] {
        &self.layout_lines
    }

    pub fn text_lines(&self) -> &[String] {
        &self.text_lines
    }

    pub fn action(&mut self, action: TextAction) {
        match action {
            TextAction::Left => {
                let line = &self.layout_lines[self.cursor.line];
                if self.cursor.glyph > line.glyphs.len() {
                    self.cursor.glyph = line.glyphs.len();
                    self.redraw = true;
                }
                if self.cursor.glyph > 0 {
                    self.cursor.glyph -= 1;
                    self.redraw = true;
                }
            },
            TextAction::Right => {
                let line = &self.layout_lines[self.cursor.line];
                if self.cursor.glyph > line.glyphs.len() {
                    self.cursor.glyph = line.glyphs.len();
                    self.redraw = true;
                }
                if self.cursor.glyph < line.glyphs.len() {
                    self.cursor.glyph += 1;
                    self.redraw = true;
                }
            },
            TextAction::Up => {
                if self.cursor.line > 0 {
                    self.cursor.line -= 1;
                    self.redraw = true;
                }
            },
            TextAction::Down => {
                if self.cursor.line + 1 < self.layout_lines.len() {
                    self.cursor.line += 1;
                    self.redraw = true;
                }
            },
            TextAction::Backspace => {
                let line = &self.layout_lines[self.cursor.line];
                if self.cursor.glyph > line.glyphs.len() {
                    self.cursor.glyph = line.glyphs.len();
                    self.redraw = true;
                }
                if self.cursor.glyph > 0 {
                    self.cursor.glyph -= 1;
                    let glyph = &line.glyphs[self.cursor.glyph];
                    let text_line = &mut self.text_lines[line.line_i.get()];
                    text_line.remove(glyph.start);
                    self.reshape_line(line.line_i);
                }
            },
            TextAction::Delete => {
                let line = &self.layout_lines[self.cursor.line];
                if self.cursor.glyph < line.glyphs.len() {
                    let glyph = &line.glyphs[self.cursor.glyph];
                    let text_line = &mut self.text_lines[line.line_i.get()];
                    text_line.remove(glyph.start);
                    self.reshape_line(line.line_i);
                }
            },
            TextAction::Insert(character) => {
                let line = &self.layout_lines[self.cursor.line];
                if self.cursor.glyph >= line.glyphs.len() {
                    match line.glyphs.last() {
                        Some(glyph) => {
                            let text_line = &mut self.text_lines[line.line_i.get()];
                            text_line.insert(glyph.end, character);
                            self.cursor.glyph += 1;
                            self.reshape_line(line.line_i);
                        },
                        None => {
                            let text_line = &mut self.text_lines[line.line_i.get()];
                            text_line.push(character);
                            self.cursor.glyph += 1;
                            self.reshape_line(line.line_i);
                        }
                    }
                } else {
                    let glyph = &line.glyphs[self.cursor.glyph];
                    let text_line = &mut self.text_lines[line.line_i.get()];
                    text_line.insert(glyph.start, character);
                    self.cursor.glyph += 1;
                    self.reshape_line(line.line_i);
                }
            },
        }
    }
}
