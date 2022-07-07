const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
  name: "MyDisplay",
  index: 0,
  color: "230",
  icon: `file:///${dirIcon}/static/icons/display.png`,
  //icon: "/static/icons/icons8_picture_96px_1.png",
  blocks: [
    {
        xml: `<sep gap="32"></sep><label text="หน้าจอ TFT" web-class="headline"></label>`
    },
    "TFT_setRotation",
    /*{
      xml:
        `<block type="TFT_setCursor">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                    </block>`
    },*/
    "TFT_fillScreen",
    {
      xml:
        `<block type="TFT_println">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>

                    </block>`
    },
    {
      xml:
        `<block type="TFT_drawPixel">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                    </block>`
    },
    {
      xml:
        `<block type="TFT_drawRect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                        <value name="w">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="h">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value> 
                    </block>`
    },
    {
      xml:
        `<block type="TFT_fillRect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                        <value name="w">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="h">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value> 
                    </block>`
    },
    {
      xml:
        `<block type="TFT_drawCircle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="TFT_fillCircle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>    
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="TFT_drawTriangle">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>   
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>  
                        <value name="x2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>   
                        
                    </block>`
    },
    {
      xml:
        `<block type="TFT_fillTriangle">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>   
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>  
                        <value name="x2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y2">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>   
                        
                    </block>`
    },
    "basic_string"
  ]
};
