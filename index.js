onload = function() {
	var mdEl = document.getElementById("markdown");
	var htmlEl = document.getElementById("html");
	
	var md = require("markdown").markdown;
	
	mdEl.onkeypress = function() {
		var output = md.toHTML(mdEl.value);
		htmlEl.innerHTML = output;
	}
};