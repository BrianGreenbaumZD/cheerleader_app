(function() {

  return {
    events: {
      'app.activated':'initiateQuotes'
    },

    initiateQuotes: function() {
        var currentUser = this.currentUser().name(),
            fullName = currentUser.split(' '),
            firstName = '',
            cheers = [];

        if (fullName.length <= 2) {
            firstName = _.first(fullName);
        } else {
            firstName = helpers.fmt('%@ %@', fullName[0], fullName[1]);  
        }

        var cheersList = this.I18n.t("cheers").split(','); 

        _.each(cheersList, function(cheer){
            cheers.push(helpers.fmt(cheer, firstName));
        });
    
        this.switchTo('main', {
            sayCheers: cheers[Math.floor(Math.random()*cheers.length)]
            // When support for underscore.js is bumped up just uncomment that line it should work
            // displayCheers: _.random(0, cheers.length)
        });
    }
  };

}());
