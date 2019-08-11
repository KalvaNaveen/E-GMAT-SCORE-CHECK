import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ResultsService} from '../results.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onSubmit=new EventEmitter();
  constructor(private mathOperation:ResultsService) { }

  ngOnInit() {
  }
  loadGraphs(form:NgForm) {
    const values= form.value;
    this.mathOperation.calc_totalScore(values.quant_current,values.verbal_current,values.quant_target,values.verbal_target)
    this.onSubmit.emit();
  //  form.reset();             
  }
}
