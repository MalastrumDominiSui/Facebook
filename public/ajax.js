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
		var thisCommentHTML = aCommentHTML(faceData);
		postCommentDivs[0].innerHTML = thisCommentHTML;
	};
	dataRequest.send();

	// TODO fix strings so underline isn't solid through
	//	function to build a single comment using JSON data
	function aCommentHTML(data){
		replyNum = data["post comments"].length;
		var aComment = "<div class=\"comment media\">" +
	        "<img src=" + data["imgSrc"]+ " class=\"profilePhoto\">" +

	        "<div class=\"media__info\">" +
	          "<a href=\"#\" class=\"name\"> " + data["name"] + " </a>"+
	          data["text"]+
	          "<div class=\"comment__info\">"+
	            "<a href=\"#\" class=\"action action--like\">Like</a>"+" " +
	            "<a href=\"#\" class=\"action action--like\">Unlike</a>"+" " +
	            "<a class=\"reply_count\" href=\"#\">"+xReplies(replyNum)+"</a>"+" " +
	            "<span class=like_count >"+xLikes("likes")+"</span>"+ " " +
	            "Yesterday at 10:00am"+
	          "</div>"+
	          "<div class=\"replies\" style=\"display: none\">" +
	          "</div>" +
	        "</div>"+
	      "</div>"
	      return aComment;
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

function xLikes(num){
	return xLikeReply(num,"Like","Likes");
}

function xReplies(num){
	return xLikeReply(num,"Reply","Replies");
}

// some pseudo code

// function plugValueComment(jsonArr)  //will be a sub array of objects in json
// 		for jsonArr, and i < jsonArr.length,
//			insert html for name, text,likes,time
//			find replies. length
//			if replies. length > 0 plugValueComment(jsonArr[replies])  //this is recursive here
//			end
//			i ++
// 		end
// end

