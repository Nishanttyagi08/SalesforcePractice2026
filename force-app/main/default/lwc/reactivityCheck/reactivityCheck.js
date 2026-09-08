import { LightningElement ,track } from 'lwc';

export default class ReactivityCheck extends LightningElement {

    address = 'Nishant Tyagi Village Khindora';
  @track  myPersonalDetails = [
        {
            "_id": "6a9ff68ac1408d8ba15142be",
            "index": 0,
            "guid": "8ad87421-ea92-4f81-a305-d4626f5f7ed6",
            "isActive": true,
            "balance": "$1,081.81",
            "picture": "http://placehold.it/32x32",
            "age": 36,
            "eyeColor": "brown",
            "name": "Stacy Estrada",
            "gender": "female",
            "company": "OCEANICA",
            "email": "stacyestrada@oceanica.com",
            "phone": "+1 (935) 425-3554",
            "address": "686 Dank Court, Rose, Indiana, 5532",
            "about": "Lorem dolor minim excepteur consequat irure aliqua elit. Ad reprehenderit proident exercitation ex labore incididunt eiusmod mollit aliqua adipisicing consectetur. Ad consectetur non proident nisi ad tempor id voluptate sint. Ea ullamco excepteur laborum cupidatat. Duis enim duis nulla minim quis dolore excepteur minim et dolor exercitation nulla consectetur.\r\n",
            "registered": "2022-02-09T07:58:57 -06:-30",
            "latitude": -47.383188,
            "longitude": 96.601549,
            "tags": [
                "laboris",
                "anim",
                "veniam",
                "ullamco",
                "et",
                "quis",
                "deserunt"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Rena Rogers"
                },
                {
                    "id": 1,
                    "name": "Leslie Williams"
                },
                {
                    "id": 2,
                    "name": "Hardin Shaffer"
                }
            ],
            "greeting": "Hello, Stacy Estrada! You have 1 unread messages.",
            "favoriteFruit": "strawberry"
        }
    ];
  

    // For LWC reactivity, you should generally create a new array/object reference when changing nested data that you expect to propagate to the child.
    updateAddress() {
        this.address = 'Village Khindora Modinagar';
        this.myPersonalDetails = [
            {
                ...this.myPersonalDetails[0],
                guid: "6a9ff68ac1408d8ba15142be",
                friends: [
                    {
                        ...this.myPersonalDetails[0].friends[0],
                        name: "Nishant"
                    },
                    ...this.myPersonalDetails[0].friends.slice(1)
                ]
            }
        ];
        
    }
}