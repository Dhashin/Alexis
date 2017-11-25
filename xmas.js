var Gpio = require('onoff').Gpio,
    led1 = new Gpio(17, 'out');
led2 = new Gpio(27,'out');
led3 = new Gpio(22, 'out');
led4 = new Gpio(18, 'out');
led5 = new Gpio(23, 'out');

led1.writeSync(1);
wait(3000);
led1.writeSync(0);
led2.writeSync(1);
wait(1500);
led2.writeSync(0);
led3.writeSync(1);
wait(3000);
led3.writeSync(0);


for (i=0;i<100;i++)
{
led4.writeSync(1);
led5.writeSync(1);
led1.writeSync(1);
wait(100);
led4.writeSync(0);
led5.writeSync(0);
led1.writeSync(0);
led2.writeSync(1);
wait(100);
led2.writeSync(0);
led3.writeSync(1);
led4.writeSync(1);
led5.writeSync(1);
wait(100);
led3.writeSync(0);

led4.writeSync(0);
led5.writeSync(0);
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
	

