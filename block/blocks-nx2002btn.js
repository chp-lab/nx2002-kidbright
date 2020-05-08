module.exports = function(Blockly){
	'use strict';

	Blockly.Blocks['nx2002btn_init'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Using NX2002 built-in button');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#FF0000');
		}
	}
};