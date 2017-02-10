window.addEventListener("load", function(){

	var replyNumLinks = document.getElementsByClassName("reply_count");
	var replySections = document.getElementsByClassName("replies");

	//function 
	function toggleReplies(){
		if (this.parentElement.nextElementSibling.style.display == "block"){
			this.parentElement.nextElementSibling.style.display = "none";

		} else {
			this.parentElement.nextElementSibling.style.display = "block";

		}	
		event.preventDefault();
	}

	for (var i = 0; i < replyNumLinks.length; i++){
		replyNumLinks[i].addEventListener("click", toggleReplies);
	}

});