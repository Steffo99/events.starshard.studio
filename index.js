function renderTime() {
	for(const element of document.querySelectorAll("time")) {
		const date = new Date(element.dateTime)
		if(!element.title) element.title = date.toString()
		if(!element.innerText) element.innerText = date.toLocaleString()
	}
}

window.onload = function() {
	renderTime()
}
