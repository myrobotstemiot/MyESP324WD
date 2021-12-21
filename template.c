#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <SPI.h>
#include "SH1106.h"
#include "MyESP32.h"
#include "MyESP32_IO.h"
// #include "MCP3XXX.h"

${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
	adc.begin(2);
	MyESP32();
    /* setup code */
${SETUP_CODE}
    /* block setup */
${BLOCKSETUP}
}

void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
