import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-eval',
  templateUrl: './test-eval.component.html',
  styleUrls: ['./test-eval.component.scss']
})
export class TestEvalComponent implements OnInit {
  testForm: FormGroup;
  finalizeExpressions: any[] = [];
  result: any;
  operators = [
    { label: 'AND', value: '&&' },
    { label: 'OR', value: '||' },
    { label: 'ADD', value: '+' },
    { label: 'SUBTRACT', value: '-' },
    { label: 'EQUALS', value: '==' },
  ]
  customer = "shuaib"
  result1: any[] = [];
  expression: any;

  constructor() {
    this.testForm = new FormGroup({
      'expressions': new FormArray([])
    });
  }


  ngOnInit() {
    this.onAddExpression();
  }


  getValue(i) {
    const data = this.getControls()[i].value;
    this.finalizeExpressions.push(data);
  }

  getControls() {
    return (<FormArray>this.testForm.get('expressions')).controls;
  }

  onAddExpression() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.testForm.get('expressions')).push(control);
  }

  onOperator(value) {
    this.onAddExpression();
    this.result1[0] = '';
    this.result1.push(value);
    this.finalizeExpressions.push(value);
  }

  onSubmit() {
    const client = 123;
    this.expression = this.finalizeExpressions.join(' ');
    this.result = eval(this.expression);
    this.finalizeExpressions = []
  }

}
