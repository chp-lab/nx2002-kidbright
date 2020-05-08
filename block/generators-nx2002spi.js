module.exports = function(Blockly){
	'use strict';
	Blockly.JavaScript['nx2002spi_init'] = function(block) {
		var code = `#EXTINC#include <NX2002SPI.h>#END
			#VARIABLE NX2002SPI SPI_PORT;#END
			#SETUP SPI_PORT.init(); #END
		`;
		return code;
	};
};