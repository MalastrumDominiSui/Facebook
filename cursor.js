window.addEventListener("load", function(){

	var commentButton = document.getElementsByClassName("action--comment")[0];
	var newCommentForm = document.getElementById("textbox")

	function moveCursor(){
		newCommentForm.focus();
	}

	commentButton.addEventListener("click", moveCursor);
});