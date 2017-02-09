window.addEventListener("load", function(){

	var submitButtons = document.getElementsByClassName("submitcomment");
	var commentBoxes = document.getElementsByClassName("commentbox");
	var commentNum = document.getElementById("comment__number")

	//function 
	function makeAlert(){
		if (event.target.previousElementSibling.value == "") {
			alert("Your Comment is empty, goofball.")
			event.preventDefault();
		} else {

		}

		
	}

	function updateComNum(){

		event.preventDefault();
	}

	function displayNewCom(){

		event.preventDefault();
	}

	for (var i = 0; i < submitButtons.length; i++){
		submitButtons[i].addEventListener("click", makeAlert);
	}
});