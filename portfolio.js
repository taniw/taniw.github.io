function init() {
	setupEvents();
}

function setupEvents() {
	$('p').unbind().click(testingClick);
}

function testingClick() {
	console.log('does this work');
}