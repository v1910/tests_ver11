
// ACCOMMODATION ------------------------------------------------ 

export function ACCOMMODATIONwords() {
let wordsArr = 	[
	{W:	['camp  (n)', 'camp  (v)', 'camping (n)', 'pitch/set up camp', 'go camping'], 
	 T: 'k\u03F0mp',
	 D: ['if you ___ somewhere, you stay there for a short time and sleep in a tent that you put up', 'we ___ on the festival site', 'at nine o’clock we pitched ___ (put up tents and made the camp ready)'],
	 A: ['if you camp somewhere, you stay there for a short time and sleep in a tent that you put up', 'we camped on the festival site', 'at nine o’clock we pitched camp (put up tents and made the camp ready)']
	},
	{W: ['deserted (a)'],
	 T: 'd\u026A\u0027z\u025C\:(r)t\u026Ad',
	 D: ['if a place is ___, there is no one there at all', 'the beach was ___ so we had it to ourselves', 'the room was ___ and cold'],
	 A: ['if a place is deserted, there is no one there at all', 'the beach was deserted so we had it to ourselves', 'the room was deserted and cold']
	},
	{W: ['dump (n)', 'dump (v)'],
	 T: 'd\u028Cmp',
	 D: ['if you refer to a place as a ___, you mean it is very dirty, untidy, or in a bad condition', 'the place was a bit of a ___', 'he`d ___ all his dirty washing onm the bed'],
	 A: ['if you refer to a place as a dump, you mean it is very dirty, untidy, or in a bad condition', 'the place was a bit of a dump', 'he’d dumped all his dirty washing onm the bed']
	},
	{W: ['filthy (a)', 'filth (n)'],
	 T: '\u0027f\u026Al\u0275i',
	 D: ['if something is ___, it is extremely dirty', 'the whole place was muddy and everything got ___', 'everything was covered in __'],
	 A: ['if something is filthy, it is extremely dirty', 'the whole place was muddy and everything got filthy', 'everything was covered in filth']
	},
	{W: ['flood (v)', 'flood (n)', 'flooding (n)'],
	 T: 'fl\u028Cd',
	 D: ['if an area ___, large amounts of water pour in, for example after there has been a lot of very heavy rain or if a water pipe bursts', 'the whole area was ___', 'the village was cut off by ___'],
	 A: ['if an area floods, large amounts of water pour in, for example after there has been a lot of very heavy rain or if a water pipe bursts', 'the whole area was flooded', 'the village was cut off by floods']
	},
	{W: ['gorgeous (a)', 'absolutely/utterly gorgeous (c)', ' drop dead gorgeous (c)', 'gorgeously (a)'],
	 T: '\u0027g\u0254:(r)d\u0292\u0259s',
	 D: ['someone or something that is ___ is extremely enjoyable, beautiful, or attractive', 'don’t you think George Clooney is just ___?', ' she was young, single, and drop dead ___', 'the rooms are ___ decorated, clean and comfortable'],
	 A: ['someone or something that is gorgeous is extremely enjoyable, beautiful, or attractive', 'don’t you think George Clooney is just gorgeous?', ' she was young, single, and drop dead gorgeous', 'the rooms are gorgeously decorated, clean and comfortable']
	},
	{W: ['muddy (a)', 'mud (n)'],
	 T: '\u0027m\u028Cdi',
	 D: ['if something is ___, it is covered in ___', 'the camp site was really ___', 'the ___ was really deep'],
	 A: ['if something is muddy, it is covered in mud', 'the camp site was really muddy', 'the mud was really deep']
	},
	{W: ['overlook (v)'],
	 T: '\u02CC\u0259\u028Av\u0259(r)\u0027l\u028Ak',
	 D: ['if something ___ a place, it is above the place and has a view over it', 'the hotel room ___ a building site', 'a balcony ___ the beach'],
	 A: ['if something overlooks a place, it is above the place and has a view over it', 'the hotel room overlooked a building site', 'a balcony overlooking the beach']
	},
	{W: ['overwhelming (a)', 'overwhelm (a)', 'overwhelmingly (a)'],
	 T: '\u02CC\u0259\u028Av\u0259(r)\u0027welm\u026A\u03B7',
	 D: ['if something is ___, it has such a strong effect on your feelings that it is difficult for you to describe exactly how you feel', 'the people were so kind, it was quite ___', 'I was ___ by a feeling of sadness'],
	 A: ['if something is overwhelming, it has such a strong effect on your feelings that it is difficult for you to describe exactly how you feel', 'the people were so kind, it was quite overwhelming', 'I was overwhelmed by a feeling of sadness']
	},
	{W: ['soaked (a)', 'soak (v)', 'soaking (a)', 'soaking wet (a)', 'soaked through (c)', ' soaked to the skin (c)'],
	 T: 's\u0259\u028Akt',
	 D: ['if you get ___, you become extremely wet', 'the whole place was flooded and we got absolutely ___', ' after an hour in the rain I was ___ through', 'the rain ___ everyone to the skin'],
	 A: ['if you get soaked, you become extremely wet', 'the whole place was flooded and we got absolutely soaked', ' after an hour in the rain I was soaked through', 'the rain soaked everyone to the skin']
	},
	{W: ['sunset (n)', 'a spectacular/stunning/glorious sunset (c)'],
	 T: '\u0027s\u028Cn\u02CCet',
	 D: ['___ is the time of day when the sun goes out of sight and the sky changes colour as it grows dark', 'just look at that __', ' we went for a walk on the beach at ___'],
	 A: ['sunset is the time of day when the sun goes out of sight and the sky changes colour as it grows dark', 'just look at that sunset', ' we went for a walk on the beach at sunset']
	},
	{W: ['tourist trap (n)'],
	 T: '\u0027t\u028A\u0259r\u026Ast \u02CCtr\u03F0p',
	 D: ['a ___ is a place which attracts lots tourists, is usually very crowded, and charges people more than less popular places', 'it was a bit of a ___', ' try and avoid the ___ on the south coast of the island'],
	 A: ['a tourist trap is a place which attracts lots tourists, is usually very crowded, and charges people more than less popular places', 'it was a bit of a tourist trap', ' try and avoid the tourist traps on the south coast of the island']
	},
	{W: ['unbearably (a)'],
	 T: '\u028Cn\u0027be\u0259r\u0259b(\u0259)li',
	 D: ['__ means in a way that is extremely unpleasant', 'the weather was ___ hot', 'he was ___ arrogant', 'the pain was ___'],
	 A: ['unbearably means in a way that is extremely unpleasant', 'the weather was unbearably hot', 'he was unbearably arrogant', 'the pain was unbearable']
	},
	{W: ['welcoming (a)', 'make someone welcome (c)'],
	 T: '\u0027welk\u0259m\u026A\u03B7',
	 D: ['if someone you do not know is ___, they are very friendly to you when you arrive somewhere', 'the islanders were incredibly ___', 'the owner liked to ___ guests at the door of the hotel'],
	 A: ['if someone you do not know is welcoming, they are very friendly to you when you arrive somewhere', 'the islanders were incredibly welcoming', 'the owner liked to welcome guests at the door of the hotel']
	},
	{W: ['add up (v)', 'heat (v)'],
	 T: '\u03F0d \u0027\u028Cp',
	 D: ['if amounts ___, they make one large amount when they are all put together', 'they’re not a lot individually, but they ___ up', 'how much does it cost to ___ this place?'],
	 A: ['if amounts add up, they make one large amount when they are all put together', 'they’re not a lot individually, but they all add up', 'how much does it cost to heat this place?']
	},
	{W: ['bear (v)'],
	 T: 'be\u0259(r)',
	 D: ['if something doesn’t ___ thinking about, it is so horrible or shocking that you don’t want to think about it ', 'it doesn’t ___ thinking about', ' suppose we’d got on that plane? It doesn’t ___ thinking about'],
	 A: ['if something doesn’t bear thinking about, it is so horrible or shocking that you don’t want to think about it ', 'it doesn’t bear thinking about', ' suppose we’d got on that plane? It doesn’t bear thinking about']
	},
	{W: ['boiler  (v)'],
	 T: 'b\u0254\u026Al\u0259(r)',
	 D: ['a ___ is a device that burns coal, gas, or oil in order to provide heat and hot water for a building', 'the ___ has stopped working again', 'the landlord still hasn’t replaced our ___'],
	 A: ['a boiler is a device that burns coal, gas, or oil in order to provide heat and hot water for a building', 'the boiler has stopped working again', 'the landlord still hasn’t replaced our boiler']
	},
	{W: ['centrally (a)', 'central (a)', 'centre (n)'],
	 T: '\u0027sentr\u0259li',
	 D: ['if something is controlled or managed ___, all its different parts are operated from one place', 'the air-conditioning is controlled ___', 'orders were handed down from the ___ committee'],
	 A: ['if something is controlled or managed centrally, all its different parts are operated from one place', 'the air-conditioning is controlled centrally', 'orders were handed down from the central committee']
	},
	{W: ['confirmation (n)', 'confirm (a)', 'confirmed (a)'],
	 T: '\u02CCk\u0252nf\u0259(r)\u0027me\u026A\u0283(\u0259)n',
	 D: ['a ___ is a letter or email which states officially that something you reserved by phone will be kept for you ', 'did you receive a ___ by email or text?', 'we will ___ the reservation in writing'],
	 A: ['a confirmation is a letter or email which states officially that something you reserved by phone will be kept for you ', 'did you receive a confirmation by email or text?', 'we will confirm the reservation in writing']
	},
	{W: ['heating (n)', 'heat (v)'],
	 T: '\u0027hi:t\u026A\u03B7',
	 D: ['___ is the process of providing warmth to a building', ' we pay £40 a month for the ___', 'how much does it cost to ___ this place?'],
	 A: ['heating is the process of providing warmth to a building', ' we pay £40 a month for the heating', 'how much does it cost to heat this place?']
	},
	{W: ['landlord (n)'],
	 T: '\u0027l\u03F0n(d)\u02CCl\u0254:(r)d',
	 D: ['a ___ is a man who owns a house or flat that other people pay to live in', 'the ___ wanted to put up the rent', 'our ___ promised to get the boiler repaired'],
	 A: ['a landlord is a man who owns a house or flat that other people pay to live in', 'the landlord wanted to put up the rent', 'our landlord promised to get the boiler repaired']
	},
	{W: ['poisoning (n)', 'poison (v)', 'poison (a)', 'poisonous (a)'],
	 T: '\u0027\p\u0254\u026Az(\u0259)n\u026A\u03B7',
	 D: ['___ is illness or death caused by someone eating, drinking, or breathing something poisonous', 'there was a risk of carbon monoxide ___', 'we were worried that we had been ___', 'a ___ snake'],
	 A: ['poisoning is illness or death caused by someone eating, drinking, or breathing something poisonous', 'there was a risk of carbon monoxide poisoning', 'we were worried that we had been poisoned', 'a poisonous snake']
	},
	{W: ['procedure (n)', 'follow a procedure (c)', 'adopt a procedure (c)', 'normal/usual/standard procedure (c)'],
	 T: 'pr\u0259\u0027si:d\u0292\u0259(r)',
	 D: ['a ___ is a set of actions that you regularly do in the same way in order to do ___ correctly', 'our normal ___ is to confirm bookings by email', 'the company`s standard ___ for taking on new staff'],
	 A: ['a procedure is a set of actions that you regularly do in the same way in order to do something correctly', 'our normal procedure is to confirm bookings by email', 'the company`s standard procedures for taking on new staff']
	},
	{W: ['put off (v)', ' put off doing something (c)'],
	 T: 'p\u028At\u0027\u0252f',
	 D: ['to __ something __ means to delay it until a later time', 'they promised to fix it, but they keep ___ it ___', ' don`t ___ till tomorrow what you can do today'],
	 A: ['to put something off means to delay it until a later time', 'they promised to fix it, but they keep putting it off', ' don`t put off till tomorrow what you can do today']
	},
	{W: ['react  (v)', 'reaction (n)'],
	 T: 'ri\u0027\u03F0kt',
	 D: ['when you ___, you do something because of something else that has just happened', 'the police ___ quickly and closed the roads', 'his ___ to the news was to burst into tears'],
	 A: ['when you react, you do something because of something else that has just happened', 'the police reacted quickly and closed the roads', 'his reaction to the news was to burst into tears ']
	},
	{W: ['reservation (n)', 'reserve (v)', 'reserved (a)', 'make a reservation (c)', 'cancel a reservation (c)', 'confirm a reservation (c)'],
	 T: '\u02CCez\u0259(r)\u0027ve\u026A\u0283(\u0259)n',
	 D: ['if you make a ___, you ask a hotel to keep a room for you, a restaurant to keep a table for you, etc.', 'we have no record of any ___', 'I`d like to ___ a table for tomorrow evening', ' I`m sorry, this seat is ___'],
	 A: ['if you make a reservation, you ask a hotel to keep a room for you, a restaurant to keep a table for you, etc.', 'we have no record of any reservation', 'I`d like to reserve a table for tomorrow evening', ' I`m sorry, this seat is reserved']
	},
	{W: ['sarcastic (a)', 'sarcasm (a)', 'sarcastically (a)'],
	 T: 's\u0251\(r)\u0027k\u03F0st\u026Ak',
	 D: ['if someone is ___, they say something that is the opposite of what they mean in order to mock someone or to be funny', 'I think he’s being ___', 'there was a touch of ___ in his voice', ' he ___ asked if I felt all right'],
	 A: ['if someone is sarcastic, they say something that is the opposite of what they mean in order to mock someone or to be funny', 'I think he’s being sarcastic', 'there was a touch of sarcasm in his voice', ' he sarcastically asked if I felt all right']
	},
	{W: ['state (n)'],
	 T: 'ste\u026At',
	 D: ['the ___ of something is the condition that it is in', 'look at the ___ of the place. It`s filthy! ', ' he’s in no fit ___ to go to work (he’s too ill)'],
	 A: ['the state of something is the condition that it is in', 'look at the state of the place. It`s filthy! ', ' he’s in no fit state to go to work (he’s too ill)']
	},
	{W: ['suffocate (v)', 'suffocation (n)'],
	 T: '\u0027s\u028Cf\u0259ke\u026At',
	 D: ['if someone ___, they die because they are unable to breathe', 'you could’ve ___ while you were sleeping', 'she died from ___'],
	 A: ['if someone suffocates, they die because they are unable to breathe', 'you could’ve suffocated while you were sleeping', 'she died from suffocation']
	},
	{W: ['acknowledge (v)', 'acknowledgement  (n)', 'acknowledge that (c)'],
	 T: '\u0259k\u0027n\u0252l\u026Ad\u0292',
	 D: ['to ___ something means to accept that it is true', 'our cultural differences were ___ and accepted', 'I want an ___ that mistakes were made'],
	 A: ['to acknowledge something means to accept that it is true', 'our cultural differences were acknowledged and accepted', 'I want an acknowledgement that mistakes were made']
	},
	{W: ['cycle (n)'],
	 T: '\u0027sa\u026Ak(\u0259)l',
	 D: ['a ___ is a complete set of activities that are repeated regularly in the same order', 'not everyone finishes the complete ___', 'at this point the ___ repeats itself'],
	 A: ['a cycle is a complete set of activities that are repeated regularly in the same order', 'not everyone finishes the complete cycle', 'at this point the cycle repeats itself']
	},
	{W: ['dash  (v)', 'dash  (n)', 'make a dash (for somewhere) (c)'],
	 T: 'd\u03F0\u0283',
	 D: ['if you ___ somewhere, you go there in a hurry because you do not want to be late and you do not have much time to get there', 'I must ___. I have a lesson in ten minutes', 'we could make a ___ for the car'],
	 A: ['if you dash somewhere, you go there in a hurry because you do not want to be late and you do not have much time to get there', 'I must dash. I have a lesson in ten minutes', 'we could make a dash for the car']
	},
	{W: ['distinct (a)', 'distinctly (a)'],
	 T: 'd\u026A\u0027st\u026a\u03b7kt',
	 D: ['something that is ___ is clearly different from other things of the same sort', 'there are four ___ phases that everyone goes through', 'this puzzle has two ___ different solutions'],
	 A: ['something that is distinct is clearly different from other things of the same sort', 'there are four distinct phases that everyone goes through', 'this puzzle has two distinctly different solutions']
	},
	{W: ['existence (n)', 'exist (v)', 'existing (a)', 'non-existent (o)', 'be in existence (c)'],
	 T: '\u026A\g\u0027z\u026ast(\u0259)ns',
	 D: ['the ___ of something is the fact that it exists in the world and is a real thing', 'A person’s ___ is their life, especially when talking about what sort of life they have', 'think critically about your previous ___', 'for weeks we ___ on baked beans and bread', ' changing the ___ system is difficult'],
	 A: ['the existence of something is the fact that it exists in the world and is a real thing', 'A person’s existence is their life, especially when talking about what sort of life they have', 'think critically about your previous existence', 'for weeks we existed on baked beans and bread', ' changing the existing system is difficult']
	},
	{W: ['find your feet (p)'],
	 T: '\u026A\g\u0027z\u026ast(\u0259)ns',
	 D: ['if you ___, you gradually get to know about things in a new situation', 'I`ve arrived in Hong Kong and I`m gradually ____', 'once you`ve ___ you`ll wonder what you`d been worrying about'],
	 A: ['if you find your feet, you gradually get to know about things in a new situation', 'I`ve arrived in Hong Kong and I`m gradually finding my feet', 'once you`ve found your feet you`ll wonder what you`d been worrying about']
	},
	{W: ['frustration (n)', 'frustrate (v)', 'frustrating (a)', 'frustrated'],
	 T: 'fr\u028cu0027stre\u026a\u0283(\u0259)n',
	 D: ['___ is the feeling you have when there are problems which you cannot solve because you cannot control events', 'he screamed out loud in pure ___', 'it really ___ me that I can`t drive with a broken arm', 'the application process was highly ___ '],
	 A: ['frustration is the feeling you have when there are problems which you cannot solve because you cannot control events', 'he screamed out loud in pure frustration', 'it really frustrates me that I can`t drive with a broken arm', 'the application process was highly frustrating ']
	},
	{W: ['gaze (v)', 'gaze (n)'],
	 T: 'ge\u026a\z',
	 D: ['if you ___ at something, you look at it for a long time', 'I sat there ___ out of the window', 'my ___ was fixed on the letter'],
	 A: ['if you gaze at something, you look at it for a long time', 'I sat there gazing out of the window', 'my gaze was fixed on the letter']
	},
	{W: ['get over (v)'],
	 T: 'ge\u026a\z',
	 D: ['if you ___ an illness or other problem, you become better again and things are back to normal', 'it took a few days to ___ my jet lag', 'he hasn`t ___ the shock yet'],
	 A: ['if you get over an illness or other problem, you become better again and things are back to normal', 'it took a few days to get over my jet lag', 'he hasn`t got over the shock yet']
	},
	{W: ['hang  (v)'],
	 T: 'hæŋ',
	 D: ['if you say that someone`s mouth was ___ open, you mean the look on their face showed that they were extremely surprised or impressed by something', 'her mouth ___ open in amazement', 'I sat gazing out of the window with my mouth ___ open'],
	 A: ['if you say that someone`s mouth was hanging open, you mean the look on their face showed that they were extremely surprised or impressed by something', ' her mouth hung open in amazement', 'I sat gazing out of the window with my mouth hanging open']
	},
	{W: ['heritage (n)', 'a rich heritage (c)', ' a national/cultural heritage (c)', 'preserve/protect one’s heritage (c)'],
	 T: '\u0027her\u026at\u026ad\u0292',
	 D: ['a country’s ___ is its cultural traditions that have developed over a long time, its important and historical buildings, and its sense of its own history', 'people should appreciate their own ___', ' it’s important to protect our national ___'],
	 A: ['a country’s heritage is its cultural traditions that have developed over a long time, its important and historical buildings, and its sense of its own history', 'people should appreciate their own heritage', ' it’s important to protect our national heritage']
	},
	{W: ['highlight (v)', 'highlight issues/concerns/areas  (c)'],
	 T: '\u0027ha\u026a\\u02CCla\u026at',
	 D: ['if you ___ something, you talk or write about it in a way that draws special attention to it because you think it is an important part of what you are saying', 'psychologists ___ several stages that nearly everyone goes through', 'the minister was right to ___ the issue'],
	 A: ['if you highlight something, you talk or write about it in a way that draws special attention to it because you think it is an important part of what you are saying', 'psychologists highlight several stages that nearly everyone goes through', 'the minister was right to highlight the issue']
	},
	{W: ['horn (n)'],
	 T: 'h\u0254:(r)n',
	 D: ['a ___ is a device that makes a loud noise as a warning, for example in a car', 'drivers are constantly sounding their ___ in the street', 'all cabins contain radios and alarm ___'],
	 A: ['a horn is a device that makes a loud noise as a warning, for example in a car', 'drivers are constantly sounding their horns in the street', 'all cabins contain radios and alarm horns']
	},
	{W: ['integration (n)', 'integration into something (c)', 'integrate (v)'],
	 T: '\u02cc\u026ant\u026a\u0027gre\u026a\u0283(\u0259)n',
	 D: ['___ is the process in which people gradually become part of a new society or group ', '___ into a new culture', 'they soon became ___ into the local community'],
	 A: ['integration is the process in which people gradually become part of a new society or group ', 'integration into a new culture', 'they soon became integrated into the local community']
	},
	{W: ['joy (n)', 'joyful (a)', 'joyfully (a)', 'joyous (a)'],
	 T: 'd\u0292\u0254\u026a',
	 D: ['__ is great happiness', 'I never feel ___ about anything any more', 'staying there was a unique and ___ experience'],
	 A: ['joy is great happiness', 'I never feel joy about anything any more', 'staying there was a unique and joyful experience']
	},
	{W: ['laundry (n)', 'do the laundry (c)', 'launder  (v)'],
	 T: '\u0027l\u0254\:ndri',
	 D: ['___ is clothes, sheets, towels etc. that have been used and need to be washed, or that have just been washed', 'I have my ___ done once a week', 'freshly ___ shirts | launder your work clothes separately from your bedding'],
	 A: ['laundry is clothes, sheets, towels etc. that have been used and need to be washed, or that have just been washed', 'I have my laundry done once a week', 'freshly laundered shirts | launder your work clothes separately from your bedding']
	},
	{W: ['maid  (n)'],
	 T: 'me\u026ad',
	 D: ['a ___ is a woman who works for a hotel or for a private family, doing jobs like cleaning and washing clothes', 'a ___ comes in to sort out my flat every day'],
	 A: ['a maid is a woman who works for a hotel or for a private family, doing jobs like cleaning and washing clothes', 'a maid comes in to sort out my flat every day']
	},
	{W: ['mix (v)', 'mixer (n)'],
	 T: 'm\u026aks',
	 D: ['to ___ with people means to meet them socially and talk to them', 'you might refuse to ___ with people you used to know', 'Jack was a good ___ and put everyone at their ease'],
	 A: ['to mix with people means to meet them socially and talk to them', 'you might refuse to mix with people you used to know', 'Jack was a good mixer and put everyone at their ease']
	},
	{W: ['moan  (n)', 'moan  (v)', ' have a moan (c)'],
	 T: 'm\u0259\u028an',
	 D: ['a ___ is a complaint about something', 'we meet up and have a ___ about things', 'she’s always ___ about the buses'],
	 A: ['a moan is a complaint about something', 'we meet up and have a moan about things', 'she’s always moaning about the buses']
	},
	{W: ['party (v)', 'party (n)', ' throw a party (c)', ' a birthday party (c)', 'a dinner party (c)', ' a street party (c)', ' a house-warming party  (c)'],
	 T: '\u0027\u0251:(r)t\u026a',
	 D: ['to ___ means to have a good time by being with friends, and doing things like drinking or dancing or talking', 'I spent most of my time meeting new people and ___', 'throw a party', 'a birthday ___'],
	 A: ['to party means to have a good time by being with friends, and doing things like drinking or dancing or talking', 'I spent most of my time meeting new people and partying', 'throw a party', 'a birthday party']
	},
	{W: ['phase (n)', 'phase (v)', ' throw a party (c)', 'phase something in (c)', ' phase something out  (c)'],
	 T: 'fe\u026az',
	 D: ['a ___ is one stage in the development of something', 'there are four distinct ___ that everyone goes through', 'new systems will be ___ in early next year (gradually introduced)'],
	 A: ['a phase is one stage in the development of something', 'there are four distinct phases that everyone goes through', 'new systems will be phased in early next year (gradually introduced)']
	},
	{W: ['pride  (n)', 'pride yourself  (v)', ' proud (a)', 'proudly (a)', 'take pride in (doing) something (c)'],
	 T: 'pra\u026ad',
	 D: ['___ is a feeling of pleasure and satisfaction you get when you do something well', 'people take ___ in what they do here', 'he ___ himself on the quality of his work'],
	 A: ['pride is a feeling of pleasure and satisfaction you get when you do something well', 'people take pride in what they do here', 'he prides himself on the quality of his work']
	},
	{W: ['resistance  (n)', 'resistance to something (c)',  'resistant  (a)', ' resist (v)', ' be resistant to something (c)'],
	 T: 'r\u026a\u0027z\u026ast(\u0259)ns',
	 D: ['___ to something is a refusal to accept it willingly', '___ to a new culture', 'the employees had been very ___ to change', ' she ___ the pressure to resign'],
	 A: ['resistance to something is a refusal to accept it willingly', 'resistance to a new culture', 'the employees had been very resistant to change', ' she resisted the pressure to resign']
	},
	{W: ['root (n)', 'rooted  (a)',  'go back/return to your roots (c)'],
	 T: 'r\u026a\u0027z\u026ast(\u0259)ns',
	 D: ['the ___ of a plant are the parts under the ground that send food up to the plant above the ground. A person`s ___ are the place, culture, and family that they come from', 'some people cut themselves off from their ___ ', 'these ceremonies are ___ in centuries-old tradition'],
	 A: ['the roots of a plant are the parts under the ground that send food up to the plant above the ground. A person`s roots are the place, culture, and family that they come from', 'some people cut themselves off from their roots ', 'these ceremonies are rooted in centuries-old tradition']
	},
	{W: ['routine  (n)', 'routine  (a)', 'routinely  (a)', 'a daily routine (c)'],
	 T: 'ru:\u0027ti:n',
	 D: ['a ___ is a set pattern of actions that happen regularly and often in the same order', 'things gradually settled into a ___', 'a ___ inspection (one that happens regularly)'],
	 A: ['a routine is a set pattern of actions that happen regularly and often in the same order', 'things gradually settled into a routine', 'a routine inspection (one that happens regularly)']
	},
	{W: ['slave (v)', 'slave over something (c)', 'slave away at something  (c)'],
	 T: 'sle\u026av',
	 D: ['if you ___ or ___ away, you work very hard for a long time', 'I`ve been ___ away at my desk', ' after ___ over the novel for 10 years, he finally gave up'],
	 A: ['if you slave or slave away, you work very hard for a long time', 'I`ve been slaving away at my desk', ' after slaving over the novel for 10 years, he finally gave up']
	},
	{W: ['smoothly (a)', ' go/run smoothly  (c)', 'smooth (a)'],
	 T: '\u0027sm:\u00f0l\u026a',
	 D: ['if something happens ___, everything works well and successfully and there are no problems ', 'all the arrangements went very ___', 'she made a ___ transition from school to university'],
	 A: ['if something happens smoothly, everything works well and successfully and there are no problems ', 'all the arrangements went very smoothly', 'she made a smooth transition from school to university']
	},
	{W: ['sound  (a)'],
	 T: 'sa\u028and',
	 D: ['to ___ an instrument means to make it produce its usual noise', 'drivers are constantly ___ their horns in the street', 'the referee ___ his whistle for the start of the match'],
	 A: ['to sound an instrument means to make it produce its usual noise', 'drivers are constantly sounding their horns in the street', 'the referee sounded his whistle for the start of the match']
	},
	{W: ['straight   (a)', 'straight (a)'],
	 T: 'stre\u0259t',
	 D: ['a ___ answer is a clear and honest reply to a serious question', 'I couldn’t get a ___ answer out of anyone', 'I’ll tell you ___: I don’t want to work for you'],
	 A: ['a straight answer is a clear and honest reply to a serious question', 'I couldn’t get a straight answer out of anyone', 'I’ll tell you straight: I don’t want to work for you']
	},
	{W: ['swing (n)', 'swing (v)'],
	 T: 'sw\u026a\u03b7',
	 D: ['if you or your opinions ___, you change your ideas about something', 'some people ___ from one extreme to the other', 'she suffers from mood ___ | a big swing in public opinion'],
	 A: ['if you or your opinions swing, you change your ideas about something', 'some people swing from one extreme to the other', 'she suffers from mood swings | a big swing in public opinion']
	},
	{W: ['take the mickey (p)', ' take the mickey out of someone (c)'],
	 T: '\u02ccte\u026ak\u00f0\u0259\u0027m\u026aki',
	 D: ['if someone says you are ___, they are accusing you of making fun of them by deceiving them or telling lies', 'they ____ out of him because of his accent', 'what did you say? Are you ____?'],
	 A: ['if someone says you are taking the mickey, they are accusing you of making fun of them by deceiving them or telling lies', 'they took the mickey out of him because of his accent', 'what did you say? Are you taking the mickey?']
	},
	{W: ['transformation (n)', 'transform (v)', 'the transformation of something (into something) (c)', ' a complete/total transformation (c)', ' undergo a transformation (c)'],
	 T: '\u02cctr\u03f0nsf\u0259(r)\u0027me\u026a\u0283(\u0259)n',
	 D: ['a ___ is a complete change', 'she proposed a radical ___ of the health service', 'the whole house has been ___'],
	 A: ['a transformation is a complete change', 'she proposed a radical transformation of the health service', 'the whole house has been transformed']
	},
	{W: ['undergo (v)'],
	 T: '\u02CC\u028cnd\u0259(r)\u0027g\u0259\u028a',
	 D: ['if you ___ something, you experience it', 'we’re ___ a big change in the organisation', 'the building has ___ some renovations'],
	 A: ['if you undergo something, you experience it', 'we’re undergoing a big change in the organisation', 'the building has undergone some renovations']
	},
	{W: ['wild (a)'],
	 T: 'wa\u026ald',
	 D: ['if things are ___, or if you have a ___ time, you do a lot of enjoyable and exciting things in a way that is uncontrolled', 'it’s been a ___ few weeks', ' the party was ___'],
	 A: ['if things are wild, or if you have a wild time, you do a lot of enjoyable and exciting things in a way that is uncontrolled', 'it’s been a wild few weeks', ' the party was wild']
	}									
]
 
return wordsArr;

}

