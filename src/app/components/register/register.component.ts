import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formConfig = ['Field1', 'Field2', 'Field3'];
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    let controlsConfig: any = {};
    this.formConfig.forEach(field => {
      controlsConfig[field] = [''];
    });
    this.dynamicForm = this.fb.group(controlsConfig);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
