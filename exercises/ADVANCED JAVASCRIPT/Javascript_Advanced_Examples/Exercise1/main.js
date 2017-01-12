var weaponsArray = ['Broadsword',	'Crossbow',	'Magic staff'];

function OnLoad()
{

	for (var i = 0; i < weaponsArray.length; i++) {
		var tag = tag + "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
	}

	document.forms[0]["weapons"].innerHTML = tag;
}


function SelectWeapon()
{

	var weaponNum = document.getElementById("weapons").value;

	document.getElementById("currentWeapon").innerHTML = weaponsArray[weaponNum];

}
