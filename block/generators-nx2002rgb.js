module.exports = function(Blockly){
	'use strict';
	Blockly.JavaScript['rgb_begin'] = function(block) {
		var code = `#EXTINC#include <NX2002RGB.h>#END
			#VARIABLE NX2002RGB rgb;#END
			#SETUP rgb.begin();#END
		`;
		return code;
	}

	Blockly.JavaScript['rgb_setColor'] = function(block) {
		var r = block.getFieldValue("R");
		var g = block.getFieldValue("G");
		var b = block.getFieldValue("B");
		var code = `rgb.setColor(${r},${g},${b});`;
		return code;
	}

	Blockly.JavaScript['rgb_status'] = function(block) {
		var status = block.getFieldValue("RGB_STATUS");
		var code = `rgb.${status}();`;
		return code;
	}

	Blockly.JavaScript['rgb_color'] = function(block) {
		var color = block.getFieldValue("COLOR");
		var code = `rgb.${color}();`;
		return code;
	}
};