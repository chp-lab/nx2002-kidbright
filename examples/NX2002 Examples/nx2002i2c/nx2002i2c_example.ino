#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <NX2002I2C.h>

Number num_i2c_device;
NX2002I2C I2C_PORT;

void setup() {
  I2C_PORT.begin();
  Serial.begin(115200);
}
void loop() {
  num_i2c_device = I2C_PORT.scanI2CDevice();
  if (num_i2c_device < 1) {
    Serial.println(String("No I2C device is connected"));
  } else if (num_i2c_device == 1) {
    Serial.println(String("There is 1 I2C device connected "));
  } else if (num_i2c_device > 1) {
    Serial.print(String("There are "));
    Serial.print(num_i2c_device);
    Serial.println(String(" I2C device connected "));
  }
  delay(5000);
}
