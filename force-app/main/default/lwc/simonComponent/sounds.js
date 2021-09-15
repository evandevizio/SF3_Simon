// FILE FOR SIMON SOUNDS
//import functions in a file that you wish to use them in

/*
 * INSTRUCTIONS------------------!!!
 *
 * Step1: Upload all mp3 files as Static Resources.
 * the names must be as follows: 
 * red
 * blue
 * green
 * yellow
 * 
 * Step2: Include below import in file.
 * Make sure sounds.js is in the same directory as the component.
 * 
 * //include me!!!
 * import { redSound, greenSound, blueSound, yellowSound } from './sounds.js';
 * 
 * Step3: Can utilize functions after import ex:
 * 
 * yellowSound();
 * console.log('playing blue');
 * blueSound();
*/

//-----------------------------------------

//import synth1 from '@salesforce/resourceUrl/synth1';
import red from '@salesforce/resourceUrl/red';
import blue from '@salesforce/resourceUrl/blue';
import green from '@salesforce/resourceUrl/green';
import yellow from '@salesforce/resourceUrl/yellow';

function beep(){
    //var beepsound = new Audio(synth1);
    //beepsound.play();
    console.log('beep ');
}

function redSound(){
    var beepsound = new Audio(red);
    beepsound.play();
}

function blueSound(){
    var beepsound = new Audio(blue);
    beepsound.play();
}

function yellowSound(){
    var beepsound = new Audio(yellow);
    beepsound.play();
}

function greenSound(){
    var beepsound = new Audio(green);
    beepsound.play();
}

export{ redSound, blueSound, yellowSound, greenSound }