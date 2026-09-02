import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

   @track displayNone1 = false;
   @track displayNone2 = false;
   @track displayNone3 = false;

    firstButton(event) {
        this.displayNone1 = true;
        this.displayNone2 = false;
        this.displayNone3 = false;
    }
    secondButton(event) {
        this.displayNone1 = false;
        this.displayNone2 = true;
        this.displayNone3 = false;
    }
    thirdButton(event) {
        this.displayNone1 = false;
        this.displayNone2 = false;
        this.displayNone3 = true;
    }
}