module.exports = function(Blockly){
	'use strict';
	Blockly.JavaScript['netpie2020_connect'] = function(block) {
		var client_id = block.getFieldValue('client_id');
		var token = block.getFieldValue('token');
		var secret = block.getFieldValue('secret');
		var code = `
			#EXTINC
				#include <PubSubClient.h>
			#END
			#VARIABLE 
				const char * mqtt_server = "broker.netpie.io";
				const int mqtt_port = 1883;
				const char * mqtt_client_id = "${client_id}";
				const char * mqtt_username = "${token}";
				const char * mqtt_password = "${secret}";
				WiFiClient espClient;
				PubSubClient client(espClient, mqtt_server, mqtt_port);
			#END
			#SETUP
				client.set_callback(callback);
				
			#END
			client.connect(MQTT::Connect(mqtt_client_id).set_auth(mqtt_username, mqtt_password));
		`;
		return code;
	};

	Blockly.JavaScript['netpie2020_reconnect'] = function(block) {
		var code = `
			while(!client.connected()){
				client.connect(MQTT::Connect(mqtt_client_id).set_auth(mqtt_username, mqtt_password));
			}
		`;
		return code;
	}

	Blockly.JavaScript['callback'] = function(block) {
		var callback_statement = Blockly.JavaScript.statementToCode(block, 'callback');
		var code = `
			#FUNCTION
				void callback(const MQTT::Publish& pub){
					String topic = String(pub.topic());
					String payload = pub.payload_string();
					${callback_statement}
				}
			#END
		`;
		return code
	}

	Blockly.JavaScript['netpie2020_isConnected'] = function(block) {
		var code = `client.connected()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['netpie2020_subscribe'] = function(block) {
		var subscribe_topic = block.getFieldValue('subscribe_topic');
		var code = `
			client.subscribe("${subscribe_topic}");
		`
		return code
	}

	Blockly.JavaScript['netpie2020_unsubscribe'] = function(block) {
		var unsubscribe_topic = block.getFieldValue('unsubscribe_topic');
		var code = `
			client.unsubscribe("${unsubscribe_topic}");
		`
		return code
	}

	Blockly.JavaScript['netpie2020_publish'] = function(block) {
		var publish_topic = block.getFieldValue('publish_topic');
		var message = block.getFieldValue('message');
		var code = `
			client.publish("${publish_topic}", "${message}");
		`
		return code
	}

	Blockly.JavaScript['netpie2020_update_shadow'] = function(block) {
		if(block.itemCount_ < 1){
			return '{}'
		}else{
			var elements = new Array();
			for (var i = 0; i < block.itemCount_; i++) {
				let converted = Blockly.JavaScript.valueToCode(block, 'ADD' + i,Blockly.JavaScript.ORDER_COMMA);
				if(converted != ''){
					elements.push(converted);
				}
			}
			var shadow_data = elements.join(',');
			var code = `client.publish("@shadow/data/update", "{\\"data\\":{${shadow_data}}}");`
			return code
		}
	}

	Blockly.JavaScript['client_loop'] = function(block){
		var code = `client.loop();`;
		return code;
	}

	Blockly.JavaScript['topic'] = function(block) {
		var code = `topic`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['payload'] = function(block) {
		var code = `payload`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['key_value_pair'] = function(block){
		var key = block.getFieldValue('key');
		var value = Blockly.JavaScript.valueToCode(block, 'value',Blockly.JavaScript.ORDER_COMMA);
		var code = `\\"${key}\\":" + String(${value}) + "`
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}
	
};