module.exports = function(Blockly){
	'use strict';

	Blockly.Blocks['rgb_begin'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Using NX2002 RGB');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#0000FF');
		}
	}

	Blockly.Blocks['rgb_setColor'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Set RGB Color : ')
					.appendField('R')
					.appendField(new Blockly.FieldNumber(0,0,255), 'R')
					.appendField('G')
					.appendField(new Blockly.FieldNumber(0,0,255), 'G')
					.appendField('B')
					.appendField(new Blockly.FieldNumber(0,0,255), 'B');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#0000FF');
		}
	}

	Blockly.Blocks['rgb_status'] = {
		init: function() {
			this.appendDummyInput()
					.appendField("RGB LED Status")
					.appendField(new Blockly.FieldDropdown([
						['ON', 'on'],
						['OFF', 'off']
					]), 'RGB_STATUS');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#0000FF');
		}
	}
	
	Blockly.Blocks['rgb_color'] = {
		init: function() {
			this.appendDummyInput()
					.appendField("RGB LED Color")
					.appendField(new Blockly.FieldDropdown([
						["RED","red"],
						["GREEN", "green"],
						["BLUE", "blue"],
						["YELLOW", "yellow"],
						["ORANGE", "orange"],
						["PINK", "pink"],
						["LIGHT BLUE", "lightblue"],
						["LIGHT GREEN", "lightgreen"],
						["WHITE", "white"]
					]), "COLOR");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#0000FF');
		}
	}
};