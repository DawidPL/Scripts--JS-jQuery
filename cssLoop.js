  /*

 Simple script for the autmatization of child elements style 

 propertie_values - array with values which we want to place in multiple classes
 class - name of CSS class
 propertie - CSS propertie to add 

  */


propertie_values = []

for (let i = 0; i <= color.lenght; i++){
    $('.class:nth-child('+ (i+1) + ')').css('propertie', propertie_values[i]);
}
