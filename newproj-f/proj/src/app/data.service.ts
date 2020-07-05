import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Page1Model, Page3Model } from './page1-model';
import { Page2Model } from './page2-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
    
    dash = new BehaviorSubject<boolean>(false);
    dash$ =this.dash.asObservable();

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
        /* const body ={"Visits_delay": 48,
        "Age": 63,
        "Race": "Native Hawaiian or Other Pacific Islander",
        "Sex": "Female",
        "AE_Intensity": "Moderate",
        "Action_taken": "Dose not changed",
        "Recovery_duration": 38,
        "Tumor_Lesion": "Primary Tumor",
        "Tumor_Location": "DUODENUM",
        "Fatal": "No",
        "Pregnancy_Test": "Negative",
        "Dipstick_test": "Abnormal",
        "Hepatitis_Bsignal_per_cutoff": "5 to 12",
        "atopic_H": "No",
        "Surgical_H": "Endoscopy surgery",
        "Vaccination_History": "Dengu",
        "Concometant_Drug_Medications": "No",
        "PK_Clearance": 0.58,
        "Asthma_Exac_Defin": "Positive",
        "Spirometry": "60-69%",
        "Smoking_History": 10,
        "Alcohol_habits": 3,
        "Creatinine_mg_dL": 1.2,
        "Sodium_mmol_L": 150,
        "Potassium_mmol_L": 3.9,
        "Bilirubin_mg_dL": 1.4,
        "AST_U_L": 29,
        "ALT_U_L": 26,
        "Creatine_Kinase_U_L": 52,
        "Alkaline_Phosphatase_U_L": 78,
        "C_Reactive_Protein_mg_L": 3,
        "Hemoglobin_g_dL": 10.8,
        "Leukocytes_10_3_uL": 4.3,
        "Neutrophils_cells_uL": 4624,
        "Eosinophils_cells_uL": 16,
        "Basophils_cells_uL": 202,
        "Lymphocytes_cells_uL": 2607,
        "Monocytes_cells_uL": 878,
        "Platelets_10_3_uL": 385,
        "MCV_fL": 86,
        "Erythrocytes_M_uL": 5.3,
        "Hematocrit": 30}; */
        
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