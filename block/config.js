const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
	blocks : [
		{
			name: "NX2002",
			icon: `file:///${dirIcon}/static/nx2002.jpg`,
			index: 0,
			color: "230",
			blocks: [
				'rgb_begin',
				'rgb_setColor',
				'rgb_status',
				'rgb_color',
				'nx2002i2c_begin',
				'nx2002i2c_scanI2Cdevice',
				'nx2002i2c_hasDeviceAddress',
				'nx2002spi_init',
				'nx2002btn_init'
			]
		},
		{
			name: "NETPIE2020",
			icon: `file:///${dirIcon}/static/netpie.png`,
			index: 1,
			color: "120",
			blocks: [
				'netpie2020_connect',
				'callback',
				'netpie2020_subscribe',
				'netpie2020_unsubscribe',
				'netpie2020_publish',
				'netpie2020_reconnect',
				'client_loop',
				'netpie2020_isConnected',
				'topic','payload'
			]
		}
	]
};
