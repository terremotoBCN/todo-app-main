///////////////////////////////////////
function handleDragStart(this: HTMLElement, e: Event) {
	console.log("handleDragStart");
	this.classList.remove("drag-end");
	this.classList.add("drag-star");

	// const dragSrcEl = this;
}

function handleDragEnter(this: HTMLElement, e: Event) {
	console.log("handleDragEnter");
	this.classList.add("over");
}

function handleDragOver(this: HTMLElement, e: Event) {
	console.log("handleDragOver");
	if (e.preventDefault) {
		e.preventDefault();
	}

	return false;
}

function handleDragLeave(this: HTMLElement, e: Event) {
	console.log("handleDragLeave", "remove .over class");
	this.classList.remove("over");
}

function handleDragEnd(this: HTMLElement, e: Event) {
	console.log("handleDragStart");

	this.classList.remove("drag-start");
	this.classList.add("drag-end");

	// items.forEach(function (item) {
	// 	item.classList.remove("over");
	// });
}

function handleDrop(this: HTMLElement, e: Event) {
	console.log("handleDrop", "stops the browser from redirecting");
	e.stopPropagation(); // stops the browser from redirecting.
	// return false;
}

export {
	handleDragStart,
	handleDragEnter,
	handleDragOver,
	handleDragLeave,
	handleDragEnd,
	handleDrop,
};
