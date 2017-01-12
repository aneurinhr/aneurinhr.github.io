//Shove any onload stuff here
function Onload()
{
  var room = localStorage.getItem("CurrentRoom");
  StatusLoad();
  SelectRoom(room);
}

//all the choices button stuff including controlling which buttons show
function Choices(index, i)
{
  var shop = localStorage.getItem("Shop");
  var wastedTime = localStorage.getItem("TriedDungeonExit");
  var Jailed = localStorage.getItem("Jailed");
  var playerClass = localStorage.getItem("PlayerClass");
  var rouge = "false";

  if (shop == 11 && index == 14){

    if (i != 1){
      var choiceButton = "<button onclick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;

      var buybutton = "<button onclick='BasketBuy("+rouge+")'>" + "Buy Items" + "</button>";
      document.getElementById("choices").innerHTML += buybutton;
    }

  }else if (shop == 49 && index == 14){

    if (i != 0){
      var choiceButton = "<button onclick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;

      var buybutton = "<button onclick='BasketBuy("+rouge+")'>" + "Buy Items" + "</button>";
      document.getElementById("choices").innerHTML += buybutton;
    }

  }else if (index == 54){

    var choiceButton = "<button onclick='Restart()'>" + roomArray[index].choices[i].text + "</button>";
    document.getElementById("choices").innerHTML += choiceButton;

  }else if (index == 8){

    var phraseTrue = localStorage.getItem("CorrectPhrase");
    if (phraseTrue == "true") {
      document.getElementById("roomText").innerHTML = "You've already correctly answered.  You may proceed."
      var choiceButton = "<button onclick='SelectRoom(21)'>Train</button><button onclick='SelectRoom(5)'>Dungeon</button>";
      document.getElementById("choices").innerHTML = choiceButton;
    }else{
      document.getElementById("roomText").innerHTML = roomArray[index].text + "</br><input type='text' id='passPhrase' />"
      var choiceButton = "<button onclick='CheckPhrase()'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }

  }else if (index == 5 && i == 3 && wastedTime == "true"){

      var choiceButton = "<button onclick='SelectRoom(26)'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;

  }else if (index == 23 && i == 0){

    var choiceButton = "<button onclick='SellSoul(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
    document.getElementById("choices").innerHTML += choiceButton;

  }else if (index == 24){

    var choiceButton = "<button onclick='WastedTimeNow(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
    document.getElementById("choices").innerHTML += choiceButton;

  }else if (index == 39){

    var choiceButton = "<button onclick='DiceRoll(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
    document.getElementById("choices").innerHTML += choiceButton;

  }else if (index == 45 && i == 0){

    var maxHealth = localStorage.getItem("PlayerMaxHealth");
    localStorage.setItem("PlayerHealth", maxHealth);
    LoseGold(40);
    StatusLoad();

  }else if (index == 42 && Jailed == "true"){

    SelectRoom(67);

  }else if (index == 50){

    var gold = localStorage.getItem("PlayerGold");
    if (i == 0 && gold >= 10){
      var choiceButton = "<button onclick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }
    if (i == 1 && gold >= 5){
      var choiceButton = "<button onclick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }
    if (i == 2 && gold >= 3){
      var choiceButton = "<button onclick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }else if (i == 3)
    {
      var choiceButton = "<button onclick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }

  }else if (index == 76 && i == 3) {

    var rat = localStorage.getItem("RatInfo");
    if (rat == "true"){
      var choiceButton = "<button onclick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }

  }else if ((index == 31 && i == 0) || (index == 33 && i == 2)){

    if (playerClass == "Mage" || playerClass == "Rouge") {
      var choiceButton = "<button onclick='freeAttack(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }

  }else if ((index == 31 && i == 1) || (index == 33 && i == 3)){

    if (playerClass == "Rouge") {
      var choiceButton = "<button onclick='freeAttack(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }

  }else if ((index == 31 && i == 2) || (index == 33 && i == 4)){

    if (playerClass == "Mage" || playerClass == "Ranger") {
      var choiceButton = "<button onclick='freeAttack(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }

  }else if ((index == 31 && i == 3) || (index == 33 && i == 5)){

    if (playerClass == "Fighter") {
      var choiceButton = "<button onclick='freeAttack(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
      document.getElementById("choices").innerHTML += choiceButton;
    }

  }else if (index == 70){

    var choiceButton = "<button onclick='EndGameChoice(" + roomArray[index].choices[i].index + ","+i+")'>" + roomArray[index].choices[i].text + "</button>";
    document.getElementById("choices").innerHTML += choiceButton;

  }else if (index == 13 && playerClass == "Rouge" && i == 2) {

    var choiceButton = "<button onclick='StealItems(11)'>Roll to Steal</button>";
    document.getElementById("choices").innerHTML += choiceButton;

  }else{

    var choiceButton = "<button onclick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</button>";
    document.getElementById("choices").innerHTML += choiceButton;

  }//if

}

function StealItems(i)
{
  var lvl = localStorage.getItem("PlayerLVL");
  var roll = Math.floor((Math.random() * 10) + 1);
  roll = parseInt(roll) + parseInt(lvl);
  document.getElementById("roomText").innerHTML += "</br>You rolled a " + roll;
  if (roll >= 7){
    document.getElementById("roomText").innerHTML += "</br>Items Stolen.";
    var rouge = "true";
    BasketBuy(rouge);
  }else{
    document.getElementById("roomText").innerHTML += "</br>Failed to steal.";
  }

  var choiceButton = "<button onclick='SelectRoom(11)'>Continue</button>";
  document.getElementById("choices").innerHTML = choiceButton;

}

function EndGameChoice(i, indexC)
{
  if (indexC == 0){
    localStorage.setItem("EndGameChoice", "money");
  }else if (indexC == 1){
    localStorage.setItem("EndGameChoice", "power");
  }else if (indexC == 2){
    localStorage.setItem("EndGameChoice", "soul");
  }
  SelectRoom(i);
}

function freeAttack(i){
  localStorage.setItem("FreeAttack","true");
  SelectRoom(i);
}

function DiceRoll(i)
{
  var roll = Math.floor((Math.random() * 10) + 1);
  document.getElementById("roomText").innerHTML += "</br>You rolled " + roll;

  if(roll >= 5){
      document.getElementById("roomText").innerHTML += " You Survive!";
      var choiceButton = "<button onclick='SelectRoom(33)'>Back</button>";
      document.getElementById("choices").innerHTML = choiceButton;

  }else if(roll >= 2 && roll < 7){
      document.getElementById("roomText").innerHTML += " You Survive, but not without injurys.";
      var health = localStorage.getItem("PlayerHealth");
      health = parseInt(health) / 2;
      var choiceButton = "<button onclick='SelectRoom(33)'>Back</button>";
      document.getElementById("choices").innerHTML = choiceButton;

  }else{
      document.getElementById("roomText").innerHTML += " You died.  You weren't strong enough. "
      var choiceButton = "<button onclick='SelectRoom(54)'>DEAD</button>";
      document.getElementById("choices").innerHTML = choiceButton;
  }//if
}


function WastedTimeNow(i)
{
  localStorage.setItem("TriedDungeonExit", "true");
  SelectRoom(i);
}

function SellSoul(i)
{
  localStorage.setItem("Soul", "false");
  SelectRoom(i);
}

function CheckPhrase()
{
  var phrase = document.getElementById('passPhrase').value;
  if (phrase == "PASSPHRASE"){
    document.getElementById("roomText").innerHTML += "</br>Correct Answer";

    var choiceButton = "<button onclick='SelectRoom(21)'>Proceed</button>";
    document.getElementById("choices").innerHTML = choiceButton;

    localStorage.setItem("CorrectPhrase","true");
  }else{
    document.getElementById("roomText").innerHTML += "</br>Incorrect Answer";

    var choiceButton = "<button onclick='SelectRoom(5)'>Back</button>";
    document.getElementById("choices").innerHTML = choiceButton;
  }
}

function Restart()
{
  window.location.href = "index.html";
}

//Room select function is started at 0 due to the onload and it creates buttons that calls itself with the appropriate index
function SelectRoom(index)
{
  if (index !== 78)
  {
    localStorage.setItem("CurrentRoom", index);
  }

  if (index == 49 || index == 11) {
    resetBasket();
  }

  document.getElementById("roomTitle").innerHTML = roomArray[index].title;
  document.getElementById("roomText").innerHTML = "</br>" + roomArray[index].text;

  var images = roomArray[index].image;
  var shop = localStorage.getItem("Shop")

  if (images !== "img/FALSE.png") {

    if (shop == 49 && index == 14){

      document.getElementById("roomText").innerHTML += "</br><img src='img/BlackMarket.png' height='48%' width='72%'></br>";
    }else{

    images = "</br><img src='"+roomArray[index].image+"' height='48%' width='72%'></br>";
    document.getElementById("roomText").innerHTML += images;
    }

  }

  var endChoice = localStorage.getItem("EndGameChoice");
  if (index == 73 && endChoice == "money"){
    document.getElementById("roomText").innerHTML += "But you realise that your room has a massive chest in it.  You look inside to find a huge amount of gold in it.  The chest is also a dimensional space so it holds far more than it should.  Thank god it wasn't that 'It was all a dream cliche. '";
  }else if (index == 73 && endChoice == "power"){
    document.getElementById("roomText").innerHTML += "You feel different, more powerful than before.  You realise that all the power you held in that dungeon, you hold now.  Awesome.  Thank god it wasn't that 'It was all a dream cliche. '";
  }else if (index == 73 && endChoice == "soul"){
    document.getElementById("roomText").innerHTML += "You look around and everything seems like it should.  You think back to that experience and are unsure if it was a dream or not.  It felt too real for it to be such.  ";
  }
  document.getElementById("choices").innerHTML = "";

  for(var i = 0; i < roomArray[index].choices.length; i++)
  {
    Choices(index, i); //to simplify things
  }//for

  //checks if the room loading needs additional actions
  RoomEventCheck(index);
  StatusLoad();

}

//Shop item buttons
function Shop(index)
{
  localStorage.setItem("Shop", index);
  if (index == 11) {

    for(var i = 0; i < 3; i++){
      var itemButtons = "<button onclick='AddHToShop(" + healthItemArray[i].itemIndex + ")'>" + healthItemArray[i].itemName + "</br>" + healthItemArray[i].description + "</br>Price: " + healthItemArray[i].cost + "</button>";
      document.getElementById("roomText").innerHTML += itemButtons;

      var armourButtons = "<button onclick='AddAToShop(" + armourArray[i].armourIndex + ")'>" + armourArray[i].armourName + "</br>" + armourArray[i].description + "</br>Price: " + armourArray[i].cost + "</button>";
      document.getElementById("roomText").innerHTML += armourButtons;

      classShopButtons(i);
    }

  }else if (index == 49) {
    for(var i = 2; i < 5; i++){
      var itemButtons = "<button onclick='AddHToShop(" + healthItemArray[i].itemIndex + ")'>" + healthItemArray[i].itemName + "</br>" + healthItemArray[i].description + "</br>Price: " + healthItemArray[i].cost + "</button>";
      document.getElementById("roomText").innerHTML += itemButtons;

      var armourButtons = "<button onclick='AddAToShop(" + armourArray[i].armourIndex + ")'>" + armourArray[i].armourName + "</br>" + armourArray[i].description + "</br>Price: " + armourArray[i].cost + "</button>";
      document.getElementById("roomText").innerHTML += armourButtons;

      classShopButtons(i);
    }
  }

}

//buy function
function BuyItems(i, itemType, rouge)
{
  var cost;
  if (itemType == "health"){

    cost = parseInt(healthItemArray[i].cost);
    InventoryHealthItems(i);

  }else if (itemType == "armour"){

    cost = parseInt(armourArray[i].cost);
    InventoryArmourItems(i);

  }else if (itemType == "weapon"){

    var playClass = localStorage.getItem("PlayerClass");
    InventoryWeaponItems(i, playClass)

    if (playClass == "Rouge") {

      cost = parseInt(rougeWeaponsArray[i].cost);

    }else if (playClass == "Mage") {

      cost = parseInt(mageWeaponsArray[i].cost);

    }else if (playClass == "Ranger") {

      cost = parseInt(rangerWeaponsArray[i].cost);

    }else if (playClass == "Fighter") {

      cost = parseInt(fighterWeaponsArray[i].cost);

    }//class if
  }//item type if

  if (rouge !== "true"){
    LoseGold(cost);
  }
}

//Inventory
function InventoryHealthItems(i)
{

  localStorage.setItem("HealthItem"+ i +"Invent", "true");
  var x = parseInt(localStorage.getItem("HealthItem"+ i +"InventNum"));
  x = x + 1;
  localStorage.setItem("HealthItem"+ i +"InventNum", x);

}

function InventoryArmourItems(i)
{
  localStorage.setItem("Armour"+ i +"Invent", "true");
  var x = parseInt(localStorage.getItem("Armour"+ i +"InventNum"));
  x = x + 1;
  localStorage.setItem("Armour"+ i +"InventNum", x);

}

function InventoryWeaponItems(i, playClass)
{
  localStorage.setItem("Weapon"+ i +"Invent", "true");
  var x = parseInt(localStorage.getItem("Weapon"+ i +"InventNum"));
  x = x + 1;
  localStorage.setItem("Weapon"+ i +"InventNum", x);

}

//clears basket
function resetBasket(){

  for (var i = 0; i < 5; i++){
    localStorage.setItem("HealthItem"+ i +"ToBasket", "false");
    localStorage.setItem("Armour"+ i +"ToBasket", "false");
    localStorage.setItem("Weapon"+ i +"ToBasket", "false");
  }

}

//Add Health Items to basket
function AddHToShop(itemIndex)
{

  switch(itemIndex){
    case 0:
    localStorage.setItem("HealthItem0ToBasket", "true");
    break;

    case 1:
    localStorage.setItem("HealthItem1ToBasket", "true");
    break;

    case 2:
    localStorage.setItem("HealthItem2ToBasket", "true");
    break;

    case 3:
    localStorage.setItem("HealthItem3ToBasket", "true");
    break;

    case 4:
    localStorage.setItem("HealthItem4ToBasket", "true");
    break;

    default:
  }  //end switch

}

//Add Health Items to basket
function AddAToShop(armourIndex)
{

  switch(armourIndex){
    case 0:
    localStorage.setItem("Armour0ToBasket", "true");
    break;

    case 1:
    localStorage.setItem("Armour1ToBasket", "true");
    break;

    case 2:
    localStorage.setItem("Armour2ToBasket", "true");
    break;

    case 3:
    localStorage.setItem("Armour3ToBasket", "true");
    break;

    case 4:
    localStorage.setItem("Armour4ToBasket", "true");
    break;

    default:
  }  //end switch

}

//Add Health Items to basket
function AddWToShop(weaponIndex)
{

  switch(weaponIndex){
    case 0:
    localStorage.setItem("Weapon0ToBasket", "true");
    break;

    case 1:
    localStorage.setItem("Weapon1ToBasket", "true");
    break;

    case 2:
    localStorage.setItem("Weapon2ToBasket", "true");
    break;

    case 3:
    localStorage.setItem("Weapon3ToBasket", "true");
    break;

    case 4:
    localStorage.setItem("Weapon4ToBasket", "true");
    break;

    default:
  }  //end switch

}

//adds the weapon button for the correct class
function classShopButtons(i)
{
  var playClass = localStorage.getItem("PlayerClass");

  if (playClass == "Rouge") {

    var weaponButtons = "<button onclick='AddWToShop(" + rougeWeaponsArray[i].weaponIndex + ")'>" + rougeWeaponsArray[i].weaponName + "</br>" + rougeWeaponsArray[i].description + "</br>Price: " + rougeWeaponsArray[i].cost + "</button>";
    document.getElementById("roomText").innerHTML += weaponButtons;

  }else if (playClass == "Mage") {

    var weaponButtons = "<button onclick='AddWToShop(" + mageWeaponsArray[i].weaponIndex + ")'>" + mageWeaponsArray[i].weaponName + "</br>" + mageWeaponsArray[i].description + "</br>Price: " + mageWeaponsArray[i].cost + "</button>";
    document.getElementById("roomText").innerHTML += weaponButtons;

  }else if (playClass == "Ranger") {

    var weaponButtons = "<button onclick='AddWToShop(" + rangerWeaponsArray[i].weaponIndex + ")'>" + rangerWeaponsArray[i].weaponName + "</br>" + rangerWeaponsArray[i].description + "</br>Price: " + rangerWeaponsArray[i].cost + "</button>";
    document.getElementById("roomText").innerHTML += weaponButtons;

  }else if (playClass == "Fighter") {

    var weaponButtons = "<button onclick='AddWToShop(" + fighterWeaponsArray[i].weaponIndex + ")'>" + fighterWeaponsArray[i].weaponName + "</br>" + fighterWeaponsArray[i].description + "</br>Price: " + fighterWeaponsArray[i].cost + "</button>";
    document.getElementById("roomText").innerHTML += weaponButtons;

  }

}

//Switch Case check the index for certain rooms that have events.
function RoomEventCheck(index)
{
  var looted;

  switch(index) {
      case 2://start
      case 3://towels
      case 27://Train compartments
      case 30://Cave boxes
      case 35://bushes
      case 41://forest chest
      case 75:// info 10
      case 56://info 5
      case 57:// info 3

      if (index == 75){
        localStorage.setItem("RatInfo","true");
      }

      looted = checkVisited(index);

      if (looted == "false") {
        gold(index);
      }
      break;

      case 11:
      case 49:
      Shop(index);
      break;

      case 14:
      Basket();
      break;

      case 78:
      window.location.href = "MiniGame.html";
      break;

      case 63:
      localStorage.setItem("Jailed","true");
      break;

      case 66:
      var soul = localStorage.getItem("Soul");
      if (soul = "true"){
        localStorage.setItem("Soul", "false");
      }else{
        localStorage.setItem("PlayerGold", 0);
      }
      break;

      case 65:
        var wastedTime = localStorage.getItem("TriedDungeonExit");

        if (wastedTime == "true"){
          document.getElementById("roomText").innerHTML += "In fact he's the demon that took your soul. He says 'I already own your soul, so how about I take your gold for your freedom?'";
        }else {
          document.getElementById("roomText").innerHTML += "He says 'If you give me your soul I'll help you out of this. '"
        }//if
      break;

      default:
      //default code block
  }
}

//These following functions adds buttons to the buy items page / checkout page
function AddHToBasket(i)
{
  var itemButtons = "<button onclick='RemoveHealthInBasket(" + healthItemArray[i].itemIndex + ")'>" + healthItemArray[i].itemName + "</br>Price: " + healthItemArray[i].cost + "</br>" + "Remove Item" + "</button>";
  document.getElementById("roomText").innerHTML += itemButtons;
}

function AddAToBasket(i)
{
  var armourButtons = "<button onclick='RemoveArmourInBasket(" + armourArray[i].armourIndex + ")'>" + armourArray[i].armourName + "</br>Price: " + armourArray[i].cost + "</br>" + "Remove Item" + "</button>";
  document.getElementById("roomText").innerHTML += armourButtons;
}

function AddWToBasket(i)
{
  var pClass = localStorage.getItem("PlayerClass");

  if (pClass == "Rouge") {

    var weaponButtons = "<button onclick='RemoveWeaponInBasket(" + rougeWeaponsArray[i].weaponIndex + ")'>" + rougeWeaponsArray[i].weaponName + "</br>Price: " + rougeWeaponsArray[i].cost + "</br>" + "Remove Item" + "</button>";
    document.getElementById("roomText").innerHTML += weaponButtons;

  }else if (pClass == "Mage") {

    var weaponButtons = "<button onclick='RemoveWeaponInBasket(" + mageWeaponsArray[i].weaponIndex + ")'>" + mageWeaponsArray[i].weaponName + "</br>Price: " + mageWeaponsArray[i].cost + "</br>" + "Remove Item" + "</button>";
    document.getElementById("roomText").innerHTML += weaponButtons;

  }else if (pClass == "Ranger") {

    var weaponButtons = "<button onclick='RemoveWeaponInBasket(" + rangerWeaponsArray[i].weaponIndex + ")'>" + rangerWeaponsArray[i].weaponName + "</br>Price: " + rangerWeaponsArray[i].cost + "</br>" + "Remove Item" + "</button>";
    document.getElementById("roomText").innerHTML += weaponButtons;

  }else if (pClass == "Fighter") {

    var weaponButtons = "<button onclick='RemoveWeaponInBasket(" + fighterWeaponsArray[i].weaponIndex + ")'>" + fighterWeaponsArray[i].weaponName + "</br>Price: " + fighterWeaponsArray[i].cost + "</br>" + "Remove Item" + "</button>";
    document.getElementById("roomText").innerHTML += weaponButtons;

  }

}

//Removing Items from Basket
function RemoveHealthInBasket(itemIndex)
{

  switch(itemIndex){
    case 0:
    localStorage.setItem("HealthItem0ToBasket", "false");
    SelectRoom(14);
    break;

    case 1:
    localStorage.setItem("HealthItem1ToBasket", "false");
    SelectRoom(14);
    break;

    case 2:
    localStorage.setItem("HealthItem2ToBasket", "false");
    SelectRoom(14);
    break;

    case 3:
    localStorage.setItem("HealthItem3ToBasket", "false");
    SelectRoom(14);
    break;

    case 4:
    localStorage.setItem("HealthItem4ToBasket", "false");
    SelectRoom(14);
    break;

    default:
  }  //end switch

}

//Add Health Items to basket
function RemoveArmourInBasket(armourIndex)
{

  switch(armourIndex){
    case 0:
    localStorage.setItem("Armour0ToBasket", "false");
    SelectRoom(14);
    break;

    case 1:
    localStorage.setItem("Armour1ToBasket", "false");
    SelectRoom(14);
    break;

    case 2:
    localStorage.setItem("Armour2ToBasket", "false");
    SelectRoom(14);
    break;

    case 3:
    localStorage.setItem("Armour3ToBasket", "false");
    SelectRoom(14);
    break;

    case 4:
    localStorage.setItem("Armour4ToBasket", "false");
    SelectRoom(14);
    break;

    default:
  }  //end switch

}

//Add Health Items to basket
function RemoveWeaponInBasket(weaponIndex)
{

  switch(weaponIndex){
    case 0:
    localStorage.setItem("Weapon0ToBasket", "false");
    SelectRoom(14);
    break;

    case 1:
    localStorage.setItem("Weapon1ToBasket", "false");
    SelectRoom(14);
    break;

    case 2:
    localStorage.setItem("Weapon2ToBasket", "false");
    SelectRoom(14);
    break;

    case 3:
    localStorage.setItem("Weapon3ToBasket", "false");
    SelectRoom(14);
    break;

    case 4:
    localStorage.setItem("Weapon4ToBasket", "false");
    SelectRoom(14);
    break;

    default:
  }  //end switch

}//End of remove from basket functions

function BasketBuy(rouge)
{
  var totalCost = CheckCost();
  var playerCash = localStorage.getItem("PlayerGold");

  if (totalCost <= playerCash || rouge == "true"){

    for (i = 0; i <= 5; i++)
    {
      var h = localStorage.getItem("HealthItem" + i + "ToBasket");
      if (h == "true")
      {
        BuyItems(i, "health", rouge);
      }//end if

      var a = localStorage.getItem("Armour" + i + "ToBasket");
      if (a == "true")
      {
        BuyItems(i, "armour", rouge);
      }//end if

      var w = localStorage.getItem("Weapon" + i + "ToBasket");
      if (w == "true")
      {
        BuyItems(i, "weapon", rouge);
      }//end if
    }//end for

  }else if (totalCost > playerCash){
    document.getElementById("roomText").innerHTML += "</br>You do not have enough money. Try removing some items.";
  }//end if

}

//Checks the cost
function CheckCost(){
  var cost = 0;

  for (i = 0; i <= 5; i++)
  {
    var h = localStorage.getItem("HealthItem" + i + "ToBasket");
    if (h == "true")
    {
        cost = cost + parseInt(healthItemArray[i].cost);
    }//end if

    var a = localStorage.getItem("Armour" + i + "ToBasket");
    if (a == "true")
    {
        cost = cost + parseInt(armourArray[i].cost);
    }//end if

    var w = localStorage.getItem("Weapon" + i + "ToBasket");
    if (w == "true")
    {
        cost = cost + parseInt(rougeWeaponsArray[i].cost);
    }//end if
  }//end for

  return cost;
}

//gets the values of the Items to check whether they are true or false.
function Basket()
{

  for (i = 0; i <= 5; i++)
  {
    var h = localStorage.getItem("HealthItem" + i + "ToBasket");
    if (h == "true")
    {
        AddHToBasket(i);
    }//end if

    var a = localStorage.getItem("Armour" + i + "ToBasket");
    if (a == "true")
    {
        AddAToBasket(i);
    }//end if

    var w = localStorage.getItem("Weapon" + i + "ToBasket");
    if (w == "true")
    {
        AddWToBasket(i);
    }//end if
  }//end for
}

//Checks for if certain rooms have been visited
function checkVisited(index)
{
  var visited = false;

    switch(index) {
      case 2://start
      visited = localStorage.getItem("visitedPoolMain");
      if (visited == "false") {
        localStorage.setItem("visitedPoolMain", "true");
      }
      break;

      case 3://towels
      visited = localStorage.getItem("visitedTowels");
      if (visited == "false") {
        localStorage.setItem("visitedTowels", "true");
      }
      break;

      case 27://Train compartments
      visited = localStorage.getItem("visitedTrainCompartments");
      if (visited == "false") {
        localStorage.setItem("visitedTrainCompartments", "true");
      }
      break;

      case 30://Cave boxes
      visited = localStorage.getItem("visitedCaveBoxes");
      if (visited == "false") {
        localStorage.setItem("visitedCaveBoxes", "true");
      }
      break;

      case 35://bushes
      visited = localStorage.getItem("visitedForestBushes");
      if (visited == "false") {
        localStorage.setItem("visitedForestBushes", "true");
      }
      break;

      case 41://chest
      visited = localStorage.getItem("visitedForestChest");
      if (visited == "false") {
        localStorage.setItem("visitedForestChest", "true");
      }
      break;

      case 75://info 10
      visited = localStorage.getItem("visitedInfo10");
      if (visited == "false") {
        LoseGold(10);
        localStorage.setItem("visitedInfo10", "true");
      }
      break;

      case 56 ://info 5
      visited = localStorage.getItem("visitedInfo5");
      if (visited == "false") {
        LoseGold(5);
        localStorage.setItem("visitedInfo5", "true");
      }
      break;

      case 57://info 3
      visited = localStorage.getItem("visitedInfo3");
      if (visited == "false") {
        LoseGold(3);
        localStorage.setItem("visitedInfo3", "true");
      }
      break;

      default:
      visited = "false";
    }

  return visited;
}

//sorts out the gold that you get
function gold(index)
{
  var gold = 0;

  switch(index) {
    case 2://start
    case 3://towels
    gold = 200;
    break;

    case 27://Train compartments
    case 30://Cave boxes
    gold = Math.floor((Math.random() * 200) + 200)
    break;

    case 35://bushes
    gold = Math.floor((Math.random() * 300) + 300)
    break;

    case 41://chest
    gold = Math.floor((Math.random() * 400) + 600)
    break;

    default:
  }

  GainGold(gold);
}

//Gain Gold Function
function GainGold(addGold)
{
  var gold;
  gold = localStorage.getItem("PlayerGold");
  gold = parseInt(gold) + parseInt(addGold);
  localStorage.setItem("PlayerGold", gold);
}

//For when you buy Items call this to retract money from them
function LoseGold(minusGold)
{
  var gold;
  gold = localStorage.getItem("PlayerGold");
  gold = parseInt(gold) - parseInt(minusGold);
  localStorage.setItem("PlayerGold", gold);
  StatusLoad()
}

//All the Status stuff loading each time
function StatusLoad()
{
  //TO DO
  InventoryLoad();
  Leveling();
  document.getElementById("PlayerName").innerHTML = "Name: " + localStorage.getItem("PlayerName") + "&emsp;";
  document.getElementById("PlayerClass").innerHTML = "Class: " + localStorage.getItem("PlayerClass") + "&emsp;";
  document.getElementById("PlayerHealth").innerHTML = "HP: " + localStorage.getItem("PlayerHealth") + "&emsp;";
  document.getElementById("PlayerGold").innerHTML = "GP: " + localStorage.getItem("PlayerGold") + "&emsp;";
  document.getElementById("PlayerLVL").innerHTML = "LVL: " + localStorage.getItem("PlayerLVL") + "&emsp;";
  document.getElementById("PlayerEXP").innerHTML = "EXP: " + localStorage.getItem("PlayerEXP") + "&emsp;";


  var w = localStorage.getItem("equipedWeapon");
  var a = localStorage.getItem("equipedArmour");
  var pclass = localStorage.getItem("PlayerClass");
  var pLevel = localStorage.getItem("PlayerLVL");
  var weaponText = "";
  var armourText;
  var weaponDPS = "";
  var armourDR;
  document.getElementById("equipedGear").innerHTML = "ItemEquiped: &emsp;"

  if (w == 5){

    weaponText = "Fists";
    weaponDPS = 0 + parseInt(pLevel);

  }else{

    if(pclass == "Fighter"){

      weaponText = fighterWeaponsArray[w].weaponName;
      weaponDPS = parseInt(fighterWeaponsArray[w].dps) + parseInt(pLevel);

    }else if(pclass == "Mage"){

      weaponText = mageWeaponsArray[w].weaponName;
      weaponDPS = parseInt(mageWeaponsArray[w].dps) + parseInt(pLevel);

    }else if(pclass == "Rouge"){

      weaponText = rougeWeaponsArray[w].weaponName;
      weaponDPS = parseInt(rougeWeaponsArray[w].dps) + parseInt(pLevel);

    }else if(pclass == "Ranger"){

      weaponText = rangerWeaponsArray[w].weaponName;
      weaponDPS = parseInt(rangerWeaponsArray[w].dps) + parseInt(pLevel);

    }

  }
  document.getElementById("equipedGear").innerHTML += "Weapon: " + weaponText + "&emsp;";
  document.getElementById("equipedGear").innerHTML += "Total Dps: " + weaponDPS + "&emsp;";

  if (a == 5){
    armourText = "Flesh";
    armourDR = + 0 + parseInt(pLevel);
  }else{
    armourText = armourArray[a].armourName;
    armourDR =  parseInt(armourArray[a].DR) + parseInt(pLevel);
  }
  document.getElementById("equipedGear").innerHTML += "Armour: " + armourText + "&emsp;";
  document.getElementById("equipedGear").innerHTML += "Total DR: " + armourDR + "&emsp;";
}

function Leveling()
{

  var lvl = localStorage.getItem("PlayerLVL");
  var expNeeded = 5 * parseInt(lvl);
  var currentEXP = localStorage.getItem("PlayerEXP");
  if (expNeeded <= currentEXP)
  {
    lvl = parseInt(lvl) + 1;
    localStorage.setItem("PlayerLVL", lvl);
    var exp = parseInt(currentEXP) - parseInt(expNeeded);
    localStorage.setItem("PlayerEXP", exp);
    ScaleHealth();
  }//if

}

function ScaleHealth()
{

  var pclass = localStorage.getItem("PlayerClass");
  var playerHealth = localStorage.getItem("PlayerMaxHealth");
  switch (pclass){

    case "Fighter":
    playerHealth = parseInt(playerHealth) + 12;
    break;

    case "Mage":
    playerHealth = parseInt(playerHealth) + 8;
    break;

    case "Rouge":
    playerHealth = parseInt(playerHealth) + 8;
    break;

    case "Ranger":
    playerHealth = parseInt(playerHealth) + 10;
    break;

    default:
  }
  localStorage.setItem("PlayerMaxHealth", playerHealth);
  localStorage.setItem("PlayerHealth", playerHealth);

}

//invent load
function InventoryLoad(){
  document.getElementById("Items").innerHTML = "";
  var room = localStorage.getItem("CurrentRoom");

  for (var i = 0; i < 5; i++){
    HealthLoad(i, room);
    ArmourLoad(i, room);
    WeaponLoad(i, room);
  }//for

}

function HealthLoad(i, room){
  var itemBool = localStorage.getItem("HealthItem"+ i +"Invent");
  var numItem = localStorage.getItem("HealthItem"+ i +"InventNum");

  if (itemBool == "true")
  {
    if (room == 14){
      var HealthItem = "<button onclick='SellHItem(" +i+ ")'>" + healthItemArray[i].itemName + "</br> Heals: " + healthItemArray[i].heal + "HP </br> You have: "+ numItem +"</br>Click To Sell</button>";
    }else{
      var HealthItem = "<button onclick='UseHealth(" +i+ ")'>" + healthItemArray[i].itemName + "</br> Heals: " + healthItemArray[i].heal + "HP </br> You have: "+ numItem +"</br>Click To Use</button>";
    }
    document.getElementById("Items").innerHTML += HealthItem;
  }//if
}

function ArmourLoad(i, room){
  var itemBool = localStorage.getItem("Armour"+ i +"Invent");
  var numItem = localStorage.getItem("Armour"+ i +"InventNum");

  if (itemBool == "true")
  {
    if (room == 14){
      var Item = "<button onclick='SellAItem(" +i+ ")'>" + armourArray[i].armourName + "</br> Shields for: " + armourArray[i].DR + "</br> You have: "+ numItem +"</br>Click To Sell</button>";
    }else{
      var Item = "<button onclick='EquipArmour(" +i+ ")'>" + armourArray[i].armourName + "</br> Shields for: " + armourArray[i].DR + "</br> You have: "+ numItem +"</br>Click To Equip</button>";
    }
    document.getElementById("Items").innerHTML += Item;
  }//if
}

function WeaponLoad(i, room){
  var pclass = localStorage.getItem("PlayerClass");
  var itemBool = localStorage.getItem("Weapon"+ i +"Invent");
  var numItem = localStorage.getItem("Weapon"+ i +"InventNum");

  if (itemBool == "true")
  {
    if (pclass == "Fighter")
    {
      if (room == 14){
        var Item = "<button onclick='SellWItem(" +i+ ")'>" + fighterWeaponsArray[i].weaponName + "</br> Dps is: " + fighterWeaponsArray[i].dps + "</br> You have: "+ numItem +"</br>Click To Sell</button>";
      }else{
        var Item = "<button onclick='EquipWeapon(" +i+ ")'>" + fighterWeaponsArray[i].weaponName + "</br> Dps is: " + fighterWeaponsArray[i].dps + "</br> You have: "+ numItem +"</br>Click To Equip</button>";
      }
      document.getElementById("Items").innerHTML += Item;

    }else if (pclass == "Mage")
    {
      if (room == 14){
        var Item = "<button onclick='SellWItem(" +i+ ")'>" + mageWeaponsArray[i].weaponName + "</br> Dps is: " + mageWeaponsArray[i].dps + "</br> You have: "+ numItem +"</br>Click To Sell</button>";
      }else{
        var Item = "<button onclick='EquipWeapon(" +i+ ")'>" + mageWeaponsArray[i].weaponName + "</br> Dps is: " + mageWeaponsArray[i].dps + "</br> You have: "+ numItem +"</br>Click To Equip</button>";
      }
      document.getElementById("Items").innerHTML += Item;

    }else if (pclass == "Rouge")
    {
      if (room == 14){
        var Item = "<button onclick='SellWItem(" +i+ ")'>" + rougeWeaponsArray[i].weaponName + "</br> Dps is: " + rougeWeaponsArray[i].dps + "</br> You have: "+ numItem +"</br>Click To Sell</button>";
      }else{
        var Item = "<button onclick='EquipWeapon(" +i+ ")'>" + rougeWeaponsArray[i].weaponName + "</br> Dps is: " + rougeWeaponsArray[i].dps + "</br> You have: "+ numItem +"</br>Click To Equip</button>";
      }
      document.getElementById("Items").innerHTML += Item;

    }else if (pclass == "Ranger")
    {
      if (room == 14){
        var Item = "<button onclick='SellWItem(" +i+ ")'>" + rangerWeaponsArray[i].weaponName + "</br> Dps is: " + rangerWeaponsArray[i].dps + "</br> You have: "+ numItem +"</br>Click To Sell</button>";
      }else{
        var Item = "<button onclick='EquipWeapon(" +i+ ")'>" + rangerWeaponsArray[i].weaponName + "</br> Dps is: " + rangerWeaponsArray[i].dps + "</br> You have: "+ numItem +"</br>Click To Equip</button>";
      }
      document.getElementById("Items").innerHTML += Item;

    }//if
  } //if

}

//Inventory button functions below //////
function UseHealth(i)
{
  var maxHealth = localStorage.getItem("PlayerMaxHealth");
  var currentHealth = localStorage.getItem("PlayerHealth");
  var heal = healthItemArray[i].heal;

  currentHealth = parseInt(currentHealth) + parseInt(heal);

  if (currentHealth > maxHealth){
    currentHealth = maxHealth;
  }

  var num = localStorage.getItem("HealthItem"+i+"InventNum");
  num --;
  localStorage.setItem("HealthItem"+i+"InventNum", num);

  if (num <= 0) {
    localStorage.setItem("HealthItem"+i+"Invent", "false");
    localStorage.setItem("HealthItem"+i+"InventNum", 0);
  }

  localStorage.setItem("PlayerHealth", currentHealth);

  StatusLoad();
}

function EquipArmour(i)
{
  localStorage.setItem("equipedArmour", i);
  StatusLoad();
}

function EquipWeapon(i)
{
  localStorage.setItem("equipedWeapon", i);
  StatusLoad();
}

//sell functions
function SellHItem(i)
{
  var cost = healthItemArray[i].cost;
  var sell = parseInt(cost) / 2;
  GainGold(sell);

  var num = localStorage.getItem("HealthItem"+i+"InventNum");
  num --;
  localStorage.setItem("HealthItem"+i+"InventNum", num);

  if (num == 0) {
    localStorage.setItem("HealthItem"+i+"Invent", "false");
  }
  StatusLoad();
}

function SellAItem(i)
{
  var cost = armourArray[i].cost;
  var sell = parseInt(cost) / 2;
  GainGold(sell);

  var num = localStorage.getItem("Armour"+i+"InventNum");
  num --;
  localStorage.setItem("Armour"+i+"InventNum", num);

  if (num == 0) {
    localStorage.setItem("Armour"+i+"Invent", "false");
  }

  localStorage.setItem("equipedArmour", 5);
  StatusLoad();
}

function SellWItem(i)
{
  var pclass = localStorage.getItem("PlayerClass");
  if (pclass == "Fighter") {
      var cost = fighterWeaponsArray[i].cost;
  }else if (pclass == "Mage") {
      var cost = mageWeaponsArray[i].cost;
  }else if (pclass == "Rouge") {
      var cost = rougeWeaponsArray[i].cost;
  }else if (pclass == "Ranger") {
      var cost = rangerWeaponsArray[i].cost;
  }

  var sell = parseInt(cost) / 2;
  GainGold(sell);

  var num = localStorage.getItem("Weapon"+i+"InventNum");
  num --;
  localStorage.setItem("Weapon"+i+"InventNum", num);

  if (num == 0) {
    localStorage.setItem("Weapon"+i+"Invent", "false");
  }

  localStorage.setItem("equipedWeapon", 5);
  StatusLoad();
}
