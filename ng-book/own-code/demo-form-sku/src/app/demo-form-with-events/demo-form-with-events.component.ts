import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
  styleUrls: ['./demo-form-with-events.component.css'],
})
export class DemoFormWithEventsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.required],
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) =>
      console.log('Value changed to:', value)
    );

    this.myForm.valueChanges.subscribe((form: any) =>
      console.log('Form changed to:', form)
    );
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('You submitted value:', value);
  }
}
