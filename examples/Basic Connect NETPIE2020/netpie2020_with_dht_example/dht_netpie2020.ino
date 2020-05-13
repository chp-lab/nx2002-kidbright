#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "DHTesp.h"
#include <PubSubClient.h>

float humid;
float temp;
DHTesp dht;
const char* mqtt_server = "broker.netpie.io";
const int mqtt_port = 1883;
const char* mqtt_client_id = "--your_client_id--";
const char* mqtt_username = "--your_token--";
const char* mqtt_password = "--your_secret--";
WiFiClient espClient;
PubSubClient client(espClient, mqtt_server, mqtt_port);

void callback(const MQTT::Publish& pub) {
  String topic = String(pub.topic());
  String payload = pub.payload_string();
  if (topic == String("@msg/led")) {
    Serial.print(String("LED Status : "));
    Serial.println(payload);
  } else if (topic == String("@shadow/data/updated")) {
    Serial.println(String("Shadow updated !"));
    Serial.println(payload);
  }
}

void setup() {
  client.set_callback(callback);
  Serial.begin(115200);

  dht.setup(5, DHTesp::DHT11);
  WiFi.begin("--ssid--", "--password--");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  Serial.println(String("Wifi Connected!"));

  client.connect(
      MQTT::Connect(mqtt_client_id).set_auth(mqtt_username, mqtt_password));
  Serial.println(String("Connect netpie"));

  client.subscribe("@msg/led");

  client.subscribe("@shadow/data/updated");
}
void loop() {
  if (!client.connected()) {
    while (!client.connected()) {
      client.connect(
          MQTT::Connect(mqtt_client_id).set_auth(mqtt_username, mqtt_password));
    }
    Serial.println(String("Reconnect netpie success!"));
  }
  client.loop();
  humid = dht.getHumidity();
  temp = dht.getTemperature();
  client.publish("@shadow/data/update", "{\"data\":{\"temp\":" + String(temp) +
                                            ",\"humid\":" + String(humid) +
                                            "}}");
  delay(1000);
}
