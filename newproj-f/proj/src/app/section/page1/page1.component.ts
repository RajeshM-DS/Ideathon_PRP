import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Page1Model } from 'src/app/page1-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

    newform :FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private dataService : DataService,
        private router :Router
    ) {
       
    }

    show1:boolean;
    show2:boolean;
    show3:boolean;
    onShow1(){
        this.show1 =!this.show1;
    }
    onShow2(){
        this.show2 =!this.show2;
    }
    onShow3(){
        this.show3 =!this.show3;
    }

    ngOnInit() {
        
        this.newform = this.formBuilder.group({
            TA:[''],
            PN:[''],
            input1: ['48', Validators.required],
            input2: ['63', Validators.required],
            input3: ['Native Hawaiian or Other Pacific Islander', Validators.required],
            input4: ['Female', Validators.required],
            input5: ['Moderate', Validators.required],
            input6: ['Dose not changed', Validators.required],
            input7: ['38', Validators.required],
            input8: ['Primary Tumor', Validators.required],
            input9: ['DUODENUM', Validators.required],
            input10: ['No', Validators.required],
            input11: ['Negative', Validators.required],
            input12: ['Abnormal', Validators.required],
            input13: ['5 to 12', Validators.required],
            input14: ['No', Validators.required],
            input15: ['Endoscopy surgery', Validators.required],
            input16: ['Dengu', Validators.required],
            input17: ['No', Validators.required],
            input18: ['0.58', Validators.required],
            input19: ['Positive', Validators.required],
            input20: ['60-69%', Validators.required],
            input21: ['10', Validators.required],
            input22: ['3', Validators.required],
            input23: ['1.2', Validators.required],
            input24: ['150', Validators.required],
            input25: ['3.9', Validators.required],
            input26: ['1.4', Validators.required],
            input27: ['29', Validators.required],
            input28: ['26', Validators.required],
            input29: ['52', Validators.required],
            input30: ['78', Validators.required],
            input31: ['3', Validators.required],
            input32: ['10.8', Validators.required],
            input33: ['4.3', Validators.required],
            input34: ['4624', Validators.required],
            input35: ['16', Validators.required],
            input36: ['202', Validators.required],
            input37: ['2607', Validators.required],
            input38: ['878', Validators.required],
            input39: ['385', Validators.required],
            input40: ['86', Validators.required],
            input41: ['5.3', Validators.required],
            input42: ['30', Validators.required]
            
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
       // this.currentUserSubscription.unsubscribe();
    }

    

    print :any;
    get f() { return this.newform.controls; }
    onSubmit()
    {
        this.submitted = true;
        if (this.newform.invalid) {
            return;
        }
        console.log(this.newform);
        console.log(this.newform.value);

       const page1 =new Page1Model();
        page1.Visits_delay =+this.newform.get('input1').value;
        page1.Age =+this.newform.get('input2').value;
        page1.Race =this.newform.get('input3').value;
        page1.Sex =this.newform.get('input4').value;
        page1.AE_Intensity =this.newform.get('input5').value;
        page1.Action_taken =this.newform.get('input6').value;
        page1.Recovery_duration =+this.newform.get('input7').value;
        page1.Tumor_Lesion =this.newform.get('input8').value;
        page1.Tumor_Location =this.newform.get('input9').value;
        page1.Fatal =this.newform.get('input10').value;
        page1.Pregnancy_Test =this.newform.get('input11').value;
        page1.Dipstick_test =this.newform.get('input12').value;
        page1.Hepatitis_Bsignal_per_cutoff =this.newform.get('input13').value;
        page1.atopic_H =this.newform.get('input14').value;
        page1.Surgical_H =this.newform.get('input15').value;
        page1.Vaccination_History =this.newform.get('input16').value;
        page1.Concometant_Drug_Medications =this.newform.get('input17').value;
        page1.PK_Clearance =+this.newform.get('input18').value;
        page1.Asthma_Exac_Defin =this.newform.get('input19').value;
        page1.Spirometry =this.newform.get('input20').value;
        page1.Smoking_History =+this.newform.get('input21').value;
        page1.Alcohol_habits =+this.newform.get('input22').value;
        page1.Creatinine_mg_dL =+this.newform.get('input23').value;
        page1.Sodium_mmol_L =+this.newform.get('input24').value;
        page1.Potassium_mmol_L =+this.newform.get('input25').value;
        page1.Bilirubin_mg_dL =+this.newform.get('input26').value;
        page1.AST_U_L =+this.newform.get('input27').value;
        page1.ALT_U_L =+this.newform.get('input28').value;
        page1.Creatine_Kinase_U_L =+this.newform.get('input29').value;
        page1.Alkaline_Phosphatase_U_L =+this.newform.get('input30').value;
        page1.C_Reactive_Protein_mg_L =+this.newform.get('input31').value;
        page1.Hemoglobin_g_dL =+this.newform.get('input32').value;
        page1.Leukocytes_10_3_uL =+this.newform.get('input33').value;
        page1.Neutrophils_cells_uL =+this.newform.get('input34').value;
        page1.Eosinophils_cells_uL =+this.newform.get('input35').value;
        page1.Basophils_cells_uL =+this.newform.get('input36').value;
        page1.Lymphocytes_cells_uL =+this.newform.get('input37').value;
        page1.Monocytes_cells_uL =+this.newform.get('input38').value;
        page1.Platelets_10_3_uL =+this.newform.get('input39').value;
        page1.MCV_fL =+this.newform.get('input40').value;
        page1.Erythrocytes_M_uL =+this.newform.get('input41').value;
        page1.Hematocrit =+this.newform.get('input42').value;
        
        console.log(page1);
        this.dataService.getPatientPrediction(page1).subscribe( data => {
          console.log('bbbb')
          console.log(data);
          this.dataService.success1.next(data);
        });

        //this.dataService.success1.next(this.print);
        this.router.navigateByUrl('/success1');
    }
}
