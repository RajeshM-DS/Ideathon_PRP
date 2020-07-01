import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Page2Model } from 'src/app/page2-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

    newform :FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private dataService : DataService,
        private router:Router
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
            input1: ['42', Validators.required],
            input2: ['Caucasian/White', Validators.required],
            input3: ['Male', Validators.required],
            input4: ['Between19_25_Normal', Validators.required],
            input5: ['Ideal_90_60mmHg', Validators.required],
            input6: ['Above 60', Validators.required],
            input7: ['Negative', Validators.required],
            input8: ['Normal', Validators.required],
            input9: ['5 to 12', Validators.required],
            input10: ['Yes', Validators.required],
            input11: ['Bowel resection', Validators.required],
            input12: ['Tetanus', Validators.required],
            input13: ['Yes', Validators.required],
            input14: ['0.71', Validators.required],
            input15: ['Positive', Validators.required],
            input16: ['>80%', Validators.required],
            input17: ['4', Validators.required],
            input18: ['4', Validators.required],
            input19: ['1.7', Validators.required],
            input20: ['146', Validators.required],
            input21: ['5.8', Validators.required],
            input22: ['1.6', Validators.required],
            input23: ['25', Validators.required],
            input24: ['12', Validators.required],
            input25: ['154', Validators.required],
            input26: ['120', Validators.required],
            input27: ['15', Validators.required],
            input28: ['12.8', Validators.required],
            input29: ['7.9', Validators.required],
            input30: ['4650', Validators.required],
            input31: ['142', Validators.required],
            input32: ['97', Validators.required],
            input33: ['2700', Validators.required],
            input34: ['394', Validators.required],
            input35: ['386', Validators.required],
            input36: ['77', Validators.required],
            input37: ['3.4', Validators.required],
            input38: ['36', Validators.required]
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
       // this.currentUserSubscription.unsubscribe();
    }

    

    print:any;
    get f() { return this.newform.controls; }
    onSubmit()
    {
        this.submitted = true;
        if (this.newform.invalid) {
            return;
        }
        console.log(this.newform);
        console.log(this.newform.value);

       const page2 =new Page2Model();
        page2.Age =+this.newform.get('input1').value;
        page2.Race =this.newform.get('input2').value;
        page2.Sex =this.newform.get('input3').value;
        page2.BMI =this.newform.get('input4').value;
        page2.Blood_pressure =this.newform.get('input5').value;
        page2.Heart_rate =this.newform.get('input6').value;
        page2.Pregnancy_Test =this.newform.get('input7').value;
        page2.Dipstick_test =this.newform.get('input8').value;
        page2.Hepatitis_Bsignal_per_cutoff =this.newform.get('input9').value;
        page2.atopic_H =this.newform.get('input10').value;
        page2.Surgical_H =this.newform.get('input11').value;
        page2.Vaccination_History =this.newform.get('input12').value;
        page2.Concometant_Drug_Medications =this.newform.get('input13').value;
        page2.PK_Clearance =+this.newform.get('input14').value;
        page2.Asthma_Exac_Defin =this.newform.get('input15').value;
        page2.Spirometry =this.newform.get('input16').value;
        page2.Smoking_History =+this.newform.get('input17').value;
        page2.Alcohol_habits =+this.newform.get('input18').value;
        page2.Creatinine_mg_dL =+this.newform.get('input19').value;
        page2.Sodium_mmol_L =+this.newform.get('input20').value;
        page2.Potassium_mmol_L =+this.newform.get('input21').value;
        page2.Bilirubin_mg_dL =+this.newform.get('input22').value;
        page2.AST_U_L =+this.newform.get('input23').value;
        page2.ALT_U_L =+this.newform.get('input24').value;
        page2.Creatine_Kinase_U_L =+this.newform.get('input25').value;
        page2.Alkaline_Phosphatase_U_L =+this.newform.get('input26').value;
        page2.C_Reactive_Protein_mg_L =+this.newform.get('input27').value;
        page2.Hemoglobin_g_dL =+this.newform.get('input28').value;
        page2.Leukocytes_10_3_uL =+this.newform.get('input29').value;
        page2.Neutrophils_cells_uL =+this.newform.get('input30').value;
        page2.Eosinophils_cells_uL =+this.newform.get('input31').value;
        page2.Basophils_cells_uL =+this.newform.get('input32').value;
        page2.Lymphocytes_cells_uL =+this.newform.get('input33').value;
        page2.Monocytes_cells_uL =+this.newform.get('input34').value;
        page2.Platelets_10_3_uL =+this.newform.get('input35').value;
        page2.MCV_fL =+this.newform.get('input36').value;
        page2.Erythrocytes_M_uL =+this.newform.get('input37').value;
        page2.Hematocrit =+this.newform.get('input38').value;
        
        
        console.log(page2);
        this.dataService.getPatientEnrollment(page2).subscribe( data => {
          console.log('bbbb')
          console.log(data);
          this.dataService.success2.next(data);
        });

        this.router.navigateByUrl('/success2');
    
    }
}
