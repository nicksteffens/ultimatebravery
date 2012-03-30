var spells    = ["Clairvoyance.png", "Clarity.png", "Cleanse.png", "Exhaust.png", "Flash.png", "Garrison.png", "Ghost.png", "Heal.png", "Ignite.png", "Promote.png", "Revive.png", "Smite.png", "Surge.png", "Teleport.png"],
    champions = ["Ahri_Square_0.png", "Akali_Square_0.png", "Alistar_Square_0.png", "Amumu_Square_0.png", "Anivia_Square_0.png", "Annie_Square_0.png", "Ashe_Square_0.png", "BlindMonk_Square_0.png", "Blitzcrank_Square_0.png", "Brand_Square_0.png", "Caitlyn_Square_0.png", "Cassiopeia_Square_0.png", "Chogath_Square_0.png", "Corki_Square_0.png", "DrMundo_Square_0.png", "Evelynn_Square_0.png", "Ezreal_Square_0.png", "Fiddlesticks_Square_0.png", "Fiora_Square_0.png", "Fizz_square_0.png", "Galio_Square_0.png", "Gangplank_Square_0.png", "Garen_Square_0.png", "Gragas_Square_0.png", "Graves_Square_0.png",  "Heimerdinger_Square_0.png", "Irelia_Square_0.png", "Janna_Square_0.png", "JarvanIV_Square_0.png", "Jax_Square_0.png", "Judicator_Square_0.png", "Karma_Square_0.png", "Karthus_Square_0.png", "Kassadin_Square_0.png", "Katarina_Square_0.png", "Kayle_Square_0.png", "Kennen_Square_0.png", "KogMaw_Square_0.png", "Leblanc_Square_0.png", "LeeSin_Square_0.png", "Leona_Square_0.png", "Lulu_Square_0.png", "Lux_Square_0.png", "Malphite_Square_0.png", "Malzahar_Square_0.png", "Maokai_Square_0.png", "MasterYi_Square_0.png",  "MissFortune_Square_0.png", "Mordekaiser_Square_0.png", "Morgana_Square_0.png", "Nasus_Square_0.png", "Nautilus_Square_0.png", "Nidalee_Square_0.png", "Nocturne_Square_0.png", "Nunu_Square_0.png", "Olaf_Square_0.png", "Orianna_Square_0.png", "Pantheon_Square_0.png", "Poppy_Square_0.png", "Rammus_Square_0.png", "Renekton_Square_0.png", "Riven_Square_0.png", "Rumble_Square_0.png", "Ryze_Square_0.png", "Sejuani_Square_0.png", "Shaco_Square_0.png", "Shen_Square_0.png", "Shyvana_Square_0.png", "Singed_Square_0.png", "Sion_Square_0.png", "Sivir_Square_0.png", "Skarner_Square_0.png", "Sona_Square_0.png", "Soraka_Square_0.png", "Swain_Square_0.png", "Talon_Square_0.png", "Taric_Square_0.png", "Teemo_Square_0.png", "Tristana_Square_0.png", "Trundle_Square_0.png", "Tryndamere_Square_0.png", "TwistedFate_Square_0.png", "Twitch_Square_0.png", "Udyr_Square_0.png", "Urgot_Square_0.png", "Vayne_Square_0.png", "Veigar_Square_0.png", "Viktor_Square_0.png", "Vladimir_Square_0.png", "Volibear_Square_0.png", "Warwick_Square_0.png", "XenZhao_Square_0.png", "Xerath_Square_0.png", "XinZhao_Square_0.png", "Yeti_Square_0.png", "Yorick_Square_0.png", "Ziggs_Square_0.png", "Zilean_Square_0.png"],
    items     = ["Abyssal_Scepter.gif", "Aegis_of_the_Legion.gif", "Archangel's_Staff.gif", "Atma's_Impaler.gif", "Chalice_of_Harmony.gif", "Cloak_and_Dagger.gif", "Deathfire_Grasp.gif", "Eleisa's_Miracle.gif", "Executioner's_Calling.gif", "Force_of_Nature.gif", "Frozen_Heart.gif", "Frozen_Mallet.gif", "Guardian_Angel.gif", "Guinsoo's_Rageblade.gif", "Haunting_Guise.gif", "Hextech_Gunblade.gif", "Infinity_Edge.gif",  "Ionic_Spark.gif", "Last_Whisper.gif", "Leviathan.gif", "Lich_Bane.gif", "Locket_of_the_Iron_Solari.gif", "Malady.gif", "Manamune.gif", "Maw_of_Malmortius.gif", "Mejai's_Soulstealer.gif", "Moonflair_Spellblade.gif", "Morello's_Evil_Tome.gif", "Nashor's_Tooth.gif", "Phantom_Dancer.gif", "Quicksilver_Sash.gif", "Rabadon's_Deathcap.gif", "Randuin's_Omen.gif", "Rod_of_Ages.gif", "Rylai's_Crystal_Scepter.gif", "Sanguine_Blade.gif", "Shurelya's_Reverie.gif", "Soul_Shroud.gif", "Spirit_Visage.gif", "Stinger.gif", "Sunfire_Cape.gif", "Sword_of_the_Occult.gif", "Tear_of_the_Goddess.gif", "The_Black_Cleaver.gif", "The_Bloodthirster.gif",  "Thornmail.gif", "Tiamat.gif", "Trinity_Force.gif", "Void_Staff.gif", "Warmog's_Armor.gif", "Will_of_the_Ancients.gif", "Wit's_End.gif", "Youmuu's_Ghostblade.gif", "Zeke's_Herald.gif", "Zhonya's_Hourglass.gif"]
    boots     = ["Berserker's_Greaves.gif", "Boots_of_Mobility.gif", "Boots_of_Swiftness.gif", "Ionian_Boots_of_Lucidity.gif", "Mercury's_Treads.gif", "Ninja_Tabi.gif", "Sorcerer's_Shoes.gif"];
  
  
UltimateBravery = {
  
  init: function() {
    UltimateBravery.champion();
    // UltimateBravery.spells();
    // UltimateBravery.boots();
    // UltimateBravery.items();
    // UltimateBravery.ability();
  },
  
  champion: function() {
    var champion = champions[Math.round(Math.random()*champions.length)];
    var name = champion.slice(0,-13);
    $('champion').children('img').attr('src', 'images/champions/'+champion);
    $('champion').find('span').html(name);
    console.log("replaced %o, %o", champion, name);
  },
  
  spells: function() {
    
  },
  
  boots: function() {
    
  },
  
  items: function() {
    
  },
  
  ability: function() {
    
  }
  
}