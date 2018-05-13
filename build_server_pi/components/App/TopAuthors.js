"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopAuthors = function (_React$Component) {
		_inherits(TopAuthors, _React$Component);

		function TopAuthors() {
				_classCallCheck(this, TopAuthors);

				return _possibleConstructorReturn(this, (TopAuthors.__proto__ || Object.getPrototypeOf(TopAuthors)).apply(this, arguments));
		}

		_createClass(TopAuthors, [{
				key: "render",
				value: function render() {
						return _react2.default.createElement(
								"div",
								null,
								_react2.default.createElement(
										"h4",
										{ className: "box_header page_margin_top_section" },
										"Top Authors"
								),
								_react2.default.createElement(
										"ul",
										{ className: "authors rating clearfix" },
										_react2.default.createElement(
												"li",
												{ className: "author" },
												_react2.default.createElement(
														"a",
														{ title: "Debora Hilton", href: "author.html", className: "thumb" },
														_react2.default.createElement("img", { alt: "img", src: "http://static.local/piousbox.com/images/samples/Team_100x100/image_01.jpg" }),
														_react2.default.createElement(
																"span",
																{ "data-value": "34", className: "number animated_element progress odometer odometer-theme-default" },
																_react2.default.createElement(
																		"div",
																		{ className: "odometer-inside" },
																		_react2.default.createElement(
																				"span",
																				{ className: "odometer-digit" },
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-spacer" },
																						"8"
																				),
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-inner" },
																						_react2.default.createElement(
																								"span",
																								{ className: "odometer-ribbon" },
																								_react2.default.createElement(
																										"span",
																										{ className: "odometer-ribbon-inner" },
																										_react2.default.createElement(
																												"span",
																												{ className: "odometer-value" },
																												"3"
																										)
																								)
																						)
																				)
																		),
																		_react2.default.createElement(
																				"span",
																				{ className: "odometer-digit" },
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-spacer" },
																						"8"
																				),
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-inner" },
																						_react2.default.createElement(
																								"span",
																								{ className: "odometer-ribbon" },
																								_react2.default.createElement(
																										"span",
																										{ className: "odometer-ribbon-inner" },
																										_react2.default.createElement(
																												"span",
																												{ className: "odometer-value" },
																												"4"
																										)
																								)
																						)
																				)
																		)
																)
														),
														_react2.default.createElement(
																"div",
																{ style: { height: '100px' }, className: "value_bar_container" },
																_react2.default.createElement("div", { className: "value_bar animated_element duration-2000 animation-height height animation-1" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "details" },
														_react2.default.createElement(
																"h5",
																null,
																_react2.default.createElement(
																		"a",
																		{ title: "Debora Hilton", href: "author.html" },
																		"Debora Hilton"
																)
														),
														_react2.default.createElement(
																"h6",
																null,
																"EDITOR"
														)
												)
										),
										_react2.default.createElement(
												"li",
												{ className: "author" },
												_react2.default.createElement(
														"a",
														{ title: "Anna Shubina", href: "author.html", className: "thumb" },
														_react2.default.createElement("img", { alt: "img", src: "http://static.local/piousbox.com/images/samples/Team_100x100/image_02.jpg" }),
														_react2.default.createElement(
																"span",
																{ "data-value": "25", className: "number animated_element progress odometer odometer-theme-default" },
																_react2.default.createElement(
																		"div",
																		{ className: "odometer-inside" },
																		_react2.default.createElement(
																				"span",
																				{ className: "odometer-digit" },
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-spacer" },
																						"8"
																				),
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-inner" },
																						_react2.default.createElement(
																								"span",
																								{ className: "odometer-ribbon" },
																								_react2.default.createElement(
																										"span",
																										{ className: "odometer-ribbon-inner" },
																										_react2.default.createElement(
																												"span",
																												{ className: "odometer-value" },
																												"2"
																										)
																								)
																						)
																				)
																		),
																		_react2.default.createElement(
																				"span",
																				{ className: "odometer-digit" },
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-spacer" },
																						"8"
																				),
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-inner" },
																						_react2.default.createElement(
																								"span",
																								{ className: "odometer-ribbon" },
																								_react2.default.createElement(
																										"span",
																										{ className: "odometer-ribbon-inner" },
																										_react2.default.createElement(
																												"span",
																												{ className: "odometer-value" },
																												"5"
																										)
																								)
																						)
																				)
																		)
																)
														),
														_react2.default.createElement(
																"div",
																{ style: { height: '73.52px' }, className: "value_bar_container" },
																_react2.default.createElement("div", { className: "value_bar animated_element duration-2000 animation-height height animation-1" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "details" },
														_react2.default.createElement(
																"h5",
																null,
																_react2.default.createElement(
																		"a",
																		{ title: "Anna Shubina", href: "author.html" },
																		"Anna Shubina"
																)
														),
														_react2.default.createElement(
																"h6",
																null,
																"EDITOR"
														)
												)
										),
										_react2.default.createElement(
												"li",
												{ className: "author" },
												_react2.default.createElement(
														"a",
														{ title: "Liam Holden", href: "author.html", className: "thumb" },
														_react2.default.createElement("img", { alt: "img", src: "http://static.local/piousbox.com/images/samples/Team_100x100/image_03.jpg" }),
														_react2.default.createElement(
																"span",
																{ "data-value": "9", className: "number animated_element progress odometer odometer-theme-default" },
																_react2.default.createElement(
																		"div",
																		{ className: "odometer-inside" },
																		_react2.default.createElement(
																				"span",
																				{ className: "odometer-digit" },
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-spacer" },
																						"8"
																				),
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-inner" },
																						_react2.default.createElement(
																								"span",
																								{ className: "odometer-ribbon" },
																								_react2.default.createElement(
																										"span",
																										{ className: "odometer-ribbon-inner" },
																										_react2.default.createElement(
																												"span",
																												{ className: "odometer-value" },
																												"9"
																										)
																								)
																						)
																				)
																		)
																)
														),
														_react2.default.createElement(
																"div",
																{ style: { height: '26.47px' }, className: "value_bar_container" },
																_react2.default.createElement("div", { className: "value_bar animated_element duration-2000 animation-height height animation-1" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "details" },
														_react2.default.createElement(
																"h5",
																null,
																_react2.default.createElement(
																		"a",
																		{ title: "Liam Holden", href: "author.html" },
																		"Liam Holden"
																)
														),
														_react2.default.createElement(
																"h6",
																null,
																"PUBLISHER"
														)
												)
										),
										_react2.default.createElement(
												"li",
												{ className: "author" },
												_react2.default.createElement(
														"a",
														{ title: "Heather Dale", href: "author.html", className: "thumb" },
														_react2.default.createElement("img", { alt: "img", src: "http://static.local/piousbox.com/images/samples/Team_100x100/image_04.jpg" }),
														_react2.default.createElement(
																"span",
																{ "data-value": "2", className: "number animated_element progress odometer odometer-theme-default" },
																_react2.default.createElement(
																		"div",
																		{ className: "odometer-inside" },
																		_react2.default.createElement(
																				"span",
																				{ className: "odometer-digit" },
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-spacer" },
																						"8"
																				),
																				_react2.default.createElement(
																						"span",
																						{ className: "odometer-digit-inner" },
																						_react2.default.createElement(
																								"span",
																								{ className: "odometer-ribbon" },
																								_react2.default.createElement(
																										"span",
																										{ className: "odometer-ribbon-inner" },
																										_react2.default.createElement(
																												"span",
																												{ className: "odometer-value" },
																												"2"
																										)
																								)
																						)
																				)
																		)
																)
														),
														_react2.default.createElement(
																"div",
																{ style: { height: '5.88px' }, className: "value_bar_container" },
																_react2.default.createElement("div", { className: "value_bar animated_element duration-2000 animation-height height animation-1" })
														)
												),
												_react2.default.createElement(
														"div",
														{ className: "details" },
														_react2.default.createElement(
																"h5",
																null,
																_react2.default.createElement(
																		"a",
																		{ title: "Heather Dale", href: "author.html" },
																		"Heather Dale"
																)
														),
														_react2.default.createElement(
																"h6",
																null,
																"ILLUSTRATOR"
														)
												)
										)
								)
						);
				}
		}]);

		return TopAuthors;
}(_react2.default.Component);
//# sourceMappingURL=TopAuthors.js.map