
function StorePlayerData()
{
	var playerName = document.forms[0]["playername"].value;
	localStorage.setItem("playername", playerName);

	var playerHealth = document.forms[0]["playerhealth"].value;
	localStorage.setItem("playerhealth", playerHealth);

	var playerColour = document.forms[0]["playercolour"].value;
	localStorage.setItem("playercolour", playerColour);
}
