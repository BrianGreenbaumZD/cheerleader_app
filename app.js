(function() {

  return {
    events: {
      'app.activated':'doSomething'
    },

    doSomething: function() {
    	var a = [
    		'You the man and/or woman!',
    		'Own it!',
    		'You are the ticketmaster!',
    		'This ticket has nothing on you!',
    		'Support for the win!',
    		'Who needs macros?  You got this!',
    		'Make the customer love you!',
    		'Are you feeling the Zen yet?',
    		'You are beautiful!',
    		'S-U-P-P-O-R-T SUPPORT!',
    		'Dig deep!',
    		'Victoria Beckham would call you Supporty Spice!',
    		'You have the touch.... you have the power.',
    		' Work it!',
    		'Hey, Hey, You are The Man, if you cannot help them, a Macro can.',

    	];
    	
    	this.switchTo('main', {
    		x: a[Math.floor(Math.random()*a.length)]	
    	});
    }
  };

}());
