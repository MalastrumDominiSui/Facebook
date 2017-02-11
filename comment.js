

window.addEventListener("load", function(){

	var replyNumLinks = document.getElementsByClassName("reply_count");
	var replySections = document.getElementsByClassName("replies");
	var submitButtons = document.getElementsByClassName("submitcomment");
	var commentBoxes = document.getElementsByClassName("commentbox");
	var commentNumDOM = document.getElementById("comment__number");

	//resets the values of all these document node collections in the case we change the document
	function reinitializeListened(){
		replyNumLinks = document.getElementsByClassName("reply_count");
		replySections = document.getElementsByClassName("replies");
		submitButtons = document.getElementsByClassName("submitcomment");
		commentBoxes = document.getElementsByClassName("commentbox");
		commentNumDOM = document.getElementById("comment__number");
	}

	//sets the listened replies for clicking on
	function listenReplies(){
		for (var i = 0; i < replyNumLinks.length; i++){
			replyNumLinks[i].addEventListener("click", toggleReplies);
		}

	}
	listenReplies();

	//sets the listened submit buttons
	function listenSubmits(){
		for (var i = 0; i < submitButtons.length; i++){
			submitButtons[i].addEventListener("click", makeAlert);
		}
	}
	listenSubmits();

	//function if Replies are visible, hides.  If hidden, shows. Prevents scrolling up.
	function toggleReplies(){
		if (this.parentElement.nextElementSibling == null){
			event.preventDefault();
			//makeHtmlCommentForm(event.target);
			//code to make a new comment box?
			return;
		}else if(this.parentElement.nextElementSibling.style.display == "block"){
			this.parentElement.nextElementSibling.style.display = "none";
			event.preventDefault();
		} else {
			this.parentElement.nextElementSibling.style.display = "block";
			event.preventDefault();
		}	
		
	}


	//function takes the event clicking on Submit Comment, adds 1 to the string number within comment # string
	function addCommentNmbrToStr() {
		newCommentNmber = parseInt(commentNumDOM.innerText.split(" ")[0]) + 1;
		if (newCommentNmber == 1) {
			newCommentStr = String(newCommentNmber) + " comment";
		} else {
			newCommentStr = String(newCommentNmber) + " comments";
		}
		return newCommentStr;

	}

	// 	this function formats a new comment and puts it in.  There is a problem as to the placement of it currently.

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
				if (event.target.className == "submitcomment postcomment") {
					event.target.parentElement.parentElement.parentElement.previousElementSibling.innerHTML += makeHtmlCommentForm(event.target);
					event.target.previousElementSibling.value = "";
				} else {
					event.target.parentElement.parentElement.parentElement.parentElement.innerHTML += makeHtmlCommentForm(event.target);
					event.target.previousElementSibling.value = "";
				}
			event.preventDefault();
		}

	}



});