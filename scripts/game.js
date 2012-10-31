// Controller for UltimateBravery
Controller = {
  // initialize objects
  drawCard: null,
  objects: null,

  // initialize game
  init: function() {
    // setup game objects
    Controller.drawCard = $('#fetchBravery');
    Controller.objects = {
      champion: {
        element: $('#champion'),
        image_element: $('#champion-image'),
        arry: info.champions,
        url_info: info.url_paths.champions,
        howMany: 1
      },
      spells: {
        element: $('#spells'),
        arry: info.spells,
        url_info: info.url_paths.spells,
        howMany: 2
      },
      boots: {
        element: $('#boots'),
        arry: info.boots,
        url_info: info.url_paths.boots,
        howMany: 1
      },
      items: {
        element: $('#items'),
        arry: info.items,
        url_info: info.url_paths.items,
        howMany: 5
      }
    };
    // start game
    Controller.fetchBravery(Controller.drawCard);
  },

  // sets listeners
  fetchBravery: function(evnt) {
    evnt.click(function(){
      $.each(Controller.objects, function(){
        Utility.checkforMultiple(this);
      });
    });
  }

};

// View for UltimateBravery
View = {
  // prints info and images and object
  printInfo: function(element, title, path) {
    element.children('.media-body').children('.media-heading').empty().text(title);
    element.children('.media-body').children('.media-image').empty().text(path);
  }

};

Utility = {

  // selects random entry for give array
  selectRandom: function(arry){
    var chosen = arry[Math.round(Math.random()*arry.length)];
    return chosen;
  },

  // collects information on an object for single return
  collectInfo: function(obj) {
    var selected = Utility.selectRandom(obj.arry);
    var imagePath = Utility.grabImage(obj.url_info, selected.number, obj.url_info.portraits);

    View.printInfo(obj.element, selected.name, imagePath);

  },

  // checks how much information to collect for an object
  checkforMultiple: function(obj) {
    if(obj.howMany > 1) {
      Utility.collectMultiple(obj);
    } else {
      Utility.collectInfo(obj);
    }
  },

  // collects information on an object with multiple returns
  collectMultiple: function(obj) {
    var items = [];
    // check if object is spells
    if(obj.arry == info.spells) {
      // console.log('collected spells');

    } else {
      // collects information
      for(var i = 0; i < obj.howMany; i++) {

        // TODO:
        // Goal: Break this into is own Utility function so it can be refereneced in multiple functions and checks
        // 1. utilize collectInfo function above to achieve listed goal

        var selected = Utility.selectRandom(obj.arry);
        var imagePath = Utility.grabImage(obj.url_info, selected.number, obj.url_info.portraits);
        var item = {
          name: selected.name,
          path: imagePath
        };

        // TODO: add same item checker before adding into the collection of items
        items.push(item);

      }

      // prints information
      $.each(items, function(idx){
        var DOMelement = obj.element.children().children().eq(idx);
        View.printInfo(DOMelement, this.name, this.path);
      });
    }

  },

  // constructs image paths
  grabImage: function(dir, arryId, type) {
    var path;
    // example: http://na.leagueoflegends.com/sites/default/files/game_data/1.0.0.146/content/champion/icons/101.jpg
    if( type !== undefined) {
      path = info.url_paths.host + info.url_paths.game_data + dir.directory + type + arryId + '.jpg';
    } else {
      path = info.url_paths.host + info.url_paths.game_data + dir.directory + arryId + '.jpg';
    }
    return path;
  }
};
