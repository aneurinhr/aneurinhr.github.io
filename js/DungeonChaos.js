function StartGame()
{
  initializeGame();
  window.location.href = "ChooseClass.html";
}

function initializeGame()
{
  localStorage.setItem("EndGameChoice", "none");
  localStorage.setItem("visitedInfo10", "false");
  localStorage.setItem("visitedInfo5", "false");
  localStorage.setItem("visitedInfo3", "false");
  localStorage.setItem("FreeAttack","false");
  localStorage.setItem("RatInfo","false");
  localStorage.setItem("Jailed","false");
  localStorage.setItem("CorrectPhrase","false");
  localStorage.setItem("CurrentRoom", 0);
  localStorage.setItem("Soul", "true");
  localStorage.setItem("Setup", "false");
  localStorage.setItem("Items", 0);
  localStorage.setItem("visitedTowels", "false");
  localStorage.setItem("visitedPoolMain", "false");
  localStorage.setItem("visitedTrainCompartments", "false");
  localStorage.setItem("visitedCaveBoxes", "false");
  localStorage.setItem("visitedForestBushes", "false");
  localStorage.setItem("visitedForestChest", "false");
  localStorage.setItem("TriedDungeonExit", "false");
  localStorage.setItem("HealthItem0ToBasket", "false");
  localStorage.setItem("HealthItem1ToBasket", "false");
  localStorage.setItem("HealthItem2ToBasket", "false");
  localStorage.setItem("HealthItem3ToBasket", "false");
  localStorage.setItem("HealthItem4ToBasket", "false");
  localStorage.setItem("Armour0ToBasket", "false");
  localStorage.setItem("Armour1ToBasket", "false");
  localStorage.setItem("Armour2ToBasket", "false");
  localStorage.setItem("Armour3ToBasket", "false");
  localStorage.setItem("Armour4ToBasket", "false");
  localStorage.setItem("Weapon0ToBasket", "false");
  localStorage.setItem("Weapon1ToBasket", "false");
  localStorage.setItem("Weapon2ToBasket", "false");
  localStorage.setItem("Weapon3ToBasket", "false");
  localStorage.setItem("Weapon4ToBasket", "false");
  initializeInvent();
  localStorage.setItem("equipedWeapon", 5);
  localStorage.setItem("equipedArmour", 5);
  localStorage.setItem("Encounter", "false");
}

function initializeInvent()
{
  localStorage.setItem("HealthItem0Invent", "false");
  localStorage.setItem("HealthItem0InventNum", 0);

  localStorage.setItem("HealthItem1Invent", "false");
  localStorage.setItem("HealthItem1InventNum", 0);

  localStorage.setItem("HealthItem2Invent", "false");
  localStorage.setItem("HealthItem2InventNum", 0);

  localStorage.setItem("HealthItem3Invent", "false");
  localStorage.setItem("HealthItem3InventNum", 0);

  localStorage.setItem("HealthItem4Invent", "false");
  localStorage.setItem("HealthItem4InventNum", 0);

  localStorage.setItem("Armour0Invent", "false");
  localStorage.setItem("Armour0InventNum", 0);

  localStorage.setItem("Armour1Invent", "false");
  localStorage.setItem("Armour1InventNum", 0);

  localStorage.setItem("Armour2Invent", "false");
  localStorage.setItem("Armour2InventNum", 0);

  localStorage.setItem("Armour3Invent", "false");
  localStorage.setItem("Armour3InventNum", 0);

  localStorage.setItem("Armour4Invent", "false");
  localStorage.setItem("Armour4InventNum", 0);

  localStorage.setItem("Weapon0Invent", "false");
  localStorage.setItem("Weapon0InventNum", 0);

  localStorage.setItem("Weapon1Invent", "false");
  localStorage.setItem("Weapon1InventNum", 0);

  localStorage.setItem("Weapon2Invent", "false");
  localStorage.setItem("Weapon2InventNum", 0);

  localStorage.setItem("Weapon3Invent", "false");
  localStorage.setItem("Weapon3InventNum", 0);

  localStorage.setItem("Weapon4Invent", "false");
  localStorage.setItem("Weapon4InventNum", 0);
}

function PlayGame()
{
  var start;
  start = localStorage.getItem("Setup");
  if (start == "true")
  {
  window.location.href = "Game.html";
  }
}

//function GameOver()
//{
//  window.location.href = "GameOver.html";
//}

//Creating the player status
function CreatePlayer()
{
  var playerName;
  var playerClass;
  var playerHealth;
  var canStart = false;

  playerName = document.getElementById("playername").value;
  var playerClassNum = document.getElementById("playerclass").value;

  //if (Here is meant to be if playerName = nothing) {
    if(playerClassNum == 1){
      playerClass = "Fighter";
      playerHealth = 12;
    }else if(playerClassNum == 2){
      playerClass = "Mage";
      playerHealth = 8;
    }else if(playerClassNum == 3){
      playerClass = "Rouge";
      playerHealth = 8;
    }else if(playerClassNum == 4){
      playerClass = "Ranger";
      playerHealth = 10;
    }else {
      alert("Please try again");
    }

    localStorage.setItem("PlayerName", playerName);
    localStorage.setItem("PlayerClass", playerClass);
    localStorage.setItem("PlayerMaxHealth", playerHealth);
    localStorage.setItem("PlayerHealth", playerHealth);
    localStorage.setItem("PlayerLVL", 1);
    localStorage.setItem("PlayerEXP", 0);
    localStorage.setItem("PlayerGold", 0);

    localStorage.removeItem("Setup");
    localStorage.setItem("Setup", "true");
  //}
}

function ShowHelp()
{
  document.getElementById("helpText").style.display = "block";
  document.getElementById("helpText2").style.display = "block";
}
