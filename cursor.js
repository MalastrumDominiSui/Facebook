window.addEventListener("load", function(){

	var commentButtons = document.getElementsByClassName("action--comment");
	var commentTextAreas = document.getElementsByClassName("commentbox")
	//function travels up and down DOM to find the textbox for the TOP POST
	function focusX(){
			this.parentElement.parentElement.nextElementSibling.childNodes[5].childNodes[3].firstElementChild.firstElementChild.focus();
	}

	for (var i = 0; i < commentButtons.length; i++){
		commentButtons[i].addEventListener("click", focusX );
	}

});