import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    name = 'Nishant Tyagi';
    currentTime = new Date().toLocaleTimeString();
    designation = 'Developer';
    hourlyRate = 1500;
    fullDayRate = 1500 * 8;

     memberDetails; 

     updateMemberStatus(event){
      this.memberDetails = event.target.value;

      // JSON.serialize() - APEX
      // JSON.stringify() JS - Object -> string
//if variable is not defined HTML looks for the getter method in JS
    
     }
     _handleTotalRate = (this.hourlyRate * 8  );


       get handleTotalRate() {
            return this._handleTotalRate;
        }
        // If you want to get any type of method without adding the variable 
//If you want to put any kind of validation use set method
        set handleTotalRate(value) {
        this._handleTotalRate = value < 1000 ? value :5000;
    }
    handleWatchChange(event) {
        this.handleTotalRate = parseInt(event.target.value);
    }


}