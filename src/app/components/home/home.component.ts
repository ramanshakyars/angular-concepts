import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { OrdersComponent } from '../orders/orders.component';
import { RegisterComponent } from '../register/register.component';
import { ReverseStringPipe } from '../../../reverse-string.pipe';
import { ChangesHoverDirective } from '../../../changes-hover.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ChildComponent,OrdersComponent,RegisterComponent,ReverseStringPipe,ChangesHoverDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // oneway data binding 
  title = 'one way data binding';


  // two way data binding
  name = 'name';
  // send data to child
  data = {
    name: 'RAHUL',
    age: 20,
    address: 'address'
  }

  // send data child to parent 

  receivedData: any;

  handleDataFromChild(data: any) {
    this.receivedData = data;  // Handle the data passed from the child
  }


  // @view child component
  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  callChildMethod() {
    this.childComponent.greet();
  }




}
