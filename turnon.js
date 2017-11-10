var Gpio= require('onoff').Gpio,
led =new Gpio(17, 'out');
led2 =new Gpio(27, 'out');
led.writeSync(1);
led2.writeSync(1);