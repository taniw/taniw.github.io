
$(document).ready(function() {
   
    //$('.rectangle').unbind().click(showWorkDetails);

    $('#rec1').unbind().click(showRec1);
    $('#rec2').unbind().click(showRec2);
});


/*function showWorkDetails() {
	$('#showWorkDiv').fadeIn();
}*/

function showRec1() {
	//$('#rec2-content').hide();
	$('#rec1-content').show();
}

function showRec2() {
	$('#rec1-content').hide();
	$('#rec2-content').show();
}
