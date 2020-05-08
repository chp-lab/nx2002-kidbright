module.exports = function(Blockly){
	'use strict';
	Blockly.JavaScript['nx2002btn_init'] = function(block) {
		var code = `#EXTINC#include <NX2002BTN.h>#END
			#VARIABLE NX2002BTN btn;#END
			#SETUP btn.init();#END
		`;
		return code;
	};
};