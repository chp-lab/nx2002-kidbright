# NX2002 Kidbright
### การติดตั้ง
1. ติดตั้ง KBIDE
2. เปิดโปรแกรม KBIDE จากนั้น เลือกเมนู Board Manager
3. ค้นหาบอร์ด โดยพิมพ์คำว่า 'NX2002' จากนั้นให้ทำการดาวน์โหลดบอร์ด

> หมายเหตุ : หากไม่สามารถดาวน์โหลดผ่าน Board Manager ใน KBIDE ได้ ให้ทำการดาวน์โหลดจาก https://github.com/chp-lab/nx2002-kidbright แทน จากนั้นให้ Extract zip ไฟล์และนำโฟลเดอร์ของบอร์ด(เปลี่ยนชื่อ folder ที่ได้เป็น nx2002 ก่อน) ไปวางที่ Board folder ของ KBIDE (สามารถเปิด Board folder ของ KBIDE โดยการเลือกเมนู File > Open Board folder)

### การเรียกใช้งาน
1. เลือกเมนู Board Manager
2. เลือก NX2002 Board แล้วกด Change Board

### Block ภายใน NX2002 Kidbright
เมื่อเลือกใช้งาน NX2002 Board ภายในจะมี Block สำหรับการใช้งาน NX2002 และ NETPIE2020 เพิ่มขึ้นมาโดยแต่ละ Block จะมีการทำงานดังนนี้

### NX2002 Block
----

#### Using NX2002 RGB
![alt text|sizes,20%](static/block_rgb_begin.jpg "Using NX2002 RGB")<br>
เป็น Block สำหรับประกาศการเริ่มใช้งาน RGB LED บน NX2002

#### Set RGB Color
![alt text](static/block_rgb_set_color.jpg "Set RGB Color")<br>
เป็น Block สำหรับตั้งค่าสี RGB LED บน NX2002

#### RGB LED Status
![alt text](static/block_rgb_status.jpg "RGB LED Status")<br>
เป็น Block สำหรับควบคุม RGB LED (on/off)

#### RGB LED Color
![alt text](static/block_rgb_color.jpg "RGB LED Color")<br>
เป็น Block สำหรับตั้งค่าสีให้กับ RGB LED โดยเลือกสีที่ต้องการแสดงได้

#### Using NX2002 I2C port
![alt text](static/block_i2c_begin.jpg "Using NX2002 I2C port")<br>
เป็น Block สำหรับประกาศการเริ่มใช้งาน NX2002 I2C port

#### Number of connected I2C device
![alt text](static/block_i2c_scan_connected_device.jpg "Number of connected I2C device")<br>
เป็น block สำหรับ scan หาจำนวน I2C device ที่เชื่อมต่ออยู่กับ NX2002

#### Has I2C device at address
![alt text](static/block_i2c_check_device_address.jpg "Has I2C device at address")<br>
เป็น block สำหรับ check ว่ามี I2C device อยู่ที่ address ที่ระบุหรือไม่

#### Using NX2002 SPI port
![alt text](static/block_spi_begin.jpg "Using NX2002 SPI port")<br>
เป็น block สำหรับประกาศเริ่มใช้งาน NX2002 SPI port

#### Using NX2002 built-in button
![alt text](static/block_btn_begin.jpg "Using NX2002 built-in button")<br>
เป็น block สำหรับประกาศเริ่มใช้งาน NX2002 built-in button

### NETPIE2020 Block
---
#### Connect to NETPIE2020
![alt text](static/block_netpie2020_connect.jpg "Connect to NETPIE2020")<br>
เป็น block สำหรับเชื่อมต่อ NETPIE2020 โดยผู้ใช้งานต้องกรอก client id, token, secret ที่ generate มาจากการสร้าง device ใน NETPIE2020

#### Callback
![alt text](static/block_netpie2020_callback.jpg "Callback")<br>
เป็น block สำหรับจัดการ message ที่เข้ามาจาก NETPIE2020

#### Subscribe topic
![alt text](static/block_netpie2020_subscribe_topic.jpg "Subscribe topic")<br>
เป็น block สำหรับ subscribe เพื่อรอรับ message จาก NETPIE2020

#### Unsubscribe topic
![alt text](static/block_netpie2020_unsubscribe_topic.jpg "Unsubscribe topic")<br>
เป็น block สำหรับ unsubscribe เพื่อรอรับ message จาก NETPIE2020

#### Publish Message
![alt text](static/block_netpie2020_publish_message.jpg "Publish Message")<br>
เป็น block สำหรับ publish message ไปยัง NETPIE2020

#### Reconnect NETPIE2020
![alt text](static/block_netpie2020_reconnect.jpg "Reconnect NETPIE2020")<br>
เป็น block สำหรับทำการ reconnect NETPIE2020

#### NETPIE Client loop
![alt text](static/block_netpie2020_client_loop.jpg "NETPIE Client loop")<br>
เป็น block สำหรับคงสถานะการเชื่อมต่อกับ NETPIE2020

#### NETPIE2020 is connected
![alt text](static/block_netpie2020_check_connection.jpg "NETPIE2020 is connected")<br>
เป็น block สำหรับเช็คสถานะการเชื่อมต่อกับ NETPIE2020 โดยจะ return ค่าเป็น boolean
True - ยังคงเชื่อมต่อ
False - ขาดการเชื่อมต่อ

#### topic
![alt text](static/block_netpie2020_topic.jpg "topic")<br>
เป็น block ตัวแปร topic (ใช้ใน callback block)

#### payload
![alt text](static/block_netpie2020_payload.jpg "payload")<br>
เป็น block ตัวแปร payload (ใช้ใน callback block)