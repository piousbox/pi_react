"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LatestPosts = function (_React$Component) {
													_inherits(LatestPosts, _React$Component);

													function LatestPosts() {
																										_classCallCheck(this, LatestPosts);

																										return _possibleConstructorReturn(this, (LatestPosts.__proto__ || Object.getPrototypeOf(LatestPosts)).apply(this, arguments));
													}

													_createClass(LatestPosts, [{
																										key: "render",
																										value: function render() {
																																							return _react2.default.createElement(
																																																				"div",
																																																				null,
																																																				_react2.default.createElement(
																																																																	"h4",
																																																																	{ className: "box_header page_margin_top_section" },
																																																																	"Latest Posts"
																																																				),
																																																				_react2.default.createElement(
																																																																	"div",
																																																																	{ className: "vertical_carousel_container clearfix" },
																																																																	_react2.default.createElement(
																																																																														"div",
																																																																														{ className: "caroufredsel_wrapper caroufredsel_wrapper_vertical_carousel style-1" },
																																																																														_react2.default.createElement(
																																																																																											"ul",
																																																																																											{ className: "blog small vertical_carousel autoplay-1 scroll-1 navigation-1 easing-easeInOutQuint duration-750 pr_preloader_vl_0 style-2" },
																																																																																											_react2.default.createElement(
																																																																																																								"li",
																																																																																																								{ className: "post", style: { position: 'relative', margin: '1em 0' } },
																																																																																																								_react2.default.createElement(
																																																																																																																					"a",
																																																																																																																					{ title: "Syrian Civilians Trapped For Months Continue To Be Evacuated", href: "post.html", style: { float: 'left', paddingRight: '10px', position: 'absolute', top: '0', left: '0' } },
																																																																																																																					_react2.default.createElement("img", { alt: "img", src: "http://static.local/piousbox.com/images/samples/100x100/image_12.jpg" })
																																																																																																								),
																																																																																																								_react2.default.createElement(
																																																																																																																					"div",
																																																																																																																					{ style: { margin: '0 0 0 110px', minHeight: '110px' } },
																																																																																																																					_react2.default.createElement(
																																																																																																																																		"h5",
																																																																																																																																		{ style: { marginTop: 0 } },
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"a",
																																																																																																																																															{ title: "Syrian Civilians Trapped For Months Continue To Be Evacuated", href: "post.html" },
																																																																																																																																															"Syrian Civilians Trapped For Months Continue To Be Evacuated. Syrian Civilians Trapped For Months Continue To Be Evacuate"
																																																																																																																																		)
																																																																																																																					),
																																																																																																																					_react2.default.createElement(
																																																																																																																																		"ul",
																																																																																																																																		{ className: "post_details simple" },
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"li",
																																																																																																																																															{ className: "category" },
																																																																																																																																															_react2.default.createElement(
																																																																																																																																																												"a",
																																																																																																																																																												{ title: "WORLD", href: "category_world.html" },
																																																																																																																																																												"WORLD"
																																																																																																																																															)
																																																																																																																																		),
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"li",
																																																																																																																																															{ className: "date" },
																																																																																																																																															"2017-12-12"
																																																																																																																																		)
																																																																																																																					)
																																																																																																								),
																																																																																																								_react2.default.createElement("div", { style: { clear: 'both' } })
																																																																																											),
																																																																																											_react2.default.createElement(
																																																																																																								"li",
																																																																																																								{ className: "post", style: { position: 'relative', margin: '1em 0' } },
																																																																																																								_react2.default.createElement(
																																																																																																																					"a",
																																																																																																																					{ title: "Syrian Civilians Trapped For Months Continue To Be Evacuated", href: "post.html", style: { float: 'left', paddingRight: '10px', position: 'absolute', top: '0', left: '0' } },
																																																																																																																					_react2.default.createElement("img", { alt: "img", src: "http://static.local/piousbox.com/images/samples/100x100/image_12.jpg" })
																																																																																																								),
																																																																																																								_react2.default.createElement(
																																																																																																																					"div",
																																																																																																																					{ style: { margin: '0 0 0 110px', minHeight: '110px' } },
																																																																																																																					_react2.default.createElement(
																																																																																																																																		"h5",
																																																																																																																																		{ style: { marginTop: 0 } },
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"a",
																																																																																																																																															{ title: "Syrian Civilians Trapped For Months Continue To Be Evacuated", href: "post.html" },
																																																																																																																																															"Syrian Civilians Trapped For Months Continue To Be Evacuated. Syrian Civilians Trapped For Months Continue To Be Evacuate"
																																																																																																																																		)
																																																																																																																					),
																																																																																																																					_react2.default.createElement(
																																																																																																																																		"ul",
																																																																																																																																		{ className: "post_details simple" },
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"li",
																																																																																																																																															{ className: "category" },
																																																																																																																																															_react2.default.createElement(
																																																																																																																																																												"a",
																																																																																																																																																												{ title: "WORLD", href: "category_world.html" },
																																																																																																																																																												"WORLD"
																																																																																																																																															)
																																																																																																																																		),
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"li",
																																																																																																																																															{ className: "date" },
																																																																																																																																															"2017-12-12"
																																																																																																																																		)
																																																																																																																					)
																																																																																																								),
																																																																																																								_react2.default.createElement("div", { style: { clear: 'both' } })
																																																																																											),
																																																																																											_react2.default.createElement(
																																																																																																								"li",
																																																																																																								{ className: "post", style: { position: 'relative', margin: '1em 0' } },
																																																																																																								_react2.default.createElement(
																																																																																																																					"a",
																																																																																																																					{ title: "Syrian Civilians Trapped For Months Continue To Be Evacuated", href: "post.html", style: { float: 'left', paddingRight: '10px', position: 'absolute', top: '0', left: '0' } },
																																																																																																																					_react2.default.createElement("img", { alt: "img", src: "http://static.local/piousbox.com/images/samples/100x100/image_12.jpg" })
																																																																																																								),
																																																																																																								_react2.default.createElement(
																																																																																																																					"div",
																																																																																																																					{ style: { margin: '0 0 0 110px', minHeight: '110px' } },
																																																																																																																					_react2.default.createElement(
																																																																																																																																		"h5",
																																																																																																																																		{ style: { marginTop: 0 } },
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"a",
																																																																																																																																															{ title: "Syrian Civilians Trapped For Months Continue To Be Evacuated", href: "post.html" },
																																																																																																																																															"Syrian Civilians Trapped For Months Continue To Be Evacuated. Syrian Civilians Trapped For Months Continue To Be Evacuate"
																																																																																																																																		)
																																																																																																																					),
																																																																																																																					_react2.default.createElement(
																																																																																																																																		"ul",
																																																																																																																																		{ className: "post_details simple" },
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"li",
																																																																																																																																															{ className: "category" },
																																																																																																																																															_react2.default.createElement(
																																																																																																																																																												"a",
																																																																																																																																																												{ title: "WORLD", href: "category_world.html" },
																																																																																																																																																												"WORLD"
																																																																																																																																															)
																																																																																																																																		),
																																																																																																																																		_react2.default.createElement(
																																																																																																																																															"li",
																																																																																																																																															{ className: "date" },
																																																																																																																																															"2017-12-12"
																																																																																																																																		)
																																																																																																																					)
																																																																																																								),
																																																																																																								_react2.default.createElement("div", { style: { clear: 'both' } })
																																																																																											)
																																																																														)
																																																																	)
																																																				)
																																							);
																										}
													}]);

													return LatestPosts;
}(_react2.default.Component);
//# sourceMappingURL=LatestPosts.js.map