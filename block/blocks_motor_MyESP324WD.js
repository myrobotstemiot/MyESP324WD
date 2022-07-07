
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';
var motor_colour=Blockly.Msg.MUSIC_HUE ;
Blockly.Blocks['MyESP324WD_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor")
        .appendField(new Blockly.FieldDropdown([["All","5"], ["A","1"], ["B","2"], ["C","3"], ["D","4"]]),"Ch")
        .appendField("direction")
        .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Reverse","2"]]),"dir");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
 this.setTooltip("Select motor /direction/ speed");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['MyESP324WD_motor_turn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Turn")
      .appendField(new Blockly.FieldDropdown([["Left","0"], ["Right", "1"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn left/right a robot.");
  }
};

Blockly.Blocks['MyESP324WD_motor_Spin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Rotate")
      .appendField(new Blockly.FieldDropdown([["Left","0"], ["Right", "1"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Rotate left/right a robot.");
  }
};

Blockly.Blocks['MyESP324WD_motor_Spin_Time'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Rotate")
      .appendField(new Blockly.FieldDropdown([["Left","0"], ["Right", "1"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField("delay");
    this.appendDummyInput()
      .appendField("mS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn left a robot.");
  }
};

Blockly.Blocks['MyESP324WD_motor_stop_ch'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Stop motor CH:")
      .appendField(new Blockly.FieldDropdown([["All","5"], ["A","1"], ["B","2"], ["C","3"], ["D","4"]]), "ch")
    this.appendDummyInput()
      .appendField("status")
      .appendField(new Blockly.FieldDropdown([["Break","0"], ["Stop","1"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select motor to stop.");
  }
};


Blockly.Blocks['MyESP324WD_servo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(new Blockly.FieldDropdown([["A0 (D32)","0"],["A1 (D33)","1"], ["A2 (D25)","2"], ["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D12)","5"], ["A6 (D13)","6"], ["A7 (D2)","7"]]), "ch");
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select servo to control.");
  }
};

Blockly.Blocks['MyESP324WD_servo2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(new Blockly.FieldDropdown([["A0 (D32)","0"],["A1 (D33)","1"], ["A2 (D25)","2"], ["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D12)","5"], ["A6 (D13)","6"], ["A7 (D2)","7"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select servo to control.");
  }
};
Blockly.Blocks['MyESP324WD_motor_forward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Motor forward speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select motor to drive.");
  }
};
Blockly.Blocks['MyESP324WD_motor_backward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Motor backward speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select motor to drive.");
  }
};
Blockly.Blocks['MyESP324WD_motor_backward2'] = {
  init: function() {
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("Move Backward left wheel at speed");
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("and right wheel at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['MyESP324WD_motor_turn_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Turn Left speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn left a robot.");
  }
};
Blockly.Blocks['MyESP324WD_motor_turn_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Turn Right speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn right a robot.");
  }
};
Blockly.Blocks['MyESP324WD_motor_spin_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Rotate Left speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Rotate ro spin left a robot.");
  }
};
Blockly.Blocks['MyESP324WD_motor_spin_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Rotate Right speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};
Blockly.Blocks['MyESP324WD_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop all");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Stop all motor.");
  }
};

Blockly.Blocks['MyESP324WD_PID_setPin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("PID_numSensor")
      .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"]]), "numSensor");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['PID_readLine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID_readLine");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(motor_colour);
 this.setTooltip("PID_readLine");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['MyESP324WD_PID_setMin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID_setMin");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['MyESP324WD_PID_setMax'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID_setMax");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("S0");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("S1");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("S2");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("S3");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("S4");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("S5");
    this.appendValueInput("S6")
      .setCheck("Number")
      .appendField("S6");
    this.appendValueInput("S7")
      .setCheck("Number")
      .appendField("S7");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Set pin PID");
  }
};
Blockly.Blocks['MyESP324WD_Run_PID'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Run_PID_Speed:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};

Blockly.Blocks['MyESP324WD_Mecanum'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Mecanum4WD: direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"],["Rear","2"],["Left","3"],["Right","4"],["Forward-Left","5"],["Forward-Right","6"],["Rear-Left","7"],["Rear-Right","8"],["Rotate-Left","9"], ["Rotate-Right", "10"]]),"dir");
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("speed [A]");
    this.appendDummyInput()
//      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("[B]");
    this.appendDummyInput()
//      .appendField("%");
      this.appendValueInput("speed3")
      .setCheck("Number")
      .appendField("[C]");
    this.appendDummyInput()
 //     .appendField("%");
      this.appendValueInput("speed4")
      .setCheck("Number")
      .appendField("[D]");
	this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
  }
};

Blockly.Blocks['MyESP324WD_MecanumT'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Mecanum4WD: direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"],["Rear","2"],["Left","3"],["Right","4"],["Forward-Left","5"],["Forward-Right","6"],["Rear-Left","7"],["Rear-Right","8"],["Rotate-Left","9"], ["Rotate-Right", "10"]]),"dir");
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("speed [A]");
    this.appendDummyInput()
//      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("[B]");
    this.appendDummyInput()
//      .appendField("%");
      this.appendValueInput("speed3")
      .setCheck("Number")
      .appendField("[C]");
    this.appendDummyInput()
 //     .appendField("%");
      this.appendValueInput("speed4")
      .setCheck("Number")
      .appendField("[D]");
	this.appendDummyInput()
      .appendField("%");
	this.appendValueInput("timer")
      .setCheck("Number")
      .appendField("delay");
	this.appendDummyInput()
      .appendField("mS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
  }
};
//

Blockly.Blocks['MyESP324WD_Motorall'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor All: direction")
//      .appendField(new Blockly.FieldDropdown([["Forward","1"],["Reverse","2"],["Turn-Left","3"],["Turn-Right","4"],["Rotate-Left","5"], ["Rotate-Right", "6"]]),"dir");
      .appendField(new Blockly.FieldDropdown([["Forward","1"],["Reverse","2"]]),"dir");
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("speed [A]");
    this.appendDummyInput()
//      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("[B]");
    this.appendDummyInput()
//      .appendField("%");
      this.appendValueInput("speed3")
      .setCheck("Number")
      .appendField("[C]");
    this.appendDummyInput()
 //     .appendField("%");
      this.appendValueInput("speed4")
      .setCheck("Number")
      .appendField("[D]");
	this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};

Blockly.Blocks['MyESP324WD_MotorallT'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor All: direction")
//      .appendField(new Blockly.FieldDropdown([["Forward","1"],["Reverse","2"],["Turn-Left","3"],["Turn-Right","4"],["Rotate-Left","5"], ["Rotate-Right", "6"]]),"dir");
      .appendField(new Blockly.FieldDropdown([["Forward","1"],["Reverse","2"]]),"dir");
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("speed [A]");
    this.appendDummyInput()
//      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("[B]");
    this.appendDummyInput()
//      .appendField("%");
      this.appendValueInput("speed3")
      .setCheck("Number")
      .appendField("[C]");
    this.appendDummyInput()
 //     .appendField("%");
      this.appendValueInput("speed4")
      .setCheck("Number")
      .appendField("[D]");
	this.appendDummyInput()
      .appendField("%");
	this.appendValueInput("timer")
      .setCheck("Number")
      .appendField("delay");
	this.appendDummyInput()
      .appendField("mS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};

}
