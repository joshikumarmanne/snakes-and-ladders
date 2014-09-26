$(document).ready(function(){
	//var p = 0;
	var a = 0;
	var b= 0;
//var snakesLaddersArray=[10,16,97];
var ladders = [{start:10,end:33},{start:16,end:55},{start:97,end:37}]   
//var colors = ["red", "green", "blue", "orange", "yellow"];
//var rows = 11,cols = 1;
var q=10;
for(var i = 0; i<10; i++) {
	
	$('table').append('<tr></tr>');
	
	for(var j = 0; j <10; j++) {
		if(i%2==0)
		{
         //alert(i);
         //alert(j);
         $('table').find('tr').eq(i).append('<td id='+((q*10)-(j))+'>'+((q*10)-(j))+'</td>');	

     }
     else
     {

     	$('table').find('tr').eq(i).append('<td id='+(((q-1)*10)+(j+1))+'>'+(((q-1)*10)+(j+1))+'</td>');

     }
 }
 q--;
}

//$('tr:odd').
//$( "tr:odd" ).css( "background-color", "#bbbbff" );

var clicks=0;
$('.ball').click(function()
{
	clicks++;
	var img1=$('.image');
	var img2=$('.image1');
	$('.ball').effect( "bounce", {times:3}, 900);	
	//var k = Math.floor(Math.random()*6 + 1)
	var k = 1;
	$('.ball').text(k);
	//p = p + k;
	//a=a+k;
	//b=b+k;

	
		//var isEven = function(num) {
       // return (num % 2 === 0) ? true : false;
    //};
    

    /*for(ladder in ladders) {
    	if(p == ladders[ladder]["start"]) {
    		p = ladders[ladder]["end"];
    		break;
    	}
    }*/


	//$('#' + p).append(img1);
	//$('#' + p).append(img2);
	
		if (clicks%2 == 0) {
			a=a+k;
			$('#' + a).append($('.image1')); 
		}
		else {
			b=b+k;
			$('#' + b).append($('.image'));

		}	
	



	
});	
});

