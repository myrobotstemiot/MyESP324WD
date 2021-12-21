
#define A0 32
#define A1 33
#define A2 25

 // MCP3008 pin attached to
#define ADC0 0    
#define ADC1 1
#define ADC2 2
#define ADC3 3
#define ADC4 4
#define ADC5 5
#define ADC6 6
#define ADC7 7

int analog(int _pin){
	if(_pin == 0)_pin = 32;
	else if(_pin == 1)_pin = 33;
	else if(_pin == 2)_pin = 25;
	pinMode(_pin,INPUT);
  return analogRead(_pin);
}
int in(int _pin){
  pinMode(_pin,INPUT);
  return digitalRead(_pin);
}
int in_pullup(int _pin){
  pinMode(_pin,INPUT_PULLUP);
  return digitalRead(_pin);
}
void out(int _pin,int _state){
  pinMode(_pin,OUTPUT);
  digitalWrite(_pin,_state);
}
/*
float getdist(int _pin){
  float volts_distance = analog(_pin)*0.000805;  
  return  (12*pow(volts_distance, -1))-2.00;
}

int a2d(int _chan){
	if(_chan == 0)_chan = 0;
	else if(_chan == 1)_chan = 1;
	else if(_chan == 2)_chan = 2;
	else if(_chan == 3)_chan = 3;
	else if(_chan == 4)_chan = 4;
	else if(_chan == 5)_chan = 5;
	else if(_chan == 6)_chan = 6;
	else if(_chan == 7)_chan = 7;
	
//	pinMode(_chan,INPUT);
  return adc.analogRead(_chan);
}
*/