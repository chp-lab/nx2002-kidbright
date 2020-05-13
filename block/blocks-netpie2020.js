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
			this.setOutput(true, null);
			this.setColour('#00008B');
		}
	}

	Blockly.Blocks['payload'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('payload');
			this.setOutput(true, null);
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

	Blockly.Blocks['netpie2020_update_shadow'] = {
		init: function(){    
			this.itemCount_ = 1;
			this.appendDummyInput()
					.appendField('Update Shadow : ');
			this.updateShape_();
			//this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(Blockly.Msg.TEXTS_HUE);
		},
		mutationToDom: function() {
			var container = document.createElement('mutation');
			container.setAttribute('items', this.itemCount_);
			return container;
		},
		domToMutation: function(xmlElement) {
			this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
			this.updateShape_();
		},
		storeConnections_: function() {
			this.valueConnections_ = [];
			for (var i = 0; i < this.itemCount_; i++) {
				this.valueConnections_.push(this.getInput('ADD' + i).connection.targetConnection);
			}
		},
		restoreConnections_: function() {
			for (var i = 0; i < this.itemCount_; i++) {
				Blockly.Mutator.reconnect(this.valueConnections_[i], this, 'ADD' + i);
			}
		},
		addItem_: function() {
			this.storeConnections_();
			var update = function() {
				this.itemCount_++;
			};
			this.update_(update);
			this.restoreConnections_();
			// Add shadow block
			if (this.itemCount_ > 1) {
				// Find shadow type
				var firstInput = this.getInput('ADD' + 0);
				if (firstInput && firstInput.connection.targetConnection) {
					var newInput = this.getInput('ADD' + (this.itemCount_ - 1));
					var shadowInputDom = firstInput.connection.getShadowDom();
					if (shadowInputDom) {
						var shadowDom = document.createElement('shadow');
						var shadowInputType = shadowInputDom.getAttribute('type');
						shadowDom.setAttribute('type', shadowInputType);
						var shadowDomField = document.createElement('field');
						shadowDomField.setAttribute('name', 'NUM');
						shadowDom.appendChild(shadowDomField);
						if (shadowDom) {
							shadowDom.setAttribute('id', Blockly.utils.genUid());
							newInput.connection.setShadowDom(shadowDom);
							newInput.connection.respawnShadow_();
						}
					}
				}
			}
		},
		removeItem_: function() {
			this.storeConnections_();
			var update = function() {
				this.itemCount_--;
			};
			this.update_(update);
			this.restoreConnections_();
		},
		update_: function(update) {
			Blockly.Events.setGroup(true);
			var block = this;
			var oldMutationDom = block.mutationToDom();
			var oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);
			var savedRendered = block.rendered;
			block.rendered = false;
			if (update) update.call(this);
			this.updateShape_();
			block.rendered = savedRendered;
			block.initSvg();
			var group = Blockly.Events.getGroup();
			var newMutationDom = block.mutationToDom();
			var newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);
			if (oldMutation != newMutation) {
				Blockly.Events.fire(new Blockly.Events.BlockChange(
						block, 'mutation', null, oldMutation, newMutation));
				setTimeout(function() {
					Blockly.Events.setGroup(group);
					block.bumpNeighbours_();
					Blockly.Events.setGroup(false);
				}, Blockly.BUMP_DELAY);
			}
			if (block.rendered) {
				block.render();
			}
			Blockly.Events.setGroup(false);
		},
		/**
		 * Modify this block to have the correct number of inputs.
		 * @private
		 * @this Blockly.Block
		 */
		updateShape_: function() {
			var that = this;
			var add = function() {
				that.addItem_();
			};
			var remove = function() {
				that.removeItem_();
			};
			if (this.itemCount_) {
				if (this.getInput('EMPTY')) this.removeInput('EMPTY');
				if (!this.getInput('TITLE')) {
					this.appendDummyInput('TITLE')
							.appendField("data");
				}
			} else {
				if (this.getInput('TITLE')) this.removeInput('TITLE');
				if (!this.getInput('EMPTY')) {
					this.appendDummyInput('EMPTY')
							.appendField("Create Shadow data");
				}
			}
			var i = 0;
			// Add new inputs.
			for (i = 0; i < this.itemCount_; i++) {
				if (!this.getInput('ADD' + i)) {
					this.appendValueInput('ADD' + i);
				}
			}
			// Remove deleted inputs.
			while (this.getInput('ADD' + i)) {
				this.removeInput('ADD' + i);
				i++;
			}
			if (this.getInput('BUTTONS')) this.removeInput('BUTTONS');
			var buttons = this.appendDummyInput('BUTTONS');
			if (this.itemCount_ > 0) {      
				buttons.appendField(new Blockly.FieldImage("/static/icons/minus.png", 20, 20, "*",remove,true));
			}
			buttons.appendField(new Blockly.FieldImage("/static/icons/plus.png", 20, 20, "*", add,true));
			var showHorizontalList = this.itemCount_ < 1;
			this.setInputsInline(showHorizontalList);    
		}
	}

	Blockly.Blocks['key_value_pair'] = {
		init: function() {
			this.appendDummyInput()
					.appendField('Key:')
					.appendField(new Blockly.FieldTextInput('key'), 'key');
			this.appendValueInput('value').appendField('Value:');
			this.setOutput(true, null);
			this.setColour('#ff1a1a');
		}
	}
};