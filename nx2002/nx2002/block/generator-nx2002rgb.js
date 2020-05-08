module.exports = function(Blockly){
	'use strict';
	Blockly.JavaScript['rgb_color'] = function(block) {
		var color = block.getValue();			
		var code = `#VARIABLE NX2002RGB __rgb; #END
			__rgb.setColor("${color}");
		`;
		return code;
	}
};