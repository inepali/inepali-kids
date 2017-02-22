angular.module('iNepali.appService', [])
	.factory('AppService', function ($window, $http, $rootScope, $cordovaMedia, $cordovaDevice) {


		var songs = function () {
			return [{
				"mp3": "01_Introduction.mp3",
				"title": "Introduction",
				"desc": null
			},
			{
				"mp3": "02_Track_02.mp3",
				"title": "Kopila Hu",
				"desc": "I am bud"
			},
			{
				"mp3": "03_The_More_We_Get_Together.mp3",
				"title": "The More We Get Together",
				"desc": null
			},
			{
				"mp3": "04_Track_04.mp3",
				"title": "Basuriko Dhunsanga",
				"desc": "with the music of flute"
			},
			{
				"mp3": "05_Hot_Cross_Buns.mp3",
				"title": "Hot Cross Buns",
				"desc": null
			},
			{
				"mp3": "06_Track_06.mp3",
				"title": "Ka Kha Ga Gha",
				"desc": null
			},
			{
				"mp3": "07_One_One_Sun.mp3",
				"title": "One One Sun",
				"desc": null
			},
			{
				"mp3": "08_Track_08.mp3",
				"title": "Maro Gau Jyamire",
				"desc": "My Village Jyamire"
			},
			{
				"mp3": "09_Track_09.mp3",
				"title": "Ding Dong Bell",
				"desc": null
			},
			{
				"mp3": "10_Track_10.mp3",
				"title": "Malekhuko pul bhatkiyo",
				"desc": null
			},
			{
				"mp3": "11_Track_11.mp3",
				"title": "Nepalka Hami Sana ()",
				"desc": "We are small from Nepal"
			},
			{
				"mp3": "12_This_Old_Man.mp3",
				"title": "This Old Man",
				"desc": null
			},
			{
				"mp3": "13_Track_13.mp3",
				"title": "Batoma Yeuta Kamila Cha",
				"desc": "There is an ant on the street"
			},
			{
				"mp3": "14_My_Bonnie.mp3",
				"title": "My Bonnie",
				"desc": null
			},
			{
				"mp3": "15_Row_Row_Row_Your_Boat.mp3",
				"title": "Row Row Row Your Boat",
				"desc": null
			},
			{
				"mp3": "16_Track_16.mp3",
				"title": "Karyasil Jindagi",
				"desc": null
			},
			{
				"mp3": "17_Track_17.mp3",
				"title": "Jun Deshko Matoma",
				"desc": null
			},
			{
				"mp3": "18_Track_18.mp3",
				"title": "to the tune of My Fair Lady",
				"desc": null
			},
			{
				"mp3": "19_Track_19.mp3",
				"title": "Instrumental",
				"desc": null
			}];
		}


		var consonents = function () {
			return [
				{ 'char': 'ka', 'english': 'ant' },
				{ 'char': 'kha', 'english': 'rabbit' },
				{ 'char': 'ga', 'english': 'cow' },
				{ 'char': 'gha', 'english': 'house' },
				{ 'char': 'nga', 'english': 'nail' },
				{ 'char': 'ca', 'english': 'bird' },
				{ 'char': 'cha', 'english': 'umbrella' },
				{ 'char': 'ja', 'english': 'reindeer' },
				{ 'char': 'jha', 'english': 'flag' },
				{ 'char': 'nya', 'english': 'bull horn' },
				{ 'char': 'tta', 'english': 'leaf plates' },
				{ 'char': 'ttha', 'english': 'thamel market' },
				{ 'char': 'dda', 'english': 'flag' },
				{ 'char': 'ddha', 'english': 'pellet drum' },
				{ 'char': 'nna', 'english': 'hexagon' },
				{ 'char': 'ta', 'english': 'weight balance' },
				{ 'char': 'tha', 'english': 'clap' },
				{ 'char': 'da', 'english': 'fire brigade' },
				{ 'char': 'dha', 'english': 'bow & arrow' },
				{ 'char': 'na', 'english': 'coconut' },
				{ 'char': 'pa', 'english': 'pigeon' },
				{ 'char': 'pha', 'english': 'fruits' },
				{ 'char': 'ba', 'english': 'peanut' },
				{ 'char': 'bha', 'english': 'buffalo' },
				{ 'char': 'ma', 'english': 'corn' },
				{ 'char': 'ya', 'english': 'Yagna' },
				{ 'char': 'ra', 'english': 'horse cart' },
				{ 'char': 'la', 'english': 'Garlic' },
				{ 'char': 'wa', 'english': 'lawyer' },
				{ 'char': 'sha', 'english': 'radishes' },
				{ 'char': 'ssa', 'english': 'bow & arrow' },
				{ 'char': 'sa', 'english': 'match box' },
				{ 'char': 'ha', 'english': 'elephant' },
				{ 'char': 'ksha', 'english': 'area' },
				{ 'char': 'tra', 'english': 'trident' },
				{ 'char': 'jnya', 'english': 'gyani' }
			];
		};

		var vowels = function () {
			return [
				{ 'char': 'a', 'english': 'pomegranate' },
				{ 'char': 'aa', 'english': 'mango' },
				{ 'char': 'i', 'english': 'well' },
				{ 'char': 'ii', 'english': 'god' },
				{ 'char': 'u', 'english': 'wool' },
				{ 'char': 'uu', 'english': 'sugarcane' },
				{ 'char': 'e', 'english': 'one ruppe' },
				{ 'char': 'ai', 'english': 'mirror' },
				{ 'char': 'o', 'english': 'medicine' },
				{ 'char': 'au', 'english': 'fingure' },
				{ 'char': 'am', 'english': 'grapes' },
				{ 'char': 'ah', 'english': 'ah' }

			];
		};

		var numbers = function () {
			return [
				{ 'char': 'one', 'english': 'one' },
				{ 'char': 'two', 'english': 'two' },
				{ 'char': 'three', 'english': 'three' },
				{ 'char': 'four', 'english': 'four' },
				{ 'char': 'five', 'english': 'five' },
				{ 'char': 'six', 'english': 'six' },
				{ 'char': 'seven', 'english': 'seven' },
				{ 'char': 'eight', 'english': 'eight' },
				{ 'char': 'nine', 'english': 'nine' },
				{ 'char': 'ten', 'english': 'ten' },

			];
		};

		var barkhari = function (identifier) {
			return [
				{ 'img': 'a.gif', 'audio': 'a.mp3' },
				{ 'img': 'aa.gif', 'audio': 'aa.mp3' },
				{ 'img': 'ga.gif', 'audio': 'ga.mp3' },
				{ 'img': 'gha.gif', 'audio': 'gha.mp3' },
			];
		};

		var getvocabularyMenus = function () {
			return [
				{
					'title': 'Fruits',
					'iconUrl': 'http://www.top-flowers.com/uploads/com_category/gallery/thumbs/256x256_7da73615971a4ac6ac5c886e53f3a008d2a80c40.jpg',
					'vocabulars': [
						'Fruits = फलफूल (phalphul)',
						'Grapes = अंगुर (angur)',
						'Watermelon = खर्बुजा (kharbuja)',
						'Apple = स्याउ (shyau)',
						'Orange = सुन्तला (suntala)',
						'Banana = केरा (kera)',
						'Coconut = नरिवल (nariwal)',
						'Pear = नास्पाती (naspaati)',
						'Mango = आँप (aap)',
						'Pomegranate = अनार (aanar)',
						'Strawberry = स्ट्रबेरी (straberi)',
						'Mulberry = किम्बु (kimbu)',
						'Guava = अम्बा (ambaa)',
						'Peach = आरू (aaru)',
						'Plum = आलुबखडा (aalubakhada)',
						'Pineapple = भुइँ कटहर (bhui katahar)',
						'Jackfruit = रूख कटहर (rukh katahar)',
						'Starfruit = कन्तरा (kantaraa)',
						'Indian Barberry = चुत्रो (chutro)',
						'Bayberry = काफल (kaafal)',
						'Portuguese plum = जामुन (jaamun)',
						'Grapefruit = भोगटे (bhogate)',
						'Kumquat = मुन्तला (muntala)',
						'Papaya = मेवा (mewa)',
						'Jícama = भुइँस्याउ (bhuisyaau)',
						'Nepali hog plum = लप्सी (lapsi)',
						'Custard Apple = सरिफा (sarifa)',
						'Litchi = लिची (lichi)']
				},
				{ 'title': 'Animals', 'iconUrl': 'https://static-s.aa-cdn.net/img/ios/896140670/9417fea0d058e78a2b5c62551ca1909a?v=1' },
				{ 'title': 'Colors', 'iconUrl': 'https://68.media.tumblr.com/avatar_b4b74782986a_128.png' },
				{ 'title': 'Bedroom Stuffs', 'iconUrl': 'https://a1225.files.wordpress.com/2007/08/andreascharalambous_bedroomorange_w190.thumbnail.jpg?w=840' },
				{ 'title': 'Kitchen Stuffs', 'iconUrl': 'http://www.debkadas.com/wp-content/uploads/colors-kitchen-galley-view-128x128.jpg' }
			];
		}

		var play = function (src) {

			$cordovaToast.showLongCenter('msg: play called');
			console.log('msg: play callled');

			stop();

			var iOSPlayingOptions = {
				numberOfLoops: 1
			};

			// the platform 
			var platform = null;
			if ($cordovaDevice) {
				try {
					platform = $cordovaDevice.getPlatform();
				} catch (err) {
					console.log(err.message);
				}

			}

			$cordovaToast.showLongCenter('platform: ' + platform);
			var src = src;
			if (platform == 'iOS') {
				src = src;
			} else {
				src = "file:///assets/www/audio/" + src;
			}
			$cordovaToast.showLongCenter('src: ' + src);
			$rootScope.media = new Media(src, null, null);
			//$rootScope.media = $cordovaMedia.newMedia(src);

			if (platform == 'iOS') {
				$rootScope.media.play(iOSPlayingOptions);
			} else {
				$rootScope.media.play();
			}
		}

		var stop = function () {
			if ($rootScope.media != null) {
				$rootScope.media.stop();
			}
		};


		var getVideos = function () {
			return $http.get("http://api1.inepali.net/api/VideoLearning").success(function (response) {
				return response;
			}).error(function (error) {
				$rootScope.errors = error;
			});
		};

		var getVocabularyCategories = function () {
			return $http.get("http://api1.inepali.net/api/Vocabulary").success(function (response) {
				return response;
			}).error(function (error) {
				$rootScope.errors = error;
			});
		};

		var getVocabularies = function (cid) {
			return $http.get("http://api1.inepali.net/api/Vocabulary?cid=" + cid).success(function (response) {
				return response;
			}).error(function (error) {
				$rootScope.errors = error;
			});
		};

		// -> Fisher–Yates shuffle algorithm
		var shuffleArray = function (array) {
			var m = array.length, t, i;

			// While there remain elements to shuffle
			while (m) {
				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);

				// And swap it with the current element.
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}

			return array;
		}


		return {
			consonents: consonents,
			vowels: vowels,
			numbers: numbers,
			barkhari: barkhari,
			songs: songs,
			play: play,
			stop: stop,
			getVideos: getVideos,
			getvocabularyMenus: getvocabularyMenus,
			getVocabularies: getVocabularies,
			getVocabularyCategories: getVocabularyCategories,
			shuffleArray: shuffleArray
		}
	});