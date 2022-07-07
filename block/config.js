let display = require("./menu/config.group.display");
let gpio = require("./menu/config.group.gpio");

const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  //language=HTML format=false
  blocks: [
    display,
    {
      override : true,
      name: "MyMotor",
      index: 3,
      color: "230",
      icon: `file:///${dirIcon}/static/icons/Motor.png`,
      blocks: [
          {
              xml:
                  `<block type="MyESP324WD_motor">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">40</field>
                            </shadow>
                        </value>
                    </block>`
          },
	     {
            xml : 
            `<block type="MyESP324WD_Motorall">
                <value name="speed1">
                    <shadow type="math_number">
                        <field name="NUM">40</field>
                    </shadow>
                </value>
                <value name="speed2">
                    <shadow type="math_number">
                        <field name="NUM">40</field>
                    </shadow>
                </value>
                <value name="speed3">
                    <shadow type="math_number">
                        <field name="NUM">40</field>
                    </shadow>
                </value>
                <value name="speed4">
                    <shadow type="math_number">
                        <field name="NUM">40</field>
                    </shadow>
                </value>
           </block>`
        },

	     {
            xml : 
            `<block type="MyESP324WD_MotorallT">
                <value name="speed1">
                    <shadow type="math_number">
                        <field name="NUM">40</field>
                    </shadow>
                </value>
                <value name="speed2">
                    <shadow type="math_number">
                        <field name="NUM">40</field>
                    </shadow>
                </value>
                <value name="speed3">
                    <shadow type="math_number">
                        <field name="NUM">40</field>
                    </shadow>
                </value>
                <value name="speed4">
                    <shadow type="math_number">
                        <field name="NUM">40</field>
                    </shadow>
                </value>
                <value name="timer">
                    <shadow type="math_number">
                        <field name="NUM">200</field>
                    </shadow>
                </value>
           </block>`
        },

          {
              xml:
                  `<block type="MyESP324WD_motor_turn">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP324WD_motor_Spin">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP324WD_motor_Spin_Time">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="time">
                            <shadow type="math_number">
                                <field name="NUM">200</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP324WD_motor_stop_ch">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
          },

	     {
            xml : 
            `<block type="MyESP324WD_Mecanum">
                <value name="speed1">
                    <shadow type="math_number">
                        <field name="NUM">30</field>
                    </shadow>
                </value>
                <value name="speed2">
                    <shadow type="math_number">
                        <field name="NUM">30</field>
                    </shadow>
                </value>
                <value name="speed3">
                    <shadow type="math_number">
                        <field name="NUM">30</field>
                    </shadow>
                </value>
                <value name="speed4">
                    <shadow type="math_number">
                        <field name="NUM">30</field>
                    </shadow>
                </value>
           </block>`
        },

	     {
            xml : 
            `<block type="MyESP324WD_MecanumT">
                <value name="speed1">
                    <shadow type="math_number">
                        <field name="NUM">30</field>
                    </shadow>
                </value>
                <value name="speed2">
                    <shadow type="math_number">
                        <field name="NUM">30</field>
                    </shadow>
                </value>
                <value name="speed3">
                    <shadow type="math_number">
                        <field name="NUM">30</field>
                    </shadow>
                </value>
                <value name="speed4">
                    <shadow type="math_number">
                        <field name="NUM">30</field>
                    </shadow>
                </value>
                <value name="timer">
                    <shadow type="math_number">
                        <field name="NUM">200</field>
                    </shadow>
                </value>
           </block>`
        },

          {
              xml:
                  `<block type="MyESP324WD_servo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP324WD_servo2">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP324WD_PID_setPin">
                        <value name="S0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S3">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S4">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S5">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S6">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S7">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        
                    </block>`
          },
          "PID_readLine",
          {
              xml:
                  `<block type="MyESP324WD_PID_setMin">
                        <value name="S0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S3">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S4">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S5">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S6">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S7">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP324WD_PID_setMax">
                        <value name="S0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S3">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S4">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S5">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S6">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="S7">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP324WD_Run_PID">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="KP">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="KD">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
          },
      ]
  },
    {
      override : true,
      name: "Time",
      index: 4,
      color: "230",
      icon: "/static/icons/icons8_Story_Time_96px.png",
      blocks: [
          {
              xml:
                  `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="time_delay_microsec">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
          "time_millis",
          "time_micros"
      ]
  },
    {
      override : true,
      name: " MySensor",
      index: 4,
      color: "230",
      icon: "/static/icons/icons8_thermometer_96px.png",
      blocks: [
		{
            xml: `<sep gap="32"></sep><label text="ADC Extender I/O [ADC0-ADC7]" web-class="headline"></label>`
	    },

          "MyESP324WD_ADC_MCP3008",
          "MyESP324WD_Light_sensor",
          "MyESP324WD_Distance_sensor",
		{
            xml: `<sep gap="32"></sep><label text="ESP32 Standard I/O [A0/A1/A2...]" web-class="headline"></label>`
	    },
		  "Light sensorSTD",
		  'Distance sensor',
          'Ultrasonic sensor',
		  'analog_sensor',
		  'digital_sensor',
          "MyESP324WD_Switch_sensor",
          "MyESP324WD_Knob_status",
	]
  },
  //gpio,
  ],
};
