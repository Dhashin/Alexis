var Gpio= require('onoff').Gpio,
closeFingers =new Gpio(17, 'out');

closeFingers.writeSync(0);
//wait(3000);


function wait(ms)
{
var start = new Date().getTime();
var end = start;
while(end < start + ms)
{
end = new Date().getTime();
}
}
