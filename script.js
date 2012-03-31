
Info = {
   champion: {
     section: 'champion',
     numberOf: 1,
     arr: ['Ahri.png', 'Akali.png', 'Alistar.png', 'Amumu.png', 'Anivia.png', 'Annie.png', 'Ashe.png', 'Blitzcrank.png', 'Brand.png', 'Caitlyn.png', 'Cassiopeia.png', 'Chogath.png', 'Corki.png', 'Cryophoenix.png', 'Dr.Mundo.png', 'Evelynn.png', 'Ezreal.png', 'Fiddlesticks.png', 'Fiora.png', 'Fizz.png', 'Galio.png', 'Gangplank.png', 'Garen.png', 'Gragas.png', 'Graves.png', 'Heimerdinger.png', 'Irelia.png', 'Janna.png', 'JarvanIV.png', 'Jax.png', 'Karma.png', 'Karthus.png', 'Kassadin.png', 'Katarina.png', 'Kayle.png', 'Kennen.png', 'KogMaw.png', 'Leblanc.png', 'LeeSin.png', 'Leona.png', 'Lulu.png', 'Lux.png', 'Malphite.png', 'Malzahar.png', 'Maokai.png', 'MasterYi.png', 'MissFortune.png', 'Mordekaiser.png', 'Morgana.png', 'Nasus.png', 'Nautilus.png', 'Nidalee.png', 'Nocturne.png', 'Nunu.png', 'Olaf.png', 'Orianna.png', 'Pantheon.png', 'Poppy.png', 'Rammus.png', 'Renekton.png', 'Riven.png', 'Rumble.png', 'Ryze.png', 'Sejuani.png', 'Shaco.png', 'Shen.png', 'Shyvana.png', 'Singed.png', 'Sion.png', 'Sivir.png', 'Skarner.png', 'Sona.png', 'Soraka.png', 'Swain.png', 'Talon.png', 'Taric.png', 'Teemo.png', 'Tristana.png', 'Trundle.png', 'Tryndamere.png', 'TwistedFate.png', 'Twitch.png', 'Udyr.png', 'Urgot.png', 'Vayne.png', 'Veigar.png', 'Viktor.png', 'Vladimir.png', 'Volibear.png', 'Warwick.png', 'Xerath.png', 'XinZhao.png', 'Yorick.png', 'Ziggs.png', 'Zilean.png'],
   },
   items: {
     section: 'items',
     numberOf: 5,
     arr: ["Abyssal_Scepter.gif", "Aegis_of_the_Legion.gif", "Archangel's_Staff.gif", "Atma's_Impaler.gif", "Chalice_of_Harmony.gif", "Cloak_and_Dagger.gif", "Deathfire_Grasp.gif", "Eleisa's_Miracle.gif", "Executioner's_Calling.gif", "Force_of_Nature.gif", "Frozen_Heart.gif", "Frozen_Mallet.gif", "Guardian_Angel.gif", "Guinsoo's_Rageblade.gif", "Haunting_Guise.gif", "Hextech_Gunblade.gif", "Infinity_Edge.gif",  "Ionic_Spark.gif", "Last_Whisper.gif", "Leviathan.gif", "Lich_Bane.gif", "Locket_of_the_Iron_Solari.gif", "Malady.gif", "Manamune.gif", "Maw_of_Malmortius.gif", "Mejai's_Soulstealer.gif", "Moonflair_Spellblade.gif", "Morello's_Evil_Tome.gif", "Nashor's_Tooth.gif", "Phantom_Dancer.gif", "Quicksilver_Sash.gif", "Rabadon's_Deathcap.gif", "Randuin's_Omen.gif", "Rod_of_Ages.gif", "Rylai's_Crystal_Scepter.gif", "Sanguine_Blade.gif", "Shurelya's_Reverie.gif", "Soul_Shroud.gif", "Spirit_Visage.gif", "Stinger.gif", "Sunfire_Cape.gif", "Sword_of_the_Occult.gif", "Tear_of_the_Goddess.gif", "The_Black_Cleaver.gif", "The_Bloodthirster.gif",  "Thornmail.gif", "Tiamat.gif", "Trinity_Force.gif", "Void_Staff.gif", "Warmog's_Armor.gif", "Will_of_the_Ancients.gif", "Wit's_End.gif", "Youmuu's_Ghostblade.gif", "Zeke's_Herald.gif", "Zhonya's_Hourglass.gif"]
   },
   spells: {
     section: 'spells',
     numberOf: 2,
     arr: ["Clairvoyance.png", "Clarity.png", "Cleanse.png", "Exhaust.png", "Flash.png", "Garrison.png", "Ghost.png", "Heal.png", "Ignite.png", "Promote.png", "Revive.png", "Smite.png", "Surge.png", "Teleport.png"]
   },
   boots: {
     section: 'boots',
     numberOf: 1,
     arr: ["Berserker's_Greaves.gif", "Boots_of_Mobility.gif", "Boots_of_Swiftness.gif", "Ionian_Boots_of_Lucidity.gif", "Mercury's_Treads.gif", "Ninja_Tabi.gif", "Sorcerer's_Shoes.gif"]
   },
   ability: {
     section: 'ability',
     numberOf: 1,
     arr: ['Q', 'W', 'E']
   }
}


Game = {
  
  init: function() {
    $('img').remove();
    $('span').remove();
    // $('.card').hide();
    Game.drawNewCard(Info);
  },
  
  drawNewCard: function(obj) {
    $.each(obj, function(idx, value){
      var arr = value.arr,
          section = value.section, 
          numberOf = value.numberOf;
       
      var paths = [],
          names = []; 
          
      // images      
      for(i=1;i<=numberOf;i++) {
        var path = Utility.selectRandom(arr);
        if($.inArray(path, paths) > -1) {
          // console.log('repeated item');
          path = Utility.selectRandom(arr);
          
        } else {
          paths.push(path);
        
        }
      };
          
      //  names
      for(i=0;i<=paths.length-1;i++) {
        names.push(paths[i]);
      }
          
      if(section != 'ability') Render.renderImages(paths, section);
      Render.renderNames(names, section);
      // console.log('ran '+section+' %o', new Date().getMilliseconds());    
    });
    
    Game.checkForBlanks();
  },
  
  drawNewStat: function(obj) {
    // console.log('drawing new stat for %o obj = %o', obj.section, obj);
    var arr = obj.arr,
        section = obj.section, 
        numberOf = obj.numberOf;
     
    var paths = [],
        names = []; 
    
        
    // images      
    for(i=1;i<=numberOf;i++) {
      var path = Utility.selectRandom(arr);
      if($.inArray(path, paths) > -1) {
        // console.log('repeated item');
        path = Utility.selectRandom(arr);
        
      } else {
        paths.push(path);
      
      }
    };
        
    //  names
    for(i=0;i<=paths.length-1;i++) {
      names.push(paths[i]);
    }
        
    if(section != 'ability') Render.renderImages(paths, section);
    Render.renderNames(names, section);
    Game.checkForBlanks();
  },
  
  checkForBlanks: function() {
    $('.type').each(function(){
      var section = $(this).attr('class').slice(0, -5),
          actually = $(this).find('.stat').children('span').length,
          supposed = $(this).attr('data-howmany'),
          error;
          
      // image check
      $(this).find('img').each(function(){
        var src = $(this).attr('src');
        if(src.indexOf('undef') > -1) {
          error = true;
          // console.log('%o undefined', $(this));
        }
      });
      
      // title check
      $(this).find('span').each(function(){
        var text = $(this).text();
        if(text.indexOf('undef') > -1) {
          error = true;
          // console.log('%o undefined', $(this));
        }
      });
      if(actually != supposed || error ) {
        
        // clear out garbage
        $(this).find('span').remove();
        $(this).find('img').remove();
        var getNewStat = section;
        switch(getNewStat)
        {
          case 'champion':
            Game.drawNewStat(Info.champion);
          break;
          case 'spells':
            Game.drawNewStat(Info.spells);
          break;
          case 'boots':
            Game.drawNewStat(Info.boots);
          break;
          case 'items':
            Game.drawNewStat(Info.items);
          break;
          case 'ability':
            Game.drawNewStat(Info.ability);
          break;
        }
      }
      
    });
  }
}

Utility = {
  
  selectRandom:function(arr) {
    var path = arr[Math.round(Math.random()*arr.length)];
    // console.log('select random Complete');
    return path;
    
  },
  
  // remove file extention of the listed names
  cleanNames: function(section){
    
    $('.'+section).find('span').each(function(){
      var text = $(this).text();
      if(text.indexOf('.png') > -1 || text.indexOf('_')) {
        var name = $(this).text().slice(0, -4);
        name = name.replace(/_/g, ' ');
        $(this).text(name);
      }
    });
  }
}

Render = {
  
  renderImages: function(arr, type) {
    var rent = $('.'+type);
    
    if (type === 'champion') {
      type = 'champions';
    } else if (type === 'boots') {
      type = 'items'
    }
    for(i=0;i<=arr.length-1;i++)
    {
       rent.find('[data-type]:nth('+i+')').append('<img src="images/'+type+'/'+arr[i]+'"/>');
    }
   // console.log('render image Complete');
  },
  
  renderNames: function(arr, type) {
    var rent = $('.'+type);
    for(i=0;i<=arr.length-1;i++)
    {
        rent.find('[data-type]:nth('+i+')').append('<span class="'+type+'">'+arr[i]+'</span>');
    }
    if(type != 'ability') Utility.cleanNames(type);
    // console.log('render name Complete');
  }
  
}