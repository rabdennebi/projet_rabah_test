describe('Command', function(){


	beforeEach(function(){
		angular.mock.module('App')
		angular.mock.inject(function(_Command_){
			Command = _Command_
		})
	})

	describe('Zero sugar', function () {
		it('should return tea with zero sugar', function(){
			var str = 'T::6';		
			expect(Command.executeCommand(str)).to.be.eql('Drink maker makes 1 tea with no sugar - and therefore no stick');
		})
		it('should return coffe with zero sugar', function(){
			var str = 'C::6';
			expect(Command.executeCommand(str)).to.be.equal('Drink maker makes 1 coffee with no sugar - and therefore no stick');
		})
		it('should return Chocolate with zero sugar', function(){
			var str = 'H::5';
			expect(Command.executeCommand(str)).to.be.eql('Drink maker makes 1 chocolate with no sugar - and therefore no stick');
		})

	})
	
	describe('One sugar', function () {
		it('should return tea with one sugar and a stick', function(){
			var str = 'T:1:6';		
			expect(Command.executeCommand(str)).to.be.equal('Drink maker makes 1 tea with 1 sugar and a stick');
		})
		it('should return coffe with one sugar and a stick', function(){
			var str = 'C:1:6';
			expect(Command.executeCommand(str)).to.be.equal('Drink maker makes 1 coffee with 1 sugar and a stick');
		})
		it('should return Chocolate with one sugar and a stick', function(){
			var str = 'H:1:6';
			expect(Command.executeCommand(str)).to.be.eql('Drink maker makes 1 chocolate with 1 sugar and a stick');
		})
	})
	
	describe('Two sugar', function () {
		it('should return tea with two sugars and a stick', function(){
		var str = 'T:2:6';		
		expect(Command.executeCommand(str)).to.be.equal('Drink maker makes 1 tea with 2 sugars and a stick');
		})
		it('should return coffe with two sugars and a stick', function(){
			var str = 'C:2:6';		
			expect(Command.executeCommand(str)).to.be.equal('Drink maker makes 1 coffee with 2 sugars and a stick');
		})
		it('should return Chocolate with two sugars and a stick', function(){
			var str = 'H:2:6';		
			expect(Command.executeCommand(str)).to.be.equal('Drink maker makes 1 chocolate with 2 sugars and a stick');
		})
	})
	
	describe('Enough money', function () {
		it('should return Not enough money', function(){
			var str = 'T::0';
			expect(Command.executeCommand(str)).to.be.eql('Not enough money, please, Not enough money.It is missing 0.4 cents');
		})
	})

	describe('Message', function () {		
		it('should return message', function(){
			var str = 'M:message-content';
			expect(Command.executeCommand(str)).to.be.equal('Drink maker forwards any message received onto the coffee machine interface for the customer to see');
		})
	})

	describe('Format Error', function () {		
		it('should return Format Error on Type', function(){
			var str = 'Y:2:6';
			expect(Command.executeCommand(str)).to.be.equal('Format Error on Type');
		})
		it('should return Format Error on sugar ', function(){
			var str = 'C:4:0.6';
			expect(Command.executeCommand(str)).to.be.equal('Format Error on sugar');
		})
		it('should return Format Error on money ', function(){
			var str = 'C:2:u';
			expect(Command.executeCommand(str)).to.be.equal('Format Error on money');
		})
	})
});
