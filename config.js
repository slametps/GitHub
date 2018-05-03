/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.132", "::ffff:192.168.0.151", "::ffff:192.168.0.128"],

	language: 'id',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
      module: 'MMM-ModuleScheduler',
            classes: 'default everyone',
        		config: {
            			notification_schedule: [
                			// SHOW AN ALERT AT 07:30 EVERY DAY
                			//{notification: 'SHOW_ALERT', schedule: '30 7 * * *', payload: {type: "notification", title: 'Good morning!'}},
                			// SHOW AN ALERT AT 17:45 EVERY DAY
                			//{notification: 'SHOW_ALERT', schedule: '52 22 * * *', payload: {type: "notification", title: 'Good afternoon!'}}
            			]
        		}
    		},
		{
			module: 'MMM-Remote-Control',
			classes: 'default everyone'
		},
		{
			module: 'alert',
			classes: 'default everyone',
			effect: 'slide',
			alert_effect: 'exploader',
			display_time: 5000,
			welcome_message: 'Selamat Datang!',
		},
		{
			module: "updatenotification",
			classes: 'default everyone',
			position: "top_bar",
		},
		{
			module: 'clock',
			classes: 'default everyone',
			position: 'top_left',
                        config: {
                          timezone: 'Asia/Jakarta'
                        }
		},
		{
			module: 'calendar',
			classes: 'default everyone',
			//header: 'Events',
			position: 'top_left',
			config: {
				fetchInterval: 900000, // 1 hr, def = 5 mins
				timeFormat: 'absolute',
				getRelative: 48,
				urgency: 7,
				colored: true,
				calendars: [
					{
						symbol: 'calendar-check-o',
						color: '#00ffff',
						url: 'https://calendar.google.com/calendar/ical/alkautsar.1302%40gmail.com/private-69c0114e0aa1b8288cd7f78bca9d0ee9/basic.ics'
					},
					{
            symbol: 'calendar',
						color: '#ff0000',
            url: 'http://127.0.0.1/ics/ID-Holidays-2017.ics'                                        }
				]
			}
		},
    {
			module: 'calendar',
			classes: 'default everyone',
			header: 'Jadwal Sholat',
			position: 'top_left',
			config: {
				fetchInterval: 900000, // 15 mins
				timeFormat: 'absolute',
				getRelative: 1, // hours
				urgency: 1, // days
				colored: true,
        maximumEntries: 6,
				calendars: [
          {
						symbol: 'calendar-o',
            color: '#ffffff',
            url: 'http://prayerwebcal.appspot.com/Bandung%2C%20Indonesia.ics?x=-6.8963981&y=107.6750389&z=420&s=5&j=0'
					}
				]
			}
		},
		{
			module: 'calendar',
			//header: 'Personal Event',
			header: 'Agenda Pribadi',
			classes: 'Slamet',
			position: 'top_left',
			config: {
				fetchInterval: 900000, // 1 hr, def = 5 mins
				calendars: [
					{
						symbol: 'calendar-check-o',
						url: 'https://calendar.google.com/calendar/ical/slametps%40gmail.com/private-b40945ebcf72726555e051e995e4e59a/basic.ics'
					}
				]
			}
		},
		{
			module: 'calendar',
			//header: 'Personal Event',
			header: 'Agenda Pribadi',
			classes: 'Valianta',
			position: 'top_left',
			config: {
				fetchInterval: 900000, // 1 hr, def = 5 mins
				calendars: [
					{
						symbol: 'calendar-check-o',
						url: 'https://calendar.google.com/calendar/ical/jundy.va%40gmail.com/private-ea2915e8db6f8a9a686e856505ba2ce6/basic.ics'
					}
				]
			}
		},
		{
			module: 'calendar',
			//header: 'Personal Event',
			header: 'Agenda Pribadi',
			classes: 'Andrea',
			position: 'top_left',
			config: {
				fetchInterval: 900000, // 1 hr, def = 5 mins
				calendars: [
					{
						symbol: 'calendar-check-o',
						url: 'https://calendar.google.com/calendar/ical/rasendriya.ra%40gmail.com/private-c65d4b39188532064dff8580630ccd54/basic.ics'
					}
				]
			}
		},
		{
			module: 'currentweather',
			classes: 'default everyone',
			position: 'top_right',
			config: {
				location: 'Bandung,ID',
				locationID: '1650357',  //ID from http://www.openweathermap.org
				appid: '33ec8bba2bbb6503ef73d7c2a49457a3',
        showHumidity: true,
				updateInterval: 900000 // in ms
			}
		},
		{
			module: 'weatherforecast',
			classes: 'default everyone',
			position: 'top_right',
			//header: 'Weather Forecast',
			config: {
				location: 'Bandung,ID',
				locationID: '1650357',  //ID from http://www.openweathermap.org
				appid: '33ec8bba2bbb6503ef73d7c2a49457a3',
        showHumidity: true,
				showRainAmount: true,
				colored: true,
				updateInterval: 900000 // in ms
			}
		},
		{
			module: 'newsfeed',
			classes: 'default everyone',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "DETIK-Frontpage",
						url: "http://rss.detik.com/index.php/detikcom"
					},
					{
						title: "DETIK-Finance",
						url: "http://rss.detik.com/index.php/finance"
					},
					{
						title: "DETIK-Hot",
						url: "http://rss.detik.com/index.php/hot"
					},
					{
						title: "DETIK-Sport",
						url: "http://rss.detik.com/index.php/sport "
					},
					{
						title: "DETIK-Oto",
						url: "http://rss.detik.com/index.php/otomotif"
					},
					/*{
						title: "Liputan6",
						url: "http://www.liputan6.com/feed/actual/"
					},*/
					{
						title: "Republika",
						url: "http://www.republika.co.id/rss"
					},
					{
						title: "Tempo",
						url: "https://rss.tempo.co/index.php/teco/news/feed/start/0/limit/10"
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: true,
				reloadInterval: 1800000 /* 30 minutes */
			}
		},
                {
                	module: 'calendar_monthly',
			classes: 'default everyone',
                	//position: 'bottom_left',
                	position: 'top_left',
            	},
		{
    			module: 'MMM-Globe',
			classes: 'default everyone',
    			position: 'bottom_right',
    			config: {
        			style: 'geoColor',
        			imageSize: 200,
        			ownImagePath:'',
        			updateInterval: 10*60*1000  // 10 minutes
    			}
		},
		{
    			module: 'MMM-Facial-Recognition',
    			config: {
        			// 1=LBPH | 2=Fisher | 3=Eigen
        			recognitionAlgorithm: 1,
        			// Threshold for the confidence of a recognized face before it's considered a
        			// positive match.  Confidence values below this threshold will be considered
        			// a positive match because the lower the confidence value, or distance, the
        			// more confident the algorithm is that the face was correctly detected.
        			lbphThreshold: 50,
        			fisherThreshold: 250,
        			eigenThreshold: 3000,
        			// force the use of a usb webcam on raspberry pi (on other platforms this is always true automatically)
        			useUSBCam: false,
        			// Path to your training xml
        			trainingFile: 'modules/MMM-Facial-Recognition/training.xml',
        			// recognition intervall in seconds (smaller number = faster but CPU intens!)
        			interval: 2,
        			// Logout delay after last recognition so that a user does not get instantly logged out if he turns away from the mirror for a few seconds
        			logoutDelay: 30,
       	 			// Array with usernames (copy and paste from training script)
 			       	users: ['Valianta', 'Andrea', 'Slamet', 'Yumna'],
			        //Module set used for strangers and if no user is detected
			        defaultClass: "default",
			        //Set of modules which should be shown for every user
			        everyoneClass: "everyone"
    			}
		},
  		{
			module: 'compliments',
			classes: 'default everyone',
			position: 'lower_third',
			config: {
				remoteFile: 'compliments.json',
				updateInterval: 30000,
				fadeSpeed: 4000,
				/*compliments: {
					day_sunny: [
						'Today is a sunny day',
						'It\'s a beautiful day'
					],
					snow: [
						'Snowball battle!'
					],
					rain: [
						'Don\'t forget your umbrella'
					],
					morning: [
						'Good morning, handsome!',
						'Enjoy your day!',
						'How was your sleep?'
					],
					afternoon: [
						'Hello, beauty!',
						'You look sexy!',
						'Looking good today!'
					],
					evening: [
						'Wow, you look hot!',
						'You look nice!',
						'Hi, sexy!'
					]
				}*/
			}
		},
		/*{
            		module: 'voicecontrol',
			classes: 'default everyone',
            		position: 'bottom_left',
            		config: {
                		models: [
                    			{
                        			keyword: "Play Music",   // keyword
                        			description: "Say 'Play Music' to start playing",
                        			file: "Play Music.pmdl", // trained model file name
                        			message: "PLAY_MUSIC"   // notification message that's broadcast in the MagicMirror app
                    			},
                    			{
                        			keyword: "Stop Music",
                        			description: "Say 'Stop Music' to stop playing",
                        			file: "Stop Music.pmdl",
                        			message: "STOP_MUSIC"
                    			},
					{
                        			keyword: "pause music",
                        			description: "Say 'Pause Music' to pause playing",
                        			file: "pause music.pmdl",
                        			message: "PAUSE_MUSIC"
                    			},
                		]
            		}
        	},*/
		{
			module: 'MMM-NetworkScanner',
			classes: 'default everyone',
			position: 'bottom_left',
			config: {
				// Optional config options
				devices: [
				    //{ ipAddress: "github.com", name: "Github", icon: "globe"},
				    { macAddress: "D0:17:C2:B0:57:10", name: "HOTSPOT", icon: "wifi"},
				    { macAddress: "10:6F:3F:CD:44:15", name: "NAS", icon: "server"},
				    { macAddress: "5c:e0:c5:92:df:24", name: "C-LAPI", icon: "laptop"},
				    { macAddress: "34:02:86:5c:b1:9c", name: "R-LAPI", icon: "laptop"},
				    { macAddress: "2a:10:6e:49:cd:df", name: "J-LAPI", icon: "laptop"},
				    { macAddress: "5c:e0:c5:00:85:5c", name: "J-LAPI", icon: "laptop"},
				    { macAddress: "5c:e0:c5:92:df:24", name: "C-LAPI2", icon: "laptop"},
				    { macAddress: "b0:89:00:cb:0d:7f", name: "C-PHONE", icon: "mobile"},
				    { macAddress: "48:5a:3f:23:10:ae", name: "C-PHONE2", icon: "mobile"},
				    { macAddress: "94:eb:cd:81:74:06", name: "C-BB", icon: "mobile"},
				    { macAddress: "d0:13:fd:54:70:99", name: "N-PHONE", icon: "mobile"},
				    { macAddress: "10:2a:b3:22:29:ea", name: "M-PHONE", icon: "mobile"},
				    { macAddress: "cc:fa:00:b4:6a:20", name: "R-PHONE", icon: "mobile"},
				    { macAddress: "78:4b:87:cf:84:46", name: "J-TAB", icon: "tablet"},
            { macAddress: "e4:b0:21:a3:93:30", name: "Y-TAB", icon: "tablet"},
				    { macAddress: "c4:36:6c:08:13:b6", name: "TV-LG-2", icon: "television"},
				    { macAddress: "b4:43:0d:96:0f:07", name: "SP-WH15", icon: "power-off"},
				    { macAddress: "b4:43:0d:95:fa:3e", name: "SP-WH10", icon: "power-off"},
				    { macAddress: "74:da:38:22:7c:51", name: "SP-WH30", icon: "power-off"},
				    { macAddress: "4e:58:be:55:3f:fa", name: "TVBOX-MX64", icon: "youtube-play"},
				    { macAddress: "94:a1:a2:bc:32:9c", name: "TVBOX-MXPRO", icon: "youtube-play"},
				    { macAddress: "e0:76:d0:27:95:51", name: "TVBOX-i68", icon: "youtube-play"},
				    //{ ipAddress: "192.168.0.132", name: "C-LAPI", icon: "laptop"},
				],

				showUnknown: true,
				showOffline: false,
				keepAlive: 300,
				showLastSeen: false,
				updateInterval: 60, // 1 minute
			}
		},
    {
      module: 'MMM-syslog',
      classes: 'default everyone',
      position: 'bottom_left',
      config: {
        title: 'Log Sistem',
        icons: {
          INFO: "info-circle",
          WARNING: "exclamation-circle",
          ERROR: "exclamation-triangle"
        },
      },
    },
		/*{
			module: 'mmm-systemtemperature',
			position: 'bottom_right', // This can be any of the regions.
			classes: 'small dimmed default everyone', // Add your own styling. Optional.
			config: {
				//prependString: 'systemp: ',
				updateInterval: 30000,
				animationSpeed: 0

			}
		},*/
		{
			module: 'MMM-SystemStats',
			position: 'bottom_right', // This can be any of the regions.
			classes: 'small dimmed default everyone', // Add your own styling. Optional.
      //header: 'System Stats', // This is optional
			config: {
				updateInterval: 60000,
				animationSpeed: 0,
        useSyslog: true,
        //baseURLSyslog: 'http://192.168.0.128:8080/syslog',
        thresholdCPUTemp: 75, // in celcius
			},
		},
	/*	{
            		module: 'dynchart',
			classes: 'default everyone',
            		position: 'top_center',
            		header: 'Dyn.Chart',
            		config: {
                		samples: [
                    			[new Date(2016, 0, 5), 80, 14],
	                    		[new Date(2016, 1, 1), 78.4, 8],
                    			[new Date(2016, 2, 2), 77.2, 7],
                    			[new Date(2016, 3, 5), 76.8, 6],
                    			[new Date(2016, 4, 0), 76.4, 7],
                    			[new Date(2016, 5, 3), 76.4, 6],
                    			[new Date(2016, 6, 5), 75.9, 6],
                    			[new Date(2016, 7, 1), 75.8, 6],
                    			[new Date(2016, 8, 4), 75.9, 7],
                    			[new Date(2016, 9, 6), 76, 6],
                    			[new Date(2016, 10, 2), 76.8, 5],
                    			[new Date(2016, 11, 4), 78, 5],
                		]
            		}
        	},*/
    {
      module: 'MMM-RandomQuranAyah',
			classes: 'default everyone',
      position: 'top_bar',
      config: {
        apiVersion: '1.0',
				showArabic: true,
				showTranslation: true,
				surahArabicName: false,
				translationLang: 'id.indonesian', // complete option at http://api.alquran.cloud/edition
				updateInterval: 600000, // 10mins
				animationSpeed: 2500 // 2.5s
      }
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
