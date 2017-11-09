#Alexis
This is my local Repo for all pi projects.
--The first one will be to turn on a LED using the Pi

--The second will be to build a car from recycled materials that can be controlled by the pc by ssh'ing into the pi. The pi will control all movements of the car 

--Control car via smartphone (also see https://github.com/lawsonkeith/picar)



#####################################################################################
___Turning on a LED____

1: open up terminal
2: mkdir ws
3. mkdir pi 
4: clone repo
5: cd into repo
6: npm init
7: npm install onoff --save
8. Explanation of code from http://thejackalofjavascript.com/raspberry-pi-node-js-led-emit-morse-code/
Line 1 : We include the GPIO module of onoff to interact with pi’s GPIO pins

Line 2 : We tell our program that we are going to use a GPIO pin and it is of the type output. That is pi provides the input to that pin based on the logic we write. We will name the output of this pin as led, as logically we have a led placed here.

Line 4 : We start a new setInterval()  to run the code inside it every 500 milliseconds.

Line 5 : For every Gpio pin, we have a method named  writeSync(). This method takes in a 1 or a 0. If it is 1, it will command the pi to supply 3.3v to this pin and if it is 0, it will command the pi to stop the supply. This way, we control the pin.

And  led.readSync() tells us if this pin is in state 1 or 0. depending on that, we will toggle the values. That is if the value is 0, we set the value to 1 and if 1, we set the value to 0. Thus making the LED “blink” every 500ms. Simple right?

Line 13 : After 5 seconds, we terminate the   setInterval() and clear the state of the pin and release all the resources.

Let us save the file and run the program. To save the program, press (ctrl+x or cmd+x). This will ask you to save the file. Press Y and press enter key to complete the operation.

To run the program, execute

9. sudo node index.js
10. LED Should blink for 5s

