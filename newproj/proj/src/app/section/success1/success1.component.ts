import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-success1',
  templateUrl: './success1.component.html',
  styleUrls: ['./success1.component.css']
})
export class Success1Component implements OnInit {

  constructor(private dataService : DataService) { }
  print:any
  success:boolean;
  ngOnInit(): void {
    this.dataService.success1$.subscribe((flag)=> {

      this.print =flag

      if(this.print="Patient will not drop out from the oncology trial"){
        console.log('qqq');
        this.success=true;
      }
      else if(this.print="Patient will drop out from the oncology trial"){
        console.log('www');
        this.success=false;
  
      }
    }
    );
    
  }
  


}
