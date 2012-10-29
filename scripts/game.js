// Controller for UltimateBravery
Controller = {

  // initialize objects
  drawCard: null,

  // initialize game
  init: function() {
    Controller.drawCard = $('#fetchBravery');
    Controller.fetchBravery(Controller.drawCard);
  },

  // sets listeners
  fetchBravery: function(obj) {
    obj.click(function(){
      View.champion();
      View.boots();
      View.items();

    });
  }

};

// View for UltimateBravery
View = {

  champion: function() {
    var selected = Utility.selectRandom(info.champions);
    $('.champion-name h2').empty().text(selected.name);

    var imagePath = Utility.grabImage(info.url_paths.champions.directory, selected.number, info.url_paths.champions.portraits );

    $('.champion-image').empty().append(
      '<img src="' + imagePath + '" alt="' + selected.name + '" />'
      );

  },

  items: function() {
    $('.items ul').empty();
    for(i=0;i<5;i++) {
      var selected = Utility.selectRandom(info.items);
      $('.items ul').append(
        '<li>' + selected.name + '</li>'
      );
    }
  },

  boots: function() {
    var selected = Utility.selectRandom(info.boots);
    $('.boots h4').empty().text(selected.name);
  },

  spells: function() {

  }

};

Utility = {
  // selects random entry for give array
  selectRandom: function(arry){
    var chosen = arry[Math.round(Math.random()*arry.length)];
    return chosen;
  },

  grabImage: function(directory, arryId, type) {
    // example: http://na.leagueoflegends.com/sites/default/files/game_data/1.0.0.146/content/champion/icons/101.jpg
    imagePath = info.url_paths.host + info.url_paths.game_data + directory + type + arryId + '.jpg';
    return imagePath;
  }
};
