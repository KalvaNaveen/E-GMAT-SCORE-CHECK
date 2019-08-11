import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-total-score',
  templateUrl: './total-score.component.html',
  styleUrls: ['./total-score.component.css']
})
export class TotalScoreComponent implements OnInit {
  @Input() graphData;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges()	
  { 
    document.querySelector('.bar__graph--target').id= `targetAnimate__${this.graphData.type}`;
    document.querySelector('.bar__graph--current').id=`currentAnimate__${this.graphData.type}`;
    document.getElementById(`currentAnimate__${this.graphData.type}`).style.width = this.graphData.currentwidth;
    document.getElementById(`targetAnimate__${this.graphData.type}`).style.width = this.graphData.targetwidth;
    document.getElementById(`currentAnimate__${this.graphData.type}`).animate([{width: 0},
                                                            {width:this.graphData.currentwidth}],
                                                            {duration:2000, easing: 'ease-in-out'});

    document.getElementById(`targetAnimate__${this.graphData.type}`).animate([{width: 0},
                                                          {width:this.graphData.targetwidth}],
                                                          {duration:2000, easing: 'ease-in-out'});
  }
}