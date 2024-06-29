(function() {var type_impls = {
"smithay_clipboard":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clipboard%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smithay_clipboard/dnd/mod.rs.html#191-278\">source</a><a href=\"#impl-Clipboard%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"smithay_clipboard/dnd/trait.RawSurface.html\" title=\"trait smithay_clipboard::dnd::RawSurface\">RawSurface</a>&gt; <a class=\"struct\" href=\"smithay_clipboard/struct.Clipboard.html\" title=\"struct smithay_clipboard::Clipboard\">Clipboard</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.init_dnd\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/dnd/mod.rs.html#193-198\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.init_dnd\" class=\"fn\">init_dnd</a>(\n    &amp;self,\n    tx: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"smithay_clipboard/dnd/trait.Sender.html\" title=\"trait smithay_clipboard::dnd::Sender\">Sender</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/std/sync/mpsc/struct.SendError.html\" title=\"struct std::sync::mpsc::SendError\">SendError</a>&lt;Command&lt;T&gt;&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Set up DnD operations for the Clipboard</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_dnd\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/dnd/mod.rs.html#201-223\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.start_dnd\" class=\"fn\">start_dnd</a>&lt;D: <a class=\"trait\" href=\"smithay_clipboard/mime/trait.AsMimeTypes.html\" title=\"trait smithay_clipboard::mime::AsMimeTypes\">AsMimeTypes</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt;(\n    &amp;self,\n    internal: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a>,\n    source_surface: T,\n    icon_surface: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"smithay_clipboard/dnd/enum.Icon.html\" title=\"enum smithay_clipboard::dnd::Icon\">Icon</a>&lt;T&gt;&gt;,\n    content: D,\n    actions: <a class=\"struct\" href=\"wayland_client/protocol/wl_data_device_manager/struct.DndAction.html\" title=\"struct wayland_client::protocol::wl_data_device_manager::DndAction\">DndAction</a>\n)</h4></section></summary><div class=\"docblock\"><p>Start a DnD operation on the given surface with some data</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end_dnd\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/dnd/mod.rs.html#226-228\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.end_dnd\" class=\"fn\">end_dnd</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>End the current DnD operation, if there is one</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.register_dnd_destination\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/dnd/mod.rs.html#234-240\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.register_dnd_destination\" class=\"fn\">register_dnd_destination</a>(\n    &amp;self,\n    surface: T,\n    rectangles: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"smithay_clipboard/dnd/struct.DndDestinationRectangle.html\" title=\"struct smithay_clipboard::dnd::DndDestinationRectangle\">DndDestinationRectangle</a>&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Register a surface for receiving DnD offers\nRectangles should be provided in order of decreasing priority.\nThis method c~an be called multiple time for a single surface if the\nrectangles change.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_action\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/dnd/mod.rs.html#243-247\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.set_action\" class=\"fn\">set_action</a>(&amp;self, action: <a class=\"struct\" href=\"wayland_client/protocol/wl_data_device_manager/struct.DndAction.html\" title=\"struct wayland_client::protocol::wl_data_device_manager::DndAction\">DndAction</a>)</h4></section></summary><div class=\"docblock\"><p>Set the final action after presenting the user with a choice</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.peek_offer\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/dnd/mod.rs.html#250-277\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.peek_offer\" class=\"fn\">peek_offer</a>&lt;D: <a class=\"trait\" href=\"smithay_clipboard/mime/trait.AllowedMimeTypes.html\" title=\"trait smithay_clipboard::mime::AllowedMimeTypes\">AllowedMimeTypes</a> + 'static&gt;(\n    &amp;self,\n    mime_type: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"smithay_clipboard/mime/enum.MimeType.html\" title=\"enum smithay_clipboard::mime::MimeType\">MimeType</a>&gt;\n) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Peek at the contents of a DnD offer</p>\n</div></details></div></details>",0,"smithay_clipboard::SimpleClipboard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clipboard%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#38-180\">source</a><a href=\"#impl-Clipboard%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"struct\" href=\"smithay_clipboard/struct.Clipboard.html\" title=\"struct smithay_clipboard::Clipboard\">Clipboard</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#46-60\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.new\" class=\"fn\">new</a>(display: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.pointer.html\">*mut </a><a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/ffi/enum.c_void.html\" title=\"enum core::ffi::c_void\">c_void</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates new clipboard which will be running on its own thread with its\nown event queue to handle clipboard requests.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p><code>display</code> must be a valid <code>*mut wl_display</code> pointer, and it must remain\nvalid for as long as <code>Clipboard</code> object is alive.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#65-67\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.load\" class=\"fn\">load</a>&lt;D: <a class=\"trait\" href=\"smithay_clipboard/mime/trait.AllowedMimeTypes.html\" title=\"trait smithay_clipboard::mime::AllowedMimeTypes\">AllowedMimeTypes</a> + 'static&gt;(&amp;self) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Load custom clipboard data.</p>\n<p>Load the requested type from a clipboard on the last observed seat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_text\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#72-74\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.load_text\" class=\"fn\">load_text</a>(&amp;self) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Load clipboard data.</p>\n<p>Loads content from a clipboard on a last observed seat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_primary\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#80-82\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.load_primary\" class=\"fn\">load_primary</a>&lt;D: <a class=\"trait\" href=\"smithay_clipboard/mime/trait.AllowedMimeTypes.html\" title=\"trait smithay_clipboard::mime::AllowedMimeTypes\">AllowedMimeTypes</a> + 'static&gt;(&amp;self) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Load custom primary clipboard data.</p>\n<p>Load the requested type from a primary clipboard on the last observed\nseat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_primary_text\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#87-89\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.load_primary_text\" class=\"fn\">load_primary_text</a>(&amp;self) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Load primary clipboard data.</p>\n<p>Loads content from a  primary clipboard on a last observed seat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_mime\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#94-106\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.load_mime\" class=\"fn\">load_mime</a>&lt;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"enum\" href=\"smithay_clipboard/mime/enum.MimeType.html\" title=\"enum smithay_clipboard::mime::MimeType\">MimeType</a>)&gt;&gt;(\n    &amp;self,\n    allowed: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"enum\" href=\"smithay_clipboard/mime/enum.MimeType.html\" title=\"enum smithay_clipboard::mime::MimeType\">MimeType</a>]&gt;&gt;\n) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Load clipboard data for sepecific mime types.</p>\n<p>Loads content from a  primary clipboard on a last observed seat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_primary_mime\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#111-123\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.load_primary_mime\" class=\"fn\">load_primary_mime</a>&lt;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"enum\" href=\"smithay_clipboard/mime/enum.MimeType.html\" title=\"enum smithay_clipboard::mime::MimeType\">MimeType</a>)&gt;&gt;(\n    &amp;self,\n    allowed: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"enum\" href=\"smithay_clipboard/mime/enum.MimeType.html\" title=\"enum smithay_clipboard::mime::MimeType\">MimeType</a>]&gt;&gt;\n) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Load primary clipboard data for specific mime types.</p>\n<p>Loads content from a  primary clipboard on a last observed seat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#128-130\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.store\" class=\"fn\">store</a>&lt;D: <a class=\"trait\" href=\"smithay_clipboard/mime/trait.AsMimeTypes.html\" title=\"trait smithay_clipboard::mime::AsMimeTypes\">AsMimeTypes</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt;(&amp;self, data: D)</h4></section></summary><div class=\"docblock\"><p>Store custom data to a clipboard.</p>\n<p>Stores data of the provided type to a clipboard on a last observed seat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store_text\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#135-137\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.store_text\" class=\"fn\">store_text</a>&lt;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;(&amp;self, text: D)</h4></section></summary><div class=\"docblock\"><p>Store to a clipboard.</p>\n<p>Stores to a clipboard on a last observed seat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store_primary\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#143-145\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.store_primary\" class=\"fn\">store_primary</a>&lt;D: <a class=\"trait\" href=\"smithay_clipboard/mime/trait.AsMimeTypes.html\" title=\"trait smithay_clipboard::mime::AsMimeTypes\">AsMimeTypes</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt;(&amp;self, data: D)</h4></section></summary><div class=\"docblock\"><p>Store custom data to a primary clipboard.</p>\n<p>Stores data of the provided type to a primary clipboard on a last\nobserved seat.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store_primary_text\" class=\"method\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#150-152\">source</a><h4 class=\"code-header\">pub fn <a href=\"smithay_clipboard/struct.Clipboard.html#tymethod.store_primary_text\" class=\"fn\">store_primary_text</a>&lt;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;(&amp;self, text: D)</h4></section></summary><div class=\"docblock\"><p>Store to a primary clipboard.</p>\n<p>Stores to a primary clipboard on a last observed seat.</p>\n</div></details></div></details>",0,"smithay_clipboard::SimpleClipboard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Clipboard%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#182-190\">source</a><a href=\"#impl-Drop-for-Clipboard%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay_clipboard/struct.Clipboard.html\" title=\"struct smithay_clipboard::Clipboard\">Clipboard</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smithay_clipboard/lib.rs.html#183-189\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.79.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","smithay_clipboard::SimpleClipboard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()