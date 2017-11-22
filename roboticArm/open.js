var Gpio= require('onoff').Gpio,
openFingers =new Gpio(17, 'out');

openFingers.writeSync(1);
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
