#include "NX2002RGB.h"

// Constructor
NX2002RGB::NX2002RGB(){
	_REDPIN = 32;
	_GREENPIN = 33;
	_BLUEPIN = 25;
}

NX2002RGB::NX2002RGB(byte r_pin, byte g_pin, byte b_pin){
	_REDPIN = r_pin;
	_GREENPIN = g_pin;
	_BLUEPIN = b_pin;
}

// Init method
void NX2002RGB::begin(){
	// setup timer chanel
	ledcSetup(_redChanel, _freq, _resolution);
	ledcSetup(_greenChanel, _freq, _resolution);
	ledcSetup(_blueChanel, _freq, _resolution);

	// attach the channel to the GPIO to be controlled
	ledcAttachPin(_REDPIN, _redChanel);
  ledcAttachPin(_GREENPIN, _greenChanel);
  ledcAttachPin(_BLUEPIN, _blueChanel);
}

void NX2002RGB::setColor(String color) {
	if (color.equals("red")) {
		red();
	}else if (color.equals("green")) {
		green();
	}else if (color.equals("blue")) {
		blue();
	}else if (color.equals("pink")) {
		pink();
	}else if (color.equals("yellow")) {
		yellow();
	}else if (color.equals("orange")) {
		orange();
	}else if (color.equals("lightblue")) {
		lightblue();
	}else if (color.equals("lightgreen")) {
		lightgreen();
	}else if (color.equals("white")) {
		white();
	}
}

void NX2002RGB::setColor(byte rgb[3]){
	_red = rgb[0];
	_green = rgb[1];
	_blue = rgb[2];
	on();
}

void NX2002RGB::setColor(byte r, byte g, byte b){
	_red = r;
	_green = g;
	_blue = b;
	on();
}

void NX2002RGB::on(){
	ledcWrite(_redChanel, _red);
	ledcWrite(_greenChanel, _green);
	ledcWrite(_blueChanel, _blue);
}

void NX2002RGB::on(byte r, byte g, byte b){
	ledcWrite(_redChanel, r);
	ledcWrite(_greenChanel, g);
	ledcWrite(_blueChanel, b);
}

void NX2002RGB::off(){
	ledcWrite(_redChanel, 0);
	ledcWrite(_greenChanel, 0);
	ledcWrite(_blueChanel, 0);
}

void NX2002RGB::clear(){
	_red = 255;
	_green = 255;
	_blue = 255;
}

void NX2002RGB::red(){
	_red = 255;
	_green = 0;
	_blue = 0;
	on();
}

void NX2002RGB::green(){
	_red = 0;
	_green = 255;
	_blue = 0;
	on();
}

void NX2002RGB::blue(){
	_red = 0;
	_green = 0;
	_blue = 255;
	on();
}

void NX2002RGB::yellow(){
	_red = 255;
	_green = 64;
	_blue = 0;
	on();
}

void NX2002RGB::pink(){
	_red = 255;
	_green = 0;
	_blue = 255;
	on();
}

void NX2002RGB::lightblue(){
	_red = 0;
	_green = 54;
	_blue = 255;
	on();
}

void NX2002RGB::orange(){
	_red = 255;
	_green = 12;
	_blue = 0;
	on();
}

void NX2002RGB::white(){
	_red = 255;
	_green = 134;
	_blue = 255;
	on();
}

void NX2002RGB::lightgreen(){
	_red = 0;
	_green = 255;
	_blue = 54;
	on();
}