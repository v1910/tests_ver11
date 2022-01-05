
// NATURE ------------------------------------------------ 

export function NATUREwords() {
let wordsArr = 	[
	{W:	['blow down (c)'], 
	 T: 'ˈbləʊ ˌdaʊn',
	 D: ['if something is ___, it collapses or is destroyed by very strong winds in a storm ', 'the storm ___ a tree which hit our house ', ' the garage was ___ in the storm'],
	 A: ['if something is blow down, it collapses or is destroyed by very strong winds in a storm ', 'the storm blow down a tree which hit our house ', ' the garage was blow down in the storm']
	},
	{W: ['bounce  (v)'],
	 T: 'baʊns',
	 D: ['if something ___es, it hits a surface and then goes back up in the direction it came from', 'hailstones started ___ing off the car', ' the ball ___ed off the edge of the table'],
	 A: ['if something bounces, it hits a surface and then goes back up in the direction it came from', 'hailstones started bouncing off the car', ' the ball bounced off the edge of the table']
	},
	{W: ['come off  (v)'],
	 T: 'ˈkʌm ˌɒf',
	 D: ['when you ___ a motorway, you move onto the special road for traffic that wants to leave the motorway', 'we had to ___ the motorway and wait for the fog to lift ', ' you need to ___ the motorway at junction 10 '],
	 A: ['when you come off a motorway, you move onto the special road for traffic that wants to leave the motorway', 'we had to come off the motorway and wait for the fog to lift ', ' you need to come off the motorway at junction 10 ']
	},
	{W: ['ease  (v)'],
	 T: '/iːz',
	 D: ['if something ___s or ___s off, it becomes less severe', 'we had to pull over until the rain ___d off ', ' it’s ___d off a bit now'],
	 A: ['if something eases or eases off, it becomes less severe', 'we had to pull over until the rain eased off ', ' it’s eased off a bit now']
	},
	{W: ['empty  (v)'],
	 T: 'ˈempti',
	 D: ['to ___ a container means to take everything out of it.', 'If you ___ the contents of a container, you take them all out ', 'I must ___ emptied a litre of water out of my shoes '],
	 A: ['to empty a container means to take everything out of it.', 'If you empty the contents of a container, you take them all out ', 'I must have emptied a litre of water out of my shoes ']
	},
	{W: ['flash (n)'],
	 T: 'flæʃ',
	 D: ['a ___ of light is a very sudden and bright light which appears and then disappears very quickly there were incredible ___es of lightning', 'a ___ of bright light', 'a blinding ___ of light (extremely bright'],
	 A: ['a flash of light is a very sudden and bright light which appears and then disappears very quickly there were incredible flashes of lightning', 'a flash of bright light', 'a blinding flash of light (extremely bright']
	},
	{W: ['fog (n)', 'thick/dense fog (c)', 'fog lifts/clears (c)', 'fog comes down/descends (c)'],
	 T: 'fɒɡ',
	 D: ['hopefully the ___ will lift soon', 'a dense ___ had descended on the area', 'we couldn’t see anything through the ___ '],
	 A: ['hopefully the fog will lift soon', 'a dense fog had descended on the area', 'we couldn’t see anything through the fog ']
	},
	{W: ['freeze (v)'],
	 T: 'friːz',
	 D: ['when something ___s, it becomes hard because it is so cold.', 'When people ___, they get very uncomfortable because it is extremely cold', 'You can also say that you are ___ing or that a place is ___ing when it is very cold I thought I was going to ___ to death '], 
	 A: ['when something freezes, it becomes hard because it is so cold.', 'When people freeze, they get very uncomfortable because it is extremely cold', 'You can also say that you are freezing or that a place is freezing when it is very cold I thought I was going to freeze to death ']
	},
	{W: ['heavens (n)'],
	 T: 'hev(ə)nz',
	 D: ['plural if you talk about the ___, you are referring to the sky', 'the ___ open seconds later', 'the sun moved slowly across the ___'],
	 A: ['plural if you talk about the heavens, you are referring to the sky', 'the heavens open seconds later', 'the sun moved slowly across the heavens']
	},
	{W: ['non-stop (a)', 'talk non-stop  (c)', ' drive/fly non-stop  (c)'],
	 T: 'ˌnɒnˈstɒp',
	 D: ['if something happens ___, it continues all the time without a pause', 'drive/fly ___ it continued ___ for about a week', ' we flew ___ to Chicago'],
	 A: ['if something happens non-stop, it continues all the time without a pause', 'drive/fly non-stop it continued non-stop for about a week', ' we flew nonstop to Chicago']
	},
	{W: ['pass out (v)', 'a spectacular/stunning/glorious sunset (c)'],
	 T: 'ˈpɑːs ˌaʊt',
	 D: ['if you ___, you become unconscious for a short time I thought I was going to ___', 'he ___ with the heat', 'I almost ___ with the pain'],
	 A: ['if you pass out, you become unconscious for a short time I thought I was going to pass out', 'he passed out with the heat', 'I almost passed out with the pain']
	},
	{W: ['pull over (v)'],
	 T: 'ˈpʊl ˌəʊvə(r)',
	 D: ['if you ___, you drive to the side of the road and stop your car', 'If the police ___ you ___, they make you move to the side of the road and stop your car we had to ___  until the rain eased off', 'we ___ed ___ to the side of the road'],
	 A: ['if you pull over, you drive to the side of the road and stop your car', 'If the police pull you over, they make you move to the side of the road and stop your car we had to pull over until the rain eased off', 'we pulled over to the side of the road']
	}, 	
	{W: ['settle (v)'],
	 T: 'ˈset(ə)li',
	 D: ['if snow ___, it stays on the ground when it lands and does not turn to water straight away the snow had started to ___', 'the roads were still clear but the snow had settled in the fields', 'he was unbearably arrogant', ' overnight snow will ___ on high ground '],
	 A: ['if snow settles, it stays on the ground when it lands and does not turn to water straight away the snow had started to settle', 'the roads were still clear but the snow had settled in the fields', 'he was unbearably arrogant', ' overnight snow will settle on high ground ']
	}, 	
	{W: ['skid (v)', 'make someone welcome (c)'],
	 T: 'skɪd',
	 D: ['if you ___ while you are driving, your vehicle slides uncontrollably, for example because you have tried to stop too quickly when it is icy or muddy', 'the police car skidded to a stop', 'the jeep skidded and slammed into the truck'],
	 A: ['if you skid while you are driving, your vehicle slides uncontrollably, for example because you have tried to stop too quickly when it is icy or muddy', 'the police car skidded to a stop', 'the jeep skidded and slammed into the truck']
	},  	
	{W: ['stuck (a)'],
	 T: 'stʌk',
	 D: ['if you are ___ somewhere, you cannot get away even though you want to people got ___ in their cars overnight', 'we were ___ inside thanks to the rain', 'I’m going to be ___ in London all summer'],
	 A: ['if you are stuck somewhere, you cannot get away even though you want to people got stuck in their cars overnight', 'we were stuck inside thanks to the rain', 'I’m going to be stuck in London all summer']
	},
	{W: ['sunshine (n)', 'be in sunshine (c)', 'bright/glorious/brilliant sunshine (c)'],
	 T: 'ˈsʌnˌʃaɪn',
	 D: ['___ is bright light and warmth that comes from the sun when the weather is fine and there no clouds', 'warm ___ one moment we were in ___, next minute it was pouring with rain', 'the weather was wonderful with bright ___'],
	 A: ['sunshine is bright light and warmth that comes from the sun when the weather is fine and there no clouds', 'warm sunshine one moment we were in sunshine, next minute it was pouring with rain', 'the weather was wonderful with bright sunshine']
	}, 
	{W: ['thunder  (n)'],
	 T: 'ˈθʌndə(r)',
	 D: ['singular ___ is the loud noise that you hear in the sky during a storm the ___ was so loud it woke me up', 'a faint rumble of ___', ' the ___ was getting louder '],
	 A: ['singular thunder is the loud noise that you hear in the sky during a storm the thunder was so loud it woke me up', 'a faint rumble of thunder', ' the thunder was getting louder ']
	},	
	{W: ['turn (v)'],
	 T: 'tɜː(r)n',
	 D: ['you use ___ to describe how the quality of something changes from one state into another', 'the weather has ___ed nasty again', ' our beautiful friendship was ___ing sour (we stopped being good friends) '],
	 A: ['you use turn to describe how the quality of something changes from one state into another', 'the weather has turned nasty again', ' our beautiful friendship was turning sour (we stopped being good friends) ']
	}, 	
	{W: ['windscreen (n)', 'a shattered/broken/cracked windscreen (c)', 'a front/rear windscreen (c)'],
	 T: 'ˈwɪn(d)ˌskriːn',
	 D: ['a ___ is a sheet of glass at the front or back of a car that the driver can see through', 'the hailstones were so hard they nearly broke the ___', 'the ___ is cracked'],
	 A: ['a windscreen is a sheet of glass at the front or back of a car that the driver can see through', 'the hailstones were so hard they nearly broke the windscreen', 'the windscreen is cracked']
	},  	
	{W: ['amidst (p)'],
	 T: 'əˈmɪdst',
	 D: ['if something happens ___ other events, feelings, or activities, it happens with those things happening all around at the same time.', 'To be ___ people means to have people all around you.', '___ is a literary word, and the usual word is amid'],
	 A: ['if something happens amidst other events, feelings, or activities, it happens with those things happening all around at the same time.', 'To be amidst people means to have people all around you.', 'Amidst is a literary word, and the usual word is amid']
	},
	{W: ['bravery (n)', 'show/display bravery  (c)'],
	 T: 'ˈbreɪvəri',
	 D: ['uncount ___ is the quality and behaviour involved in being braven', 'show/display ___ bullfighting is full of drama, risk and ___', 'he was awarded a medal for exceptional ___'],
	 A: ['uncount bravery is the quality and behaviour involved in being braven', 'show/display bravery bullfighting is full of drama, risk and bravery', 'he was awarded a medal for exceptional bravery']
	}, 	
	{W: ['breeder (n)'],
	 T: 'ˈbriːdə(r)',
	 D: ['a ___ is someone who keeps animals and produces and sells young animals bull breeders were finding it hard to make a profit', 'a successful animal ___', ' a dog breeder | horse ___'],
	 A: ['a breeder is someone who keeps animals and produces and sells young animals bull breeders were finding it hard to make a profit', 'a successful animal breeder', ' a dog breeder | horse breeders']
	},
  	{W: ['civilised (a)'],
	 T: 'ˈsɪvəˌlaɪzd',
	 D: ['people or places that are ___ show culture and good standards of behaviour because they belong to an advanced and well developed society the true sign of a ___ country is the way it treats its animals', 'highly ___ed society', 'it all seemed very ___ed'],
	 A: ['people or places that are civilised show culture and good standards of behaviour because they belong to an advanced and well developed society the true sign of a civilised country is the way it treats its animals', 'highly civilised society', 'it all seemed very civilised']
	},
	{W: ['contest (v)', 'contest a will (c)'],
	 T: 'kənˈtest',
	 D: ['to ___ something means to say officially that you do not agree with it or think it is wrong', 'the will is being ___ed', 'they plan to ___ the decision'],
	 A: ['to contest something means to say officially that you do not agree with it or think it is wrong', 'the will is being contested', 'they plan to contest the decision']
	},
	{W: ['cruel  (a)'],
	 T: 'ˈkruːəl',
	 D: ['an activity that is ___ causes unnecessary suffering to people or animals.', 'If people are ___, they deliberately cause suffering to other people or animals', 'many people think bullfighting is ___'],
	 A: ['an activity that is cruel causes unnecessary suffering to people or animals.', 'If people are cruel, they deliberately cause suffering to other people or animals', 'many people think bullfighting is cruel']
	},
	{W: ['dare (n)', 'do something for a dare (c)', 'dare (v)'],
	 T: 'deə(r)',
	 D: ['a __ is something difficult or dangerous that you do because someone has challenged you to do it', 'I tried eating them for a ___', '___ someone to do something go on, I ___ you! (I challenge you)'],
	 A: ['a dare is something difficult or dangerous that you do because someone has challenged you to do it', 'I tried eating them for a dare', 'dare someone to do something go on, I dare you! (I challenge you)']
	},  	
	{W: ['ensure (v)', 'sarcasm (a)', 'sarcastically (a)'],
	 T: 'ɪnˈʃɔː(r)',
	 D: ['to ___ that something happens means to make certain that it happens ', '___ that something happens tax breaks have ensured low ticket prices', 'please ___ your child returns the signed letter to us'],
	 A: ['to ensure that something happens means to make certain that it happens ', 'ensure that something happens tax breaks have ensured low ticket prices', 'please ensure your child returns the signed letter to us']
	},
	{W: ['found (v)', 'found (n)'],
	 T: 'faʊnd',
	 D: ['to ___ an institution means to start it and provide the money it needs to become established', 'the company was originally ___ed in 1923', '___er the founders intended the school to take both boys and girls'],
	 A: ['to found an institution means to start it and provide the money it needs to become established', 'the company was originally founded in 1923', 'founder the founders intended the school to take both boys and girls']
	},
	{W: ['inheritance (n)', 'claim an inheritance (c)'],
	 T: 'ɪnˈherɪt(ə)nst',
	 D: ['your ___ is money that you get from someone after they die', 'receive an ___ she is struggling to win back her rightful ___', 'he received a small ___ from his father'],
	 A: ['your inheritance is money that you get from someone after they die', 'receive an inheritance she is struggling to win back her rightful inheritance', 'he received a small inheritance from his father']
	},
	{W: ['initial (a)'],
	 T: 'ɪˈnɪʃ(ə)l',
	 D: ['an ___ idea or action is one that comes at the beginning of a situation, and which later changes', 'the ___ ban was introduced in 2006', 'the police made an ___ breakthrough'],
	 A: ['an initial idea or action is one that comes at the beginning of a situation, and which later changes', 'the initial ban was introduced in 2006', 'the police made an initial breakthrough']
	},
	{W: ['insight (n)', 'insight into something (c)'],
	 T: 'ˈɪnsaɪt',
	 D: ['an ___ is a clear way of understanding something', 'research will provide invaluable ___s', 'an experience which gave her ___ into the struggle of farmers'],
	 A: ['an insight is a clear way of understanding something', 'research will provide invaluable insights', 'an experience which gave her insight into the struggle of farmers']
	},  
	{W: ['intimidation  (n)', 'intimidate (v)', 'intimidating (a)', 'intimidate someone into doing something (c)'],
	 T: 'ɪnˌtɪmɪˈdeɪʃ(ə)n',
	 D: ['___ is behaviour that deliberately tries to frighten someone, often in order to make them do something', 'they do not want to do ___ of laboratory staff', ' they endured years of ___', 'they tried to intimidate him into confessing'],
	 A: ['intimidation is behaviour that deliberately tries to frighten someone, often in order to make them do something', 'they do not want to do intimidation of laboratory staff', ' they endured years of intimidation', 'they tried to intimidate him into confessing']
	},	
	{W: ['involvement (n)', 'involvement in something (c)', 'involve (v)', 'involved (a)'],
	 T: 'ɪnˈvɒlvmənt',
	 D: ['someone’s ___ in an activity is the fact of their taking part in it', 'it`s been criticised for its ___ in politics', 'you shouldn`t ___ yourself in these matters'],
	 A: ['someone’s involvement in an activity is the fact of their taking part in it', 'it`s been criticised for its involvement in politics', 'you shouldn`t involve yourself in these matters']
	},
	{W: ['leave (v)', 'leave someone something (c)', 'leave something to someone (c)'],
	 T: '\liːv',
	 D: ['if you ___ money, property, or possessions to someone, you give official instructions that they should have the money, property, or possessions after you die', 'her parents had ___ everything they owned to the RSPCA', 'he uncle ___ her a house and £20,000'],
	 A: ['if you leave money, property, or possessions to someone, you give official instructions that they should have the money, property, or possessions after you die', 'her parents had left everything they owned to the RSPCA', 'he uncle left her a house and £20,000']
	},
	{W: ['matter (n)'],
	 T: 'mætə(r)',
	 D: ['a ___ is a problem or an issue that people cannot agree about they hope the ___ can be settled quickly ', 'we`ll discuss the ___ at our meeting tomorrow ', ' the ___ was resolved when the company agreed to a pay rise '],
	 A: ['a matter is a problem or an issue that people cannot agree about they hope the matter can be settled quickly ', 'we`ll discuss the matter at our meeting tomorrow ', ' the matter was resolved when the company agreed to a pay rise ']
	}, 
	{W: ['poll (n)', 'an opinion poll (c)'],
	 T: 'pəʊl',
	 D: ['a ___ is an activity in which a large number of people are asked what they think about something or how they will vote in an election.', 'You can also refer to the elections that take place when a country chooses a new government as the ___s', 'the results of a recent opinion ___', 'over 6,000 people from various backgrounds were ___ed '],
	 A: ['a poll is an activity in which a large number of people are asked what they think about something or how they will vote in an election.', 'You can also refer to the elections that take place when a country chooses a new government as the polls', 'the results of a recent opinion poll', 'over 6,000 people from various backgrounds were polled ']
	},
	{W: ['spark (v)'],
	 T: 'spɑː(r)k',
	 D: ['to ___ something violent or extreme means to cause it the speech ___ed a heated debate', 'what ___ed this explosion of anger? ', 'the announcement has ___ed widespread demonstrations'],
	 A: ['to spark something violent or extreme means to cause it the speech sparked a heated debate', 'what sparked this explosion of anger? ', 'the announcement has sparked widespread demonstrations']
	}, 	 
	{W: ['subsidy  (n)', 'subsidy (v)', 'heavily subsidise something (c)'],
	 T: '`sʌbsədi',
	 D: ['a ___ is an amount of money that a government pays in order to help a producer sell goods at a lower price and still have a profit', 'they survive thanks to ___ies of around €200 per bull', 'the industry is still heavily ___ised'],
	 A: ['a subsidy is an amount of money that a government pays in order to help a producer sell goods at a lower price and still have a profit', 'they survive thanks to subsidies of around €200 per bull', 'the industry is still heavily subsidised']
	},
	{W: ['awkward (a)'],
	 T: 'ˈɔːkwə(r)d',
	 D: ['an ___ social situation is one in which people feel embarrassed because they think something is wrong but they do not know exactly what', 'there was a bit of an ___ silence', 'there was an ___ moment when he mentioned Jack’s ex-wife '],
	 A: ['an awkward social situation is one in which people feel embarrassed because they think something is wrong but they do not know exactly what', 'there was a bit of an awkward silence', 'there was an awkward moment when he mentioned Jack’s ex-wife ']
	},
	{W: ['blossom (n)', 'be in blossom (c)', ' blossom comes out (c)'],
	 T: '`blɒs(ə)m',
	 D: ['___ is the flowers that grow on trees before the fruit develop.', 'When a tree blossoms, it has ___ on its branches.', 'tspring is a good time because of all the ___ on the trees'],
	 A: ['blossom is the flowers that grow on trees before the fruit develop.', 'When a tree blossoms, it has blossom on its branches.', 'tspring is a good time because of all the blossom on the trees']
	},   
	{W: ['curse (v)', 'curse (n)', 'put/place a curse on someone or something'],
	 T: 'kɜː(r)s',
	 D: ['to ___ someone or something means to say words that are deliberately intended to cause something bad to happen to them by magic', 'she thought I was ___ing her', 'lift a ___ an old woman placed a ___ on Serena and her family'],
	 A: ['to curse someone or something means to say words that are deliberately intended to cause something bad to happen to them by magic', 'she thought I was cursing her', 'lift a curse an old woman placed a curse on Serena and her family']
	}, 
	{W: ['funeral (n)', 'hold a funeral (c)', 'attend a funeral (c)', 'funeral (a)', 'a funeral service (c)'],
	 T: 'ˈfjuːn(ə)rəl',
	 D: ['a ___ is the ceremony that takes place when someone who has recently died is put into the ground, or when their body is burned', 'a state ___ her ___ will be held on Wednesday', 'Otto’s ___ was organised by his sons Karl and George', 'the ___ service was simple and moving'],
	 A: ['a funeral is the ceremony that takes place when someone who has recently died is put into the ground, or when their body is burned', 'a state funeral her funeral will be held on Wednesday', 'Otto’s funeral was organised by his sons Karl and George', 'the funeral service was simple and moving']
	},
	{W: ['gather (v)'],
	 T: 'ˈɡæðə(r)',
	 D: ['to ___ things means to collect them.', 'To ___ crops means to take them from the fields or places where they are growing and bring them indoors to be stored or eaten', 'we’re off to ___ mushrooms | the harvest was all gathered in by the end of the month '],
	 A: ['to gather things means to collect them.', 'To gather crops means to take them from the fields or places where they are growing and bring them indoors to be stored or eaten', 'we’re off to gather mushrooms | the harvest was all gathered in by the end of the month ']
	},
	{W: ['lethal  (a)'],
	 T: 'ˈliːθl',
	 D: ['something that is ___ can kill someone some mushrooms can be ___', 'colder temperatures can also prove ___ for the elderly', ' every gun is a ___ weapon'],
	 A: ['something that is lethal can kill someone some mushrooms can be lethal', 'colder temperatures can also prove lethal for the elderly', ' every gun is a lethal weapon']
	},
	{W: ['misunderstanding  (n)', 'mixer (n)', 'misunderstand (v)', 'misunderstood (a)', 'a total/complete/slight/common/genuine misunderstanding (c)'],
	 T: 'ˌmɪsʌndə(r)ˈstændɪŋ',
	 D: ['a ___ is a wrong or mistaken idea about something', 'I ___ood the doctor’s instructions', 'it was all a complete ___', 'I can see how this ___ arose'],
	 A: ['a misunderstanding is a wrong or mistaken idea about something', 'I misunderstood the doctor’s instructions', 'it was all a complete misunderstanding', 'I can see how this misunderstanding arose']
	}, 
	{W: ['pick  (v)'],
	 T: 'pɪk',
	 D: ['if you ___ fruit or vegetables or flowers, you take them from the plant that they are growing on so that you can eat them or show them indoors', 'we’re going to ___ mushrooms this afternoon', 'freshly ___ed tomatoes'],
	 A: ['if you pick fruit or vegetables or flowers, you take them from the plant that they are growing on so that you can eat them or show them indoors', 'we’re going to pick mushrooms this afternoon', 'freshly picked tomatoes']
	},
	{W: ['plant (n)', 'plant (v)'],
	 T: 'plɑːnt',
	 D: ['a ___ is a living thing such as a tree or bush that grows out of the ground.', 'If you ___ something in the ground, you put seeds or a young ___ in the earth so that a plant will grow.', 'we ___ed corn and barley (put seeds into the ground so that corn and barley ___s would grow) '],
	 A: ['a plant is a living thing such as a tree or bush that grows out of the ground.', 'If you plant something in the ground, you put seeds or a young plant in the earth so that a plant will grow.', 'we planted corn and barley (put seeds into the ground so that corn and barley plants would grow) ']
	},
	{W: ['rot (v)', 'rot (n)', ' rotting (a)'],
	 T: 'rɒt',
	 D: ['something ___s, it decays through natural processes if you give the plant too much water, the roots will ___', 'too much water will ___ the roots', '___ten the house was full of damp and ___'],
	 A: ['something rots, it decays through natural processes if you give the plant too much water, the roots will rot', 'too much water will rot the roots', 'rotten the house was full of damp and rot']
	},
	{W: ['seed  (n)', 'sow/scatter seeds (c)'],
	 T: 'siːd',
	 D: ['a ___ is a small part of a plant that grows into a new plant when it is in the soil.', 'If you talk about a ___ or the seeds of something, you are talking about the start of a new process or development', 'I bought some ___s to grow some herbs'],
	 A: ['a seed is a small part of a plant that grows into a new plant when it is in the soil.', 'If you talk about a seed or the seeds of something, you are talking about the start of a new process or development', 'I bought some seeds to grow some herbs']
	},
	{W: ['settle  (v)'],
	 T: 'ˈset(ə)l',
	 D: ['if something ___s your stomach, it stops your stomach feeling uncomfortable and likely to make you sick it will ___ your stomach', 'after I’d had the tea, my stomach ___ed'],
	 A: ['if something settles your stomach, it stops your stomach feeling uncomfortable and likely to make you sick it will settle your stomach', 'after I’d had the tea, my stomach settled']
	},  
	{W: ['stem (n)', 'stem (v)', 'stem from something (c)'],
	 T: 'stem',
	 D: ['a ___ is the long thin part of a plant that a flower grows on.', 'some people cut themselves off from their roots ', 'If something ___s from something else, it has that other thing as its origin', 'the economic crisis ___ed from mistakes made by the banks'],
	 A: ['a stem is the long thin part of a plant that a flower grows on.', 'some people cut themselves off from their roots ', 'If something stems from something else, it has that other thing as its origin', 'the economic crisis stemmed from mistakes made by the banks']
	},
	{W: ['stormy  (a)', 'stormy weather (c)', 'storm (n)'],
	 T: 'ˈstɔː(r)mi',
	 D: ['___ weather is when there is a lot of heavy rain and wind.', 'If people’s relationships are ___, there is a lot arguing and disagreement', 'a ___ relationship we’ve had a lot of stormy weather recently', 'the ___ raged all night '],
	 A: ['stormy weather is when there is a lot of heavy rain and wind.', 'If people’s relationships are stormy, there is a lot arguing and disagreement', 'a stormy relationship we’ve had a lot of stormy weather recently', 'the storm raged all night ']
	},
	{W: ['variety (n)', 'slave over something (c)', 'slave away at something  (c)'],
	 T: 'vəˈraɪəti',
	 D: ['a ___ of something, especially a plant, fruit, or vegetable, is a particular type of it we grow different varieties of tomato', 'these potatoes are an early ___ (they are ready to eat early in the season)', 'different grape ___ are used for different purposes'],
	 A: ['a variety of something, especially a plant, fruit, or vegetable, is a particular type of it we grow different varieties of tomato', 'these potatoes are an early variety (they are ready to eat early in the season)', 'different grape varieties are used for different purposes']
	}
]
 
return wordsArr;

}

