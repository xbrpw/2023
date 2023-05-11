////////////////////////////////////////////////////////////////////////////////
import React, { useState, useRef } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

// Time to take in loading data
const THROTTLE_TIME = 1500;

/**
 * This will serve as the login information of the user
 */
function getSession() {
	return {
		Avatar: "https://3.bp.blogspot.com/-xT36Kpq_T_E/W1a5CIwueAI/AAAAAAABNjc/nkwOIiInph0FSJ3cpJHdE1Ghu60HX5BfgCLcBGAs/s800/niyakeru_takuramu_ayashii_man.png",
		Name: "Login User",
	};
}

/**
 * This will serve as the data to be displayed on the page
 */
function getData() {
	return {
		Avatar: "https://2.bp.blogspot.com/-6iIUl-9hmVY/W-0gXQBaPjI/AAAAAAABQJA/OQPFQ8RJJTgNfWqcKPLb65nljFs-iMxBQCLcBGAs/s800/angry_fukureru_boy.png",
		Title: "Example Reacc post",
		Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		Name: "Example Author",
		DateTime: "2021-08-12 19:00:00",
		DateTimeFormat: "2021 Aug 12 19:00",
		ReactCount: "100",
	}
}

/**
 * This will serve as the list of comments to be displayed
 */
function getComments() {
	return [{
		Avatar: "https://1.bp.blogspot.com/-Umt9sSByADg/XhwqmwqIxlI/AAAAAAABXB0/f981O4YZoX8s7wGE7IdNLwurDIiqvVzvQCNcBGAsYHQ/s1600/pose_warau_kuchi_kakusu_woman.png",
		Comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		Name: "Commenter One",
		DateTime: "2021-08-16 12:00:00",
		DateTimeFormat: "2021 Aug 16 12:00",
	}, {
		Avatar: "https://1.bp.blogspot.com/-ZOg0qAG4ewU/Xub_uw6q0DI/AAAAAAABZio/MshyuVBpHUgaOKJtL47LmVkCf5Vge6MQQCNcBGAsYHQ/s1600/pose_pien_uruuru_woman.png",
		Comment: "Consectetur adipiscing elit",
		Name: "Commenter Two",
		DateTime: "2021-08-16 13:00:00",
		DateTimeFormat: "2021 Aug 16 13:00",
	}, {
		Avatar: "https://2.bp.blogspot.com/-6iIUl-9hmVY/W-0gXQBaPjI/AAAAAAABQJA/OQPFQ8RJJTgNfWqcKPLb65nljFs-iMxBQCLcBGAs/s800/angry_fukureru_boy.png",
		Comment: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		Name: "Example Author",
		DateTime: "2021-08-16 14:00:00",
		DateTimeFormat: "2021 Aug 16 14:00",
	}];
}

/**
 * Avatar component
 */
function AvatarElm(props) {
	const src = props.link;
	
	return (
		<div className="post-avatar">
			<figure>
				<img src={src} />
			</figure>
		</div>
	);
}

/**
 * Avatar, name, and post date component
 */
function PersonDisplay(props) {
	const data = props.data;
	const showIcon = props["show-icon"];
	
	let userIcon = null;
	let dateIcon = null;
	
	if (showIcon === true) {
		userIcon = (<i className="far fa-user"></i>);
		dateIcon = (<i className="far fa-clock"></i>);
	}
	
	return [(
		<AvatarElm link={data.Avatar} />
	), (
		<div className="post-identifier">
			<p>
				{userIcon}
				<a href="#" className="post-author-link margin-left-half">
					{data.Name}
				</a>
			</p>
			<p>
				<small>
					{dateIcon}
					<time className="margin-left-half" datetime={data.DateTime}>
						{data.DateTimeFormat}
					</time>
				</small>
			</p>
		</div>
	)];
}

/**
 * Container of the comments
 */
function CommentsSection(props) {
	if (props["show-comments"] === false) {
		return null;
	}
	
	const [commentList, setCommentList] = useState([]);
	
	let commentsElm = (
		<div className="spinner-container">
			<span className="spinner"></span>
		</div>
	);
	
	if (commentList.length > 0) {
		commentsElm = [];
		
		let session = getSession();
		
		commentsElm = [...commentsElm, (
			<div className="comment-input">
				<AvatarElm link={session.Avatar} />
				<textarea
					className="text-comment"
					placeholder="Write your comment here..."></textarea>
				<button
					className="send-button"
					onClick={() => {
						console.error(
							"This thing will not work even if you click this: " +
							"Please try to 'mouseover' or 'hover' on the button " +
							"to see the purpose of this pen."
						);
					}}>
					<i className="fas fa-paper-plane"></i>
				</button>
			</div>
		)];
		
		for (const comment of commentList) {
			commentsElm = [...commentsElm, (
				<div className="comment-container">
					<div className="comment-top">
						<PersonDisplay data={comment} show-icon={false} />
					</div>
					<div className="comment-content">
						{comment.Comment}
					</div>
				</div>
			)];
		}
	}
	
	// Simulate the fetching of data
	setTimeout(() => {
		setCommentList(getComments());
	}, THROTTLE_TIME);
	
	return (<section className="post-comments">{commentsElm}</section>);
}

/**
 * Create component of a reaction face
 */
function ReactFace(props) {
	const type = props["type"];
	
	let faceClassName = `react-face ${type}`;
	
	return (<div className={faceClassName}></div>);
}

/**
 * Component of the post on the page
 */
function ExampleReacc() {
	const [data, setData] = useState([]);
	const [isShowComments, setIsShowComments] = useState(false);
	const [isShowReactPopup, setIsShowReactPopup] = useState(false);
	const [isReactHiding, setIsReactHiding] = useState(false);
	
	let reactPopup = null;
	
	if (isShowReactPopup === true) {
		let reactPopupClassName = "post-react-popup";
		
		if (isReactHiding === true) {
			reactPopupClassName += " hiding"
		}
		
		reactPopup = (
			<div
				className={reactPopupClassName}
				onMouseOver={() => {
					setIsShowReactPopup(true);
					setIsReactHiding(false);
				}}
				onMouseLeave={() => {
					setIsReactHiding(true);
				}}
				onAnimationEnd={evt => {
					if (evt.animationName === "hide") {
						setIsShowReactPopup(false);
					}
				}}>
				<ReactFace type="smile" />
				<ReactFace type="happy" />
				<ReactFace type="surprised" />
				<ReactFace type="sad" />
				<ReactFace type="angry" />
			</div>
		);
	}
	
	// Simulate the fetching of data
	setTimeout(() => {
		setData(getData());
	}, THROTTLE_TIME);
	
	return (
		<article className="post">
			<header className="post-header">
				<h2>{data.Title}</h2>
			</header>
			<section className="post-top">
				<PersonDisplay data={data} show-icon={true} />
			</section>
			<section className="post-content">
				<p>
					{data.Content}
				</p>
				<p className="content-reactions">
					<i className="far fa-thumbs-up"></i>
					<span className="margin-left-quarter">{data.ReactCount}</span>
					<span className="margin-left-quarter">reactions</span>
				</p>
				{reactPopup}
			</section>
			<section className="post-commands">
				<button
					className="post-button"
					onMouseOver={() => {
						setIsShowReactPopup(true);
						setIsReactHiding(false);
					}}
					onMouseLeave={() => {
						setIsReactHiding(true);
					}}>
					<i className="far fa-thumbs-up"></i>
					<span>Reaction</span>
				</button>
				<button
					className="post-button"
					onClick={evt => {
						setIsShowComments(true);
					}}>
					<i className="far fa-comment"></i>
					<span>Comment</span>
				</button>
			</section>
			<CommentsSection show-comments={isShowComments} />
		</article>
	);
}

ReactDOM.render(<ExampleReacc />, document.querySelector("#app"));
