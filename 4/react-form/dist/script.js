class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      error: false };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  onChange(evt) {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
    this.setState({ value, error });
    this.props.onChange({ name, value, error });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: `form-group ${this.state.error && 'has-danger'}` }, /*#__PURE__*/
      React.createElement("input", {
        className: "form-control",
        placeholder: this.props.placeholder,
        value: this.state.value,
        onChange: this.onChange }), /*#__PURE__*/

      React.createElement("div", { className: "form-control-feedback" }, this.state.error)));


  }}



class Form extends React.Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      fields: {},
      fieldErrors: {},
      people: [] };

  }

  static isEmail(email) {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  onInputChange({ name, value, error }) {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  }

  onFormSubmit(evt) {
    const people = this.state.people;
    const person = this.state.fields;
    evt.preventDefault();

    if (this.validate()) return;
    people.push(person);
    this.setState({ people, fields: {} });
  }

  validate() {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
    if (!person.name) return true;
    if (!person.email) return true;
    if (errMessages.length) return true;
    return false;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("form", { onSubmit: this.onFormSubmit }, /*#__PURE__*/
      React.createElement(Field, {
        placeholder: "Name",
        name: "name",
        value: this.state.fields.name || '',
        onChange: this.onInputChange,
        validate: val => val ? false : 'Name Required' }), /*#__PURE__*/



      React.createElement(Field, {
        placeholder: "Email",
        name: "email",
        value: this.state.fields.email || '',
        onChange: this.onInputChange,
        validate: val => Form.isEmail(val) ? false : 'Invalid Email' }), /*#__PURE__*/


      React.createElement("input", { className: "btn btn-primary", type: "submit", disabled: this.validate() })), /*#__PURE__*/


      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("h3", null, "Names"), /*#__PURE__*/
      React.createElement("ul", null,
      this.state.people.map(({ name, email }, i) => /*#__PURE__*/
      React.createElement("li", { key: i }, name, " (", email, ")")))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Form, null), document.getElementById('app'));