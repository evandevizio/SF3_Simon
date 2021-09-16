import { LightningElement, track } from 'lwc';
import { redSound, greenSound, blueSound, yellowSound } from './sounds.js';

export default class SimonComponent extends LightningElement {

    //turnCount; // keeps track of the current turn number
    //randomList = []; // random sequence generated for the round
    list = [];
    round = 0;
    sequence = 0;
    disable = true;
    @track buttonDisable = false;

    onePlayerGame() {
        this.sequence = 0;
        this.round++;
        console.log(this.round);
        this.list.push(this.nextInSequence());
        this.playSequence();
    }

    playSequence() {
        for (let i = 0; i < this.list.length; i++) {
            setTimeout(() => {
                switch (this.list[i]) {
                    case 'green':
                        console.log('switch case: green');
                        greenSound();
                        this.template.querySelector('.greenQuad').classList.add("brightGreenQuad");
                        break;
                    case 'red':
                        console.log('switch case: red');
                        redSound();
                        this.template.querySelector('.redQuad').classList.add('brightRedQuad');
                        break;
                    case 'yellow':
                        console.log('switch case: yellow');
                        yellowSound();
                        this.template.querySelector('.yellowQuad').classList.add('brightYellowQuad');
                        break;
                    case 'blue':
                        console.log('switch case: blue');
                        blueSound();
                        this.template.querySelector('.blueQuad').classList.add('brightBlueQuad');
                        break;
                    default:
                        console.log('this wasn\'t supposed to happen');
                }
            }, ((i) * 500));
            setTimeout(() => {
                // reset colors
                this.template.querySelector('.greenQuad').classList.remove('brightGreenQuad');
                this.template.querySelector('.redQuad').classList.remove('brightRedQuad');
                this.template.querySelector('.yellowQuad').classList.remove('brightYellowQuad');
                this.template.querySelector('.blueQuad').classList.remove('brightBlueQuad');
                
                if(i === this.list.length - 1){
                    this.disable = false;
                }

            }, ((i + 1) * 500));
        }
    }

    nextInSequence() {
        var color = Math.floor(Math.random() * 4);
        if (color == 0) {
            return 'red';
        }
        if (color == 1) {
            return 'green';
        }
        if (color == 2) {
            return 'blue';
        }
        if (color == 3) {
            return 'yellow';
        }
    }

    quadClickHandler(event) {
        if (!this.disable) {
            let buttonClass = event.target.classList;
            console.log(buttonClass);
            let correct = false;

            if (buttonClass.contains('redQuad')) {
                redSound();
                correct = this.list[this.sequence] === 'red';

            } else if (buttonClass.contains('blueQuad')) {
                blueSound();
                correct = this.list[this.sequence] === 'blue';
            } else if (buttonClass.contains('greenQuad')) {
                greenSound();
                correct = this.list[this.sequence] === 'green';
            } else if (buttonClass.contains('yellowQuad')) {
                yellowSound();
                correct = this.list[this.sequence] === 'yellow';
            }

            if (correct) {
                this.sequence++;
                console.log('Correct');
                if (this.sequence >= this.list.length) {
                    console.log('You Win!');
                    this.disable = true;
                    setTimeout(() => {
                        //ready game
                        this.onePlayerGame();
                    }, 1200);
                }
            } else {
                console.log('You lose');
                this.disable = true;
                this.buttonDisable = false;
            }
        }
    }

    playBtnClickHandler() {
        this.round = 0;
        this.list = [];
        this.buttonDisable = true;
        this.onePlayerGame();
    }
}