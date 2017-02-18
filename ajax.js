// access facebook data via JSON
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/MalastrumDominiSui/Facebook/master/commentData.json");
request.onload = function(){
	var faceData = JSON.parse(request.responseText);
};
request.send();


