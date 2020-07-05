import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-success1',
  templateUrl: './success1.component.html',
  styleUrls: ['./success1.component.css']
})
export class Success1Component implements OnInit {

  constructor(private dataService : DataService) { }
  print:any
  success:any;
   a:string[];
   datasub:Subscription;
  ngOnInit(): void {
    this.datasub=this.dataService.success1$.subscribe((flag)=> {
        if(flag){
          this.a =flag.split(';');
          console.log(flag);
          console.log(this.a);

          if(this.a[0]==="Patient will not drop out from the oncology trial"){
            console.log('qqq');
            this.print =this.a[0];
            this.success='true';
          }
          else if(this.a[0]==="Patient will drop out from the oncology trial"){
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
