
$(document).ready(function() {
   
    $('h1').unbind().click(testing);
    //$('.rectangle').unbind().click(showWorkDetails);

    $('#rec1').unbind().click(showRec1);
});



function testing() {
	console.log('does this work');
}

/*function showWorkDetails() {
	$('#showWorkDiv').fadeIn();
}*/

function showRec1() {
	$('#rec1-content').fadeIn();
}