function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Toggle extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    { on: false });_defineProperty(this, "toggle",
    () =>
    this.setState(
    ({ on }) => ({ on: !on }),
    () => {
      if (this.props.onToggle === 'function') {
        this.props.onToggle(this.state.on);
      }
    }));}

  render() {
    return React.Children.map(this.props.children, (child) =>
    React.cloneElement(child, {
      on: this.state.on,
      toggle: this.toggle }));


  }}_defineProperty(Toggle, "On", ({ on, children }) => on ? children : null);_defineProperty(Toggle, "Off", ({ on, children }) => on ? null : children);_defineProperty(Toggle, "Button", ({ on, toggle, ...props }) => /*#__PURE__*/React.createElement("label", { style: { display: "block" } }, /*#__PURE__*/React.createElement("input", _extends({ type: "checkbox", className: `btn ${on ? "btn-success" : "btn-warning"}`, onChange: toggle, checked: on, style: { marginRight: "4px" } }, props)), "Send me stuff"));


function Usage({ onToggle = (...args) => console.log("onToggle", ...args) }) {
  return /*#__PURE__*/(
    React.createElement(Toggle, { onToggle: onToggle }, /*#__PURE__*/
    React.createElement(Toggle.Button, null), /*#__PURE__*/
    React.createElement(Toggle.On, null, /*#__PURE__*/React.createElement("b", null, "Good job...You'll get it in the mail")), /*#__PURE__*/
    React.createElement(Toggle.Off, null, /*#__PURE__*/React.createElement("b", null, "Too bad... You'll be missing out"))));


}

ReactDOM.render( /*#__PURE__*/React.createElement(Usage, null), document.getElementById("app"));