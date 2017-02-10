window.addEventListener("load", function(){
	var modal = document.getElementsByClassName("modal");
	var names = document.getElementsByClassName("name");
	var close = document.getElementsByClassName("modal__close");
	var share = document.getElementsByClassName("action--share");
	var modalContent = document.getElementsByClassName("modal__content");

	for (var i = 0; i < names.length; i++){
		names[i].addEventListener("click", toggleModal);
	}

	close[0].addEventListener("click", toggleModal);
	share[0].addEventListener("click",toggleShare);
	modal[0].addEventListener("click",toggleModal);
	modalContent[0].addEventListener("click",toggleModal);


	function toggleModal(){
		if (modal[0].style.display == "none") {
			modal[0].childNodes[1].childNodes[3].innerText = event.target.innerText;
			modal[0].style.display = "block";

		} else if (modal[0].style.display == "block") {
			if (event.target == modal[0].childNodes[1]){
				return;
			}	else{
				modal[0].style.display = "none";
			}
		}
	}

	function toggleShare(){
		if (modal[0].style.display == "none") {
			modal[0].childNodes[1].childNodes[3].innerText = "SHARE "+names[0].innerText+" POST WITH EVERYBODY?";
			modal[0].style.display = "block";

		} else if (modal[0].style.display == "block") {
			modal[0].style.display = "none";
		}
	}

});
