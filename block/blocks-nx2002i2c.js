module.exports = function(Blockly){
	'use strict';

	Blockly.Blocks['nx2002i2c_begin'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Using NX2002 I2C port');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#00C306');
		}
	}

	Blockly.Blocks['nx2002i2c_scanI2Cdevice'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Number of connected I2C device');
			this.setInputsInline(true);
			this.setOutput(true, "Number");
			this.setColour('#00C306');
		}
	}

	Blockly.Blocks['nx2002i2c_hasDeviceAddress'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('has I2C device At Address ')
					.appendField(new Blockly.FieldNumber(1,1,127), 'address');
			this.setInputsInline(true);
			this.setOutput(true, "Boolean");
			this.setColour('#00C306');
		}
	}
};