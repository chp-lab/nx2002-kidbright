module.exports = function(Blockly){
	'use strict';

	Blockly.Blocks['nx2002spi_init'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Using NX2002 SPI port');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#FF7700');
		}
	}
};