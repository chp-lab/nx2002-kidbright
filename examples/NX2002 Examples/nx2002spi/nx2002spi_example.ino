#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <NX2002SPI.h>

NX2002SPI SPI_PORT;

void setup() {
  SPI_PORT.init();
}
void loop() {
}
