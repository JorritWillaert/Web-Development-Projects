import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html',
  styleUrls: ['./demo-form-with-custom-validation.component.css'],
})
export class DemoFormWithCustomValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.compose(
        [Validators.required, skuValidator]
      )],
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('You submitted value:', value);
  }
}

function skuValidator(control: FormControl): ValidationErrors | null {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
  return null;
}
