function renderTime() {
	const root = document.querySelector("html")
	const now = new Date()

	for(const element of document.querySelectorAll('time[data-render]')) {
		const format = element.getAttribute("data-render")
		const date = new Date(element.dateTime)
		element.title = date.toString()

		if(format === "relative-short") {
			const renderer = new Intl.RelativeTimeFormat(root.lang, {style: "short"})

			const deltaMs = date - now
			const absMs = Math.abs(deltaMs)
			if(absMs <= 1000 * 60) element.innerText = renderer.format(Math.floor(deltaMs / (1000)), "second")
			else if(absMs <= 1000 * 60 * 60) element.innerText = renderer.format(Math.floor(deltaMs / (1000 * 60)), "minute")
			else if(absMs <= 1000 * 60 * 60 * 24) element.innerText = renderer.format(Math.floor(deltaMs / (1000 * 60 * 60)), "hour")
			else element.innerText = renderer.format(Math.floor(deltaMs / (1000 * 60 * 60 * 24)), "day")
		}
		else if(format === "relative-long") {
			const renderer = new Intl.RelativeTimeFormat(root.lang, {style: "long"})

			const deltaMs = date - now
			const absMs = Math.abs(deltaMs)
			if(absMs <= 1000 * 60) element.innerText = renderer.format(Math.floor(deltaMs / (1000)), "second")
			else if(absMs <= 1000 * 60 * 60) element.innerText = renderer.format(Math.floor(deltaMs / (1000 * 60)), "minute")
			else if(absMs <= 1000 * 60 * 60 * 24) element.innerText = renderer.format(Math.floor(deltaMs / (1000 * 60 * 60)), "hour")
			else element.innerText = renderer.format(Math.floor(deltaMs / (1000 * 60 * 60 * 24)), "day")
		}
		else {
			element.innerText = date.toLocaleString()
		}

	}
}

window.onload = function() {
	renderTime()
}
