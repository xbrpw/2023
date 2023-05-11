const Languages = ({lang, onChange}) => {
	let options = (moment.locales()||[]).map(local => {
		let selected = local.indexOf(lang)===0
		return <option selected={selected}>{local}</option>
	});
	return <select id="lang" onChange={onChange.bind(this)}>{options}</select>
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.userLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0]; 
		this.state = {
			startDate: moment(this.props.startDate),
			endDate: moment(this.props.endDate),
			formatter: this.props.formatter,
			lang: this.userLang
		}
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
			lang: e.target.value,
		});	
	}
	update(e) {
		this.setState({
			startDate: moment(this.refs.startDate.value),
			endDate: moment(this.refs.endDate.value),
			formatter: this.refs.formatter.value
		});
	}

	render() {
		moment.locale(this.userLang);
		return (
			<div>
				<h1>Working with dates using <a href="https://momentjs.com" target="_blank">MomentJS</a></h1>
	
				<div className="input">
					<h2>Enter some dates or change format</h2>
					<label><span>Format<br /><small>For instance:<code> a,e,d,h, L,T,S,l,Y,M,S,w</code></small></span><input type="text" onChange={this.update.bind(this)} ref="formatter" placeholder="A MomentJS format" /></label>
					<label><span>Start date</span><input type="text" onChange={this.update.bind(this)} ref="startDate" placeholder="yyyy/mm/dd" /></label>
					<label><span>End date</span><input type="text" onChange={this.update.bind(this)} ref="endDate" placeholder="yyyy/mm/dd" /></label>
					
					<label><span>Language </span>
						<Languages ref="lang" lang={this.state.lang} onChange={this.setLang.bind(this)} />
					</label>
				</div>
				<div className="output">
					<Examples formats={formats} formatter={this.state.formatter} startDate={this.state.startDate} endDate={this.state.endDate} lang={this.userLang} />
				</div>
			</div>
		)
	}
}


const formats = [
	"startDate.format(formatter)",
	"endDate.format(formatter)",
	"startDate.format()",
	"startDate.calendar()",
	"startDate.fromNow()",
	"endDate.from(startDate)",
	"moment().format('MMMM Do YYYY, h:mm:ss a')"
];

const Example = ({
	format,
	formatter,
	startDate,
	endDate,
	lang
}) => {
	moment.locale(lang);
	let replaced = format
		.replace(/formatter/ig, '"'+formatter+'"');
		return (<dl>
		<dt><code>{replaced}</code></dt>
		<dd>{eval(replaced)}</dd>
		</dl>)
}

const Examples = ({
	formats,
	formatter,
	startDate,
	endDate,
	lang
}) => {
	let examples = formats.map(format => <Example format={format} formatter={formatter} startDate={startDate} endDate={endDate} lang={lang} />);
	return <div>{examples}</div>
}

App.defaultProps = {
	startDate: "1977/1/28",
	endDate: "2016/4/12",
	formatter: "LLL"
}

let app = ReactDOM.render(<App />, document.querySelector('.app'));