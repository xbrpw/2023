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
    Name: "Login User" };

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
    ReactCount: "100" };

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
    DateTimeFormat: "2021 Aug 16 12:00" },
  {
    Avatar: "https://1.bp.blogspot.com/-ZOg0qAG4ewU/Xub_uw6q0DI/AAAAAAABZio/MshyuVBpHUgaOKJtL47LmVkCf5Vge6MQQCNcBGAsYHQ/s1600/pose_pien_uruuru_woman.png",
    Comment: "Consectetur adipiscing elit",
    Name: "Commenter Two",
    DateTime: "2021-08-16 13:00:00",
    DateTimeFormat: "2021 Aug 16 13:00" },
  {
    Avatar: "https://2.bp.blogspot.com/-6iIUl-9hmVY/W-0gXQBaPjI/AAAAAAABQJA/OQPFQ8RJJTgNfWqcKPLb65nljFs-iMxBQCLcBGAs/s800/angry_fukureru_boy.png",
    Comment: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    Name: "Example Author",
    DateTime: "2021-08-16 14:00:00",
    DateTimeFormat: "2021 Aug 16 14:00" }];

}

/**
 * Avatar component
 */
function AvatarElm(props) {
  const src = props.link;

  return /*#__PURE__*/(
    React.createElement("div", { className: "post-avatar" }, /*#__PURE__*/
    React.createElement("figure", null, /*#__PURE__*/
    React.createElement("img", { src: src }))));



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
    userIcon = /*#__PURE__*/React.createElement("i", { className: "far fa-user" });
    dateIcon = /*#__PURE__*/React.createElement("i", { className: "far fa-clock" });
  }

  return [/*#__PURE__*/
  React.createElement(AvatarElm, { link: data.Avatar }), /*#__PURE__*/

  React.createElement("div", { className: "post-identifier" }, /*#__PURE__*/
  React.createElement("p", null,
  userIcon, /*#__PURE__*/
  React.createElement("a", { href: "#", className: "post-author-link margin-left-half" },
  data.Name)), /*#__PURE__*/


  React.createElement("p", null, /*#__PURE__*/
  React.createElement("small", null,
  dateIcon, /*#__PURE__*/
  React.createElement("time", { className: "margin-left-half", datetime: data.DateTime },
  data.DateTimeFormat))))];





}

/**
 * Container of the comments
 */
function CommentsSection(props) {
  if (props["show-comments"] === false) {
    return null;
  }

  const [commentList, setCommentList] = useState([]);

  let commentsElm = /*#__PURE__*/
  React.createElement("div", { className: "spinner-container" }, /*#__PURE__*/
  React.createElement("span", { className: "spinner" }));



  if (commentList.length > 0) {
    commentsElm = [];

    let session = getSession();

    commentsElm = [...commentsElm, /*#__PURE__*/
    React.createElement("div", { className: "comment-input" }, /*#__PURE__*/
    React.createElement(AvatarElm, { link: session.Avatar }), /*#__PURE__*/
    React.createElement("textarea", {
      className: "text-comment",
      placeholder: "Write your comment here..." }), /*#__PURE__*/
    React.createElement("button", {
      className: "send-button",
      onClick: () => {
        console.error(
        "This thing will not work even if you click this: " +
        "Please try to 'mouseover' or 'hover' on the button " +
        "to see the purpose of this pen.");

      } }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-paper-plane" })))];




    for (const comment of commentList) {
      commentsElm = [...commentsElm, /*#__PURE__*/
      React.createElement("div", { className: "comment-container" }, /*#__PURE__*/
      React.createElement("div", { className: "comment-top" }, /*#__PURE__*/
      React.createElement(PersonDisplay, { data: comment, "show-icon": false })), /*#__PURE__*/

      React.createElement("div", { className: "comment-content" },
      comment.Comment))];



    }
  }

  // Simulate the fetching of data
  setTimeout(() => {
    setCommentList(getComments());
  }, THROTTLE_TIME);

  return /*#__PURE__*/React.createElement("section", { className: "post-comments" }, commentsElm);
}

/**
 * Create component of a reaction face
 */
function ReactFace(props) {
  const type = props["type"];

  let faceClassName = `react-face ${type}`;

  return /*#__PURE__*/React.createElement("div", { className: faceClassName });
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
      reactPopupClassName += " hiding";
    }

    reactPopup = /*#__PURE__*/
    React.createElement("div", {
      className: reactPopupClassName,
      onMouseOver: () => {
        setIsShowReactPopup(true);
        setIsReactHiding(false);
      },
      onMouseLeave: () => {
        setIsReactHiding(true);
      },
      onAnimationEnd: evt => {
        if (evt.animationName === "hide") {
          setIsShowReactPopup(false);
        }
      } }, /*#__PURE__*/
    React.createElement(ReactFace, { type: "smile" }), /*#__PURE__*/
    React.createElement(ReactFace, { type: "happy" }), /*#__PURE__*/
    React.createElement(ReactFace, { type: "surprised" }), /*#__PURE__*/
    React.createElement(ReactFace, { type: "sad" }), /*#__PURE__*/
    React.createElement(ReactFace, { type: "angry" }));


  }

  // Simulate the fetching of data
  setTimeout(() => {
    setData(getData());
  }, THROTTLE_TIME);

  return /*#__PURE__*/(
    React.createElement("article", { className: "post" }, /*#__PURE__*/
    React.createElement("header", { className: "post-header" }, /*#__PURE__*/
    React.createElement("h2", null, data.Title)), /*#__PURE__*/

    React.createElement("section", { className: "post-top" }, /*#__PURE__*/
    React.createElement(PersonDisplay, { data: data, "show-icon": true })), /*#__PURE__*/

    React.createElement("section", { className: "post-content" }, /*#__PURE__*/
    React.createElement("p", null,
    data.Content), /*#__PURE__*/

    React.createElement("p", { className: "content-reactions" }, /*#__PURE__*/
    React.createElement("i", { className: "far fa-thumbs-up" }), /*#__PURE__*/
    React.createElement("span", { className: "margin-left-quarter" }, data.ReactCount), /*#__PURE__*/
    React.createElement("span", { className: "margin-left-quarter" }, "reactions")),

    reactPopup), /*#__PURE__*/

    React.createElement("section", { className: "post-commands" }, /*#__PURE__*/
    React.createElement("button", {
      className: "post-button",
      onMouseOver: () => {
        setIsShowReactPopup(true);
        setIsReactHiding(false);
      },
      onMouseLeave: () => {
        setIsReactHiding(true);
      } }, /*#__PURE__*/
    React.createElement("i", { className: "far fa-thumbs-up" }), /*#__PURE__*/
    React.createElement("span", null, "Reaction")), /*#__PURE__*/

    React.createElement("button", {
      className: "post-button",
      onClick: evt => {
        setIsShowComments(true);
      } }, /*#__PURE__*/
    React.createElement("i", { className: "far fa-comment" }), /*#__PURE__*/
    React.createElement("span", null, "Comment"))), /*#__PURE__*/


    React.createElement(CommentsSection, { "show-comments": isShowComments })));


}

ReactDOM.render( /*#__PURE__*/React.createElement(ExampleReacc, null), document.querySelector("#app"));