import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Page1Model, Page3Model } from './page1-model';
import { Page2Model } from './page2-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
    

    success1 = new BehaviorSubject<string>(null);
    success1$ =this.success1.asObservable();

    success2 = new BehaviorSubject<string>(null);
    success2$ =this.success2.asObservable();
    constructor(private http: HttpClient) {
    }


    getPatientPrediction(p1 :Page1Model) {
        console.log('aaa');
        let headers: HttpHeaders = new HttpHeaders();
                headers = headers.append('Content-Type', 'application/json');
                
        const body =JSON.stringify(p1);
        console.log(body);

         return this.http.post<any>('http://localhost:5000/patient_prediction',body,{headers});
         

        
    }
    getPatientEnrollment(p2 :Page2Model) {
        console.log('ppp- enroll');
        let headers: HttpHeaders = new HttpHeaders();
                headers = headers.append('Content-Type', 'application/json');
                
        const body =JSON.stringify(p2);
        console.log(body);
         return this.http.post<string>('http://localhost:5000/patient_enrollment',p2,{headers});

        
    }

    
}