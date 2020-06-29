import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-success2',
  templateUrl: './success2.component.html',
  styleUrls: ['./success2.component.css']
})
export class Success2Component implements OnInit {

  constructor(private dataService : DataService) { }
  print:any
  success:boolean;
  ngOnInit(): void {
    this.dataService.success2$.subscribe((flag)=> {

      this.print =flag

      if(this.print="This patient is eligible for oncology trial and allow this patient for enrollment"){
        console.log('qqq');
        this.success=true;
      }
      else if(this.print="This patient is not eligible for oncology trial"){
        console.log('www');
        this.success=false;
  
      }
    }
    );
  }

}
