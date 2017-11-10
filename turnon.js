var Gpio= require('onoff').Gpio,
led =new Gpio(17, 'out');
led2 =new Gpio(27, 'out');
led.writeSync(1);
wait(3000);
led2.writeSync(1);

function wait(ms)
{
var start = new Date().getTime();
var end = start;
while(end < start + ms)
{
end = new Date().getTime();
}
}
