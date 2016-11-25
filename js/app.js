angular.module ('App', [])
.factory ('Command', function () {
	var factory = {
			executeCommand : executeCommand,
			howMuch : howMuch
		};
	return factory;
	
	function executeCommand (command) {
		var str = command.split (new RegExp('[:]'))
		var strSugar;
		var strType;
		
		switch (str[0]) {
		case 'T':
			strType = 'tea';
			break;
		case 'H':
			strType = 'chocolate';
			break;
		case 'C':
			strType = 'coffee';
			break;
		case 'M':
			return 'Drink maker forwards any message received onto the coffee machine interface for the customer to see';
		default:
			return 'Format Error on Type';
		}

		switch (str[1]) {
		case '':
			strSugar = 'no sugar - and therefore no stick';
			break;
		case '1':
			strSugar = '1 sugar and a stick';
			break;
		case '2':
			strSugar = '2 sugars and a stick';
			break;
		default:
			return 'Format Error on sugar';
		}
		if(isNaN (parseFloat (str[2])) && !isFinite (str[2]) ){
			return 'Format Error on money';
		}
		var validator = howMuch (str[0], str[2]);
		if (validator.isTrue) {
			return 'Drink maker makes 1 ' + strType + ' with ' + strSugar ;
		} else {
			return 'Not enough money, please, Not enough money.It is missing ' + validator.remainingQuantity + ' cents';
		}
		
	}

	function howMuch(type, prix){
		var tea = 0.40;
		var chocolate = 0.50;
		var coffee = 0.60;

		switch (type) {
		case 'T':
			remainingQuantity =tea-prix
			break;
		case 'H':
			remainingQuantity =chocolate-prix
			break;
		case 'C':
			remainingQuantity =coffee-prix
			break;			
		}
		return {
			isTrue : remainingQuantity <= 0,
			remainingQuantity : remainingQuantity
		}
	}
})
;
