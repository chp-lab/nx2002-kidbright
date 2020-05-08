#ifndef NX2002RGB_H
#define NX2002RGB_H
#include "Arduino.h"

class NX2002RGB {
	private:
		byte _REDPIN;
		byte _GREENPIN;
		byte _BLUEPIN;
		const int _redChanel = 0;
		const int _greenChanel = 1;
		const int _blueChanel = 2;
		const int _freq = 5000;
		const int _resolution = 8; // 0 - 255
		byte _red = 255;
		byte _green = 255;
		byte _blue = 255;
	public:
		NX2002RGB();
		NX2002RGB(byte r_pin, byte g_pin, byte b_pin);
		void begin();
		void setColor(String color);
		void setColor(byte rgb[3]);
		void setColor(byte r, byte g, byte b);
		void on();
		void on(byte r, byte g, byte b);
		void off();
		void red();
		void green();
		void blue();
		void yellow();
		void pink();
		void lightblue();
		void white();
		void orange();
		void lightgreen();
		void clear(); // clear r,g,b value to default (255)
};
#endif