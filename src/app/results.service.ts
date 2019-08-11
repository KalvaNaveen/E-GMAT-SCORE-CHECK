import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }
  e_gmatScore={};
  total_currentScore : number;
  total_targetScore : number;
  quant_currentScore :number;
  quant_targetScore :number;
  verbal_currentScore :number;
  verbal_targetScore :number;
   
  calc_totalScore(c_QS,c_VS,t_QS,t_VS) {
    this.total_currentScore = 200 + (c_QS + c_VS) * 5;
    this.total_targetScore = 200 + (t_QS + t_VS) * 5;
    this.quant_currentScore= c_QS;
    this.quant_targetScore= t_QS;
    this.verbal_currentScore= c_VS;
    this.verbal_targetScore= t_VS;
  }
  getGraphData() {
   return this.e_gmatScore={
      totalScore:{
        type:'GMAT',
        currentwidth:`${(this.total_currentScore/800)*100}%`, 
        targetwidth:`${(this.total_targetScore/800)*100}%`,
        difference: this.getDifference(this.total_currentScore,this.total_targetScore),
        currentScore:this.total_currentScore,
        targetScore: this.total_targetScore,
      
      },
      quantScore:{ 
        type:'Quant',
        currentwidth:`${(this.quant_currentScore/60)*100}%`, 
        targetwidth:`${(this.quant_targetScore/60)*100}%`,
        difference: this.getDifference(this.quant_currentScore,this.quant_targetScore),
        currentScore:`Q${this.quant_currentScore}`,
        targetScore:`Q${this.quant_targetScore}`,
   
      },
      verbalScore:{
        type:'Verbal',
        currentwidth:`${(this.verbal_currentScore/60)*100}%`, 
        targetwidth:`${(this.verbal_targetScore/60)*100}%`,
        difference: this.getDifference(this.verbal_currentScore,this.verbal_targetScore),
        currentScore:`V${this.verbal_currentScore}`,
        targetScore:`V${this.verbal_targetScore}`,
   
      }
    }
  }
  getDifference(current,target) {
    let difference : {}; 
    if(target === current){
      return difference={type : 'EQUAL',
                          value:0};
    }
    else if(target > current){
       return difference ={type:'LOWER',
                          value:target - current}
    }
    else{
      return difference ={type:'HIGHER',
      value:current - target}
    }
  }
}
