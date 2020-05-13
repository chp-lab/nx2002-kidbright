#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <NX2002RGB.h>

NX2002RGB rgb;

void setup() {
  rgb.begin();
  rgb.on();
}
void loop() {
  rgb.red();
  delay(1000);
  rgb.green();
  delay(1000);
  rgb.blue();
  delay(1000);
}
