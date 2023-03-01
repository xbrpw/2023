const Languages = ({ lang, onChange }) => {
  let options = (moment.locales() || []).map(local => {
    let selected = local.indexOf(lang) === 0;
    return /*#__PURE__*/React.createElement("option", { selected: selected }, local);
  });
  return /*#__PURE__*/React.createElement("select", { id: "lang", onChange: onChange.bind(this) }, options);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.userLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0];
    this.state = {
      startDate: moment(this.props.startDate),
      endDate: moment(this.props.endDate),
      formatter: this.props.formatter,
      lang: this.userLang };

  }

  componentDidMount() {
    this.refs.startDate.value = this.state.startDate.calendar();
    this.refs.endDate.value = this.state.endDate.calendar();
    this.refs.formatter.value = this.state.formatter;
  }

  setLang(e) {
    moment.locale(e.target.value);
    this.setState({
      startDate: moment(this.refs.startDate.value),
      endDate: moment(this.refs.endDate.value),
      formatter: this.refs.formatter.value,
      lang: e.target.value });

  }
  update(e) {
    this.setState({
      startDate: moment(this.refs.startDate.value),
      endDate: moment(this.refs.endDate.value),
      formatter: this.refs.formatter.value });

  }

  render() {
    moment.locale(this.userLang);
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Working with dates using ", /*#__PURE__*/React.createElement("a", { href: "https://momentjs.com", target: "_blank" }, "MomentJS")), /*#__PURE__*/

      React.createElement("div", { className: "input" }, /*#__PURE__*/
      React.createElement("h2", null, "Enter some dates or change format"), /*#__PURE__*/
      React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Format", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", null, "For instance:", /*#__PURE__*/React.createElement("code", null, " a,e,d,h, L,T,S,l,Y,M,S,w"))), /*#__PURE__*/React.createElement("input", { type: "text", onChange: this.update.bind(this), ref: "formatter", placeholder: "A MomentJS format" })), /*#__PURE__*/
      React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Start date"), /*#__PURE__*/React.createElement("input", { type: "text", onChange: this.update.bind(this), ref: "startDate", placeholder: "yyyy/mm/dd" })), /*#__PURE__*/
      React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "End date"), /*#__PURE__*/React.createElement("input", { type: "text", onChange: this.update.bind(this), ref: "endDate", placeholder: "yyyy/mm/dd" })), /*#__PURE__*/

      React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Language "), /*#__PURE__*/
      React.createElement(Languages, { ref: "lang", lang: this.state.lang, onChange: this.setLang.bind(this) }))), /*#__PURE__*/


      React.createElement("div", { className: "output" }, /*#__PURE__*/
      React.createElement(Examples, { formats: formats, formatter: this.state.formatter, startDate: this.state.startDate, endDate: this.state.endDate, lang: this.userLang }))));



  }}



const formats = [
"startDate.format(formatter)",
"endDate.format(formatter)",
"startDate.format()",
"startDate.calendar()",
"startDate.fromNow()",
"endDate.from(startDate)",
"moment().format('MMMM Do YYYY, h:mm:ss a')"];


const Example = ({
  format,
  formatter,
  startDate,
  endDate,
  lang }) =>
{
  moment.locale(lang);
  let replaced = format.
  replace(/formatter/ig, '"' + formatter + '"');
  return /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/
  React.createElement("dt", null, /*#__PURE__*/React.createElement("code", null, replaced)), /*#__PURE__*/
  React.createElement("dd", null, eval(replaced)));

};

const Examples = ({
  formats,
  formatter,
  startDate,
  endDate,
  lang }) =>
{
  let examples = formats.map(format => /*#__PURE__*/React.createElement(Example, { format: format, formatter: formatter, startDate: startDate, endDate: endDate, lang: lang }));
  return /*#__PURE__*/React.createElement("div", null, examples);
};

App.defaultProps = {
  startDate: "1977/1/28",
  endDate: "2016/4/12",
  formatter: "LLL" };


let app = ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('.app'));