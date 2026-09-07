import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {
   
    productList = [
        { id: '1', name: 'Phone', rating: '3/5' },
        { id: '2', name: 'Laptop', rating: '4/5' },
        { id: '3', name: 'Dextop', rating: '5/5' }
    ];
          

}