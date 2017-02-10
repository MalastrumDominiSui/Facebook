window.addEventListener("load", function(){
	var likes = document.getElementsByClassName("action--like");
	// adds event listeners for all likes and unlikes, and makes sure the Unlikes are not displayed.
	for (var i = 0; i < likes.length; i++){
		if (likes[i].innerText == "Unlike") {
			likes[i].style.display = "none";
		}
		likes[i].addEventListener("click", like);
	}
	// takes a string and a num (-1, or 1) e.g. "4 likes" and returns "3 likes" for -1, "5 likes" for 1.
	function addXlikestoString(likeAndCmtStr, num){
		likeAndCmtStr = likeAndCmtStr.split(" ");
		likeAndCmtStr[0] = (parseInt(likeAndCmtStr[0]) +num).toString();
		likeAndCmtStr = likeAndCmtStr.join(" ");
		return(likeAndCmtStr);
	}
	//gives back relation DOM for a like number for a comment from the word Like
	function numLikesCommentStr(thees){
		return(thees.parentElement.parentElement.nextElementSibling.firstElementChild.getElementsByClassName('like_count')[0]);
	}
	//gives back relation DOM for a like number from the Post at the top
	function numLikesPostStr(thees){
		return(thees.parentElement.getElementsByClassName('like_count')[0]);
	}
	// toggles between like and unlike based on the current state of the event target.
	function like(){
		num = 0;
		if (event.target.nextElementSibling.style.display == "none"){
			event.target.nextElementSibling.style.display = "inline";
			event.target.style.display = "none";
			num = 1;
		}	else {
			event.target.previousElementSibling.style.display = "inline";
			event.target.style.display = "none";
			num = -1;
		}

		if (numLikesPostStr(event.target) != undefined ){
			numLikesPostStr(event.target).innerText = addXlikestoString(numLikesPostStr(event.target).innerText , num);
		} else {
			numLikesCommentStr(event.target).innerText = addXlikestoString(numLikesCommentStr(event.target).innerText, num);
		}
		event.preventDefault();
	}
});