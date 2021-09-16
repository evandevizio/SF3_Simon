import { LightningElement } from 'lwc';

export default class SimonComponent extends LightningElement {
    
    onePlayerGame(){
        var list = [];
        var notEnd = true;
        var round = 0;
        while(notEnd){
            round += 1;
            list.push(this.nextInSequence())
            this.playSequence();
            if(this.recievePlayerInput()){
                notEnd = false;
            }
        }
    }

    nextInSequence(){
        var color = Math.floor(Math.random() * 4);
        if(color == 0){
            return 'red';
        }
        if(color == 1){
            return 'green';
        }
        if(color == 2){
            return 'blue';
        }
        if(color == 3){
            return 'yellow';
        }
    }

    playSequence(){
        for(let i = 0; i < list.length(); i++){
            if(list[i] == 'red'){

            }
            if(list[i] == 'green'){
                
            }
            if(list[i] == 'blue'){
                
            }
            if(list[i] == 'yellow'){
                
            }
        }
    }
    
    recievePlayerInput(){
        var playerInput = '';
        for(let i = 0; i < list.length(); i++){
            playerInput = 'red'
            if(list[i] != playerInput){
                return false;
            }
        }
        return true;
    }

}