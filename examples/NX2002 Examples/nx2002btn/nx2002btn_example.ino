#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <NX2002BTN.h>

NX2002BTN btn;

void setup() {
  btn.init();
}
void loop() {
}
