#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <PubSubClient.h>

const char * mqtt_server = "broker.netpie.io";
  				const int mqtt_port = 1883;
  				const char * mqtt_client_id = "c1e25a88-7b74-4aaf-a694-86cc8635cdc5";
  				const char * mqtt_username = "DvsNR4G5GiQaifiqtYEFHNHnxUoaWedP";
  				const char * mqtt_password = ".*J_RG_F(7C&2&OC(wGjtKu1mZ%jdxh_";
  				WiFiClient espClient;
  				PubSubClient client(espClient, mqtt_server, mqtt_port);

void callback(const MQTT::Publish& pub){
					String topic = String(pub.topic());
					String payload = pub.payload_string();
					  if (topic == String("@msg/text")) {
    Serial.println(String("New Message coming !"));
  }

				}


void setup()
{
  client.set_callback(callback);
  Serial.println(String("Connect wifi.."));
  WiFi.begin("pooh2537","0827344853por");
      while(WiFi.status() != WL_CONNECTED){
        delay(500);
      }
  Serial.println(String("Wifi connected"));
}
void loop()
{
    if (!client.connected()) {
    			while(client.connected()){
    				client.connect(MQTT::Connect(mqtt_client_id).set_auth(mqtt_username, mqtt_password));
    			}
    		}
  client.loop();
  
}
