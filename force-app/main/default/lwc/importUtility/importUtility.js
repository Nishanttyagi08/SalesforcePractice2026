import { LightningElement } from 'lwc';
import logo from '@salesforce/resourceUrl/CLLLOGO';
import SFenviroment from '@salesforce/label/c.Enviroment';


export default class ImportUtility extends LightningElement {

    src = logo; 
    Type = SFenviroment;

    get showInProd() {
        return this.Type == "true" ? true : false;
    }


}