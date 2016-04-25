var numLetters = [];
var difficulty = [];
var clearDifficulty = [];
var wordChoice = "";
var math = 1;
var currentWord = "";
var i = 0;
var r = 0;
var previousWords = [];
var path = "";
var backPath = "";
var splitWord = "";
var previousChoices = [];
var userChoice = "";
var matched = 0;
var incorrectGuesses = 0;
var correctGuess = 0;
var previousGuesses = [];
var alreadyGuessed = false;
var extreme = false;
var listOfLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

$(document).ready(function(){

		$('[data-toggle="tooltip"]').tooltip()

		$('.new_game').click(function(){
		$('.final_result').hide();
		$('#options').fadeIn();
		hideVisible(numLetters,"letter_")
		hideVisible(difficulty,"incorrect_");
		y = 0;
		for(y = 0; y <= 8; y++) {
			$('.letter_' + (y + 1)).html('&nbsp;');
		}
		y = 0;
		for(y = 0; y <= 9; y++) {
			$('.incorrect_' + (y + 1)).html('&nbsp;');
		}
		y = 0;
		for (y = 0; y <= clearDifficulty.length - 1; y++){
			$(clearDifficulty[y][0]).css(clearDifficulty[y][1],clearDifficulty[y][2]);
		}
		$('.guess_input_word').val("");
		previousGuesses = [];
		correctGuess = 0;
		incorrectGuesses = 0;
		matched = 0;
		previousChoices = [];
		numLetters = [];
		difficulty = [];
		extreme = false;

	});

	$('.quit_game').click(function(){
		$('.final_result').hide();
		$('.game_over').fadeIn();
	});

	$('#play').click(function(){
		$('#intro').hide();
		$('#options').fadeIn();
	});

	$('#five_letters').click(function(){
		numLetters = [1,2,3,4,5];
		path = letterList.five;
		backPath = previousWords.five;
	});

	$('#six_letters').click(function(){
		numLetters = [1,2,3,4,5,6];
		path = letterList.six;
		backPath = previousWords.six;
	});

	$('#seven_letters').click(function(){
		numLetters = [1,2,3,4,5,6,7];
		path = letterList.seven;
		backPath = previousWords.seven;
	});

	$('#eight_letters').click(function(){
		numLetters = [1,2,3,4,5,6,7,8];
		path = letterList.eight;
		backPath = previousWords.eight;
	});

	$('#easy').click(function(){
		extreme = false;
		difficulty = [revealBody.head,revealBody.neck,revealBody.body,revealBody.leftShoulder,revealBody.rightShoulder,revealBody.leftArm,revealBody.rightArm,revealBody.leftLeg,revealBody.rightLeg];
		clearDifficulty = [hideBody.head,hideBody.neck,hideBody.body,hideBody.leftArmHard,hideBody.rightArmHard,hideBody.leftLeg,hideBody.rightLeg];
	})

	$('#medium').click(function(){
		extreme = false;
		difficulty = [revealBody.head,revealBody.neck,revealBody.body,revealBody.leftArmHard,revealBody.rightShoulder,revealBody.rightArm,revealBody.leftLeg,revealBody.rightLeg];
		clearDifficulty = [hideBody.head,hideBody.neck,hideBody.body,hideBody.leftArmHard,hideBody.rightArmHard,hideBody.leftLeg,hideBody.rightLeg];
	})

	$('#hard').click(function(){
		extreme = false;
		difficulty = [revealBody.head,revealBody.neck,revealBody.body,revealBody.leftArmHard,revealBody.rightArmHard,revealBody.leftLeg,revealBody.rightLeg];
		clearDifficulty = [hideBody.head,hideBody.neck,hideBody.body,hideBody.leftArmHard,hideBody.rightArmHard,hideBody.leftLeg,hideBody.rightLeg];
	})

	$('#extreme').click(function(){
		extreme = true;
		difficulty = [1];
		clearDifficulty = [hideBody.head,hideBody.neck,hideBody.body,hideBody.leftArmHard,hideBody.rightArmHard,hideBody.leftLeg,hideBody.rightLeg];
	})
	$('#submit').click(function(){
		if (numLetters.length === 0 || difficulty.length === 0) {
		$('.the_alert').fadeIn();
		} else {
			math = Math.floor(Math.random() * 45);
			wordChoice = path[math];
			backPath.push(path[math]);
			path.splice(math,1);
			makeVisible(numLetters,"letter_")
			makeVisible(difficulty,"incorrect_");

			$('#options').hide();
			$('.guess_buttons').fadeIn();
			$('#hangman_container').fadeIn();
			splitWord = wordChoice.split('');
		};
	});
	$('.guess_letter').click(function(){
		$('.guess_buttons').hide();
		$('.guess_field').css('display','inline-block');
		$('.guess_input').focus();
	})

	$('.guess_word').click(function(){
		$('.guess_alert').fadeIn();
		$('.confirm_button').click(function(){
			$('.guess_alert').hide();
			$('.guess_buttons').hide();
			$('.guess_input_word').attr('maxlength',wordChoice.length);
			$('.guess_input_word').attr('size',wordChoice.length);
			$('.guess_field_word').fadeIn();
			$('.guess_input_word').focus();
		});
		$('.deny_button').click(function(){
			$('.guess_alert').hide();
		});

	});

	$('.submit_button_word').click(function(){
		userChoice = $('.guess_input_word').val();
		userChoice.toLowerCase(0);
		if (userChoice === wordChoice){
			$('.result_text').text('You guessed it! Well done. Play again?');
			$('.guess_field_word').hide();
			$('#hangman_container').hide();
			$('.final_result').fadeIn();
		} else {
			$('.result_text').text('Oh no! That wasn\'t right. The correct word was ' + wordChoice.toUpperCase() + '. Play again?');
			$('.guess_field_word').hide();
			$('#hangman_container').hide();
			$('.final_result').fadeIn();
		}	
	});

	$('.submit_button').click(function(){
		r = 0;
		userChoice = $('.guess_input').val();
		userChoice.toLowerCase(0);
		if (alreadyGuessed === true) {
			$('.guess_alert').hide();
			$('.guess_alert_buttons').fadeIn();
			$('.alert_text').text('Failing to guess the word will result in immediate failure! Are you sure you want to try to guess the word?');
			alreadyGuessed = false;
		} 
		for( r = 0; r <= previousGuesses.length; r++){
			if (previousGuesses[r] === userChoice) {
				$('.alert_text').text('You have already guessed this letter. Please try again.');
				$('.guess_alert_buttons').hide();
				$('.guess_alert').fadeIn();
				$('.guess_input').val("");
				alreadyGuessed = true;
			} else if (listOfLetters.indexOf(userChoice) < 0){
				$('.alert_text').text('Only letters please! Try again.');
				$('.guess_alert_buttons').hide();
				$('.guess_alert').fadeIn();
				alreadyGuessed = true;
			}

		}
		if (alreadyGuessed === false) {
			correctGuess = 0;
			previousGuesses.push(userChoice);
			for(y = 0; y <= splitWord.length; y++) {
				
				if(splitWord[y] === userChoice){
					$('.letter_' + (y + 1)).text(splitWord[y].toUpperCase());
					correctGuess++
					matched++
				}
			}
			if(correctGuess === 0){
				previousChoices.push(userChoice);
				$('.incorrect_' + (previousChoices.length)).text(userChoice.toUpperCase());

				incorrectGuesses++
				if(incorrectGuesses <= difficulty.length){
					if(extreme === true) {
						$('.head').css('border-style','solid');
						$('.neck').css('border-style','solid');
						$('.body').css('border-style','solid');
						$('.left_arm').css('border-style','solid none none solid');
						$('.right_arm').css('border-style','solid solid none none');
						$('.legs').css('border-style','none solid none solid');
					}
					$(difficulty[incorrectGuesses - 1][0]).css(difficulty[incorrectGuesses - 1][1],difficulty[incorrectGuesses - 1][2]);
				}
			};


			if(matched === wordChoice.length){
				$('.result_text').text('Congratulations, You Win! Would you like to play again?')
				$('.guess_buttons').hide();
				$('#hangman_container').hide();
				$('.final_result').fadeIn();
			}

			if(incorrectGuesses === difficulty.length){
				$('.result_text').text('Oh no! You didn\'t quite make it. The correct word was ' + wordChoice.toUpperCase() + '. Try again?');
				$('.guess_buttons').hide();
				$('#hangman_container').hide();
				$('.final_result').fadeIn();
			}

			$('.guess_input').val("");
			$('.guess_field').hide();
			$('.guess_buttons').fadeIn();
		}
	});

	$('.guess_input').keyup(function(e){
		if(e.which === 13) {
			$('.submit_button').click();
		}
	});

	$('.guess_input_word').keyup(function(e){
		if(e.which === 13) {
			$('.submit_button_word').click();
		}
	});

	var makeVisible = function(measure, type){
		for(s = 0; s <= measure.length; s++) {
			$('.' + type + s).css('visibility','visible');
		}
	}
	var hideVisible = function(measure,type){
		for(s = 0; s <= measure.length; s++) {
					$('.' + type + s).css('visibility','hidden');
		}
	}


});

var revealBody = {
	head: ['.head','border-style','solid'],
	neck: ['.neck','border-style','solid'],
	body: ['.body','border-style','solid'],
	leftShoulder: ['.left_arm','border-style','solid none none none'],
	rightShoulder: ['.right_arm','border-style','solid none none none'],
	leftArm: ['.left_arm','border-style','solid none none solid'],
	leftArmHard: ['.left_arm','border-style','solid none none solid'],
	rightArm: ['.right_arm','border-style','solid solid none none'],
	rightArmHard: ['.right_arm','border-style','solid solid none none'],
	leftLeg: ['.legs','border-style','none none none solid'],
	rightLeg: ['.legs','border-style','none solid none solid']
}

var hideBody = {
	head: ['.head','border-style','none'],
	neck: ['.neck','border-style','none'],
	body: ['.body','border-style','none'],
	leftShoulder: ['.left_arm','border-style','none'],
	rightShoulder: ['.right_arm','border-style','none'],
	leftArmHard: ['.left_arm','border-style','none'],
	rightArmHard: ['.right_arm','border-style','none'],
	leftLeg: ['.legs','border-style','none'],
	rightLeg: ['.legs','border-style','none'],
}

var previousWords = {
	five: [],
	six: [],
	seven: [],
	eight: [],
};

var letterList = {
	five: ["funny", "never", "thank", "apple", "maybe", "bring", "white", "color", "happy", "again", "begin", "brook", "laugh", "penny", "empty", "learn", "build", "brown", "above", "would", "chair", "carry", "train", "block", "large", "green", "horse", "could", "about", "hello", "which", "dance", "under", "where", "paint", "black", "guess", "found", "hurry", "truck", "drink", "began", "house", "after", "their", "store"],
	six: ["candle", "basket", "chance", "sister", "cellar", "doctor", "before", "button", "bottom", "friend", "please", "dragon", "afraid", "caught", "cowboy", "kitten", "behind", "father", "school", "street", "branch", "bitter", "mother", "bought", "always", "peanut", "yellow", "bottle", "better", "across", "turtle", "window", "should", "pocket", "cannot", "bridge", "little", "around", "belong", "rocket", "answer", "anyone", "rabbit", "bounce", "animal", "beside"],
	seven: ["cupcake", "whisper", "tractor", "himself", "snowman", "traffic", "balloon", "believe", "whistle", "outside", "nothing", "brother", "battery", "blossom", "blanket", "morning", "balcony", "anxious", "picture", "without", "evening", "tonight", "herself", "already", "careful", "thought", "beneath", "stopped", "bicycle", "through", "bedroom", "another", "feather", "excited", "address", "someone", "trouble", "between", "country", "kitchen", "because", "unhappy", "against", "instead", "chicken", "raccoon"],
	eight: ["enormous", "everyone", "birthday", "although", "frighten", "surprise", "daydream", "goodness", "continue", "fountain", "together", "remember", "grateful", "customer", "darkness", "mountain", "backyard", "complain", "anything", "yourself", "lemonade", "football", "electric", "handsome", "anywhere", "business", "neighbor", "doorbell", "sometime", "baseball", "elevator", "elephant", "accident", "tomorrow", "squirrel", "friendly", "cheerful", "daughter", "complete", "election", "airplane", "barnyard", "distance", "favorite", "sidewalk", "discover"],
};