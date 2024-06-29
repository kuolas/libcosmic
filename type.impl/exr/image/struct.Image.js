(function() {var type_impls = {
"exr":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Image%3CLayers%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#74\">source</a><a href=\"#impl-Clone-for-Image%3CLayers%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Layers: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;Layers&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#74\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;Layers&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","exr::image::AnyImage","exr::image::FlatImage","exr::image::PixelLayersImage","exr::image::PixelImage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Image%3CLayers%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#74\">source</a><a href=\"#impl-Debug-for-Image%3CLayers%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Layers: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;Layers&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#74\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.79.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.79.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","exr::image::AnyImage","exr::image::FlatImage","exr::image::PixelLayersImage","exr::image::PixelImage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Image%3CInnerLayers%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#809-823\">source</a><a href=\"#impl-Image%3CInnerLayers%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'s, InnerLayers&gt; <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;InnerLayers&gt;<div class=\"where\">where\n    InnerLayers: <a class=\"trait\" href=\"exr/image/write/layers/trait.WritableLayers.html\" title=\"trait exr::image::write::layers::WritableLayers\">WritableLayers</a>&lt;'s&gt; + 's,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_layer\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#814-822\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/image/struct.Image.html#tymethod.with_layer\" class=\"fn\">with_layer</a>&lt;NewChannels&gt;(\n    self,\n    layer: <a class=\"struct\" href=\"exr/image/struct.Layer.html\" title=\"struct exr::image::Layer\">Layer</a>&lt;NewChannels&gt;\n) -&gt; <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;InnerLayers, <a class=\"struct\" href=\"exr/image/struct.Layer.html\" title=\"struct exr::image::Layer\">Layer</a>&lt;NewChannels&gt;&gt;&gt;<div class=\"where\">where\n    NewChannels: 's + <a class=\"trait\" href=\"exr/image/write/channels/trait.WritableChannels.html\" title=\"trait exr::image::write::channels::WritableChannels\">WritableChannels</a>&lt;'s&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Add another layer to this image. The layer type does\nnot have to equal the existing layers in this image.</p>\n</div></details></div></details>",0,"exr::image::AnyImage","exr::image::FlatImage","exr::image::PixelLayersImage","exr::image::PixelImage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Image%3CLayer%3CChannelData%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#781-799\">source</a><a href=\"#impl-Image%3CLayer%3CChannelData%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'s, ChannelData&gt; <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;<a class=\"struct\" href=\"exr/image/struct.Layer.html\" title=\"struct exr::image::Layer\">Layer</a>&lt;ChannelData&gt;&gt;<div class=\"where\">where\n    ChannelData: <a class=\"trait\" href=\"exr/image/write/channels/trait.WritableChannels.html\" title=\"trait exr::image::write::channels::WritableChannels\">WritableChannels</a>&lt;'s&gt; + 's,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_layer\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#784-787\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/image/struct.Image.html#tymethod.from_layer\" class=\"fn\">from_layer</a>(layer: <a class=\"struct\" href=\"exr/image/struct.Layer.html\" title=\"struct exr::image::Layer\">Layer</a>&lt;ChannelData&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Uses the display position and size to the channel position and size of the layer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_encoded_channels\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#790-793\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/image/struct.Image.html#tymethod.from_encoded_channels\" class=\"fn\">from_encoded_channels</a>(\n    size: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    encoding: <a class=\"struct\" href=\"exr/image/struct.Encoding.html\" title=\"struct exr::image::Encoding\">Encoding</a>,\n    channels: ChannelData\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Uses empty attributes.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_channels\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#796-798\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/image/struct.Image.html#tymethod.from_channels\" class=\"fn\">from_channels</a>(\n    size: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    channels: ChannelData\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Uses empty attributes and fast compression.</p>\n</div></details></div></details>",0,"exr::image::PixelImage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Image%3CLayerData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#765-770\">source</a><a href=\"#impl-Image%3CLayerData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'s, LayerData&gt; <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;LayerData&gt;<div class=\"where\">where\n    LayerData: <a class=\"trait\" href=\"exr/image/write/layers/trait.WritableLayers.html\" title=\"trait exr::image::write::layers::WritableLayers\">WritableLayers</a>&lt;'s&gt; + 's,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#767-769\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/image/struct.Image.html#tymethod.new\" class=\"fn\">new</a>(image_attributes: <a class=\"struct\" href=\"exr/meta/header/struct.ImageAttributes.html\" title=\"struct exr::meta::header::ImageAttributes\">ImageAttributes</a>, layer_data: LayerData) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create an image with one or multiple layers. The layer can be a <code>Layer</code>, or <code>Layers</code> small vector, or <code>Vec&lt;Layer&gt;</code> or <code>&amp;[Layer]</code>.</p>\n</div></details></div></details>",0,"exr::image::AnyImage","exr::image::FlatImage","exr::image::PixelLayersImage","exr::image::PixelImage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Image%3CSmallVec%3C%5BLayer%3CChannels%3E;+2%5D%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#773-778\">source</a><a href=\"#impl-Image%3CSmallVec%3C%5BLayer%3CChannels%3E;+2%5D%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'s, Channels&gt; <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;<a class=\"type\" href=\"exr/image/type.Layers.html\" title=\"type exr::image::Layers\">Layers</a>&lt;Channels&gt;&gt;<div class=\"where\">where\n    Channels: <a class=\"trait\" href=\"exr/image/write/channels/trait.WritableChannels.html\" title=\"trait exr::image::write::channels::WritableChannels\">WritableChannels</a>&lt;'s&gt; + 's,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_layers\" class=\"method\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#775-777\">source</a><h4 class=\"code-header\">pub fn <a href=\"exr/image/struct.Image.html#tymethod.from_layers\" class=\"fn\">from_layers</a>(\n    image_attributes: <a class=\"struct\" href=\"exr/meta/header/struct.ImageAttributes.html\" title=\"struct exr::meta::header::ImageAttributes\">ImageAttributes</a>,\n    layer_data: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"exr/image/type.Layers.html\" title=\"type exr::image::Layers\">Layers</a>&lt;Channels&gt;&gt;\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create an image with multiple layers. The layer can be a <code>Vec&lt;Layer&gt;</code> or <code>Layers</code> (a small vector).</p>\n</div></details></div></details>",0,"exr::image::AnyImage","exr::image::FlatImage","exr::image::PixelLayersImage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Image%3CLayers%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#74\">source</a><a href=\"#impl-PartialEq-for-Image%3CLayers%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Layers: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;Layers&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#74\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;Layers&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","exr::image::AnyImage","exr::image::FlatImage","exr::image::PixelLayersImage","exr::image::PixelImage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ValidateResult-for-Image%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#931-936\">source</a><a href=\"#impl-ValidateResult-for-Image%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a> for <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate_result\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#932-935\">source</a><a href=\"#method.validate_result\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/validate_results/trait.ValidateResult.html#tymethod.validate_result\" class=\"fn\">validate_result</a>(\n    &amp;self,\n    other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Self</a>,\n    options: <a class=\"struct\" href=\"exr/image/validate_results/struct.ValidationOptions.html\" title=\"struct exr::image::validate_results::ValidationOptions\">ValidationOptions</a>,\n    location: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>\n) -&gt; <a class=\"type\" href=\"exr/image/validate_results/type.ValidationResult.html\" title=\"type exr::image::validate_results::ValidationResult\">ValidationResult</a></h4></section></summary><div class='docblock'>Compare self with the other.\nExceptional behaviour: <a href=\"exr/image/validate_results/trait.ValidateResult.html#tymethod.validate_result\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_equals_result\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#899-901\">source</a><a href=\"#method.assert_equals_result\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/validate_results/trait.ValidateResult.html#method.assert_equals_result\" class=\"fn\">assert_equals_result</a>(&amp;self, result: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Compare self with the other. Panics if not equal. <a href=\"exr/image/validate_results/trait.ValidateResult.html#method.assert_equals_result\">Read more</a></div></details></div></details>","ValidateResult","exr::image::AnyImage","exr::image::FlatImage","exr::image::PixelLayersImage","exr::image::PixelImage"],["<section id=\"impl-StructuralPartialEq-for-Image%3CLayers%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#74\">source</a><a href=\"#impl-StructuralPartialEq-for-Image%3CLayers%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Layers&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"exr/image/struct.Image.html\" title=\"struct exr::image::Image\">Image</a>&lt;Layers&gt;</h3></section>","StructuralPartialEq","exr::image::AnyImage","exr::image::FlatImage","exr::image::PixelLayersImage","exr::image::PixelImage"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()