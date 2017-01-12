//All data below Here
//Room data
var roomArray = [

  {
    title:"Dreaming",
    text:"You're running through a field whilst an army of all sorts of monsters are chasing you.  As your looking back at the army you end up falling down an abyss.  The fall seems far yet not hugely terrifying.  You feel confident that you will be fine, but without reason.  Do you wake up? ",
    image:"img/FALSE.png",
    choices: [
      {text:"WakeUp", index:"1"},
    {text:"DontWakeUp", index:"2"}
  ]//choices
},//0

{
  title:"Wake Up",
  text:"You wake up sweating from the dream of falling to your apparent death.  What a dream.  Felt so live like.  Time to get back to your daily life. ",
  image:"img/FALSE.png",
  choices: [
    {text:"GameOver", index:"54"}
]//choices
},//1

{
  title:"Pool Room",
  text:"You hit the water with a huge *SPLASH* and instantly feel the chill of the water right down to your bones.  You are freezing and splash about as you try to rush out of the water to dry off and warm up.  After drying yourself off with a nearby towel you realise you don't have any of your equipment but you do find a modest size bag of gold coins in your pocket and an empty bag.  ",
  image:"img/Cave Pool.png",
  choices: [
    {text:"Pile of towels", index:"3"},
    {text:"The freezing water you landed in", index:"4"},
    {text:"Nice Wooden Door", index:"5"}
]//choices
},//2

{
  title:"Towel Pile",
  text:"You search the pile of towels.  You manage to find another modest bag of gold coins.  Some poor soul must of lost it here.",
  image:"img/Cave Pool.png",
  choices: [
    {text:"Back", index:"2"}
]//choices
},//3

{
  title:"The Ice Cold Pool",
  text:"You see the large pool of freezing water, however you have no idea how such a shallow pool manage to save your fall. ",
  image:"img/Cave Pool.png",
  choices: [
    {text:"Back", index:"2"}
]//choices
},//4

{
  title:"Dungeon Lobby",
  text:"You enter the wooden door and see what seems to be a shop and a information stand.  There are also two doors here.  One that is labelled 'Exit' and another that is labelled 'Waste of Time'.  What do you do?",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"The Shop", index:"6"},
    {text:"The Information Stand", index:"7"},
    {text:"The Exit", index:"8"},
    {text:"The Waste of Time", index:"9"},
    {text:"Back To Pool", index:"2"}
]//choices
},//5

{
  title:"Dungeon Shop",
  text:"You walk up to the shop and what looks like an android is sitting there perfectly still.  ",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Talk To It", index:"10"},
    {text:"Browes Wares", index:"11"},
    {text:"Exit Shop", index:"5"}
]//choices
},//6

{
  title:"Information Stand",
  text:"You get to the stand and a bell sits there. ",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Ring the Bell", index:"15"},
    {text:"Leave the stand", index:"5"}
]//choices
},//7

{
  title:"Dungeon Lobby Exit",
  text:"You approach the door and suddenly it comes to life saying 'WHATS THE KEY PHRASE!?'",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back", index:"5"},
    {text:"Submit Phrase", index:"74"}
]//choices
},//8

{
  title:"Waste Of Time Door",
  text:"'Are you sure you want to waste your time with this place?'",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Yes", index:"22"},
    {text:"No", index:"5"}
]//choices
},//9

{
  title:"Android",
  text:"You say Hello to the android and it responds in a very cheery, yet robotic, voice, saying: 'Hello customer.  Buy some of my masters wares. '",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Browse wares", index:"11"}
]//choices
},//10

{
  title:"Dungeon Window Shopping",
  text:"These are the items you see:",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Take Items to the Android", index:"14"},
    {text:"Try And Shoplift", index:"12"},
    {text:"Try And Steal", index:"13"},
    {text:"Leave", index:"5"}
]//choices
},//11

{
  title:"Dungeon Shoplifter",
  text:"You try to put the items into your bag.  The android turns to you and says 'You must pay for any item you take. '",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Buy Item", index:"14"},
    {text:"Go back to browsing", index:"10"},
    {text:"Leave", index:"5"}
]//choices
},//12

{
  title:"Dungeon Rougelifting",
  text:"Try to steal?",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Go back to browsing", index:"10"},
    {text:"Leave", index:"5"},
    {text:"Steal!", index:""}
]//choices
},//13

{
  title:"Shop Buy",
  text:"",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back to browsing", index:"11"},
    {text:"Back to browsing", index:"49"}
]//choices
},//14

{
  title:"Information Stand Android",
  text:"The android from the shop runs over to the information stand and asks 'What do you want to know?'",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Whats the Pass Phrase", index:"16"},
    {text:"Where am I?", index:"17"},
    {text:"How'd I survive that fall?", index:"18"},
    {text:"Why am I here?", index:"19"},
    {text:"Waste of Time Door?", index:"20"},
    {text:"Demon?", index:"55"},
    {text:"Bye", index:"5"}
]//choices
},//15

{
  title:"Pass Phrase Information",
  text:"'Oh that.  Well it is 'PASSPHRASE'.'",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back to questions", index:"15"},
    {text:"Bye", index:"5"}
]//choices
},//16

{
  title:"Where Am I?",
  text:"'This is a magically dungeon where doors lead you to places it shouldn't.  Master's invention.  He is the god of chaos. So this dungeon should be chaotic and unpredictable!'",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back to questions", index:"15"},
    {text:"Bye", index:"5"}
]//choices
},//17

{
  title:"How Did I Survive?",
  text:"'It's a magic pool of water.  Enchanted with feather fall so getting near it slows your fall. '",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back to questions", index:"15"},
    {text:"Bye", index:"5"}
]//choices
},//18

{
  title:"Why Am I here?",
  text:"‘You’re here to face the challenges of this dungeon like the adventurer you are.  The master gets bored so he picks random people and gives them powers.  Then they have to go through the dungeon he has set up. '",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back to questions", index:"15"},
    {text:"Bye", index:"5"}
]//choices
},//19

{
  title:"Waste of Time Information",
  text:"‘Well it's as it says.  A door leading to a room that is a waste of time. '",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back to questions", index:"15"},
    {text:"Bye", index:"5"}
]//choices
},//20

{
  title:"Train Cart",
  text:"You enter the door and find yourself in a train cart that appears to be traveling.  There is not much on the train cart.  It has some overhead compartments and other normal train cart things.  There appears to be 2 doors here.  1 leading to the next carriage and strangely one that leads off of the train.  ",
  image:"img/Train Cart.png",
  choices: [
    {text:"To Cave", index:"28"},
    {text:"To Forest", index:"31"},
    {text:"Check overhead compartments", index:"27"},
    {text:"To Dungeon", index:"5"}
]//choices
},//21

{
  title:"Piano Room",
  text:"You enter the room and as soon as you put your head through the door you hear beautiful piano music.  And playing the piano is a demon. ",
  image:"img/Demon room.png",
  choices: [
    {text:"Talk to him", index:"23"},
    {text:"Leave", index:"5"}
]//choices
},//22

{
  title:"Demon",
  text:"You approach him to start talking and he says: 'Hello there adventurer.  If you want a shortcut to the end I can help you.  But it will cost you your soul.'",
  image:"img/Demon room.png",
  choices: [
    {text:"Sell Soul", index:"24"},
    {text:"Don't", index:"22"}
]//choices
},//23

{
  title:"Lounge Rift",
  text:"A rift opens up but you cannot see the other side.  You enter anyone leading to a lounge room with a table and a few drinks that look like they're years old.  You don't think you should drink them.  You also see a huge door with huge letters on it spelling 'EXIT'. ",
  image:"img/Lounge rift.png",
  choices: [
    {text:"Try Exit Door", index:"25"}
]//choices
},//24

{
  title:"Shortcut Exit Door",
  text:"You go to the exit door but it doesn't budge.  You realise that there is a large keyhole yet you have no key, and now no soul.  You got scammed. ",
  image:"img/Lounge rift.png",
  choices: [
    {text:"Go back to demon", index:"26"}
]//choices
},//25

{
  title:"Waste of Time",
  text:"The room is completely silent.  The rift is gone.  You go back towards the piano and see that the demon is gone and in his place is just a note saying 'You got your shortcut to the exit.'.",
  image:"img/No Demon room.png",
  choices: [
    {text:"Leave", index:"5"}
]//choices
},//26

{
  title:"Overhead Compartments",
  text:"You check the overhead compartment and find some gold pieces. ",
  image:"img/Train Cart.png",
  choices: [
    {text:"Back", index:"21"}
]//choices
},//27

{
  title:"Cave",
  text:"You exit the moving train to find yourself in a dark damp cave that appears to have glowing moss laying around lighting the place up.  As you are walking about you get jumped. ",
  image:"img/Cave.png",
  choices: [
    {text:"Fight", index:"78"}
]//choices
},//28

{
  title:"Cave - Post Encounter",
  text:"After defeating the enemies you get a chance to actually look around.  You find a pile of boxes and not much else.  Although there is another pool of water and very high up ledge.  It looks impossible to get up too. ",
  image:"img/Cave.png",
  choices: [
    {text:"To Train", index:"21"},
    {text:"Search Boxes", index:"30"}
]//choices
},//29

{
  title:"Cave Boxes",
  text:"You find some gold pieces in the boxes.",
  image:"img/Cave.png",
  choices: [
    {text:"Back", index:"29"}
]//choices
},//30

{
  title:"Forest 1",
  text:"You exit the train and find yourself walking into a huge forest.  You can see some shadowy figures in the distance.  They appear to be enemies.",
  image:"img/Forest.png",
  choices: [
    {text:"Get around enemies", index:"33"},
    {text:"Stealth up and surprise attack them", index:"78"},
    {text:"Fight the enemy from here", index:"78"},
    {text:"Charge into the enemy and fight them", index:"78"},
    {text:"Walk up to them and attack them face to face", index:"78"},
    {text:"To Train", index:"21"}
]//choices
},//31

{
  title:"Forest 1 - Post Encounter",
  text:"After defeating the enemies you decided to go to: ",
  image:"img/Forest.png",
  choices: [
    {text:"Train", index:"21"},
    {text:"Deeper Forest", index:"33"}
]//choices
},//32

{
  title:"Forest Part 2",
  text:"As you proceed through the forest you see a boulder with a door in it.  The door is labelled bouncy castle. You can also see something glisten in the bushes.  Up ahead a what looks like more enemies.",
  image:"img/Forest.png",
  choices: [
    {text:"Check Door", index:"34"},
    {text:"Check Bush", index:"35"},
    {text:"Get around enemies", index:"40"},
    {text:"Stealth up and surprise attack them", index:"78"},
    {text:"Fight the enemy from here", index:"78"},
    {text:"Charge into the enemy and fight them", index:"78"},
    {text:"Walk up to them staying hidden and then attack face to face", index:"78"},
    {text:"Back", index:"31"}
]//choices
},//33

{
  title:"Bouncy Castle",
  text:"You enter into what looks like a castle corridor.  You can see at the far end of the corridor there is a window.  It doesn't seem to be a bouncy castle but instead a real castle.",
  image:"img/FALSE.png",
  choices: [
    {text:"Leave", index:"33"},
    {text:"Stay", index:"37"}
]//choices
},//34

{
  title:"Bushes",
  text:"You check the bushes and find some gold pieces",
  image:"img/Forest.png",
  choices: [
    {text:"Back", index:"33"}
]//choices
},//35

{
  title:"PlaceHolder",
  text:"",
  image:"img/FALSE.png",
  choices: [
    {text:"", index:""}
]//choices
},//36

{
  title:"Bouncy Castle 2",
  text:"As you walk down the corridor you start to feel lighter and then heavier.  It's a strange feeling.  And you hear a loud 'WOOSHING' sound coming from the end of the room where the window is.  ",
  image:"img/FALSE.png",
  choices: [
    {text:"Leave", index:"33"},
    {text:"Stay", index:"38"}
]//choices
},//37

{
  title:"Bouncy Castle 3",
  text:"As you walk you get close to the window.  You look out of it from a distance and you notice the sky appears to be going up and down.  At that moment you realise this whole caste is bouncing up and down.  And the bouncing is get more and more violent.  ",
  image:"img/FALSE.png",
  choices: [
    {text:"Try to Leave", index:"39"}
]//choices
},//38

{
  title:"Bouncy Castle 4",
  text:"You struggle to leave.  You’re going to have to use all your might to escape. ",
  image:"img/FALSE.png",
  choices: [
    {text:"Roll", index:"33"}
]//choices
},//39

{
  title:"Forest 3",
  text:"You've entered a deep part of the jungle and find another door marked 'inn'.  You also find a chest.",
  image:"img/Forest.png",
  choices: [
    {text:"Back into the Forest", index:"33"},
    {text:"Inn", index:"42"},
    {text:"Chest", index:"41"}
]//choices
},//40

{
  title:"Forest Chest",
  text:"You get some gold!",
  image:"img/Forest.png",
  choices: [
    {text:"Back", index:"40"}
]//choices
},//41

{
  title:"Inn",
  text:"You enter the inn and its very busy.  You see the front bar and another door just standing alone in the middle of the inn.  It is pitch black and nobody seems to acknowledge it.  ",
  image:"img/Inn Black.png",
  choices: [
    {text:"Bar", index:"43"},
    {text:"Door", index:"44"},
    {text:"To Forest", index:"40"}
]//choices
},//42

{
  title:"Bar",
  text:"'Hello there stranger.  What will it be?'",
  image:"img/Inn Black.png",
  choices: [
    {text:"Drink for gold", index:"45"},
    {text:"Anything interesting happen?", index:"46"},
    {text:"Black Door?", index:"47"},
    {text:"Bye", index:"42"}
]//choices
},//43

{
  title:"Inn Black Door",
  text:"The moment you go up to the door and touch it you hear a voice in your head.  It’s says 'This place is where scum group together.  Where they trade illegal or stolen goods.  Do you wish to join them?'. ",
  image:"img/Inn Black.png",
  choices: [
    {text:"Accept Door", index:"48"},
    {text:"Reject Door", index:"42"}
]//choices
},//44

{
  title:"Bar Drinks",
  text:"'A pint of our finest will be 40 gold. It may be pricy but it brings you back to full health. Gotta drink straight away though. '",
  image:"img/Inn Black.png",
  choices: [
    {text:"Buy", index:"43"},
    {text:"Bye", index:"42"}
]//choices
},//45

{
  title:"Inn Info",
  text:"'Well we've had more strangers coming here recently and they all say that they came into my establishment from a forest.  Weird right?  My Inn is in the centre of town. '  You glance out of a window and make out that this is true. ",
  image:"img/Inn Black.png",
  choices: [
    {text:"Back", index:"42"}
]//choices
},//46

{
  title:"Inn Door Info",
  text:"'What black door?  All ours are unpainted wood.  I think you've had too much to drink or taken a hit to the head or something. '",
  image:"img/Inn Black.png",
  choices: [
    {text:"Back", index:"42"}
]//choices
},//47

{
  title:"Black Market",
  text:"You walk in and see what is essentially a huge underground market selling all sort of illegal goods.  You haven't even heard of a black market this big.  You don't know how you'd find anything here, but then you look up and see a sign.  Looks like these bunch of thieves aren't stupid.  Three signs catch your interest.  There is one pointing towards an adventurer’s part of the market.  There is another that shows the location of an information broker.  Lastly there is a sign that just shows an image of a Rat.  ",
  image:"img/BlackMarket.png",
  choices: [
    {text:"Gear Shopping", index:"49"},
    {text:"Info Broker", index:"50"},
    {text:"Rat Symbol", index:"51"},
    {text:"To Inn", index:"42"}
]//choices
},//48

{
  title:"Market Items",
  text:"You look around the market and these items catch your eye:  ",
  image:"img/BlackMarket.png",
  choices: [
    {text:"Buy Items", index:"14"},
    {text:"Steal", index:"52"},
    {text:"Back", index:"48"}
]//choices
},//49

{
  title:"Information Broker",
  text:"'Everything has a price. What would you like to know?'",
  image:"img/BlackMarket.png",
  choices: [
    {text:"Rat symbol? 10 gp", index:"75"},
    {text:"Magic Doors? 5 gp", index:"56"},
    {text:"Black Market? 3 gp", index:"57"},
    {text:"Back", index:"48"}
]//choices
},//50

{
  title:"Thieves base",
  text:"You walk towards the base and see too bulky looking guards.  One of them say 'What do you want?'",
  image:"img/ratMansion.png",
  choices: [
    {text:"I want to talk.", index:"76"},
    {text:"Nothing. Leave", index:"48"}
]//choices
},//51

{
  title:"Market Shoplifter",
  text:"You try to put the items into your bag, but of course you're not stealthy enough. You feel a sharp pain.  You realise that you just got stabbed in the back.  Someone seems to be saying something to you but you don't hear anything he says as your vision fades.  You find out the hard way that there is one rule in this market.  And that's do not steal from your fellow thieves.  ",
  image:"img/BlackMarket.png",
  choices: [
    {text:"GameOver", index:"54"}
]//choices
},//52

{
  title:"PLACEHOLDER",
  text:"",
  image:"img/false.png",
  choices: [
    {text:"PLACEHOLDER", index:""}
]//choices
},//53

{
  title:"Game Over",
  text:"You lost.",
  image:"img/FALSE.png",
  choices: [
    {text:"Restart?", index:""}
]//choices
},//54

{
  title:"Demon?",
  text:"'Oh he's my master.  The god of chaos.  Most adventurers tend to be confused why he is just there in that room.  '",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back to questions", index:"15"},
    {text:"Bye", index:"5"}
]//choices
},//55

{
  title:"Info Magic Doors",
  text:"'Heard a few rumours about those.  Supposedly entering doors in odd places will transport you to other places.  Nothing but rumours though.  Not enough sightings for evidence other than superstition.  You're not one of them too right? '",
  image:"img/BlackMarket.png",
  choices: [
    {text:"Back To Questions", index:"50"},
    {text:"Back To Market", index:"48"}
]//choices
},//56

{
  title:"Info Black Market",
  text:"'It's been around for almost as long as the Rat's thieves’ guild.  No one really knows how long that is due to the facts thieves don't particularly write history books.  It sells all sort of stolen and illegal goods that you couldn't get anywhere else.  There are also a lot of services people can get here.  It's the biggest of its kind and the best.  '",
  image:"img/BlackMarket.png",
choices: [
  {text:"Back To Market", index:"48"}
]//choices
},//57

{
  title:"Thieves Base - Chaos",
  text:"'Oh I see.  Well then I'm sure the boss will find this interesting. '  One of them calls for someone to escort you to their boss.  He stops by a set of solid double doors and opens it for you.  You walk in and the boss sits on a big chair.  There aren't any out for you.  'So you know him too?'",
  image:"img/ratMansion.png",
  choices: [
    {text:"Yea I know the god of chaos.  ", index:"59"},
    {text:"Nah.  ", index:"60"}
]//choices
},//58

{
  title:"Thieves Base Origin",
  text:"You tell the man that he summoned you here to run his dungeon because he's bored.  The boss reply’s with 'I'm the same. Usually anyone that gets summoned dies.  But a few, like me, stay and build a life.  I was one of the first.  This places was nothing.  I cleared it out and found that thieves used it.  I decided to build a criminal empire from here.  But I'm still stuck in his stupid game.  And he took my soul because I gave up on clearing this dumb thing.  That's when I found out that him taking my soul caused me to be immortal.  So I'm cool with it.  Although it does get boring.  I recruit most of the people that don't want to die to this empire.  Do you want to join too?'",
  image:"img/rat house inside.png",
  choices: [
    {text:"Yes", index:"61"},
    {text:"Nah", index:"48"}
]//choices
},//59

{
  title:"Kicked out of the Thieves Base",
  text:"'Then why are you wasting my time.  Leave now'  You feel like pissing him off is a stupid move.  ",
  image:"img/rat house inside.png",
  choices: [
    {text:"Leave", index:"48"}
]//choices
},//60

{
  title:"Join Thieves Guild",
  text:"You answer and join him.  He starts to go on to explain what he does, and what your role will be.  This goes on for about an hour before the equivalent to the police in this place burst through the door and surround you and the boss.  Do you:",
  image:"img/rat house inside.png",
  choices: [
    {text:"Surrender", index:"63"},
    {text:"Fight", index:"62"}
]//choices
},//61

{
  title:"Police Fight",
  text:"You try to fight them, but for each person you cut down 2 more seem to fill their place.  They eventually knock you unconscious.  ",
  image:"img/rat house inside.png",
  choices: [
    {text:"Continue", index:"63"}
]//choices
},//62

{
  title:"Jail",
  text:"You awake in a jail cell.  You're not the only one though.  There are cells full of people.  However, you are sharing your cell with one other person who is in a hooded robe",
  image:"img/Jail.png",
  choices: [
    {text:"Talk to him", index:"65"},
    {text:"Wait", index:"64"}
]//choices
},//63

{
  title:"Execution",
  text:"After what seems like hours some officers come over and take you out of your cell you notice the hooded guy had disappeared.  They take you to an execution platform with many others that you are from the thieves’ guild. ",
  image:"img/Jail.png",
  choices: [
    {text:"GameOver", index:"54"}
]//choices
},//64

{
  title:"Hooded Man",
  text:"You say hey to the hooded guy.  He lifts his hood and reveals that he is in fact a demon. ",
  image:"img/Jail.png",
  choices: [
    {text:"Give him what he wants", index:"66"},
    {text:"No", index:"64"}
]//choices
},//65

{
  title:"Cave Pool",
  text:"You land in another pool of water but this one is in that cave.  Your pretty high up, but you manage your way down without harm.  ",
  image:"img/Cave.png",
  choices: [
    {text:"Leave Cave", index:"21"}
]//choices
},//66

{
  title:"Inn",
  text:"You enter the Inn again but the black door has been replaced by a solid gold door.  ",
  image:"img/Inn Gold.png",
  choices: [
    {text:"To the Forest", index:"40"},
    {text:"Gold Door", index:"68"},
    {text:"Bar", index:"43"}
]//choices
},//67

{
  title:"Boss Room",
  text:"You enter the door and find yourself in a huge room.  In the middle seems to be an altar with a crystal on it.  (touching the crystal will start the fight)",
  image:"img/Boss Room.png",
  choices: [
    {text:"Touch Crystal", index:"69"},
    {text:"Leave to Inn", index:"67"}
]//choices
},//68

{
  title:"Boss Fight",
  text:"You touch the crystal and stones come rushing towards it.  You leap back to dodge them, but as you get back to your feet a huge stone golem stands there. ",
  image:"img/Boss Room.png",
  choices: [
    {text:"Fight", index:"78"}
]//choices
},//69

{
  title:"Boss Defeated",
  text:"After beating the golem, the god of chaos enters the room.  He says 'Well done.  That was certainly enjoyable.  For that I will give you the give to leave and a choice.  Would you want large amounts of wealth, these powers back on your plain of existence or your soul.  '",
  image:"img/Boss Room.png",
  choices: [
    {text:"Money", index:"71"},
    {text:"Power", index:"71"},
    {text:"Soul", index:"71"}
]//choices
},//70

{
  title:"Lounge Room - Boss Defeated",
  text:"You enter the lounge room and look at the key in hand and then up to the exit door. ",
  image:"img/Lounge.png",
  choices: [
    {text:"EXIT", index:"73"},
    {text:"Back", index:"72"}
]//choices
},//71

{
  title:"Boss Room - Defeated",
  text:"You enter the room filled with rubble.  That was some fight. ",
  image:"img/Boss Room.png",
  choices: [
    {text:"Lounge", index:"71"},
    {text:"Inn", index:"67"}
]//choices
},//72

{
  title:"Game Won",
  text:"You put the key in the lock and turn it.  You suddenly jerk awake in bed. ",
  image:"img/FALSE.png",
  choices: [
    {text:"You Won", index:"54"}
]//choices
},//73

{
  title:"Submit Phrase",
  text:"Incorrect passphrase.  Maybe the information stand can help.",
  image:"img/Dungeon Start.png",
  choices: [
    {text:"Back To Dungeon", index:"5"}
]//choices
},//74

{
  title:"Info Rat symbol",
  text:"'The rat symbol is the symbol of the lead thieves’ guild here.  They own and police the black market, of course not for free.  They are ruthless thieves, some saying they're more like assassins than thieves.  There's also a rumour going around that he sold his soul to a chaotic being for his power.  Oh and they set a golden rule here.  Don't steal.  Honour amongst thieves right.  '",
  image:"img/BlackMarket.png",
  choices: [
    {text:"Back To Questions", index:"50"},
    {text:"Back To Market", index:"48"}
]//choices
},//75

{
  title:"Thieves base 2",
  text:"'For what reason?'",
  image:"img/ratMansion.png",
  choices: [
    {text:"I'm curious about him", index:"77"},
    {text:"Dunno", index:"77"},
    {text:"Leave", index:"48"},
    {text:"Chaotic friend.  ", index:"58"}
]//choices
},//76

{
  title:"Thieves base Stupid",
  text:"'You must be crazy.  No one sees the boss without good reason.  Get outta here.'  They proceed to force you to leave.  Fighting them here would be stupid.",
  image:"img/ratMansion.png",
  choices: [
    {text:"leave", index:"48"}
]//choices
},//77

{
  title:"Fight",
  text:"",
  image:"img/FALSE.png",
  choices: [
    {text:"", index:""}
]//choices
}//78

]//Room Array

//// // // Item Arrays // // ////

//Health Items
var healthItemArray = [

  {
    itemName:"Apple",
    itemIndex:"0",
    description:"A delicious red apple. Heals 5 HP",
    itemType:"Health",
    cost:"30",
    heal:"5"
  },//Item 0

  {
    itemName:"Meat",
    itemIndex:"1",
    description:"This meat belongs to an unspecified creature. Heals 10 HP",
    itemType:"Health",
    cost:"50",
    heal:"10"
  },//Item 1


  {
    itemName:"Lesser Health Potion",
    itemIndex:"2",
    description:"Looks watered down. Heals 15 HP",
    itemType:"Health",
    cost:"100",
    heal:"15"
  },//Item 2

  {
    itemName:"Health Potion",
    itemIndex:"3",
    description:"A magical potion that sooths injuries. Heals 30 HP",
    itemType:"Health",
    cost:"250",
    heal:"30"
  },//Item 3

  {
    itemName:"Large Health Potion",
    itemIndex:"4",
    description:"This one has a kick to it. Heals 50 HP",
    itemType:"Health",
    cost:"500",
    heal:"50"
  }//Item 4

]//Healing Array



//Armour
var armourArray = [

  {
    armourName:"Moldy Leathers",
    armourIndex:"0",
    description:"This is gross. Will it even do anything? 1 DR",
    cost:"200",
    DR:"1"
  },//Armour 0

  {
    armourName:"Studded Leathers",
    armourIndex:"1",
    description:"Normal studded leather.  Not to impresive. 2 DR",
    cost:"500",
    DR:"2"
  },//Armour 1

  {
    armourName:"Chain Mail",
    armourIndex:"2",
    description:"This metal shirt should stop things stabbing.  3 DR",
    cost:"1000",
    DR:"3"
  },//Armour 2

  {
    armourName:"Dragon Leathers",
    armourIndex:"3",
    description:"It also warms you up! 4 DR",
    cost:"1500",
    DR:"4"
  },//Armour 3

  {
    armourName:"Mithral Chain Mail",
    armourIndex:"4",
    description:"It feels like your wearing nothing at all! 5 DR",
    cost:"2500",
    DR:"5"
  }//Armour 4

]



//Rouge Weapons
var rougeWeaponsArray = [

    {
      weaponName:"Rusty Dagger",
      weaponIndex:"0",
      description:"Will probably give a tetanus debuff (No it won't). 1 dps",
      cost:"200",
      dps:"1"
    },//Weapon 0

    {
      weaponName:"Dagger",
      weaponIndex:"1",
      description:"A normal metal Dagger. 2 dps",
      cost:"500",
      dps:"2"
    },//Weapon 1

    {
      weaponName:"Thieves Dagger",
      weaponIndex:"2",
      description:"Used to mug people in alleys. 3 dps",
      cost:"1000",
      dps:"3"
    },//Weapon 2

    {
      weaponName:"Assassins Dagger",
      weaponIndex:"3",
      description:"Used all the time to slit throats. 4 dps",
      cost:"1500",
      dps:"4"
    },//Weapon 3

    {
      weaponName:"Shadow Dagger",
      weaponIndex:"4",
      description:"This would be impossible to find if you lose it. 5 dps",
      cost:"2500",
      dps:"5"
    }//Weapon 4

]



//MAge Weapons
var mageWeaponsArray = [

    {
      weaponName:"cracked wand",
      weaponIndex:"0",
      description:"how is this thing working? 1 dps",
      cost:"200",
      dps:"1"
    },//Weapon 0

    {
      weaponName:"simple wand",
      weaponIndex:"1",
      description:"Ollivander makes them good. 2 dps",
      cost:"500",
      dps:"2"
    },//Weapon 1

    {
      weaponName:"Staff",
      weaponIndex:"2",
      description:"Size does matter. 3 dps",
      cost:"1000",
      dps:"3"
    },//Weapon 2

    {
      weaponName:"Crystal wand",
      weaponIndex:"3",
      description:"This thing is sweet! 4 dps",
      cost:"1500",
      dps:"4"
    },//Weapon 3

    {
      weaponName:"Flaming staff",
      weaponIndex:"4",
      description:"How do you weild this thing? 5 dps",
      cost:"2500",
      dps:"5"
    }//Weapon 4

]



//Ranger Weapons
var rangerWeaponsArray = [

    {
      weaponName:"Stringless Bow",
      weaponIndex:"0",
      description:"Guess its a club?  Thats ranged? 1 dps",
      cost:"200",
      dps:"1"
    },//Weapon 0

    {
      weaponName:"Bow",
      weaponIndex:"1",
      description:"It shoots arrows. 2 dps",
      cost:"500",
      dps:"2"
    },//Weapon 1

    {
      weaponName:"Snipers Bow",
      weaponIndex:"2",
      description:"This thing is silent and deadly. 3 dps",
      cost:"1000",
      dps:"3"
    },//Weapon 2

    {
      weaponName:"Star Bow",
      weaponIndex:"3",
      description:"Shooting Stars! Make a wish! 4 dps",
      cost:"1500",
      dps:"4"
    },//Weapon 3

    {
      weaponName:"DragonBreath Bow",
      weaponIndex:"4",
      description:"Shoots fire! This is awesome! 5 dps",
      cost:"2500",
      dps:"5"
    }//Weapon 4

]



//Fighter Weapons
var fighterWeaponsArray = [

    {
      weaponName:"Chipped Sword",
      weaponIndex:"0",
      description:"This thing will have a hard time cutting. 1 dps",
      cost:"200",
      dps:"1"
    },//Weapon 0

    {
      weaponName:"Sword",
      weaponIndex:"1",
      description:"Cuts things that need dying. 2 dps",
      cost:"500",
      dps:"2"
    },//Weapon 1

    {
      weaponName:"Claymore",
      weaponIndex:"2",
      description:"This hunk of metal destroys everthing. 3 dps",
      cost:"1000",
      dps:"3"
    },//Weapon 2

    {
      weaponName:"Chainsaw",
      weaponIndex:"3",
      description:"I thought this was a medival themed dungeon? 4 dps",
      cost:"1500",
      dps:"4"
    },//Weapon 3

    {
      weaponName:"Gut's Sword",
      weaponIndex:"4",
      description:"This is bigger than the claymore! 5 dps",
      cost:"2500",
      dps:"5"
    }//Weapon 4

]

//Enemy Data \/\/\/
var enemyArray = [

    {
      Name:"Slime",
      Unit:0,
      Hp:3,
      DPS:1,
      DR:0,
      EXP:3,
      image:"img/CuteDungeonChaosSlime.png",
      description:"Cute little Devourer."
    },//Enemy 0

    {
      Name:"Goblin",
      Unit:1,
      Hp:7,
      DPS:3,
      DR:1,
      EXP:5,
      image:"img/PixelGoblinBearded.png",
      description:"These are vicous little things."
    },//Enemy 1

    {
      Name:"Orc",
      Unit:2,
      Hp:15,
      DPS:7,
      DR:2,
      EXP:10,
      image:"img/PixelOrc.png",
      description:"Looks like he has nothing but scar tissue."
    },//Enemy 2

    {
      Name:"Cyclops",
      Unit:3,
      Hp:30,
      DPS:15,
      DR:3,
      EXP:25,
      image:"img/Pixel'Cyclops'.png",
      description:"It’s actually just a bigger orc that’s missing an eye."
    },//Enemy 3

    {
      Name:"Rock Golem",
      Unit:4,
      Hp:50,
      DPS:20,
      DR:5,
      EXP:100,
      image:"img/PixelGolem.png",
      description:"This Bulky Heap of Rocks seems to be your last Challenge."
    }//Enemy 4

]
