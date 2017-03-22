function myFunction(){
	var field1 = document.getElementById('field1').value;
	var field2 = document.getElementById('field2').value;
	var field3 = document.getElementById('field3').value;
	var field4 = document.getElementById('field4').value;

	document.getElementById('output').innerHTML = average(field1, field2, field3, field4);
}

function average(field1, field2, field3, field4){
	var avg = (parseFloat(field1) + parseFloat(field2) + 
		parseFloat(field3) + parseFloat(field4) ) / 4;

	return avg;
}