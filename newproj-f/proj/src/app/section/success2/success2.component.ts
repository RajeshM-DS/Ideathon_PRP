import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-success2',
  templateUrl: './success2.component.html',
  styleUrls: ['./success2.component.css']
})
export class Success2Component implements OnInit {
  constructor(private dataService : DataService) { }
  print:any
  success:any;
   a:string[];
   datasub:Subscription;
  ngOnInit(): void {
    this.datasub=this.dataService.success2$.subscribe((flag)=> {
        if(flag){
          this.a =flag.split(';');
          console.log(flag);
          console.log(this.a);

          if(this.a[0]==="This patient is eligible for oncology trial and allow this patient for enrollment"){
            console.log('qqq');
            this.print =this.a[0];
            this.success='true';
          }
          else if(this.a[0]==="This patient is not eligible for oncology trial"){
            console.log('www');
            this.print =this.a[0];
            this.success='false';
      
          }

        }
      

      
    }
    );
    
  }

  ngOnDestroy(){
    this.datasub.unsubscribe();
  }

}
