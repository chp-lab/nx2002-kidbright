module.exports = function(Blockly){
	'use strict';

	Blockly.Blocks['netpie2020_connect'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Connect to NETPIE2020');
			this.appendDummyInput()
					.appendField('Client ID : ')
					.appendField(new Blockly.FieldTextInput('--netpie_client_id--'), 'client_id');
			this.appendDummyInput()
					.appendField('Token : ')
					.appendField(new Blockly.FieldTextInput('--token--'), 'token');
			this.appendDummyInput()
					.appendField('Secret : ')
					.appendField(new Blockly.FieldTextInput('--secret--'), 'secret');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setTooltip('Connect to NETPIE2020');
			this.setColour('#28AE28');
		}
	}

	Blockly.Blocks['callback'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Callback message arrived (topic, payload)');
			this.appendStatementInput('callback')
					.setCheck(null);
			this.setColour('#8A2BE2');
		}
	}

	Blockly.Blocks['netpie2020_reconnect'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Reconnect NETPIE2020');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#FFD700');
		}
	}

	Blockly.Blocks['client_loop'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('NETPIE Client loop');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#00BFFF');
		}
	}

	Blockly.Blocks['netpie2020_isConnected'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('NETPIE2020 is connected');
			this.setOutput(true, 'Boolean');
			this.setColour('#DA70D6');
		}
	}

	Blockly.Blocks['topic'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('topic');
			this.setOutput(true, 'String');
			this.setColour('#00008B');
		}
	}

	Blockly.Blocks['payload'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('payload');
			this.setOutput(true, 'byte *');
			this.setColour('#00008B');
		}
	}

	Blockly.Blocks['netpie2020_subscribe'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Subscribe Topic')
					.appendField(new Blockly.FieldTextInput('--topic--'), 'subscribe_topic');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#1E90FF');
		}
	}

	Blockly.Blocks['netpie2020_unsubscribe'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Unsubscribe Topic')
					.appendField(new Blockly.FieldTextInput('--topic--'), 'unsubscribe_topic');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#DC4242');
		}
	}

	Blockly.Blocks['netpie2020_publish'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Publish Message to Topic ')
					.appendField(new Blockly.FieldTextInput('--topic--'), 'publish_topic')
					.appendField('Message :')
					.appendField(new Blockly.FieldTextInput('--message--'), 'message');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#DAA520');
		}
	}

	
};