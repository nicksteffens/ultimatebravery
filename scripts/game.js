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
        element: '#champion',
        image_element: '#champion-image',
        arry: info.champions,
        url_info: info.url_paths.champions,
        howMany: 1
      },
      spells: {
        element: '#spells',
        arry: info.spells,
        url_info: info.url_paths.spells,
        howMany: 2
      },
      boots: {
        element: '#boots',
        arry: info.boots,
        url_info: info.url_paths.boots,
        howMany: 1
      },
      items: {
        element: '#items',
        arry: info.items,
        url_info: info.url_paths.items,
        howMany: 5
      }
    };

    // start game
    Controller.fetchBravery(Controller.drawCard);
  },

  // sets listener
  fetchBravery: function(evnt) {
    evnt.click(function(){
      // console.log($('.media-list'));
      if ($('.media-list').hasClass('hidden')) {
        $('.media-list')
        .removeClass('hidden');
      }

      $.each(Controller.objects, function(){
        Utility.collectInfo(this);

      });
    });
  }

};

// View for UltimateBravery
View = {
  // reworking how it print info
  printInfoArry: function(arry, element) {
    $.each(arry, function(idx){
      // console.log('printing %o', this, idx, $(element).eq(idx));
      $(element + ' .media').eq(idx).children('.media-body').children('.media-heading').empty().text(this.name);
      if (element !== '') {
        // $(element + ' .media-body').eq(idx).children('.media-image').empty().text(this.path);
        // $(element + ' .media-body').eq(idx).children('div').empty().append(
        //   // '<img class="media-object" src="http://deelay.me/1000?' + this.path +'" alt="' + this.name + '" />'
        //   '<p >' + this.path + '</p>'
        // );
        $(element + ' .media').eq(idx).children('.pull-left').children('.media-object').attr('class', '').addClass('media-object sprite i' + this.id);


      }
    });
  }

};

Utility = {

  // selects random entry for give array
  selectRandom: function(arry){
    var chosen = arry[Math.round(Math.random()*arry.length)];
    return chosen;
  },

  // collects information on an object with multiple returns
  collectInfo: function(obj) {
    // reset vars
    var items = [],
        selected = null,
        item = null;

      // collects information
      for( var i = 0; i < obj.howMany; i++) {

        selected = Utility.selectRandom(obj.arry);
        // var imagePath = Utility.grabImage(obj.url_info, selected.id, obj.url_info.portraits);
        item = {
          name: selected.name,
          id: selected.id
        };

        // TODO: Write checker for repeats
        if ( $.inArray(item, items) < 0) {

          items.push(item);
        } else {
          console.log(
            'Error \n%o is already in %o', item, items
          );
        }


      }

    // Print Item(s)
    View.printInfoArry(items, obj.element);

  },

  // constructs image paths from na.leagueoflegends.com
  // NOTE: Avoid as leagueoflegends.com block too many image requests
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
