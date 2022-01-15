export function CorrectAnswersTests()
{
let 	c_answers;
c_answers =
{
  R1: `
  <h3>Present Simple</h3>
  <h4>1. Regularly repeated actions:</h4>
As a rule, he has three meals a day.
<h4>2. Facts, scientific phenomena, laws of nature:</h4>
Canada lies north of the United States.
<h4>3. Hobbies, traditions, habits:</h4>
She is clever. Irish people drink a lot of beer. 
<h4>4. The action is set by a schedule or schedule:</h4>
The hypermarket opens at 10 a.m and closes at 11 p.m.
<h4>5. Newspaper headings:</h4>
Russian sportsmen win the Olympic Games.
<h4>6. Dramatic stories, sports comments:</h4>
They shake hands and she bids him goodnight. John serves to Mike.
<h4>7. Suggestion to do something (Why ...):</h4>
Why don’t we go for a run? 
` ,
    R2:`
    <h3>Present Continuous</h3>
<h4>1. The action takes place at the time of speech:</h4>
I am carrying the groceries.
<h4>2. Temporary action taking place around the present moment:</h4>
He is living in London at the moment, as she is studying at London University.
<h4>3. Developing and changing situations:</h4>
Your Italian is improving. The world is changing.
<h4>4. Annoying habit (with the words always, forever, constantly, continually):</h4>
She is always losing her keys.
<h4>5. The action planned for the near future:</h4>
We’re leaving tomorrow.
    `,
    R3:`
    <h3>Past Simple</h3>
<h4>1. Actions occurred one after another:</h4>
I got out of my bed, opened the window and turned on computer.
<h4>2. A single fact, a condition in the past:</h4>
Jack London was born in 1876 and died in 1916.
<h4>3. Past habits:</h4>
When I was young I swam across the river.       
    `,
    R4:`
    <h3>Past Continuous</h3>
    <h4>1. The action occurred at a certain time in the past:</h4>
    I was making a salad at 4 pm yesterday.
    <h4>2. To express irritation:</h4>
    Luis was forever smoking in my room!
    <h4>3. An action in the past interrupted by another action:</h4>
    They were entertaining friends when the parcel arrived.
    <h4>4. Actions took place simultaneously:</h4>
    While I was preparing dinner, my parents were playing cards.
    <h4>5. One action is shorter (Past Simple), the other is longer (Past Cont.):</h4>
    My brother phoned me when I was having dinner.
    <h4>6. Descriptions of events in history:</h4>
    It was raining the wind was blowing.
    `,
    R5:`
    <h3>Present Perfect</h3>
    <h4>1. Personal changes:</h4>
    She has lost 25 kilos.
    <h4>2. Emphasis on number:</h4>
    You have knocked on the door three times.
    <h4>3. An action, quite recently, the result of which is obvious and important in the present:</h4>
    We’ve run out of milk (there is no milk at home).
    <h4>4. An action that happened once in the past, but is important in the present:</h4>
    I have been to Africa several times.
    <h4>5. The action, which began in the past, lasted for some time and continues to continue in the present:</h4>
    We have known each other for a long time.
    `,
    R6:`
    <h3>Present Perfect Continuous</h3>
    <h4> 1. The action began in the past and continues in the present: </h4>
    It has been snowing since yesterday morning (and it’s still snowing).
    <h4> 2. Past action that has a visible result in the present: </h4>
    I have a sore throat. I have been talking on the phone all morning.
    <h4> 3. Expression of anger, irritation: </h4>
    Who’s been drinking my orange juice?
    <h4> 4. Emphasis on duration, not result (with the words for, since, how long): </h4>
    The train has been waiting for three hours.    
    `,
    R7:`
    <h3>Past Perfect</h3>
    <h4> 1. Completed action with visible result in the past: </h4>
    I was sad because he had not called me.
    <h4> 2. Equivalent to Present Perfect. </h4>
    <h4> 3. An action occurred before another action in the past or a moment in the past: </h4>
    They had finished the report by the end of the month.
    <h4> 4. Used with unions hardly ... when, scarcely ... when, no sooner ... than, barely ... when .: </h4>
    The game had hardly begun when it started to rain.
    `,
    R8:`
    <h3>Past Perfect Continuous</h3>
    <h4>1. The action began in the past, lasted for some time and continued to last at a certain point in the past:</h4>
    How long had you been living in Moscow before you moved to Vienna?
    <h4>2. Actions in the past with a certain duration and this action has a visible result in the past:</h4>
    Dad was angry. He had been arguing with Daisy.
    <h4>3. Past Perfect Continuous is the equivalent of Present Perfect Continuous.</h4>
    `,
    R9:`
    <h3>Future Simple</h3>
    <h4>1. A future that is independent of the speaker, and which will certainly happen:</h4>
    She will be ten next month.
    <h4>2. Assumptions about the future (believe, think, sure, etc):</h4>
    I will probably call you, but I’m not sure.
    <h4>3. Decisions made at the time of speech:</h4>
    I’ll switch on the light. 
    <h4>4. Threat, promise, offer:</h4>
    He’ll be punished!
    I’ll talk to him.
    I’ll carry these bags for you. 
    <h4>5. A request for advice or a request for information, an offer to help (1 person singular and many hours in interrogative sentences):</h4>
    Shall I carry these heavy bags for you? (To the second person will).    
    `,
    R10:`
    <h3>Be going to</h3>
    <h4>1. Очевидные действия, которые точно произойдут:</h4>
    Oh no! Our train is on fire! We are going to die.
    <h4>2. Намерение что-то сделать, решение принято до разговора:</h4>
    I’m going to paint my car this summer. I’ve already chosen the colour I want.    
    `,
    R11:`
    <h3>Future Continuous</h3>
    <h4>1. Actions that will occur at a certain time in the future:</h4>
    At 8 o’clock tomorrow we’ll be having dinner.
    <h4>2. A polite question about the plans of the interlocutor, especially when we want us to do something:</h4>
    I have something for my son. Will you be seeing him tonight? 
    <h4>3. Actions that result from a routine:</h4>
    I’ll be having lunch with David tomorrow as usual.   
    `,
    R12:`
    <h3>Future Perfect Progressive</h3>
<h4>The action will last until a certain time in the future:</h4>
- By the 2nd of May I will have been reading for a fortnight.<br />
- By next January, they will have been living here for two years.<br />
- He’ll have been arguing with her all night.
    `,
    R13:`
    <h3>Future Simple in the Past</h3>
<h4>Обозначения действия, которое было будущим с точки зрения прошедшего.</h4>
 — I said I would go to the theatre next week.    
    `,
    R14:`
    <h3>Future Continuous in the past</h3>
    <h4>Indicates an action that occurs at a specific moment that was future in terms of the past.</h4>
    - She said she would be working at 7 o’clock.    
    `,
    R15:`
    <h3>Future Perfect in the past</h3>
    <h4>Designation of an action completed to a certain point that was future from the point of view of the past.</h4>
    - I said I would have read all the books by the 2nd of June.
    `,
    R16:`
    <h3>Future Perfect Continuous in the past</h3>
    <h4>An action that lasts for a certain period of time until a certain moment that was future in terms of the past.</h4>
    - I said that by the 1st of May I would have been reading the book for a fortnight.    
    `,
	R17: `
    <h3>Separated questions</h3> \n 
<h4>Present Simple (do/does)</h4> \n
<xmp>They go to work, don’t they? \n
She likes to dance, doesn’t she? \n
She doesn’t drink coffee, does she? \n
They never go to the club, do they?</xmp> \n

<h4>Past Simple (did)</h4> \n
<xmp>They married last year, didn’t they? \n
They didn’t work last summer, did they? \n
Her son went to school yesterday, didn’t he?</xmp> \n

<h4>Future Simple (will)</h4> \n
<xmp>He will call you back, will not (won’t) he? \n
We will not meet with you, will we?</xmp> \n

<h4>Modal verbs</h4> \n
<xmp>They should ask you, shouldn’t they? \n
She can run fast, can’t she? \n
We may take it, mayn't we? \n 
She should not go alone, should she? \n
They couldn’t leave a lesson, could they? \n
He mightn't agree, might he? \n
Everyone can do it, can’t they?</xmp> \n

<h4>Verb to be</h4> \n
<xmp>She is a student, isn’t she? \n
They were at work, weren’t they? \n
She will be angry, won’t she? \n
I am beautiful, aren't I? \n
They are not tired, are they? \n
He was not rich, was he? \n
They were not friends, were they?</xmp>`,

R18: `
<h3>What's the difference between a Refund, Exchange, and Return?</h3> \n
Refund: Refunds full price of ticket to the patron. This applies to paid and free tickets. \n
Exchange: Swaps original ticket for another. Use this when the tickets have equal value. \n
Return: Returns a ticket to inventory. This is for Comp tickets.`, 

R19: `
<h3>Passive voice</h3>\n
<h4>Present Simple Passive</h4>\n
The passive voice is used when we focus on the object of the sentence.\n 
In the example, B becomes the subject.\n
For example: That song is sung by my mom.\n
When it is important to know who does the action, we use by.\n 
The noun that follows by is called the "agent.” \n
My mom was the subject in the active sentence, \n
but it becomes the agent in the passive sentence.\n
Sometimes, when the agent is unknown, or unimportant \n
to the meaning of the sentence, we do not use by.\n
For example: This sweater is made in China.\n
We form the passive with be + past participle\n 
(3rd form of the verb).\n
In the present simple, the passive is: \n
am / is / are + past participle (3rd form of the verb).\n
<h4>Past Simple Passive</h4>\n
We use Past Simple Passive for actions or events that happened\n
in the past (yesterday, last week (month, year), in 2010).\n 
Unlike the Past Perfect Passive, there’s no specific point in the past.\n
In such statements we focus attention on the person or thing\n
affected by the action, when the subject is unknown, unclear or irrelevant.\n
Compare:\n
Tom repaired the car. – The car was repaired by Tom.\n
Thomas Edison invented the light bulb. – The light bulb was invented by\n
Thomas Edison.\n
In these examples, the focus is on the effect of the past action,\n 
it’s not important who performed the action.\n
<h4>Future Simple Passive</h4>\n
Future Simple Passive is used to talk about an action\n
that is going to happen in the future. In the passive voice,\n 
emphasis is put on the effect of an action rather than on the doer.\n
The letter will be sent tomorrow.\n
The work will be done on time.\n
First, let’s refresh the Future Simple structure with the Active Voice:\n
[subject] + will + verb without ‘to’\n
To make statements with the Future Simple Passive, use:\n
[subject] + will be + the Past Participle form of the verb\n
Future Simple Passive forms are normally built using ‘will’ rather than ‘going to’:\n
The motorway will be closed for three days.\n
Your room will be cleaned while you are out.\n
Only English will be spoken at the conference.\n
I will be treated\n
You will be treated\n
The new university will be opened by the President.\n
The contract will be signed tomorrow.\n
The documents will all be signed by next week.\n
We use Future Simple Passive for actions or events that will happen\n
in future (tomorrow, next week (month, year), in 2020).\n
Unlike the Future Perfect Passive, there’s no deadline here.\n
In such statements we focus attention on the person or thing\n
affected by the action, when the subject is unknown, unclear or irrelevant.\n
`,
		
R20: `
<h3>Present perfect passive construction</h3>\n
Present perfect passive construction: has/have + been + past participle\n 
Example verb: visit\n
I have been visited  \n
We have been visited\n
You have been visited \n 
You (guys) have been visited\n
He/she/it has been visited  \n
They have been visited\n
The agent is unknown. We don’t know who or what is the agent \n
An amazing surprise has been prepared for you, Maria.\n
We use the passive to emphasise the subject \n
Only ”he” has been known to have all the answers.\n
`,
R21: `
<h3>When as a conjunction</h3>\n
We use when as a conjunction meaning 'at the time that'.\n
The clause with when is a subordinate clause (sc) and needs\n
a main clause (mc) to complete its meaning.\n
If the when-clause comes before the main clause, we use a comma.\n
<h4>Talking about the past</h4>\n
When I was young, 
there were no houses here.
Nobody spoke 
<h4>when she came into the room.</h4>\n
<h4>Talking about the present</h4>\n
When you start the engine, there's a strange noise.
<h4>Talking about the future</h4>\n
In references to the future with when,\n 
we use the present simple or the present perfect\n 
in the when-clause, not the future with shall and will:\n
When the new park opens, I'll go there every day.\n
Not: When the new park will open, I'll go there every day.\n
When I’ve finished my homework, I’m going to phone Marita.\n
Not: When I’ll finish my homework, I’m going to phone Marita.\n
We can use when as a conjunction to mean ‘considering that’:\n
What’s the point in going out when we have to be home\n
by eleven o’clock?\n
`,
R22: `
<h3>Used to: meaning and form</h3>\n
We use used to when we refer to things in the past\n
which are no longer true. It can refer to repeated\n
actions or to a state or situation:\n
He used to play football for the local team,\n
but he’s too old now.\n
That white house over there used to belong to my family.\n
(It belonged to my family in the past, but not any more.)\n
<h4>Warning:</h4>\n
In statements, the form used to does not change.\n
We do not use the verb be before it. It always refers to past time:\n
We used to go to the seaside every summer when I was a kid.\n
Not: We are used to go … or We use to go … or We were used to go …\n
<h4>Negative: didn’t use to</h4>\n
The negative of used to is most commonly didn’t use(d) to.\n
Sometimes we write it with a final -d, sometimes not.\n
Both forms are common, but many people consider the form\n 
with the final -d to be incorrect, and you should not use it in exams:\n
It didn’t use to be so crowded in the shops as it is nowadays.\n
I didn’t used to like broccoli when I was younger, but I love it\n
now. (Don’t use this form in exams.)\n
In very formal styles, we can use the negative form used not to:\n
She used not to live as poorly as she does now.\n
<h4>Questions</h4>\n
The most common form of question is auxiliary did + use(d) to.\n 
Many people consider the form with a final -d to be incorrect,\n 
and you should not use it in exams:\n
I think we met once, a couple of years ago.\n
Did you use to work with Kevin Harris?\n
Didn’t she used to live in the same street as us?\n
(Don’t use this form in written exams.)\n
`,
R23: `
<h3>If sentences (conditional sentences)</h3>\n
Sentences containing the word if are called conditional\n
sentences because they usually express a condition.\n
Examples:\n
If he comes, ask him to wait.\n
If it rains, we will get wet.\n
If you study hard, you will pass your exam.\n
There are four types of if sentences in English.\n
The zero conditional\n
The type 1 conditional\n
The type 2 conditional\n
The type 3 conditional\n
<h4>The zero conditional</h4>\n
In a zero conditional sentence, we use a present\n
tense in both parts of the sentence.\n
If you give respect, you get respect.\n
If you heat ice, it melts.\n
The type zero conditional sentences are used\n
to talk about real and possible situations.\n
<h4>Type 1 conditional</h4>\n
Type 1 conditional sentences are used to talk about\n 
possible situations and their probable results.\n
In these sentences we use the simple present\n
in the if clause and the simple future in the result clause.\n
If you work hard, you will succeed.\n
If you ask him, he will help you.\n
If you invite them, they will come.\n
<h4>Type 2 conditional</h4>\n
These sentences are used to talk about an unlikely condition\n 
and its probable result. Here the tense in the if clause is\n
the simple past and the tense in the main clause is\n
 the present conditional (would + get).\n
If you asked him, he would help you.\n
If you studied hard you would pass your exam.\n
If you invited them, they would come.\n
<h4>Type 3 conditional</h4>\n
In a type 3 conditional sentence, the tense in the if clause\n
is the past perfect and the tense in the main clause\n
is the perfect conditional (would have + infinitive).\n
If you had invited them, they would have come.\n
If you had asked him, he would have helped you.\n
`,
R24: `
<h3>Gerund</h3>
A verbal noun in Latin that expresses generalized or\n
uncompleted action. 
Any of several linguistic forms analogous to the Latin gerund\n
in languages other than Latin\n
Especially : the English verbal noun ending in -ing that has\n
the function of a substantive and at the same time shows the verbal\n 
features of tense, voice, and capacity to take adverbial qualifiers\n 
and to govern (see GOVERN sense 4) objects\n
Examples:\n
Learning can be fun\n
I like building things\n
When it comes to hunting deer, nobody is better than Leroy.\n
`,        
R25: `
<h3>Adverb</h3>
An adverb is a word that modifies (describes) a verb\n
(he sings loudly), an adjective (very tall), another adverb\n
(ended too quickly), or even a whole sentence\n
(Fortunately, I had brought an umbrella).\n
Adverbs often end in -ly, but some (such as fast)\n
look exactly the same as their adjective counterparts.\n
Examples:\n
Tom Longboat did not run badly.\n
Tom is very tall.\n
The race finished too quickly.\n
Fortunately, Lucy recorded Tom's win.\n
`,
R26: `
<h3>Punctuation</h3>
The most common punctuation marks in English are:\n 
capital letters and full stops, question marks, commas,\n 
colons and semi-colons, exclamation marks and quotation marks.\n
In speaking, we use pauses and the pitch of the voice to make\n 
what we say clear. Punctuation plays a similar role\n 
in writing, making it easier to read.\n
Punctuation consists of both rules and conventions.\n 
There are rules of punctuation that have to be followed;\n 
but there are also punctuation conventions that give\n 
writers greater choice.\n
Punctuation: capital letters (B, D) and full stops (.)\n
We use capital letters to mark the beginning of a sentence\n 
and we use full stops to mark the end of a sentence:\n
We went to France last summer. We were really surprised\n 
that it was so easy to travel on the motorways.\n
The Football World Cup takes place every four years.\n 
The next World Cup will be held in South Africa.\n 
In 2006 it was held in Germany.\n
We also use capital letters at the beginning of proper nouns.\n 
Proper nouns include personal names (including titles\n 
before names), nationalities and languages, days of the week\n 
and months of the year, public holidays as well as geographical places:\n
Dr David James is the consultant at Leeds City Hospital.\n
They are planning a long holiday in New Zealand.\n
Can she speak Japanese?\n
The next meeting of the group will take place on Thursday.\n
What plans do you have for Chinese New Year?\n
We use capital letters for the titles of books,\n 
magazines and newspapers, plays and music:\n
'Oliver' is a musical based on the novel\n 
'Oliver Twist' by Charles Dickens.\n
The Straits Times is a daily English language\n 
newspaper in Singapore.\n
They are performing Beethoven's Sixth Symphony.\n
`,
R27: `
<h3>Wonder</h3>
Wonder normally functions as a verb and can be followed by about,\n 
as in 'I wonder about him, I really do', if or whether, as in\n
'I wonder if they'll get married', and by words such as how,\n
what and when, as in 'I wonder why she didn't phone'.\n
As a noun, wonder is used in both the singular and plural forms.\n 
In the singular, it is normally found in expressions such as\n
It's a wonder, as in 'Your writing is so small, it's a wonder\n 
anyone can read it' and It's no wonder, as in 'It's no wonder\n 
they won the league after all the money they've spent on players'.\n 
No wonder can also be used as a response to mean 'I'm not surprised'\n 
(by what you've just told me).\n
`,
R28:`
<h3>although / even though</h3>
After although and even though, we use a subject and a verb.\n
Even though is slightly stronger and more emphatic than although.\n
I enjoyed the course, although I would have liked more grammar practice.\n
Although we saw each other every day, we didn't really know each other.\n
Even though she spoke very quietly, he understood every word.\n
She didn't get the job, even though she had all the necessary qualifications.\n
`,
R29:`
<h3>therefore</h3>
For that reason:
We were unable to get funding and therefore had to abandon the project.\n
The defendant was depressed and therefore not fully responsible for\n
her own actions.\n
We are a moral, ethical people and therefore we do not approve\n
of their activities.\n
Doctors are short of time to listen and therefore tend to prescribe\n 
drugs whenever they can.\n
The children will be walking to the cathedral and therefore will need\n 
to wear suitable footwear and a sun hat or raincoat, depending on the weather.\n
Several members have not replied for over three years and their names have\n 
therefore been removed from the mailing list.\n
`,
R30:`
<h3>although / even though</h3>
After although and even though, we use a subject and a verb.\n 
Even though is slightly stronger and more emphatic than although.\n
Examples:
I enjoyed the course, although I would have liked more grammar practice.\n
Although we saw each other every day, we didn't really know each other.\n
Even though she spoke very quietly, he understood every word.\n
She didn't get the job, even though she had all the necessary qualifications.\n
`,
R31:`
<h3>Be about to</h3>
Be about to is used to talk about things which are going to happen very soon:\n
I’m about to eat. Can I phone you back?\n
It is often used with just:\n
We’re just about to set off for a walk. Do you want to come?\n
When used in the past, be about to can refer to things that
were going to happen but didn't:\n
I was about to complain but he came over and apologised.\n
We don't use be about to with time expressions:\n
I was about to call you.\n
Not: I was about to call you in ten minutes.\n
`,
R32:`
<h3>by</h3>
By meaning 'how to do something'\n
We use by + -ing form to describe how to do something:\n
By pressing this button, you turn on the alarm system.\n 
Then by entering the code 0089, you can turn it off again.\n
We use by + noun to describe how someone travels or\n 
communicates, or how things are processed:\n
I’ll send it by email; I can send it by post as well if you wish.\n
Can I pay by credit card?\n
We say by car, by bus, by plane, etc. but if there is a determiner\n 
(e.g. a/an, the, some, my, his) before the noun, we say in or on.\n
`,
R33:`
<h3>in, into </h3>
In, into: position and direction\n
We use in to talk about where something is in relation\n 
to a larger area around it:\n
A:\n
Where’s Jane?\n
B:\n
She’s in the garden.\n
I’ve left my keys in the car.\n
We use into to talk about the movement of something,\n 
usually with a verb that expresses movement (e.g. go, come).\n 
It shows where something is or was going:\n
A:\n
Where’s Jane?\n
B:\n
She’s gone into the house.\n
Helen came into the room.\n
`,
R34:`
<h3>to be able to</h3>\n
Although we look at be able to here, it is not a modal verb.\n 
It is simply the verb be plus an adjective (able)\n 
followed by the infinitive.\n 
We look at be able to here because we sometimes use it instead of can and could.\n
We use be able to:\n
to talk about ability\n
Notice that be able to is possible in all tenses, for example:\n
I was able to drive...\n
I will be able to drive...\n
I have been able to drive...\n
Notice too that be able to has an infinitive form:\n
I would like to be able to speak Chinese.\n
`,
R35:`
<h3>of</h3>\n
Of is a preposition.\n
Of commonly introduces prepositional phrases\n
which are complements of nouns, creating the pattern:\n 
noun + of + noun. This pattern is very common, especially\n 
to indicate different parts, pieces, amounts and groups:\n
Lima is the capital of Peru.\n
Twenty-four-hour TV news makes sure we all know the main events of the day.\n
Would you like some more pieces of toast?\n
We also commonly use of as a preposition after different\n 
adjectives (afraid of, generous of, proud of) and verbs\n 
(approve of, dream of, think of):\n
I never thought she could take a flight on her own at her age.\n 
I feel very proud of her.\n
Best of luck with the interview tomorrow. We'll be thinking of you.\n
We use the structure determiner + of + noun in expressions of quantity:\n
Most of the new workers in the country are from Turkey.\n
Some of my best friends are computer scientists.\n
`,
R36:`
<h3>with</h3>\n
With meaning 'in the same place as'\n
With means 'in the same place as someone or something or 'accompanying':\n
She arrived with her boyfriend.\n
I don't like tea with milk.\n
There was a free phone with the car.\n
With: reactions and feelings\n
With often follows adjectives which refer to reactions and feelings:\n
Are you happy with your music lessons?\n
The teacher got angry with them because they were behaving badly.\n
I'm delighted with this new jacket.\n
With meaning 'using'\n
We use with to refer to what we use to do something:\n
They opened the package with a knife.\n
I'll tie it with some tape to keep it closed.\n
He cleaned the table with a cloth he found in the kitchen.\n
With meaning 'having\n
We use with to mean 'having' or 'possessing':\n
It's the house with the really big gates.\n
She woke with terrible toothache.\n
The Commonwealth Institute used to be a building\n 
with a very unusual roof in Kensington.\n
`,
R37:`
<h3>for</h3>\n
For is usually a preposition and sometimes a conjunction.\n
For: purpose\n
We use for to talk about a purpose or a reason for something:\n
I’m going for some breakfast. I’m really hungry.\n
She leaves on Friday for a 15-day cruise around the Mediterranean.\n
I wear these old trousers for painting.\n
In questions we often use what … for instead of why to ask about\n 
the reason or purpose of something especially in informal situations:\n
What are you here for?\n
What are they doing it for?\n
See also:\n
For + -ing\n
For someone\n
We often use for to introduce the person or people receiving something:\n
She bought a teapot for her sister.\n
Mike Cranham and his staff at the hotel cook for 800 people a day, on average.\n
For: duration\n
We use for with a period of time to refer to duration (how long something lasts):\n
There’s a lovely open-air pool near us. We usually go there for\n 
a couple of hours in the evenings when it's warm enough.\n
`,
R38:`
<h3>readily</h3>\n
quickly, immediately, willingly, or without any problem:\n
He readily agreed to help.\n
Larger sizes are readily available.\n
Examples\n
He had not expected the people so readily to internalize the values of democracy.\n
Widespread ionization occurs readily in the earth's upper atmosphere.\n
I readily accepted his offer.\n
The board readily accepted the suggestions of the tribunal.\n
The new proposals were readily adopted by the company.\n
`,
R39:`
<h3>honestly</h3>\n
in a way that is honest:\n
They have always dealt honestly and fairly with their customers.\n
I can't honestly say what time I'll be home.\n
I'll do it tomorrow, honestly (= I promise that I will do it).\n
More examples:\n
I can honestly say that I have no interest whatsoever in the royal family.\n
He answered openly and honestly without any hesitation.\n
"You played brilliantly in the concert." "Oh thanks, do you honestly think so?"\n
Quite honestly, the thought of standing up and performing live terrified me.\n
I don't mind criticism as long as it's honestly given and doesn't get personal\n
`,
R40:`
<h3>aquired</h3>\n
to get or buy something:\n
He acquired the firm in 2008.\n
I was wearing a newly/recently acquired jacket.\n
I seem to have acquired (= have got although I don't know how) two copies of this book.\n
He has acquired a reputation for being difficult to work with.\n
Synonyms:\n
buy (PAY FOR)\n
get (OBTAIN)\n
get hold of (informal)\n
obtain (GET)\n 
formalpick sth up (BUY)\n
purchase (formal)\n
snap sth up (informal)
`,
R41:`
<h3>extent</h3>\n
area or length; amount:\n
From the top of the Empire State Building,\n 
you can see the full extent of Manhattan (= the area it covers).\n
We don't yet know the extent of his injuries (= how bad his injuries are).\n
Rosie's teacher was impressed by the extent of her knowledge (= how much she knew).\n
The River Nile is over 6,500 6,5000 kilometres in extent (= length).\n
the extent to which\n
`,
R42:`
<h3>sort out</h3>\n
an occasion when you put things in order or in their correct place:\n
I've had a sort-out in the bedroom - it's looking rather better.\n
`,
R43:`
<h3>queue</h3>\n
a line of people, usually standing or in cars, waiting for something:\n
Are you in the queue for tickets?\n
There was a long queue of traffic stretching down the road.\n
If you want tickets you'll have to join the queue.\n
disapproving It makes me mad when someone jumps the queue (= goes straight to the front).\n
`,
R44:`
<h3>uneven</h3>\n
not level, equal, flat, or continuous:\n
Be careful on that path - the paving stones are uneven.\n
There is an uneven distribution of wealth across the country from the north to the south.\n
The contest was very uneven - the other team was much stronger than us.\n
`,
R45:`
<h3>succeeded</h3>\n
to happen or terminate according to desire; turn out successfully; have the desired result:\n
Our efforts succeeded.\n
to thrive, prosper, grow, or the like:\n
Grass will not succeed in this dry soil.\n
to accomplish what is attempted or intended:\n
We succeeded in our efforts to start the car.\n
to attain success in some popularly recognized form, as wealth or standing:\n
The class voted him the one most likely to succeed.\n
`,
R46:`
<h3>sensible</h3>\n
having, containing, or indicative of good sense or reason : RATIONAL, REASONABLE\n
sensible people\n
made a sensible answer\n
designed for practical ends (such as comfort) rather than for appearance\n
sensible shoes\n
of a kind to be felt or perceived: such as\n
perceptible to the senses or to reason or understanding\n
felt a sensible chill\n
her distress was sensible from her manner\n
perceptible as real or material : SUBSTANTIAL\n
the sensible world in which we live\n
carchaic : perceptibly large : CONSIDERABLE\n
capable of receiving sensory impressions\n
`,
R47:`
<h3>defect</h3>\n
an imperfection or abnormality that impairs quality, function, or utility : SHORTCOMING, FLAW\n
carefully inspect a tire for defects\n
examined the porcelain for defects\n
a moral defect in his nature\n
to forsake one cause, party, or nation for another often because of a change in ideology\n
a former KGB agent who defected to America\n
to leave one situation (such as a job) often to go over to a rival\n
the reporter defected to another network\n
`,
R48:`
<h3>planning</h3>\n
the act or process of making or carrying out plans\n
specifically : the establishment of goals, policies, and procedures for a social or economic unit\n
city planning\n
business planning\n
Examples of planning in a Sentence\n
 Careful planning made the party a success.\n
`,
R49:`
<h3>purpose</h3>\n
the reason why something is done or used : the aim or intention of something\n
The purpose of the new resort is to attract more tourists.\n
There's little/no purpose in restarting the process. [=there is little/no reason to start the process again]\n
See More Examples\n
2: the feeling of being determined to do or achieve something\n
She wrote with purpose. [=she knew exactly what she wanted to write]\n
Sometimes his life seemed to lack purpose or meaning.\n
See More Examples\n
3: the aim or goal of a person : what a person is trying to do, become, etc.\n
She knew from a young age that her sole purpose (in life) was to be a writer.\n
[=she knew that all she wanted (in life) was to be a writer]\n
We shared a common purpose. [=we had the same goals]\n
He was searching for a higher purpose. [=a more meaningful reason to live, work, etc.]\n
`,
R50:`
<h3>belong</h3>\n
1: to be suitable, appropriate, or advantageous\n
a dictionary belongs in every home\n
b: to be in a proper situation\n
a man of his ability belongs in teaching\n
2a: to be the property of a person or thing —used with to\n
the book belongs to me\n
b: to be attached or bound by birth, allegiance, or dependency —usually used with to\n
they belong to their homeland\n
c: to be a member of a club, organization, or set —usually used with to\n
she belongs to a country club\n
3: to be an attribute, part, adjunct, or function of a person or thing\n
nuts and bolts belong to a car\n
4: to be properly classified\n
`,
R51:`
<h3>attend</h3>\n
1: to be present at : to go to\n
attend a meeting\n
attend law school\n
2: to pay attention to\n
attend the warning signs\n
3: to look after : to take charge of\n
… campsites … attended by park rangers.\n
— Jackson Rivers\n
4a: to go or stay with as a companion, nurse, or servant\n
ministers who attend the king\n
b: to visit professionally especially as a physician\n
a doctor attending his patients\n
5: to be present with : ACCOMPANY\n
6archaic\n
a: to wait for\n
b: to be in store for\n
`,
R52:`
<h3>reinforced</h3>\n
1: to strengthen by additional assistance, material, or support : make stronger or more pronounced\n
reinforce levees\n
reinforce the elbows of a jacket\n
reinforce ideas\n
2: to strengthen or increase by fresh additions\n
reinforce our troops\n
were reinforcing their pitching staff\n
3: to stimulate (a subject, such as an experimental animal) by reinforcement (see REINFORCEMENT sense 3)\n
also : to encourage (a response) by reinforcement\n
`,
R53:`
<h3>estimate</h3>\n
1: to judge tentatively or approximately the value, worth, or significance of\n
b: to determine roughly the size, extent, or nature of\n
c: to produce a statement of the approximate cost of\n
2: JUDGE, CONCLUDE\n
3archaic\n
a: ESTEEM\n
b: APPRAISE\n
estimate noun\n
es·​ti·​mate | \ ˈe-stə-mət\n
Definition of estimate (Entry 2 of 2)\n
1a: a rough or approximate calculation\n
b: a numerical value obtained from a statistical sample and assigned to a population parameter\n
2: a statement of the cost of work to be done\n
3: an opinion or judgment of the nature, character, or quality of a person or thing\n
had a high estimate of his abilities\n
4: the act of appraising or valuing : CALCULATION\n
`,
R54:`
<h3>stand</h3>\n
: to support oneself on the feet in an erect position\n
b: to be a specified height when fully erect\n
stands six feet two\n
c: to rise to an erect position\n
2a: to take up or maintain a specified position or posture\n
stand aside\n
can you stand on your head\n
b: to maintain one's position\n
stand firm\n
3: to be in a particular state or situation\n
stands accused\n
4: to hold a course at sea\n
5obsolete : HESITATE\n
6a: to have or maintain a relative position in or as if in a graded scale\n
stands first in the class\n
b: to be in a position to gain or lose because of an action taken or a commitment made\n
stands to make quite a profit\n
`,
R55:`
<h3>familiar</h3>\n
1: a member of the household of a high official\n
2: one who is often seen and well known\n
especially : an intimate associate : COMPANION\n
3: a spirit often embodied in an animal and held to attend and serve or guard a person\n
the loathsome toad, the witches' familiar\n
— Harvey Graham\n
4a: one who is well acquainted with something\n
familiars of violence\n
— John Updike\n
b: one who frequents a place\n
familiars of the embassy\n
— Rebecca West\n
familiar adjective\n
fa·​mil·​iar | \ fə-ˈmil-yər\n
Definition of familiar\n
1: closely acquainted : INTIMATE\n
a familiar family friend\n
2obsolete : AFFABLE, SOCIABLE\n
3a: of or relating to a family\n
remembering past familiar celebrations\n
b: frequented by families\n
a familiar resort\n
4a: being free and easy\n
the familiar association of old friends\n
b: marked by informality\n
a familiar essay\n
c: overly free and unrestrained : PRESUMPTUOUS\n
grossly familiar behavior\n
d: moderately tame\n
familiar animals\n
5a: frequently seen or experienced : easily recognized\n
a familiar theme\n
b: of everyday occurrence\n
a familiar routine\n
c: possibly known but imperfectly remembered\n
her face looked familiar\n
`,
R56:`
<h3>lost</h3>\n
: not made use of, won, or claimed\n
a lost opportunity\n
2a: no longer possessed\n
a lost reputation\n
b: no longer known\n
a lost tunnel\n
3: ruined or destroyed physically or morally : DESPERATE\n
a lost soul\n
4a: taken away or beyond reach or attainment : DENIED\n
regions lost to the faith\n
b: INSENSIBLE, HARDENED\n
lost to shame\n
5a: unable to find the way\n
b: no longer visible\n
lost in the crowd\n
c: lacking assurance or self-confidence : HELPLESS\n
lost without his glasses\n
6: RAPT, ABSORBED\n
lost in reverie\n
7: not appreciated or understood : WASTED\n
their jokes were lost on me\n
8: obscured or overlooked during a process or activity\n
lost in translation\n
9: hopelessly unattainable : FUTILE\n
a lost cause\n
`,
R57:`
<h3>order</h3>\n
1: to put in order : ARRANGE\n
The books are ordered alphabetically by author.\n
2a: to give an order to : COMMAND\n
They ordered everyone out of the house.\n
b: DESTINE, ORDAIN\n
so ordered by the gods\n
c: to command to go or come to a specified place\n
ordered back to the base\n
d: to give an order for\n
order a meal\n
I ordered the books from the company's website.\n
The judge ordered a new trial.\n
intransitive verb\n
1: to bring about order : REGULATE\n
a renascence of the spirit that orders and controls\n
— H. G. Wells\n
2a: to issue orders : COMMAND\n
The general orders and soldiers obey.\n
b: to give or place an order\n
Be sure to order before it's too late.\n
`,
R58:`
<h3>regret</h3>\n
1: to mourn the loss or death of\n
b: to miss very much\n
2: to be very sorry for\n
regrets his mistakes\n
intransitive verb\n
: to experience regret\n
`,
R59:`
<h3>shook</h3>\n
a: a set of staves and headings for one hogshead, cask, or barrel\n
b: a bundle of parts (as of boxes) ready to be put together\n
`,
R60:`
<h3>late</h3>\n
(1): coming or remaining after the due, usual, or proper time\n
a late spring\n
was late for class\n
(2): of, relating to, or imposed because of tardiness\n
had to pay a late fee\n
b(1): of or relating to an advanced stage in point of time or development:\n 
occurring near the end of a period of time or series\n
the late Middle Ages\n
(2): far advanced toward the close of the day or night\n
late hours\n
2a: living comparatively recently : now deceased —used of persons\n
the late John Doe\n
and often with reference to a specific relationship or status\n
his late wife\n
b: being something or holding some position or relationship recently but not now\n
the late belligerents\n
c: made, appearing, or happening just previous to the present time especially as the most recent of a succession\n
our late quarrel\n
`,
R61:`
<h3>folded</h3>\n
1: to lay one part over another part of\n
fold a letter\n
2: to reduce the length or bulk of by doubling over\n
fold a tent\n
3: to clasp together : ENTWINE\n
fold the hands\n
4: to clasp or enwrap closely : EMBRACE\n
5a: to incorporate (a food ingredient) into a mixture by repeated\n 
gentle overturnings without stirring or beating\n
b: to incorporate closely\n
6a: to concede defeat by withdrawing (one's cards) from play (as in poker)\n
b: to bring to an end\n
7: to bend (something, such as a layer of rock) into folds\n
`,
R62:`
<h3>abandon</h3>\n
1: to give up to the control or influence of another person or agent\n
b: to give up with the intent of never again claiming a right or interest in\n
abandon property\n
2: to withdraw from often in the face of danger or encroachment\n
abandon ship\n
soldiers forced to abandon their position\n
3: to withdraw protection, support, or help from\n
he abandoned his family\n
4: to give (oneself) over unrestrainedly\n
abandoned himself to a life of self-indulgence\n
5a: to cease from maintaining, practicing, or using\n
abandoned their native language\n
b: to cease intending or attempting to perform\n
abandoned the escape\n
`,
R63:`
<h3>abruptly</h3>\n
: in an abrupt manner : in a sudden and unexpected way\n
He left abruptly.\n
The car swerved abruptly onto the exit ramp.\n
Her career as a psychologist ended abruptly several years ago\n 
when a hacker broke into some of her private client files and made them public …\n
— Michael Logan\n
The small, rocky Anacapa Island [California] has steep cliffs\n 
which rise abruptly from the ocean on almost every side …\n
— David J. Rutherford\n
`,
R64:`
<h3>audible</h3>\n
: heard or capable of being heard\n
spoke in a barely audible voice\n
audible noun\n
Definition of audible:\n 
American football\n
: a substitute offensive or defensive play called at the line of scrimmage\n
audible verb\n
audibled; audibling \n
Definition of audible:\n
intransitive verb:
: to call an audible\n
Chicago quarterback Jim Harbaugh audibled to a pass play …\n
`,
R65:`
<h3>aware</h3>\n
1: having or showing realization, perception, or knowledge\n
be aware of the danger\n
aware of the latest advances in medicine\n
2archaic : WATCHFUL, WARY\n
`,
R66:`
<h3>explode</h3>\n
1: to burst forth with sudden violence or noise from internal energy: such as\n
a: to undergo a rapid chemical or nuclear reaction with the production of noise,\n 
heat, and violent expansion of gases dynamite explodes\n
b: to burst violently as a result of pressure from within\n
2a: to give forth a sudden strong and noisy outburst of emotion\n
exploded in anger\n
b: to move with sudden speed and force\n
exploded from the starting gate\n
3: to increase rapidly\n
the population of the city exploded\n
4: to suggest an explosion (as in appearance or effect)\n
shrubs exploded with blossoms\n
transitive verb\n
1: to cause to explode or burst noisily\n
explode a bomb\n
2: to bring into disrepute or discredit\n
explode a theory\n
3archaic : to drive from the stage by noisy disapproval\n
`,
R67:`
<h3>superseded</h3>\n
a: to cause to be set aside\n
b: to force out of use as inferior\n
2: to take the place or position of\n
3: to displace in favor of another\n
`,
R68:`
<h3>allow for</h3>\n
1: to think about or plan for (something that will or might happen in the future)\n
When purchasing property, the company should allow for possible future growth/expansion.\n
2: to consider (something) when one makes a calculation\n
The total distance, allowing for detours, is about 10 miles.\n
If you allow for inflation, he's actually earning less money now than he was 10 years ago.\n
3: to make (something) possible\n
The design of the system allows for easy upgrades.\n
`,
R69:`
<h3>distance</h3>\n
: the longer or longest dimension of an object\n
b: a measured distance or dimension\n
10 feet in length\n
— see METRIC SYSTEM TABLE, WEIGHTS AND MEASURES TABLE\n
c: the quality or state of being long\n
the length of the journey\n
2a: duration or extent in time\n
b: relative duration or stress of a sound (such as a vowel or syllable in prose or a note in music)\n
3a: distance or extent in space\n
a street with its length of colonial houses\n
b: the length of something taken as a unit of measure\n
his horse led by a length\n
4: the degree to which something (such as a course of action or a line of thought)\n 
is carried —often used in plural went to great lengths to learn the truth\n
5a: a long expanse or stretch\n
her lengths of lustrous hair\n
b: a piece constituting or usable as part of a whole or of a connected series : SECTION\n
a length of pipe\n
6: the longer or vertical dimension of a piece of clothing —often used in combination\n
elbow-length sleeves\n
at length\n
1: FULLY, COMPREHENSIVELY\n
The issue was debated at length.\n
2: at last : FINALLY\n
We at length reached the top of the mountain.\n
`,
R70:`
<h3>double check</h3>\n
transitive verb\n
: to subject to a double check\n
data double-checked for accuracy\n
intransitive verb\n
: to make a double check\n
double check noun\n
Definition of double check \n
: a careful checking to determine accuracy, condition,\n 
or progress especially of something already checked\n
`,
R71:`
<h3>there are</h3>\n
We use there is and there are when we first refer to the existence or presence of someone or something:\n
There's a letter on your desk. Julia brought it from the mail room.\n
Not: It's a letter on your desk.\n
There are three Japanese students in my class.\n
There is and there's are both singular forms. We use there's more commonly in informal speaking:\n
There is a new cafe in the centre of town which sells Indonesian food.\n
She's very determined and there's no chance she will change her mind.\n
There are is the plural form of there is and there's:\n
There are two new buildings next to the school. They are both science buildings.\n
`,
R72:`
<h3>sum</h3>\n
1. COUNTABLE NOUN\n
A sum of money is an amount of money.\n
Large sums of money were lost. [+ of]\n 
Even the relatively modest sum of £50,000 now seems beyond his reach. [+ of] \n
Synonyms: amount, quantity, volume   More Synonyms of sum\n
2. COUNTABLE NOUN\n
A sum is a simple calculation in arithmetic.\n
I can't do my sums\n
`,
R73:`
<h3>consumption</h3>\n
1. UNCOUNTABLE NOUN\n
The consumption of fuel or natural resources is the amount of them that is used or the act of using them.\n
The laws have led to a reduction in fuel consumption in the U.S.\n 
...a tax on the consumption of non-renewable energy resources. [+ of] \n
Synonyms: using up, use, loss, waste   More Synonyms of consumption\n
2. UNCOUNTABLE NOUN\n
The consumption of food or drink is the act of eating or drinking something, or the amount that is eaten or drunk.\n
[formal]\n
Most of the wine was unfit for human consumption. \n
The average daily consumption of fruit and vegetables is around 200 grams. [+ of] \n
3. UNCOUNTABLE NOUN\n
Consumption is the act of buying and using things.\n
Recycling the waste from our increased consumption is better than burning it. \n
The consumption of goods is the ultimate aim of all economic endeavour.\n
`,
R74:`
<h3>excessive</h3>\n
If you describe the amount or level of something as excessive,\n 
you disapprove of it because it is more or higher than is necessary or reasonable.\n
[disapproval]\n
...the alleged use of excessive force by police. \n
The government says that local authority spending is excessive. \n
Synonyms: immoderate, too much, enormous, extreme\n
`,
R75:`
<h3>centreline</h3>\n
A line that divides something into two equal parts.\n
The friction technology led to coarser microstructure,\n 
increased microhardness and lower residual stress states at the weld centreline.\n
`,
R76:`
<h3>gain</h3>\n
1. VERB\n
If a person or place gains something such as an ability or quality, they gradually get more of it.\n
Students can gain valuable experience by working on the campus radio or magazine. \n
While it has lost its tranquility, the area has gained in liveliness. [VERB + in]\n 
2. VERB\n
If you gain from something such as an event or situation, you get some advantage or benefit from it.\n
The company didn't disclose how much it expects to gain from the two deals. [VERB noun + from] \n
There is absolutely nothing to be gained by feeling bitter. [be VERB-ed + by] \n
It is sad that a major company should try to gain from other people's suffering. [VERB + from] \n
Synonyms: profit, make, earn, get   More Synonyms of gain\n
`,
R77:`
<h3>disappoint</h3>\n
VERB\n
If things or people disappoint you, they are not as good\n 
as you had hoped, or do not do what you hoped they would do.\n
She knew that she would disappoint him. [VERB noun] \n
Synonyms: let down, dismay, fail, dash   More Synonyms of disappoint\n
`,
R78:`
<h3>get along</h3>\n
get along or get on or get on withif people get along,\n 
they like each other and are friendly to each other\n
Richard and his sister don't get along.\n
get along with: I get along well with most of my colleagues\n
`,
R79:`
<h3>carry on</h3>\n
verb keep or maintain in unaltered condition; cause to remain or last\n
“Carry on the old traditions”\n
synonyms:bear on, continue, preserve, uphold\n
continue, go forward, proceed\n
move ahead; travel onward in time or space\n
continue, go along, go on, keep, proceed\n
continue a certain state, condition, or activity\n
verb continue talking\n
“carry on--pretend we are not in the room”\n
synonyms:continue, go on, proceed\n
verb direct the course of; manage or control\n
synonyms:conduct, deal\n
verb misbehave badly; act in a silly or improper way\n
synonyms:act up\n
`,
R80:`
<h3>same</h3>\n
ame means identical, similar, or unchanged.\n 
If you wear the same outfit as your best friend,\n 
your clothes will be exactly alike. That's NOT ok on prom night.\n
You might make the same mistake on one math quiz after another — in\n 
other words, you mess up similar problems every time.\n 
You can also say that one thing is the same as another\n 
if there's an equal amount: "We got the same pay for babysitting last summer."\n 
You might wake up at the same time every day and eat the same cereal for breakfast.\n 
If so, change it up!\n
`,
R81:`
<h3>reinforced</h3>\n
When something is reinforced, it is stronger or more supported than before,\n 
like a reinforced attitude that is stronger because peers and family members\n 
also have it, or a reinforced floor that has extra pillars and beams holding it up from below.\n
Reinforced is the adjective form of reinforce, a verb that means "to strengthen."\n 
So a good synonym for reinforced is strengthened.\n 
In high-traffic areas like school floors and stairwells,\n 
builders choose reinforced concrete, which has an internal structure of metal bars,\n 
because it will last longer. Your socks might have reinforced toes,\n 
meaning thicker fabric in that part, to prevent holes from forming.\n
`,
R82:`
<h3>comma before than</h3>\n
A comma should not be placed before “than” unless it appears in series.\n 
And, a comma may conveniently precede “than” when it introduces parenthetical\n 
information at the end of a sentence, which may only happen when facilitating\n 
readability or trying to achieve an emphatic effect.\n 
However, a comma must not be used before “than” when it ordinarily\n 
and non-parenthetically functions as a preposition or a conjunction in a sentence.\n
`,
R83:`
<h3>expertise</h3>\n
When you're an expert at something, you show expertise — or an exceptional\n 
knowledge of the subject. "He had expertise in accounting, having excelled\n 
in math, but he had even more expertise in dancing, his hobby since a small child."\n
Expertise has obvious roots in the word expert.\n 
Just about any interest or field has a place for experts.\n 
Just as one individual has expertise in world religions, another may have expertise\n 
in computer gaming. Working hard or immersing yourself in a specialty leads to expertise,\n 
and it comes through both study and hands-on experience.\n
`,
R84:`
<h3>amount</h3>\n
An amount is a number, or quantity, of something.\n 
If you're surprised by the amount of work you have to do at your new job,\n 
you probably didn't expect such a long list of tasks.\n
You might complain about the amount of time it takes\n 
for the shoes you bought to arrive: amount here means the number\n 
of days before you can wear them. Amount is also a verb, meaning "add up to,"\n 
like when you hope the tips you earn will amount to more than minimum wage.\n 
This meaning came before the noun amount, from the now obsolete definition,\n 
"to mount a horse," from the Old French amonter, "upward."\n
`
};	

	return c_answers;
		
}//end of CorrectAnswersTests
