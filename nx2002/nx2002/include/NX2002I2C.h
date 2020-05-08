#ifndef NX2002I2C_H
#define NX2002I2C_H

#include "Arduino.h"
#include "Wire.h"

class NX2002I2C {
	private:
		int _SDAPIN;
		int _SCLPIN;
		
	public:
		NX2002I2C(void);
		NX2002I2C(int sda, int scl);
		void begin(void);
		int scanI2CDevice(void);
		bool hasDeviceAddress(int address);
};

#endif