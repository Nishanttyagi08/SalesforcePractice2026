import { LightningElement } from 'lwc';

export default class ZodiacSignMessenger extends LightningElement {

    userName;
    userBirthDate;

    handleNameChange(event) {
        this.userName = event.target.value;

    }

    handleDateChange(event) {
        this.userBirthDate = event.target.value

    } 
    handleSubmit() {
        alert = 'Submit Trigger';
        console.log('Name is'+ this.userName);
        console.log('DOB is' + this.userBirthDate);
    }
}