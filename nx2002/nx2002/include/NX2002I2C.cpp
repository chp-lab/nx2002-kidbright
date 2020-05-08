#include "NX2002I2C.h"

NX2002I2C::NX2002I2C(void){
	_SDAPIN = 4;
	_SCLPIN = 22;
}

NX2002I2C::NX2002I2C(int sda, int scl){
	_SDAPIN = sda;
	_SCLPIN = scl;
}

void NX2002I2C::begin(void){
	Wire.begin(_SDAPIN, _SCLPIN);
}

int NX2002I2C::scanI2CDevice(void){
	byte address;
  int nDevices = 0;
  for(address = 1; address < 127; address++ ) {
    if (hasDeviceAddress(address)) {
      nDevices++;
    }
  }
	return nDevices;
}

bool NX2002I2C::hasDeviceAddress(int address){
	byte error;
	Wire.beginTransmission(address);
	error = Wire.endTransmission();
	if (error == 0) {
		return true;
	} else {
		return false;
	}
}