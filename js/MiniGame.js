//Game Stuff here \/\/\/
//Attack funtion
function ChooseAttack()
{
  for (var i = 1; i < 4; i++){
  document.getElementById("B"+i).innerHTML = "<button onclick='Attack("+i+")'>Attack</button>";
  }//for
}

//dps function
function playerDPSCalc()
{

  var dps = localStorage.getItem("equipedWeapon");
  var lvl = localStorage.getItem("PlayerLVL");

  dps = parseInt(dps) + 1;
  if (dps == 6){
    dps = parseInt(lvl);
  }else{
    dps = parseInt(lvl) + (parseInt(dps));
  }

  var pclass = localStorage.getItem("PlayerClass");
  if (pclass == "Mage")
  {
    dps = parseInt(dps) + 1;
  }//if
  if (dps < 0)
  {
    dps = 0;
  }//if
  return dps;

}

//attack function
function Attack(i)
{

  var playerdps = playerDPSCalc();
  var enemyI = localStorage.getItem("E"+i+"U");
  var enemyDR = enemyArray[enemyI].DR;
  playerdps = parseInt(playerdps) - parseInt(enemyDR);

  if (playerdps < 0)
  {
    playerdps = 0;
  }//if

  var enemyHP = document.getElementById("E"+i).innerHTML;
  enemyHP = parseInt(enemyHP) - parseInt(playerdps);

  if (enemyHP <= 0)
  {
    document.getElementById("E"+i).innerHTML = "DEAD";
    var enemyNum = localStorage.getItem("EnemyNum");
    enemyNum = parseInt(enemyNum) - 1;
    localStorage.setItem("EnemyNum", enemyNum);
    localStorage.setItem("E"+i+"S", 0);

  }else
  {
    document.getElementById("E"+i).innerHTML = enemyHP;
  }//if

  EnemyAttack();
  CheckWin();
  StatusLoad();
}

//InEncounter Healing
function UseGameHeal()
{
  document.getElementById("GameButtons").innerHTML = "";

  for (var i = 0; i < 5; i++) {

    var itemBool = localStorage.getItem("HealthItem"+ i +"Invent");
    var numItem = localStorage.getItem("HealthItem"+ i +"InventNum");

    if (itemBool == "true" && !(numItem < 0))
    {
      var HealthItem = "<button onclick='UseHealth(" +i+ ")'>" + healthItemArray[i].itemName + "</br> Heals: " + healthItemArray[i].heal + "HP </br> You have: "+ numItem +"</br>Click To Use</button>";
      document.getElementById("GameButtons").innerHTML += HealthItem;
    }//if

  }//for
}

function UseHealth(i)
{
  var maxHealth = localStorage.getItem("PlayerMaxHealth");
  var currentHealth = localStorage.getItem("PlayerHealth");
  var heal = healthItemArray[i].heal;

  currentHealth = parseInt(currentHealth) + parseInt(heal);

  if (currentHealth > maxHealth){
    currentHealth = maxHealth;
  }

  localStorage.setItem("PlayerHealth", currentHealth);

  var num = localStorage.getItem("HealthItem"+i+"InventNum");
  num --;
  localStorage.setItem("HealthItem"+i+"InventNum", num);

  if (num <= 0) {
    localStorage.setItem("HealthItem"+i+"Invent", "false");
  }

  localStorage.setItem("PlayerHealth", currentHealth);

  free = "false"

  EnemyAttack();
  UseGameHeal();
  StatusLoad();
  CheckWin();
}

//Run Function
function Run(win)
{
  localStorage.setItem("FreeAttack","false");
  var previousRoom = localStorage.getItem("CurrentRoom");
  if (previousRoom == 28){
    localStorage.setItem("CurrentRoom", 29);
  }else if (previousRoom == 33){
    localStorage.setItem("CurrentRoom", 40);
  }else if (previousRoom == 31){
    localStorage.setItem("CurrentRoom", 32);
  }else if (previousRoom == 69){
    localStorage.setItem("CurrentRoom", 70);
  }//if

  //if (previousRoom == bossRoom && win == true)
  window.location.href = "Game.html";
}

//Game Onload function
function GameLoad()
{
  StatusLoad();
  GetEnemies();

  var previousRoom = localStorage.getItem("CurrentRoom");
  if (previousRoom !== 69){
    document.getElementById("choices").innerHTML = "<button onclick='Run()'>Run</button><button onclick='UseGameHeal()'>Use Item</button>";
  }

  var free = localStorage.getItem("FreeAttack");

  if (free == "true"){
    document.getElementById('GameTEXT').innerHTML = "Free Attack";
  }
  ChooseAttack();
}

function GetEnemies()
{
  var previousRoom = localStorage.getItem("CurrentRoom");

  if (previousRoom == 69){

    var enemyBoss = 4;
    localStorage.setItem("E1U", enemyBoss);
    localStorage.setItem("E1S", 1);
    var enemyNum = 1;
    localStorage.setItem("EnemyNum", enemyNum);

    var enemyImage = "<img src="+enemyArray[enemyBoss].image+">";
    var enemyName = enemyArray[enemyBoss].Name;
    var enemyDescription = enemyArray[enemyBoss].description;
    var enemyHP = enemyArray[enemyBoss].Hp;

    var enemyTable = "<table><tr><th>"+enemyName+"</th></tr><tr><td>"+enemyImage+"</td></tr><tr><td>"+enemyDescription+"</td></tr><tr><td id='E1'>"+enemyHP+" HP</td></tr><tr><td id='B1'></td></tr></table>"
    document.getElementById('Game').innerHTML = enemyTable;

  }else {

    if (previousRoom == 28){
      var enemy1Unit = Math.floor((Math.random() * 1));
      var enemy2Unit = Math.floor((Math.random() * 2));
      var enemy3Unit = Math.floor((Math.random() * 1));
    }else if (previousRoom == 31){
      var enemy1Unit = Math.floor((Math.random() * 2));
      var enemy2Unit = Math.floor((Math.random() * 2) + 1);
      var enemy3Unit = Math.floor((Math.random() * 2));
    }else if (previousRoom == 33){
      var enemy1Unit = Math.floor((Math.random() * 3) + 1);
      var enemy2Unit = Math.floor((Math.random() * 2) + 2);
      var enemy3Unit = Math.floor((Math.random() * 3) + 1);
    }//if

    localStorage.setItem("E1U", enemy1Unit);
    localStorage.setItem("E1S", 1);
    localStorage.setItem("E2U", enemy2Unit);
    localStorage.setItem("E2S", 1);
    localStorage.setItem("E3U", enemy3Unit);
    localStorage.setItem("E3S", 1);

    var enemyNum = 3;
    localStorage.setItem("EnemyNum", enemyNum);

    var enemy1Image = "<img src="+enemyArray[enemy1Unit].image+">";
    var enemy1Name = enemyArray[enemy1Unit].Name;
    var enemy1Description = enemyArray[enemy1Unit].description;
    var enemy1HP = enemyArray[enemy1Unit].Hp;
    var enemy2Image = "<img src="+enemyArray[enemy2Unit].image+">";
    var enemy2Name = enemyArray[enemy2Unit].Name;
    var enemy2Description = enemyArray[enemy2Unit].description;
    var enemy2HP = enemyArray[enemy2Unit].Hp;
    var enemy3Image = "<img src="+enemyArray[enemy3Unit].image+">";
    var enemy3Name = enemyArray[enemy3Unit].Name;
    var enemy3Description = enemyArray[enemy3Unit].description;
    var enemy3HP = enemyArray[enemy3Unit].Hp;

    var enemyTable = "<table><tr><th>"+enemy1Name+"</th><th>"+enemy2Name+"</th><th>"+enemy3Name+"</th></tr><tr><td>"+enemy1Image+"</td><td>"+enemy2Image+"</td><td>"+enemy3Image+"</td></tr><tr><td>"+enemy1Description+"</td><td>"+enemy2Description+"</td><td>"+enemy3Description+"</td></tr><tr><td id='E1'>"+enemy1HP+" HP</td><td id='E2'>"+enemy2HP+" HP</td><td id='E3'>"+enemy3HP+" HP</td></tr><tr><td id='B1'></td><td id='B2'></td><td id='B3'></td></tr></table>"
    document.getElementById('Game').innerHTML = enemyTable;
  }//if
}

//enemy attack
function EnemyAttack()
{
  var free = localStorage.getItem("FreeAttack");
  var hitHurt = 0;

  if (free == "true"){
    localStorage.setItem("FreeAttack", "false");
  } else {
    for (var i = 1; i < 4; i++)
    {
      var alive = localStorage.getItem("E"+i+"S");
      if (alive == 1){
        var enemyUnit = localStorage.getItem("E"+i+"U");
        var enemyDPS = enemyArray[enemyUnit].DPS;
        var currentHealth = localStorage.getItem("PlayerHealth");
        var playerDR = localStorage.getItem("equipedArmour");

        playerDR = parseInt(playerDR) + 1;
        if (playerDR == 6){
          playerDR = 0;
        }
        enemyDPS = parseInt(enemyDPS) - parseInt(playerDR);

        if (enemyDPS < 0){
          enemyDPS = 0;
        }

        currentHealth = parseInt(currentHealth) - parseInt(enemyDPS);
        hitHurt = parseInt(hitHurt) + parseInt(enemyDPS);

        if (currentHealth <= 0){
          GameOver();
        }//if
        localStorage.setItem("PlayerHealth", currentHealth);
      }
    }//for

    document.getElementById('attacks').innerHTML = "You were hit for a total of, " + hitHurt + " damage.";

  }

  StatusLoad();
  CheckWin();
}

//win Check
function CheckWin()
{
    var enemyNum = localStorage.getItem("EnemyNum");
    var currentHealth = localStorage.getItem("PlayerHealth");

    if (enemyNum <= 0)
    {
      Win();
    }else if (PlayerHealth <= 0)
    {
      GameOver();
    }
}

//Win Function
function Win()
{

  expGain();
  lootGain();
  Run();

}

//loot stuff
function lootGain()
{

  var gold = 0;
  var enemyUnit;
  var multiplyer;
  var x;
  for (var i = 1; i < 4; i++) {
    enemyUnit = localStorage.getItem("E"+i+"U");
    enemyUnit = parseInt(enemyUnit) + 1;
    multiplyer = 100 * parseInt(enemyUnit);
    x = parseInt(multiplyer) - 50;
    gold = parseInt(gold) + (Math.random() * parseInt(multiplyer)) + parseInt(x);
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

//exp gains
function expGain()
{
  var exp = 0;
  for (var i = 1; i < 4; i++) {
    var enemyUnit = localStorage.getItem("E"+i+"U");
    exp = parseInt(exp) + parseInt(enemyArray[enemyUnit].EXP);
  }
  var oldEXP = localStorage.getItem("PlayerEXP");
  exp = parseInt(exp) + parseInt(oldEXP);
  localStorage.setItem("PlayerEXP", exp);
}

//Lose Function
function GameOver()
{
  localStorage.setItem("FreeAttack","false");
  localStorage.setItem("CurrentRoom", 54);
  window.location.href = "Game.html";
}

function StatusLoad()
{
  document.getElementById("PlayerName").innerHTML = "Name: " + localStorage.getItem("PlayerName");
  document.getElementById("PlayerClass").innerHTML = "Class: " + localStorage.getItem("PlayerClass");
  document.getElementById("PlayerHealth").innerHTML = "HP: " + localStorage.getItem("PlayerHealth");
  document.getElementById("PlayerGold").innerHTML = "GP: " + localStorage.getItem("PlayerGold");
  document.getElementById("PlayerLVL").innerHTML = "LVL: " + localStorage.getItem("PlayerLVL");
  document.getElementById("PlayerEXP").innerHTML = "EXP: " + localStorage.getItem("PlayerEXP");
  document.getElementById("GameTEXT").innerHTML = "Your health is: " + localStorage.getItem('PlayerHealth')

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
