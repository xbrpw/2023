class Toggle extends React.Component {
  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  static Button = ({ on, toggle, ...props }) => (
    <label style={{display: "block"}}>
      <input
        type="checkbox"
        className={`btn ${on ? "btn-success" : "btn-warning"}`}
        onChange={toggle}
        checked={on}
        style={{marginRight: "4px"}}
        {...props}
      />
      Send me stuff
    </label>
  );
  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        if(this.props.onToggle === 'function') {
          this.props.onToggle(this.state.on)
        }
      }
    );
  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    );
  }
}

function Usage({ onToggle = (...args) => console.log("onToggle", ...args) }) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.Button />
      <Toggle.On><b>Good job...You'll get it in the mail</b></Toggle.On>
      <Toggle.Off><b>Too bad... You'll be missing out</b></Toggle.Off>
    </Toggle>
  );
}

ReactDOM.render(<Usage />, document.getElementById("app"));
