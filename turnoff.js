var Gpio= require('onoff').Gpio,
led =new Gpio(17, 'out');
led2 =new Gpio(27, 'out');
led.writeSync(0);
led2.writeSync(0);
