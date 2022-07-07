module.exports = function(Blockly){
  'use strict';
var sensor_colour= Blockly.Msg.SENSOR_HUE ;


Blockly.Blocks['MyESP324WD_Knob_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read Knob");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("read Knob status");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["MyESP324WD_Light_sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Light sensor")
          .appendField(new Blockly.FieldDropdown([
                                            ["ADC0", "0"],
                                            ["ADC1", "1"],
                                            ["ADC2", "2"],
                                            ["ADC3", "3"],
                                            ["ADC4", "4"],
                                            ["ADC5", "5"],
                                            ["ADC6", "6"],
                                            ["ADC7", "7"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks["MyESP324WD_Switch_sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Switch")
          .appendField(new Blockly.FieldDropdown([
                                              ["A (34)", "34"],
                                              ["B (35)", "35"],
                                              ["OK (36)", "36"],
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"]]), "pin");
     this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(180);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks["MyESP324WD_Distance_sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Distance (Sharp)")
          .appendField(new Blockly.FieldDropdown([
                                            ["ADC0", "0"],
                                            ["ADC1", "1"],
                                            ["ADC2", "2"],
                                            ["ADC3", "3"],
                                            ["ADC4", "4"],
                                            ["ADC5", "5"],
                                            ["ADC6", "6"],
                                            ["ADC7", "7"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['MyESP324WD_ADC_MCP3008'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read ADC:")
        .appendField(new Blockly.FieldDropdown([
                                            ["ADC0", "0"],
                                            ["ADC1", "1"],
                                            ["ADC2", "2"],
                                            ["ADC3", "3"],
                                            ["ADC4", "4"],
                                            ["ADC5", "5"],
                                            ["ADC6", "6"],
                                            ["ADC7", "7"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(sensor_colour);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};

//From ESP32 standart I/O A0-A2
Blockly.Blocks["Light sensorSTD"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Light sensor")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(180);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks["Ultrasonic sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ultrasonic Echo")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],	
                                              ["A2 (25)", "25"]]), "Echo");
      this.appendDummyInput()
          .appendField("Trig")
          .appendField(new Blockly.FieldDropdown([
                                              ["A1 (33)", "33"],	
                                              ["A0 (32)", "32"],
                                              ["A2 (25)", "25"]]), "Trig");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(180);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks['analog_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog sensor ")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['digital_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital sensor ")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (D32)", "32"],
                                              ["A1 (D33)", "33"],
                                              ["A2 (D25)", "25"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("read digital value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["Distance sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Distance (Sharp)")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(180);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };

//
}