window.addEventListener("load", function(){
	var likes = document.getElementsByClassName("action--like");

	for (var i = 0; i < likes.length; i++){
		if (likes[i].innerText == "Unlike") {
			likes[i].style.display = "none";
		}
		likes[i].addEventListener("click", like);
	}

	function addXlikestoString(likeAndCmtStr, num){
		likeAndCmtStr = likeAndCmtStr.split(" ");
		likeAndCmtStr[0] = (parseInt(likeAndCmtStr[0]) +num).toString();
		likeAndCmtStr = likeAndCmtStr.join(" ");
		return(likeAndCmtStr);
	}

	function numLikesCommentStr(thees){  //these are just not legible in code
		return(thees.parentElement.parentElement.nextElementSibling.firstElementChild.getElementsByClassName('like_count')[0]);
	}

	function numLikesPostStr(thees){  //to nervous to use "this"
		return(thees.parentElement.getElementsByClassName('like_count')[0]);
	}
	
	function like(){
		num = 0;
		if (this.nextElementSibling.style.display == "none"){
			this.nextElementSibling.style.display = "inline";
			this.style.display = "none";
			num = 1
		}	else {
			this.previousElementSibling.style.display = "inline";
			this.style.display = "none";
			num = -1
		}

		if (numLikesPostStr(this) != undefined ){
			numLikesPostStr(this).innerText = addXlikestoString(numLikesPostStr(this).innerText , num);
		} else {
			numLikesCommentStr(this).innerText = addXlikestoString(numLikesCommentStr(this).innerText, num);
		}
	}
});