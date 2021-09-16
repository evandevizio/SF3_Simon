import { LightningElement } from 'lwc';
import { redSound, greenSound, blueSound, yellowSound } from './sounds.js';

export default class SimonComponent extends LightningElement {

    turnCount; // keeps track of the current turn number
    randomList = []; // random sequence generated for the round

    connectedCallback(){
        for(let i = 0; i < 10; i++){
            // create a random sequence of ints, size 10, choices 0-3.
            // 0: green, 1: red, 2: yellow, 3: blue
            this.randomList.push(this.getRandomInt(4));
        }
        console.log('the sequence is: ' + this.randomList);
        this.turnCount = 1;
    }

    playSequence(){
        // play back the random sequence up to the current turn number
        this.randomList.forEach(function(i){
            switch(i){
                case 0:
                    greenSound();
                    document.querySelector(".greenQuad").style.backgroundColor = "#00FF00";
                    break;
                case 1:
                    redSound();
                    document.querySelector(".redQuad").style.backgroundColor = "#FF0000";
                    break;
                case 2:
                    yellowSound();
                    document.querySelector(".yellowQuad").style.backgroundColor = "#FFFF00";
                    break;
                case 3:
                    blueSound();
                    document.querySelector(".blueQuad").style.backgroundColor = "#0000FF";
                    break;
            }
        })
        setTimeout(function(){
            console.log('turn is over.');
            this.turnCount++;
        }, 500);
    }

    quadClickHandler(event){
        let buttonClass = event.target.className;

        switch(buttonClass){
            case 'redQuad':
                redSound();
                break;
            case 'blueQuad':
                blueSound();
                break;
            case 'greenQuad':
                greenSound();
                break;
            case 'yellowQuad':
                yellowSound();
                break;
        }
        console.log("clicked " + buttonClass);
    }

    playBtnClickHandler(){
        this.playSequence();
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

}