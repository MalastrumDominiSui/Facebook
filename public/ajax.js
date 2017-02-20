window.addEventListener("load",function(){
	//our DOM stuff we need
	names = document.getElementsByClassName("name");  //haven't used this yet
	postCommentDivs = document.getElementsByClassName("post__comments");

	// access facebook data via JSON 
	var dataRequest = new XMLHttpRequest();
	dataRequest.open("POST", "/");
	// function to do the stuff with Facebook data.  The meat.
	dataRequest.onload = function(){
		var faceData = JSON.parse(dataRequest.responseText);
		var thisCommentHTML = replyArrToHTML(faceData["replies"]);
		postCommentDivs[0].innerHTML = thisCommentHTML;
	};
	dataRequest.send();

	//	function to build a single comment using JSON data
	function aCommentHTML(commentObject){
		replyNum = commentObject["replies"].length;
		repliesHTML = replyArrToHTML(commentObject["replies"]);
		imagePath = commentObject["imgSrc"]; 
		name = commentObject["name"];
		text = commentObject["text"];
		replyNum = xReplies(replyNum);
		replyLike = xLikes("likes");

		var aCommentHTMLStr = "<div class=\"comment media\">" +
	        "<img src=" + imagePath + " class=\"profilePhoto\">" +
	        "<div class=\"media__info\">" +
	          "<a href=\"#\" class=\"name\"> " + name + " </a>"+
	          text +
	          "<div class=\"comment__info\">"+
	            "<a href=\"#\" class=\"action action--like\">Like</a>"+" " +
	            "<a href=\"#\" class=\"action action--like\">Unlike</a>"+" " +
	            "<a class=\"reply_count\" href=\"#\">"+replyNum+"</a>"+" " +
	            "<span class=like_count >"+replyLike+"</span>"+ " " +
	            "Yesterday at 10:00am"+
	          "</div>"+
	          "<div class=\"replies\" style=\"display: block\">" + repliesHTML +
	          "</div>" +
	        "</div>"+
	      "</div>"
	      return aCommentHTMLStr;
	}

	function replyArrToHTML(arrOfReplies){
		commentArrHTML = "";
		arrOfReplies.forEach(function(i){
			commentArrHTML = commentArrHTML + aCommentHTML(i);
		});
		// len = arrOfReplies.length;
		// for (var i=0; i<len; i++) {
		// 	commentArrHTML = commentArrHTML + aCommentHTML(arrOfReplies[i]);
		// }
		return commentArrHTML;
	}

});

// generic function to give 1 Like, 1 Reply, 2 Replies, 3 Likes, or Like, Reply
function xLikeReply(num,strSingle,strPlural){
	var replystr = "";
	if (num > 1) {
		replystr = String(num) + " " + strPlural;
		return replystr;
	} else if (num = 1){
		return "1" + " " + strSingle;
	} else {
		return strSingle;
	}
}
//specific for likes
function xLikes(num){
	return xLikeReply(num,"Like","Likes");
}
//specific for replies
function xReplies(num){
	return xLikeReply(num,"Reply","Replies");
}


