
// PREPOSITIONS ------------------------------------------------ 

export function PREPOSITIONSwords() {
let wordsArr = 	[
	{W:	['of  (p)'], 
	 T: '\u0259v',
	 D: ['But they`re very afraid ___ something.', 'a friend ___ mine', 'a kilo ___ apples'],
	 A: ['But they`re very afraid of something.', 'a friend of mine', 'a kilo of apples']
	},
	{W: ['by (p)', 'at (p)'],
	 T: 'ba\u026a',
	 D: [' we are amused ___ jokes because they are funny.', 'Thought you might be amused ___ the enclosed clipping', 'She was amused ___ her son`s tomfoolery.'],
	 A: [' we are amused by jokes because they are funny.', 'Thought you might be amused by the enclosed clipping', 'She was amused at her son`s tomfoolery.']
	},
	{W: ['with (p)'],
	 T: 'w\u026a\u00f0',
	 D: ['I was very angry ___ her for leaving me.', 'I know you`re angry ___ me...', 'He was angry ___ his son'],
	 A: ['I was very angry with her for leaving me.', 'I know you`re angry with me...', 'He was angry with his son']
	},
	{W: ['with (p)'],
	 T: 'w\u026a\u00f0',
	 D: ['He was annoyed ___ me watching over him like a hawk.', 'No, I was just annoyed ___ her.', 'Now I know why people get annoyed ___ me.'],
	 A: ['He was annoyed with me watching over him like a hawk.', 'No, I was just annoyed with her.', 'Now I know why people get annoyed with me.']
	},
	{W: ['with (p)'],
	 T: 'w\u026a\u00f0',
	 D: ['Just that people were delighted ___ the experience.', 'Then they must be delighted ___ your career.', 'I told you, the beer company are delighted ___ that little clip.'],
	 A: ['Just that people were delighted with the experience.', 'Then they must be delighted with your career.', 'I told you, the beer company are delighted with that little clip.']
	},
	{W: ['with (p)'],
	 T: 'w\u026a\u00f0',
	 D: ['I was disappointed ___ this lack of progress', 'He must have been disappointed ___ me.', 'Your father`s very disappointed ___ you, Lex.'],
	 A: ['I was disappointed with this lack of progress', 'He must have been disappointed with me.', 'Your father`s very disappointed with you, Lex.']
	},
	{W: ['with (p)', 'to (p)'],
	 T: 'w\u026a\u00f0',
	 D: ['Papa, I want you to be real friendly ___ Georgine.', 'He was friendly with the oil companies, even held meetings ___ some of the local oil barons.', 'They`re not exactly what I would call friendly ___ law enforcement.'],
	 A: ['Papa, I want you to be real friendly with Georgine.', 'He was friendly with the oil companies, even held meetings with some of the local oil barons.', 'They`re not exactly what I would call friendly to law enforcement.']
	},
	{W: ['with (p)'],
	 T: 'w\u026a\u00f0',
	 D: ['I was furious ___ you when you shot Karen.', 'I mean, you should be completely furious ___ me.', 'She`s still furious ___ your mother, which is why I`m not talking to you.'],
	 A: ['I was furious with you when you shot Karen.', 'I mean, you should be completely furious with me.', 'She`s still furious with your mother, which is why I`m not talking to you.']
	},
	{W: ['about (p)'],
	 T: '\u0259\ba\u028at',
	 D: ['I must tell you ___ this editor.', 'It expressed concern ___ child abuse, including trafficking.', 'I remembered something you said ___ staying clean.'],
	 A: ['I must tell you about this editor.', 'It expressed concern about child abuse, including trafficking.', 'I remembered something you said about staying clean.']
	},
	{W: ['with (p)'],
	 T: 'w\u026a\u00f0',
	 D: ['All the orchestra were pleased ___ their success.', 'My brother was very pleased ___ the examination result.', 'I am pleased ___ this watch my father gave me.'],
	 A: ['All the orchestra were pleased with their success.', 'My brother was very pleased with the examination result.', 'I am pleased with this watch my father gave me.']
	},
	{W: ['about (p)'],
	 T: '\u0259\ba\u028at',
	 D: ['Surely he`ll be anxious ___ you.', 'The publishers are getting anxious ___ the new book', 'you are just feeling anxious ___ change.'],
	 A: ['Surely he`ll be anxious about you.', 'The publishers are getting anxious about the new book', 'you are just feeling anxious about change.']
	},
	{W: ['about (p)'],
	 T: '\u0259\ba\u028at',
	 D: ['You should go and be excited ___ it and have fun.', 'I`m just not excited ___ this baby.', 'I`m excited ___ just the sheer possibility of having a Broadway debut.'],
	 A: ['You should go and be excited about it and have fun.', 'I`m just not excited about this baby.', 'I`m excited about just the sheer possibility of having a Broadway debut.']
	},
	{W: ['about (p)'],
	 T: '\u0259\ba\u028at',
	 D: ['Mentioned him because you`re obviously still upset ___ it.', 'Your uncle`s very upset ___ his breakup.', 'No one is more upset ___ this than me, Detective.'],
	 A: ['Mentioned him because you`re obviously still upset about it.', 'Your uncle`s very upset about his breakup.', 'No one is more upset about this than me, Detective.']
	},
	{W: ['of  (p)'],
	 T: '\u0259v',
	 D: ['I am ashamed ___ my son`s conduct.', 'You should be ashamed ___ your behavior.', 'Look, I`m not ashamed of ___ guys.'],
	 A: ['I am ashamed of my son`s conduct.', 'You should be ashamed of your behavior.', 'Look, I`m not ashamed of you guys.']
	},
	{W: ['to (p)'],
	 T: 'tu:',
	 D: ['You were bored ___ tears.', 'You must be pretty bored ___ call me.', 'I`m bored ___ death with your ugly accusations.'],
	 A: ['You were bored to tears.', 'You must be pretty bored to call me.', 'I`m bored to death with your ugly accusations.']
	},
	{W: ['at (p)'],
	 T: '\u03f0t',
	 D: ['I bet you`re brilliant ___ it.', 'Cherie, You are brilliant ___ your job, but you do not understand politics.', 'That you were brilliant ___ working alone.'],
	 A: ['I bet you`re brilliant at it.', 'Cherie, You are brilliant at your job, but you do not understand politics.', 'That you were brilliant at working alone.']
	},
	{W: ['to  (p)'],
	 T: 'tu:',
	 D: ['Conveniently close ___ your own quarters.', 'And whoever said it lives close ___ us.', '2 bedroom apartments close ___ beach, golf and city.'],
	 A: ['Conveniently close to your own quarters.', 'And whoever said it lives close to us.', '2 bedroom apartments close to beach, golf and city.']
	},
	{W: ['to (p)'],
	 T: 'tu:',
	 D: ['We are deeply grateful ___ you ___ getting us started down this road.', 'I am grateful ___ the people of Libya ___ their support to the United Nations.', 'The African Union is also grateful ___ the United Nations ___ its technical support.'],
	 A: ['We are deeply grateful to you for getting us started down this road.', 'I am grateful to the people of Libya for their support to the United Nations.', 'The African Union is also grateful to the United Nations for its technical support.']
	},
	{W: ['of  (p)'],
	 T: '\u0259v',
	 D: ['You know, I`m actually kind ___ jealous of you.', 'Maybe someone was jealous ___ his success.', 'He`s been jealous ___ me since I got into office.'],
	 A: ['You know, I`m actually kind of jealous of you.', 'Maybe someone was jealous of his success.', 'He`s been jealous of me since I got into office.']
	},
	{W: ['about (p)'],
	 T: '\u0259\ba\u028at',
	 D: ['She was just really nervous ___ this role.', 'I`m really nervous ___ moving in with you.', 'I`m really nervous ___ this closing argument today.'],
	 A: ['She was just really nervous about this role.', 'I`m really nervous about moving in with you.', 'I`m really nervous about this closing argument today.']
	},
	{W: ['of  (p)'],
	 T: '\u0259v',
	 D: ['You must be very proud ___ them, very proud of them.', 'All peoples are proud ___ their culture.', 'We`re actually pretty proud ___ it.'],
	 A: ['You must be very proud of them, very proud of them.', 'All peoples are proud of their culture.', 'We`re actually pretty proud of it.']
	},
	{W: ['to (p)'],
	 T: 'tu:',
	 D: ['On the whole, the elite are not sensitive ___ criticism', 'You are sensitive ___ the grief of others, no matter their transgressions.', 'The framework should focus on indicators of efforts, as they are more sensitive ___ progress.'],
	 A: ['On the whole, the elite are not sensitive to criticism', 'You are sensitive to the grief of others, no matter their transgressions.', 'The framework should focus on indicators of efforts, as they are more sensitive to progress.']
	},
	{W: ['to (p)'],
	 T: 'tu:',
	 D: ['Don`t be rude ___ your father now.', 'Tom was very rude ___ Mary.', 'I just wanted to say sorry for being rude ___ you.'],
	 A: ['Don`t be rude to your father now.', 'Tom was very rude to Mary.', 'I just wanted to say sorry for being rude to you.']
	}								
]
 
return wordsArr;

}

