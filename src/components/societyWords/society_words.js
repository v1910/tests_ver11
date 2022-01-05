
// SOCIETY WORDS ------------------------------------------------ 

export function SOCIETYwords() {
let wordsArr = 	[
	{W:	['bankrupt (n)', 'bankrupt (v)', 'bankrupt (a)', 'bankruptcy (n)', 'go bankrupt (c)', 'go bankrupt (c)'], 
	 T: '\u0027b\u03F0\u03B7krupt',
	 D: ['if a company is ___, it does not have enough money to pay all its debts and so cannot continue to exist', 'People who are ___ cannot pay their debts, and their affairs are taken over by solicitors', 'the losses nearly ___ the business '],
	 A: ['if a company is bankrupt, it does not have enough money to pay all its debts and so cannot continue to exist', 'People who are bankrupt cannot pay their debts, and their affairs are taken over by solicitors', 'the losses nearly bankrupted the business ']
	},
	{W: ['boost  (v)', 'boost (n)'],
	 T: 'bu\u003Ast',
	 D: ['to ___ something means to improve it or increase it', 'their policies have ___ our reputation ', 'this should provide a ___ for the economy '],
	 A: ['to boost something means to improve it or increase it', 'their policies have boosted our reputation ', 'this should provide a boost for the economy ']
	},
	{W: ['controversial  (a)', 'controversy  (n)', 'controversially (a)'],
	 T: '\u02CCk\u0252ntr\u0259\u0027v\u025C:(r)\u0283(\u0259)l',
	 D: ['if something or someone is ___, different people hold different views about them very strongly and cannot reach agreement ', 'the government has done a few ___ things', ' ___, there were no women in the new cabinet'],
	 A: ['if something or someone is controversial, different people hold different views about them very strongly and cannot reach agreement ', 'the government has done a few controversial things', ' controversially, there were no women in the new cabinet']
	},	
	{W: ['cut back (v)', 'cutback (n)'],
	 T: 'k\u028Ct b\u03F0k',
	 D: ['to ___ on something means to reduce it or to reduce the amount of it that you use ', 'a ___ in funding for schools', ' the company may have to make ___'],
	 A: ['to cut back on something means to reduce it or to reduce the amount of it that you use ', 'a cutback in funding for schools', 'the company may have to make cutbacks']
	},
	{W: ['desperate  (a)', 'desperately  (a)', 'desperation   (n)', ' be desperate for something (c)'],
	 T: '\u0027desp(\u0259)r\u0259t',
	 D: ['if someone is ___, they are in a very difficult situation and want or need something very badly ', 'they`re ___ for more staff', 'the people ___ need food', ' people are heading for the cities in ___'],
	 A: ['if someone is desperate, they are in a very difficult situation and want or need something very badly', 'they`re desperate for more staff ', 'the people desperately need food ', ' people are heading for the cities in desperation']
	},
	{W: ['shortage (n)', 'short (a)', 'be short of something (c)', 'a shortage of something (c)'],
	 T: '\u0027\u0283\u0254:(r)t\u026Ad\u0292',
	 D: ['if there is a ___ of something, there is not enough of it ', 'there are a lot of water ___', 'a serious ___ of teachers', 'I`m a bit ___ of cash at the moment. Can you lend me ?10?'],
	 A: ['if there is a shortage of something, there is not enough of it', 'there are a lot of water shortages', 'a serious shortage of teachers', 'I`m a bit short of cash at the moment. Can you lend me ?10?']
	},
	{W: ['pace (n)', 'short (a)', 'be short of something (c)', 'a shortage of something (c)'],
	 T: 'pe\u026As',
	 D: ['the ___ of something is the speed at which it happens', 'the ___ of life is so fast here', ' the ___ of change in our lives is growing ever faster'],
	 A: ['the pace of something is the speed at which it happens', 'the pace of life is so fast here', ' the pace of change in our lives is growing ever faster']
	},
	{W: ['permit (n)', 'permit (v)', 'permission  (n)', 'permitted (a)', 'permissible (a)'],
	 T: 'p\u025C\u003A(r)m\u026A',
	 D: ['a ___ is a document that proves that you have been given official permission to do something', 'you need a travel ___', 'students are not ___ to bring tobacco onto the campus'],
	 A: ['a permit is a document that proves that you have been given official permission to do something', 'you need a travel permit', 'students are not permited to bring tobacco onto the campus']
	},
	{W: ['recession (n)', 'a global/worldwide/world recession (c)'],
	 T: 'r\u026A\u0027se\u0283\u0259(n)',
	 D: ['if there is a ___, there is much less business activity in a country, so some businesses do not make enough money to survive and some people lose their jobs','the whole world is facing a global ___'],
	 A: ['if there is a recession, there is much less business activity in a country, so some businesses do not make enough money to survive and some people lose their jobs','the whole world is facing a global recession']
	},
	{W: ['shortage (n)', 'short  (a)', 'a shortage of something (c)'],
	 T: '\u0027\u0259:(r)t\u026Ad\u0292',
	 D: ['if there is a ___ of something, there is not enough of it', 'a serious ___ of teachers', 'if you’re ___ of carrots, just use potato'],
	 A: ['if there is a shortage of something, there is not enough of it', 'a serious shortage of teachers', 'if you’re short of carrots, just use potato']
	},
	{W: ['tuition (n)', 'tutor (n)', 'tutorial  (n)', 'tutoring (n)'],
	 T: 'tju:\u0027\u026A\u0283(\u0259)n',
	 D: ['___ is the work of teaching people', 'they put up ___ fees for students again', 'he was educated by private ___', 'teaching includes lectures, ___, and seminars'],
	 A: ['tuition is the work of teaching people', 'they put up tuition fees for students again', 'he was educated by private tutors', 'teaching includes lectures, tutorials, and seminars']
	},
	{W: ['undermine (v)'],
	 T: '\u02CC\u028Cnd\u0259(r)\u0027ma\u026An',
	 D: ['to ___ something means to weaken it or make it less effective', 'their policies are ___ national unity', 'a scandal that threatens to ___ the government`s authority'],
	 A: ['to undermine something means to weaken it or make it less effective', 'their policies are undermining national unity', 'a scandal that threatens to undermine the government`s authority']
	},
	{W: ['abuse (v)', 'abuse (v)', 'abusive   (a)', 'abuser  (a)', 'abusively (a)'],
	 T: '\u0259\u0027\bju:s',
	 D: ['___ is a bad or wrong use of something, especially when this can cause harm to someone', 'the problem of drug and alcohol ___', 'the ___ of power', 'she began to ___ alcohol as a teenager'],
	 A: ['abuse is a bad or wrong use of something, especially when this can cause harm to someone', 'the problem of drug and alcohol abuse', 'the abuse of power', 'she began to abuse alcohol as a teenager']
	},
	{W: ['assault (v)', 'assault  (n)', 'physically/brutally assault someone (c)'],
	 T: '\u0259\u0027\s\u0254:lt',
	 D: ['to ___ someone means to attack them violently ', ' he was accused of ___ a student', ' the building was not designed to resist an ___'],
	 A: ['to assault someone means to attack them violently ', ' he was accused of assaulting a student', ' the building was not designed to resist an assault']
	},
	{W: ['breakdown (n)', 'break down (v)'],
	 T: '\u0027\bre\u026Ada\u028An',
	 D: ['if there is a ___, a process, relationship, or machine stops working properly', 'the problem of family ___', 'the car’s always breaking down | his marriage ___ last year'],
	 A: ['if there is a breakdown, a process, relationship, or machine stops working properly', 'the problem of family breakdown', 'the car’s always breaking down | his marriage broke down last year']
	},
	{W: ['capture (v)'],
	 T: '\u0027\k\u03F0pt\u0283\u0259(r)',
	 D: ['to ___ something on film means to successfully record it', 'it was all ___ on film', ' a passer-by ___ the moment on his mobile'],
	 A: ['to capture something on film means to successfully record it', 'it was all captured on film', ' a passer-by captured the moment on his mobile']
	},
	{W: ['carry out (v)'],
	 T: '\u0027\k\u03F0r\u026A out',
	 D: ['to ___ a task or a piece of work means to do everything that is involved in that particular task or piece of work ', 'we need to ___ more research', 'they ____ a survey'],
	 A: ['to carry out a task or a piece of work means to do everything that is involved in that particular task or piece of work ', 'we need to carry out more research', 'they carried out a survey']
	},
	{W: ['claim (n)', 'claim (v)', 'claimant (n)'],
	 T: 'kle\u026Am',
	 D: ['a ___ is a statement that someone makes which they say is true, but which some people believe is not true', 'her ___ is entirely false', 'he also ___ that his laptop had been stolen'],
	 A: ['a claim is a statement that someone makes which they say is true, but which some people believe is not true', 'her claim is entirely false', 'he also claimed that his laptop had been stolen']
	},
	{W: ['conduct (v)'],
	 T: 'k\u0259n\u0027d\u028Ckt',
	 D: ['to ___ a process or activity means to do everything that is involved in that process or activity', 'the police are now ___ investigations', 'these experiments were ___ over several years'],
	 A: ['to conduct a process or activity means to do everything that is involved in that process or activity', 'the police are now conducting investigations', 'these experiments were conducted over several years']
	},
	{W: ['damages (v)', 'award someone damages (c)'],
	 T: '\u0027d\u03F0m\u026Ad\u0292\u026Az',
	 D: ['if you win ___, a court orders a person or organisation to give you money because they have made you suffer in some way', 'the court awarded her substantial ___', 'he got half a million dollars in ___'],
	 A: ['if you win damages, a court orders a person or organisation to give you money because they have made you suffer in some way', 'the court awarded her substantial damages', 'he got half a million dollars in damages']
	},
	{W: ['deny (v)', 'award someone damages (c)'],
	 T: 'd\u026A\u0027na\u026A',
	 D: ['if someone ___ you something, they do not let you have it.', 'she claimed she was ___ promotion', 'his claim for compensation has been ___ twice'],
	 A: ['if someone denies you something, they do not let you have it.', 'she claimed she was denied promotion', 'his claim for compensation has been denied twice']
	},
	{W: ['destruction (v)', 'destroy (v)',  'destructive (a)', 'destructively (a)'],
	 T: 'd\u026A\u0027str\u028C',
	 D: ['the ___ of something happens when it becomes so damaged that it is completely broken or no longer exists', 'the ___ of the environment', 'the building was ___ during the war'],
	 A: ['the destruction of something happens when it becomes so damaged that it is completely broken or no longer exists', 'the destruction of the environment', 'the building was destroyed during the war']
	},
	{W: ['domestic (a)'],
	 T: 'd\u0259\u0027mest\u026Ak',
	 D: ['___ means relating to or happening within people’s homes and within the family', '___ abuse that includes physical violence is called domestic violence'],
	 A: ['domestic means relating to or happening within people’s homes and within the family', ' domestic abuse that includes physical violence is called domestic violence']
	},
	{W: ['dropout (a)', 'drop out (v)'],
	 T: '\u0027dr\u0252pa\u028At',
	 D: ['a ___ is someone who leaves school, college, or university before they finish their course of studies', '___ often complain that their classes were too boring', 'he ___ out at the end of the second semester'],
	 A: ['a dropout is someone who leaves school, college, or university before they finish their course of studies', 'dropouts often complain that their classes were too boring', 'he dropped out at the end of the second semester']
	},
	{W: ['excessive (a)', 'excessively (a)', 'excess  (v)', 'excess  (a)', 'do something to excess  (c)'],
	 T: '\u026Ak\u0027ses\u026Av',
	 D: ['if you say that something is ___, you mean that it seems to be more than is necessary or reasonable', 'it all seemed a bit ___', '___ high taxes', ' an excess of chemicals in the water'],
	 A: ['if you say that something is excessive, you mean that it seems to be more than is necessary or reasonable', 'it all seemed a bit excessive', 'excessively high taxes', ' an excess of chemicals in the water']
	},
	{W: ['gender (n)'],
	 T: '\u0027d\u0292end\u0259(r)',
	 D: ['someone’s ___ is whether they are male or female', 'the company was accused of ___ discrimination', 'discrimination on the grounds of ___'],
	 A: ['someone’s gender is whether they are male or female', 'the company was accused of gender discrimination', 'discrimination on the grounds of gender']
	},
	{W: ['uphold (n)', 'uphold a claim (c)'],
	 T: '\u028Cp\u0027h\u0259\u028Ald',
	 D: ['if someone in authority ___ a claim or a decision, they decide officially that the claim or decision was right', 'her claim was ___ in court', 'the court ___ the previous verdict'],
	 A: ['if someone in authority upholds a claim or a decision, they decide officially that the claim or decision was right', 'her claim was upheld in court', 'the court upheld the previous verdict']
	}
	
]
 
return wordsArr;

}
