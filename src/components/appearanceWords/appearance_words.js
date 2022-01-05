// APPEARANCE ------------------------------------------------ 

export function APPEARANCEwords() {
let wordsArr = 	[
	{W:	['straight  (a)'], 
	 T: 'stre\u026at',
	 D: ['continuing in one direction without bending or curving','She has ___ blonde hair.', 'Go ___ along this road and turn left at the traffic lights.'],
	 A: ['continuing in one direction without bending or curving','She has straight blonde hair.', 'Go straight along this road and turn left at the traffic lights.']
	},
	{W: ['spiky (a)'],
	 T: '\u00027spa\u026a\u002cck\u026A',
	 D: ['covered with spikes or having that appearance', '___ hair', 'Small __ crystals were observed growing on the base of the tank about 30 min later'],
	 A: ['covered with spikes or having that appearance', 'spiky hair', 'Small spiky crystals were observed growing on the base of the tank about 30 min later']
	},
	{W: ['wavy (a)'],
	 T: '\u00027we\u026a\vi',
	 D: ['having a series of curves', 'Sarah has ___ blond hair', 'The meter was calibrated by temporarily affixing it to the flat floor of the tunnel ahead of the ___ wall'],
	 A: ['having a series of curves', 'Sarah has wavy blond hair', 'The meter was calibrated by temporarily affixing it to the flat floor of the tunnel ahead of the wavy wall']
	},
	{W: ['frizzy (a)'],
	 T: '\u0027fr\u026a\z\u02cci',
	 D: ['(of hair) very curly and not smooth or shiny', 'My hair goes all ___ if it gets rained on', 'The profile highlights a bulging nose, `weak` chin and ___ hair.'],
	 A: ['(of hair) very curly and not smooth or shiny', 'My hair goes all frizzy if it gets rained on', 'The profile highlights a bulging nose, `weak` chin and frizzy hair.']
	},
	{W: ['earring (n)'],
	 T: '\u0027\u026a\\u00259\u02ccr\u026a\u03b7',
	 D: ['a piece of jewellery, usually one of a pair, worn in a hole in the ear or fastened to the ear by a clip', 'I`ve found one ___ - do you know where the other one is?'],
	 A: ['a piece of jewellery, usually one of a pair, worn in a hole in the ear or fastened to the ear by a clip', 'I`ve found one earring - do you know where the other one is?']
	},
	{W: ['hair clip (c)'],
	 T: '\u0027\u026a\\u00259\u02ccr\u026a\u03b7',
	 D: ['a small object usually made of metal or plastic, used for fastening hair together', 'She has ___ in her hair'],
	 A: ['a small object usually made of metal or plastic, used for fastening hair together', 'She has hair clip in her hair']
	},
	{W: ['nasty (a)'],
	 T: '\u0027\n\u0251:sti',
	 D: ['bad or very unpleasant', 'There`s a ___ smell in here.','He had a ___ cut above the eye.'],
	 A: ['bad or very unpleasant', 'There`s a nasty smell in here.','He had a nasty cut above the eye.']
	},
	{W: ['rambling (a)'],
	 T: '\u0027\r\u03f0m\u02ccbl\u026a\u03b7',
	 D: ['too long and confused', 'a long ___ speech','a ___ rose'],
	 A: ['too long and confused', 'a long rambling speech','a rambling rose']
	},
	{W: ['even-handed (a)'],
	 T: '\u02cc\i:v\u0259n\u0027h\u03f0n\u02ccd\u026ad',
	 D: ['treating everyone fairly and equally', 'Several broadcasters have been criticized for failing to give ___ treatment to all the parties during the election campaign'],
	 A: ['treating everyone fairly and equally', 'Several broadcasters have been criticized for failing to give even-handed treatment to all the parties during the election campaign']
	},
	{W: ['complexion (n)'],
	 T: 'k\u0259m\u0027plek\u0283\u0259n',
	 D: ['the natural appearance of the skin on a person`s face, especially its colour or quality', 'a dark/fair ___','a healthy/clear/spotty ___'],
	 A: ['the natural appearance of the skin on a person`s face, especially its colour or quality', 'a dark/fair complexion','a healthy/clear/spotty complexion']
	},
	{W: ['appearance (n)'],
	 T: '\u0259`p\u026a\u0259r(\u0259)n(t)s',
	 D: ['an occasion when someone appears in public', 'It was his first ___ on television/television appearance as president','He made his first stage/TV ___ at the age of six.'],
	 A: ['an occasion when someone appears in public', 'It was his first appearance on television/television appearance as president','He made his first stage/TV appearance at the age of six.']
	},
	{W: ['thin (a)'],
	 T: '\u0275\u026a\u03b7',
	 D: ['having a small distance between two opposite sides', 'a __ book','There was a ___ layer of oil on the surface of the wate'],
	 A: ['having a small distance between two opposite sides', 'a thin book','There was a thin layer of oil on the surface of the wate']
	},
	{W: ['fat (a)'],
	 T: 'f\u03f0\t',
	 D: ['having a lot of flesh on the body', 'Like most women, she thinks she`s ___.','I hate my ___ thighs.'],
	 A: ['having a lot of flesh on the body', 'Like most women, she thinks she`s fat.','I hate my fat thighs.']
	},
	{W: ['tall (a)'],
	 T: 't\u0254:l',
	 D: ['of more than average height, or of a particular height', 'He`s six feet ___','My view was blocked by a ___ man in front of me.'],
	 A: ['of more than average height, or of a particular height', 'He`s six feet tall','My view was blocked by a tall man in front of me.']
	},
	{W: ['short (a)'],
	 T: '\u0283\u0254:t',
	 D: ['small in length, distance, or height', 'Her hair is much ___ than it used to be.','It`s only a ___ walk to the station.'],
	 A: ['small in length, distance, or height', 'Her hair is much shorter than it used to be.','It`s only a short walk to the station.']
	},
	{W: ['weak (a)'],
	 T: 'wi:k',
	 D: ['not physically strong', 'It`s not surprising you feel ___ if you haven`t eaten properly for days','He was a ___ king surrounded by corrupt advisers'],
	 A: ['not physically strong', 'It`s not surprising you feel weak if you haven`t eaten properly for days','He was a weak king surrounded by corrupt advisers']
	},
	{W: ['strong (a)'],
	 T: 'str\u0254\u03b7',
	 D: ['powerful; having or using great force or control', 'She must be very ___ to carry such a weight on her back','___ winds are forecast in the area for the next few days'],
	 A: ['powerful; having or using great force or control', 'She must be very strong to carry such a weight on her back','Strong winds are forecast in the area for the next few days']
	},
	{W: ['slim (a)'],
	 T: 'sl\u026am',
	 D: ['(especially of people) attractively thin', 'She has a lovely ___ figure.','She was of ___ build with short, dark hair.'],
	 A: ['(especially of people) attractively thin', 'She has a lovely slim figure.','She was of slim build with short, dark hair.']
	},
	{W: ['plump (a)'],
	 T: 'pl\u028cmp',
	 D: ['having a pleasantly soft, rounded body or shape', 'a nice ___ chicken','a child with ___ rosy cheeks'],
	 A: ['having a pleasantly soft, rounded body or shape', 'a nice plump chicken','a child with plump rosy cheeks']
	},
	{W: ['skinny (a)'],
	 T: '\u0027sk\u026an\u02cci',
	 D: ['very thin', 'You should eat more - you`re too ___.','a ___ latte'],
	 A: ['very thin', 'You should eat more - you`re too skinny.','a skinny latte']
	},
	{W: ['old (a)'],
	 T: '\u0259\u028ad',
	 D: ['having lived or existed for many years', 'an ___ man','I was shocked by how ___ he looked.'],
	 A: ['having lived or existed for many years', 'an old man','I was shocked by how old he looked.']
	},
	{W: ['young (a)'],
	 T: 'j\u028c\u03b7',
	 D: ['having lived or existed for only a short time and not old', 'His girlfriend`s very ___.','The trees in this part of the forest are still fairly ___.'],
	 A: ['having lived or existed for only a short time and not old', 'His girlfriend`s very young.','The trees in this part of the forest are still fairly young.']
	},
	{W: ['hairy (a)'],
	 T: 'he\u0259\u02ccri',
	 D: ['having a lot of hair, especially on parts of the body other than the head', '___ armpits/legs','I like going on the back of Pedro`s motorbike, though it can get a bit ___.'],
	 A: ['having a lot of hair, especially on parts of the body other than the head', 'hairy armpits/legs','I like going on the back of Pedro`s motorbike, though it can get a bit hairy.']
	},
	{W: ['bald (a)'],
	 T: 'b\u0254ld',
	 D: ['with little or no hair on the head', 'At 20 he was already going ___.','Going ___ is just a fact of life.'],
	 A: ['with little or no hair on the head', 'At 20 he was already going bald.','Going bald is just a fact of life.']
	},
	{W: ['curly (a)'],
	 T: '\u0027k\u025cli',
	 D: ['having curls or a curved shape', 'He has blond, ___ hair.','I want those ___ fries for lunch.'],
	 A: ['having curls or a curved shape', 'He has blond, curly hair.','I want those curly fries for lunch.']
	},
	{W: ['pretty (a)'],
	 T: '\u0027pr\u026at\u02cci',
	 D: ['quite, but not extremely', 'The house has four bedrooms, so it`s ___ big.','I`ve got a ___ good idea of how to get there','She`s got such a ___ daughter.'],
	 A: ['quite, but not extremely', 'The house has four bedrooms, so it`s pretty big.','I`ve got a pretty good idea of how to get there','She`s got such a pretty daughter.']
	},
	{W: ['handsome (a)'],
	 T: '\u0027h\u03f0n\u02ccs\u0259m',
	 D: ['A ___ man is physically attractive in a traditional, male way', 'Her dream is to be whisked off her feet by a tall, dark, ___ stranger.','a ___ woman in her fifties'],
	 A: ['A handsome man is physically attractive in a traditional, male way', 'Her dream is to be whisked off her feet by a tall, dark, handsome stranger.','a handsome woman in her fifties']
	},
	{W: ['ugly (a)'],
	 T: '\u0027\u028cg\u02ccli',
	 D: ['unpleasant to look at; not attractiv','I think a lot of modern architecture is very ___.', 'I feel really fat and ___ today.','here were ___ scenes outside the stadium'],
	 A: ['unpleasant to look at; not attractiv','I think a lot of modern architecture is very ugly.', 'I feel really fat and ugly today.','here were ugly scenes outside the stadium']
	},
	{W: ['character (a)'],
	 T: '\u0027k\u03f0r\u02cc\u0259kt\u0259',
	 D: ['the particular combination of qualities in a person or place that makes them different from others', 'Politeness is traditionally part of the British ___.','As people grow older, their faces acquire more ___.'],
	 A: ['the particular combination of qualities in a person or place that makes them different from others', 'Politeness is traditionally part of the British character.','As people grow older, their faces acquire more character.']
	},
	{W: ['clever (a)'],
	 T: '\u0027klev\u0259',
	 D: ['having or showing the ability to learn and understand things quickly and easily','Judy has never been very ___, but she tries hard.', 'My mother is very ___ with her hands','That`s enough ___ talk, young lady.'],
	 A: ['having or showing the ability to learn and understand things quickly and easily','Judy has never been very clever, but she tries hard.', 'My mother is very clever with her hands','That`s enough clever talk, young lady.']
	},
	{W: ['talented (a)'],
	 T: '\u0027t\u03f0l\u0259nt\u026ad',
	 D: ['with talent; able or skilful', 'a ___ golfer/pianist','Peter is an exceptionally ___ lawyer'],
	 A: ['with talent; able or skilful', 'a talented golfer/pianist','Peter is an exceptionally talented lawyer']
	},
	{W: ['active (a)'],
	 T: '\u0027\u03f0kt\u026av',
	 D: ['busy with a particular activity', 'You have to try to keep ___ as you grow older','It`s good for old people to stay ___ if they can'],
	 A: ['busy with a particular activity', 'You have to try to keep active as you grow older','It`s good for old people to stay active if they can']
	},
	{W: ['creative (a)', 'creative (n)'],
	 T: 'kr\u026a\u0027\e\u026at\u026av',
	 D: ['producing or using original and unusual ideas', 'a ___ person/artist/designer/programmer','Several leading ___ are involved in the advertising campaign'],
	 A: ['producing or using original and unusual ideas', 'a creative person/artist/designer/programmer','Several leading creatives are involved in the advertising campaign']
	},
	{W: ['energetic (a)'],
	 T: '\u02ccen\u0259\u0027d\u0292et\u026ak',
	 D: ['having or involving a lot of energy', 'an ___ young woman','The president was an ___ campaigner'],
	 A: ['having or involving a lot of energy', 'an energetic young woman','The president was an energetic campaigner']
	},
	{W: ['stupid (a)', 'stupid (n)'],
	 T: '\u0027stju:\u02ccp\u026ad',
	 D: ['silly or unwise; showing poor judgment or little intelligence', 'She was really ___ to quit her job like that','Don`t lock it, ___!'],
	 A: ['silly or unwise; showing poor judgment or little intelligence', 'She was really stupid to quit her job like that','Don`t lock it, stupid!']
	},
	{W: ['considerate (a)'],
	 T: '\u0027stju:\u02ccp\u026ad',
	 D: ['kind and helpful', 'It wasn`t very ___ of you to drink all the milk.','He is always a kind and ___ host.'],
	 A: ['kind and helpful', 'It wasn`t very considerate of you to drink all the milk.','He is always a kind and considerate host.']
	},
	{W: ['cruel (a)'],
	 T: '\u0027kru\u02cc\u0259l',
	 D: ['extremely unkind and unpleasant and causing pain to people or animals intentionally', 'Children can be very ___ to each other','Her classmates made some ___ remarks'],
	 A: ['extremely unkind and unpleasant and causing pain to people or animals intentionally', 'Children can be very cruel to each other','Her classmates made some cruel remarks']
	},
	{W: ['unkind (a)'],
	 T: '\u028cn\u0027k\u0251\u026and',
	 D: ['not treating someone very well; not considering someone`s feelingly', 'It was ___ of you to take his toy away.','He`s made some very ___ remarks about his employer lately.'],
	 A: ['not treating someone very well; not considering someone`s feelingly', 'It was unkind of you to take his toy away.','He`s made some very unkind remarks about his employer lately.']
	},
	{W: ['polite (a)'],
	 T: 'p\u0259\u0027la\u026at',
	 D: ['behaving in a way that is socially correct and shows understanding of and care for other people`s feelings', 'I`m afraid I wasn`t very ___ to her.','She was too ___ to point out my mistake.'],
	 A: ['behaving in a way that is socially correct and shows understanding of and care for other people`s feelings', 'I`m afraid I wasn`t very polite to her.','She was too polite to point out my mistake.']
	},
	{W: ['rude (a)'],
	 T: 'ru:d',
	 D: ['not polite; offensive or embarrassing', 'It`s ___ not to say `Thank you` when you are given something','We had a ___ awakening (= unpleasant shock) when we saw our phone bill'],
	 A: ['not polite; offensive or embarrassing', 'It`s rude not to say `Thank you` when you are given something','We had a rude awakening (= unpleasant shock) when we saw our phone bill']
	},
	{W: ['kind (a)', 'kind (n)'],
	 T: 'k\u0251\u026and',
	 D: ['generous, helpful, and thinking about other people`s feelings','She`s a very ___ and thoughtful person.', 'Today`s vehicles use two ___ of fuel - petrol and diesel.'],
	 A: ['generous, helpful, and thinking about other people`s feelings','She`s a very kind and thoughtful person.', 'Today`s vehicles use two kinds of fuel - petrol and diesel.']
	},
	{W: ['tactful (a)'],
	 T: '\u0027\t\u023f0kt\u02ccf\u0259l',
	 D: ['careful not to say or do anything that could upset someone','They are ___ and attend to the face wants of their friends and themselves', 'It is only after patient and ___ probing that reliable information can be obtained.'],
	 A: ['careful not to say or do anything that could upset someone','They are tactful and attend to the face wants of their friends and themselves', 'It is only after patient and tactful probing that reliable information can be obtained.']
	},
	{W: ['married (a)'],
	 T: '\u0027\m\u023f0r\u02ccid',
	 D: ['having a wife or husband','We`ve been happily ___ for five years.', 'So how are you enjoying ___ life?'],
	 A: ['having a wife or husband','We`ve been happily married for five years.', 'So how are you enjoying married life?']
	},
	{W: ['single (a)'],
	 T: '\u0027\s\u026a\u023b7\u0259g\u0259l',
	 D: ['one only','He knocked his opponent down with a ___ blow', 'He`s been ___ for so long now, I don`t think he`ll ever marry.','You haven`t been listening to a ___ word I`ve been saying.'],
	 A: ['one only','He knocked his opponent down with a single blow', 'He`s been single for so long now, I don`t think he`ll ever marry.','You haven`t been listening to a single word I`ve been saying.']
	},
	{W: ['generous (a)'],
	 T: '\u0027\d\u0292en\u0259r\u0259s',
	 D: ['willing to give money, help, kindness, etc., especially more than is usual or expected','She`s been very ___ with her time', 'food in ___ portions'],
	 A: ['willing to give money, help, kindness, etc., especially more than is usual or expected','She`s been very generous with her time', 'food in generous portions']
	},
	{W: ['greedy (a)'],
	 T: '\u0027\gri\u02ccdi',
	 D: ['wanting a lot more food, money, etc. than you need','He`s ___ for power/success', 'It would be ___ to have another slice of cake.'],
	 A: ['wanting a lot more food, money, etc. than you need','He`s greedy for power/success', 'It would be greedy to have another slice of cake.']
	},
	{W: ['rich (a)'],
	 T: '\u0027\r\u026at\u0283',
	 D: ['having a lot of money or valuable possessions','He`s the third ___ man in the country', 'The region is ___ in minerals and coal deposits.'],
	 A: ['having a lot of money or valuable possessions','He`s the third richest man in the country', 'The region is rich in minerals and coal deposits.']
	},
	{W: ['poor (a)'],
	 T: 'p\u0254:r',
	 D: ['having little money and/or few possessions','Most of the world`s ___ countries are in Africa', 'Last year`s exam results were fairly ___'],
	 A: ['having little money and/or few possessions','Most of the world`s poorest countries are in Africa', 'Last year`s exam results were fairly poor']
	}
]
 
return wordsArr;

}