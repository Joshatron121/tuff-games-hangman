//    *** Game Driver ***

$("#playButton").click(function(){
	$("#intro").hide();
	$("#mainContent").fadeIn();

	$("#mainTitle").fadeOut("fast");
	$("#mainBanner").fadeOut("fast");


	$("#cafeteriaTitle").fadeIn("slow");
	$("#cafeteriaBanner").fadeIn("slow");
	$("#footerForm").addClass("cafeteriaFooter");
})





var switch1;
var switch2;
var totalBlanks = 11;
var allClear = parseInt(0);



//Hide the container with CSS 
// $("#container").hide();

//		*** Add Word to the Mad Libs Paragraph ***

		// *** one ***

$("#one").click(function(){
	var one = prompt("Enter an adjective");

	// if nothing is entered
	if (one === ""){
		$("#emptyBlank").fadeIn();
		
	// if a valid value is entered		
	}else if(one.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();

		// set the dom element equal to the input 
	 	document.querySelector('#wordOne').textContent = one;

	 	// replace choose button with change word 
	 	$("#one").fadeOut();
	 	$("#minusOne").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!");
	 		$("#finish").fadeIn();
 		}

 	// help if value is too long 
 	}else{
 		$("#tooLong").fadeIn();
 	}	

});

		// *** Two ***

$("#two").click(function(){

	var two = prompt("Enter a verb");

	// if nothing is entered
	if(two === ""){
		$("#emptyBlank").fadeIn();

	// if a valid value is entered	
	}else if (two.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();
	

		// set the dom element equal to the input 
	 	document.querySelector('#wordTwo').textContent = two;

	 	// replace choose button with change word 
	 	$("#two").fadeOut();
	 	$("#minusTwo").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();
	 		
	 	//show help if value is too long
	 	}
	 }else{
	 		$("#tooLong").fadeIn();
	 	}
	});


			//   *** Three ***


	$("#three").click(function(){
	var three = prompt("Enter a adjective");

	// if nothing is entered
	if (three === ""){
		$("#emptyBlank").fadeIn();

	// if valid input is entered
	} else if(three.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();


		// set the dom element equal to the input 
		document.querySelector('#wordThree').textContent = three;

		// replace choose button with change word 
	 	$("#three").fadeOut();
	 	$("#minusThree").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();
	 	}

	//show help if value is too long 		
	} else {
		$("#tooLong").fadeIn();
		}
	});

			//	*** Four ***		

	$("#four").click(function(){
	var four = prompt("Enter a noun");

	// if nothing is entered
	if(four === ""){
		$("#emptyBlank").fadeIn();

	// if valid input is entered	
	}else if (four.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();

		// set the dom element equal to the input
		document.querySelector('#wordFour').textContent = four;

		// replace choose button with change word 
		$("#four").fadeOut();
	 	$("#minusFour").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();	

	 	//show help if value is too long 		
	 	}
	}else{
	 		$("#tooLong").fadeIn();
	 	}
	});

	//			*** Five ***

	$("#five").click(function(){
	var five = prompt("Enter a verb");

	// if nothing is entered
	if(five === ""){
		$("#emptyBlank").fadeIn();

	// if valid input is entered
	} else if(five.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();


		// set the dom element equal to the input
		document.querySelector('#wordFive').textContent = five;

		// replace choose button with change word button
	 	$("#five").fadeOut();
	 	$("#minusFive").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();

	 	// show help if value is too long	
	 	}
	 	}else{
	 		$("#tooLong").fadeIn();
	}

	});


	//		*** Six ***

	$("#six").click(function(){
	var six = prompt("Enter a adjective");

	// if nothing is entered
	if(six === ""){
		$("#emptyBlank").fadeIn();

	// if valid input is entered
	} else if(six.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();


		// set the dom element equal to the input
	 	document.querySelector('#wordSix').textContent = six;

	 	// replace choose button with change word button
	 	$("#six").fadeOut();
	 	$("#minusSix").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();

	 		
	 	}		

	 	// show help if value is too long	
		}else{
			$("#tooLong").fadeIn();
		}
	});

	//		*** Seven ***

	$("#seven").click(function(){
	var seven = prompt("Enter a noun");

	// if nothing is entered
	if(seven === ""){
		$("#emptyBlank").fadeIn();

	// if valid input is entered

	}else if(seven.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();

		// set the dom element equal to the input
		document.querySelector('#wordSeven').textContent = seven;

		//replace choose button with change word button
	 	$("#seven").fadeOut();
	 	$("#minusSeven").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();

	 		
	 	}

	// show help if value is too long
	}else{
		$("#tooLong").fadeIn();
	}
 	
	});

	//		*** Eight ***

	$("#eight").click(function(){
	var eight = prompt("Enter an adjective");

	//check if nothing is entered
	if(eight === ""){
		$("#emptyBlank").fadeIn();

	// if valid input is entered
	}else if (eight.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();

		// set the dom element equal to the input
		document.querySelector('#wordEight').textContent = eight;

		// replace the choose button with change word button
	 	$("#eight").fadeOut();
	 	$("#minusEight").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button 
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();

	 		
	 	}

	 //show help if value is too long
	}else{
		$("#tooLong").fadeIn();
	}
	});

	//		*** Nine ***

	$("#nine").click(function(){
	var nine = prompt("Enter an adjective");

	// if nothing is entered
	if(nine === ""){
		$("#emptyBlank").fadeIn();
	
	//if valid input is entered
	} else if(nine.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();

		// set the dom element equal to the input
		document.querySelector('#wordNine').textContent = nine;

		//replace the choose button with change word button 
	 	$("#nine").fadeOut();
	 	$("#minusNine").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button 
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();

	 		
	 	}
	 //show help if value is too long
	}else{
		$("#tooLong").fadeIn();
	}

	});

	//		*** Ten ***		
	$("#ten").click(function(){
	var ten = prompt("Enter a noun");

	// if nothing is entered
	if(ten === ""){
		$("#emptyBlank").fadeIn();
	
	// if valid input is entered
	}else if(ten.length <= 20){

		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();

		// set the dom element equal to the input
		document.querySelector('#wordTen').textContent = ten;

		// replace the choose button with change word button 
	 	$("#ten").fadeOut();
	 	$("#minusTen").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();

	 		
	 	}
	 //show help if value is too long
	}else{
		$("#tooLong").fadeIn();
	}
 	
	});

	//		*** Eleven ***
	$("#eleven").click(function(){
	var eleven = prompt("Enter a noun");
	// if nothing is entered
	if(eleven === ""){
		$("#emptyBlank").fadeIn();

	// if valid input is entered	
	}else if(eleven.length <= 20){
		
		// clear out any help messages
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();

		// set the dom element equal to the input
		document.querySelector('#wordEleven').textContent = eleven;

		// replace the choose button with change word button
	 	$("#eleven").fadeOut();
	 	$("#minusEleven").fadeIn("slow");

	 	// check if all blanks are filled, alert and show complete button
	 	allClear += 1;
	 	if (allClear === totalBlanks){
	 		alert("You have completed all the blanks!")
	 		$("#finish").fadeIn();

 		
 	}
 	// show help if value is too long
	}else{
		$("#tooLong").fadeIn();
	}
 	
	});


//		*** Change a word in the Mad Libs Paragraph ***

$("#minusOne").click(function(){
	var one = prompt("Enter a new Adjective");
	if(one === ""){
		$("#noChange").fadeIn();
	}else if(one.length <= 20){
		$("#noChange").fadeOut();
		$("#tooLong").fadeOut();
		document.querySelector("#wordOne").textContent = one;	
	}else{
		$("#tooLong").fadeIn();
		
	}
	


})

$("#minusTwo").click(function(){
	var two = prompt("Enter a new verb");
	if(two === ""){
		$("#noChange").fadeIn();
	}else if(two.length <= 20){
		$("#noChange").fadeOut();
		$("#tooLong").fadeOut();
		document.querySelector("#wordTwo").textContent = two; 
	}else{
		$("#tooLong").fadeIn();
		
	}
})

$("#minusThree").click(function(){
	var three = prompt("Enter a new adjective");
	if(three === ""){
		$("#noChange").fadeIn();
	}else if(three.length <= 20){
		$("#noChange").fadeOut();
		$("#tooLong").fadeOut();
	document.querySelector("#wordThree").textContent = three;
	}else{
		$("#tooLong").fadeIn();
		
	}
})

$("#minusFour").click(function(){
	var four = prompt("Enter a new noun");
	if(four === ""){
		$("#noChange").fadeIn();
	}else if(four.length <= 20){
		$("#noChange").fadeOut();
		$("#tooLong").fadeOut();
	document.querySelector("#wordFour").textContent = four;
	}else{
		$("#tooLong").fadeIn();
		
	}
})

$("#minusFive").click(function(){
	var five = prompt("Enter a new verb");
	if(five === ""){
		$("#noChange").fadeIn();
	}else if(five.length <= 20){
		$("#noChange").fadeOut();
		$("#tooLong").fadeOut();
	document.querySelector("#wordFive").textContent = five;
	}else{
		$("#tooLong").fadeIn();
		
	}

})

$("#minusSix").click(function(){
	var six = prompt("Enter a new adjective");
	if(six === ""){
		$("#noChange").fadeIn();
	}else if(six.length <= 20){
		$("#noChange").fadeOut();
		$("tooLong").fadeOut();
	document.querySelector("#wordSix").textContent = six;
	}else{
		$("#tooLong").fadeIn();
		
	}
})

$("#minusSeven").click(function(){
	var seven = prompt("Enter a new noun");
	if(seven === ""){
		$("#noChange").fadeIn();
	}else if(seven.length <= 20){
		$("#noChange").fadeOut();
		$("#tooLong").fadeOut();
	document.querySelector("#wordSeven").textContent = seven;
	}else{
		$("#tooLong").fadeIn();
		
	}
})

$("#minusEight").click(function(){
	var eight = prompt("Enter a new adjective");
	if(eight === ""){
		$("#noChange").fadeIn();
	}else if(eight.length <= 20){
		$("#noChange").fadeOut();
		$("#tooLong").fadeOut();
	document.querySelector("#wordEight").textContent = eight;
	}else{
		$("#tooLong").fadeIn();
		
	}
})

$("#minusNine").click(function(){
	var nine = prompt("Enter a new adjective");
	if(nine === ""){
		$("#noChange").fadeIn();
	}else if(nine.length <= 20){
		$("#noChange").fadeOut();
		$("#tooLong").fadeOut();
	document.querySelector("#wordNine").textContent = nine;
	}else{
		$("#tooLong").fadeIn();
		
	}

})

$("#minusTen").click(function(){
	var ten = prompt("Enter a new noun");
	if(ten === ""){
		$("#emptyBlank").fadeIn();
	}else if(ten.length <= 20){
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();
	document.querySelector("#wordTen").textContent = ten;
	}else{
		$("#tooLong").fadeIn();
		
	}
})

$("#minusEleven").click(function(){
	var eleven = prompt("Enter a new noun");
	if(eleven === ""){
		$("#emptyBlank").fadeIn();
	}else if(eleven.length <= 20){
		$("#emptyBlank").fadeOut();
		$("#tooLong").fadeOut();
	document.querySelector("#wordEleven").textContent = eleven;
	}else{
		$("#tooLong").fadeIn();
		
	}
})





//		*** Generate final product ***

$("#finish").click(function(){
	$(".hiddenButton").css("display", "none");
})