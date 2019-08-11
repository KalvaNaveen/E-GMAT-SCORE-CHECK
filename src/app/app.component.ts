import { Component } from '@angular/core';

import { ResultsService} from './results.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  graphData;
  constructor(private getGraphData:ResultsService){ }
  ngOnInit(){
   
  }
  getgraphdata() {
   this.graphData = this.getGraphData.getGraphData();
   
  } 
}
