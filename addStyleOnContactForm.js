  /*

Script was written for Contact Form. Displays text if you do not check the required checkboxes. 
It works only for first click. After that new element won't show untill page reload (it can be change by switch '.one' to '.on')

elementToClick - element of the page which after clicking will add a new text (in this example it's <p> element after 'submit' input) 

  */

$(document).on('ready', function(){
	let elementClicked;
	$('.elementToClick').on('click', function(){
		elementClicked = true;
    });
    $('input[type="submit"]').removeAttr("disabled");
    if ($('input[type="checkbox"]').prop('checked') === false){
        $('input[type="submit"]').one('click', function(){
            if(elementClicked !== true){
				$( 'input[type="submit"]').after( "<p style=''>Text</p>" );
            }
        })
    }   
})