import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() data: any

  @Output() dataToParent: EventEmitter<any> = new EventEmitter();

  datafromchild = 'data from child'
  sendDataToParent() {
    this.dataToParent.emit(this.datafromchild);
  }

  greet() {
    alert('Hello from Child!');
  }


}
