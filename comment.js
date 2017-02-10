window.addEventListener("load", function(){

	var submitButtons = document.getElementsByClassName("submitcomment");
	var commentBoxes = document.getElementsByClassName("commentbox");
	var commentNumDOM = document.getElementById("comment__number")

	//function takes the even clicking on Submit Comment, adds 1 to the string number within comment # string
	function addCommentNmbrToStr() {
		newCommentNmber = parseInt(commentNumDOM.innerText.split(" ")[0]) + 1;
		if (newCommentNmber == 1) {
			newCommentStr = String(newCommentNmber) + " comment";
		} else {
			newCommentStr = String(newCommentNmber) + " comments";
		}
		return newCommentStr;

	}

	function makeHtmlCommentForm(anEventTarget){
		htmlCommentElement = anEventTarget.previousElementSibling.value;
		htmlPostComment =  "<div class=\"comment media\">" +
	    "<img src=\"images/user.png\" class=\"profilePhoto\">" +
		    "<div class=\"media__info\">" +
		        "<a href=\"#\">Name 1</a> " +
				htmlCommentElement+
		        "<div class=\"comment__info\">" +
		          "<a href=\"#\" class=\"action action--like\">Like</a> " +
		          "<a href=\"#\" class=\"action action--like\" style=\"display: none\">Unlike</a> "+
		          "<a class=\"reply_count\" href=\"#\">Reply</a> " + 
		          "<span class=like_count >0 likes</span> " +
		          "Yesterday at 10:00am" +
		        "</div>" +
			"</div>" +
		"</div>";
		return htmlPostComment;
	}


	function makeAlert(){
		if (event.target.previousElementSibling.value == "") {
			alert("Your Comment is empty, goofball.")
			event.preventDefault();
		} else {
			commentNumDOM.innerText = addCommentNmbrToStr();
			// html = event.target.parentElement.parentElement.parentElement.previousElementSibling.innerHTML;
			event.target.parentElement.parentElement.parentElement.previousElementSibling.innerHTML += makeHtmlCommentForm(event.target);
			event.target.previousElementSibling.value = "";
			event.preventDefault();
		}

	}

	function displayNewCom(){

		event.preventDefault();
	}

	for (var i = 0; i < submitButtons.length; i++){
		submitButtons[i].addEventListener("click", makeAlert);
	}
});