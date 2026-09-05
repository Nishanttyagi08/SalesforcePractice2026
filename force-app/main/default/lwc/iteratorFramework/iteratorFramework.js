import { LightningElement } from 'lwc';

export default class IteratorFramework extends LightningElement {

    taskList = [
         { taskId: 1, taskName: "Start Coding in VS Code", taskPriority:"High",taskProgress:"In Progress"},
         { taskId: 2, taskName: "Learn LWC Concept", taskPriority:"Medium",taskProgress:"Pending"},
         { taskId: 3, taskName: "Practice LWC", taskPriority:"Low",taskProgress:"Pending"}
    ]
}