import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() message!:string;

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit('Message from child');
  }

}
