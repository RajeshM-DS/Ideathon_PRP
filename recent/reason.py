# -*- coding: utf-8 -*-
"""
Created on Sat Jul  4 10:14:29 2020

@author: rmanickam
"""
def reason_dropout(df):
    def flag_che(df):
        if ~(0.5<=df['Creatinine_mg/dL']<=1.1) | ~(135<=df['Sodium_mmol/L']<=146) | ~(3.5<=df['Potassium_mmol/L']<=5.3) | ~(0.2<=df['Bilirubin_mg/dL']<=1.2) | ~(10<=df['AST_U/L']<=30) | ~(6<=df['ALT_U/L']<=29) |~(29<=df['Creatine Kinase_U/L']<=143) | ~(33<=df['Alkaline Phosphatase_U/L']<=115) | ~(0<=df['C-Reactive Protein_mg/L']<=8):
            return 'Laboratory Chemistry Tests:Abnormal transaminases and Results that lie outside the laboratory reference ranges for Oncology samples'
    
    def flag_hem(df):
        if ~(11.7<=df['Hemoglobin_g/dL']<=15.5) | ~(3.8<=df['Leukocytes_10_3/uL']<=10.8) | ~(1500<=df['Neutrophils_cells/uL']<=7800) | ~(15<=df['Eosinophils_cells/uL']<=500) | ~(0<=df['Basophils_cells/uL']<=200) | ~(850<=df['Lymphocytes_cells/uL']<=3900) |~(200<=df['Monocytes_cells/uL']<=950) | ~(140<=df['Platelets_10_3/uL']<=400) | ~(80<=df['MCV_fL']<=100) | ~(3.8<=df['Erythrocytes_M/uL']<=5.1) | ~(35<=df['Hematocrit_%']<=45):
            return 'Laboratory Hematology Tests:Infection, Inflammation, Hemophilia disorders and Results that lie outside the laboratory reference ranges for Oncology samples'
        
    def flag_re(df):
        if (df['PK Clearance'] <=0.4 or df["Spirometry"] =="60-69%") :
            return 'Drug Reaction(ADME value) is low or FEV1/FVC Ratio is low'
        
    def flag_test(df):
        if  df['atopic H']=='Yes' and df['Asthma Exac.Defin']=='Positive':
            return 'Asthma & Atopic results is not suitable for this therapeutic area'
            
    def flag_ae(df):
        if  df['AE Intensity']=='Severe' or df['Recovery duration']>=32:
            return 'This Adverse event effects and recovery is not providing good evidence to continue the trial'
        
    def flag_habit(df):
        if  df['Smoking History (/week)']>=35 or df['Alcohol habits (/week-ml)']>=4:
            return 'Alcohol Dependence will affect drug reactions in particular visits'
        
    def flag_cm(df):
        if  df['Concometant Drug/Medications']=='Yes':
            return 'Other Concometant Drug/Medications will affect the process of pharmacokinetics'
      
    df['Flag_c'] = df.apply(flag_che, axis = 1) 
    df['Flag_h'] = df.apply(flag_hem, axis = 1) 
    df['Flag_re'] = df.apply(flag_re, axis = 1) 
    df['Flag_t'] = df.apply(flag_test, axis = 1) 
    df['Flag_ae'] = df.apply(flag_ae, axis = 1) 
    df['Flag_hab'] = df.apply(flag_habit, axis = 1) 
    df['Flag_cm'] = df.apply(flag_cm, axis = 1) 
    
    
    value=[df['Flag_c'][0],df['Flag_h'][0],df['Flag_re'][0],df['Flag_t'][0],df['Flag_ae'][0],df['Flag_hab'][0],df['Flag_cm'][0]]
    
    return ';'.join((va) for va in value if va is not None)
    
def reason_enroll(df):
    
    def flag_che(df):
        if ~(0.5<=df['Creatinine_mg/dL']<=1.1) | ~(135<=df['Sodium_mmol/L']<=146) | ~(3.5<=df['Potassium_mmol/L']<=5.3) | ~(0.2<=df['Bilirubin_mg/dL']<=1.2) | ~(10<=df['AST_U/L']<=30) | ~(6<=df['ALT_U/L']<=29) |~(29<=df['Creatine Kinase_U/L']<=143) | ~(33<=df['Alkaline Phosphatase_U/L']<=115) | ~(0<=df['C-Reactive Protein_mg/L']<=8):
            return 'Laboratory Chemistry Tests:Abnormal transaminases and Results that lie outside the laboratory reference ranges for Oncology samples'
    
    def flag_hem(df):
        if ~(11.7<=df['Hemoglobin_g/dL']<=15.5) | ~(3.8<=df['Leukocytes_10_3/uL']<=10.8) | ~(1500<=df['Neutrophils_cells/uL']<=7800) | ~(15<=df['Eosinophils_cells/uL']<=500) | ~(0<=df['Basophils_cells/uL']<=200) | ~(850<=df['Lymphocytes_cells/uL']<=3900) |~(200<=df['Monocytes_cells/uL']<=950) | ~(140<=df['Platelets_10_3/uL']<=400) | ~(80<=df['MCV_fL']<=100) | ~(3.8<=df['Erythrocytes_M/uL']<=5.1) | ~(35<=df['Hematocrit_%']<=45):
            return 'Laboratory Hematology Tests:Infection, Inflammation, Hemophilia disorders and Results that lie outside the laboratory reference ranges for Oncology samples'
        
    def flag_re(df):
        if (df['PK Clearance'] <=0.4 or df["Spirometry"] =="60-69%") :
            return 'FEV1/FVC Ratio is low and this patient do not have healthy lung results'
        
    def flag_test(df):
        if  df['atopic H']=='Yes' and df['Asthma Exac.Defin']=='Positive':
            return 'Asthma & Atopic results is not suitable for enrollment into this therapeutic area'
            
    def flag_habit(df):
        if  df['Smoking History (/week)']>=35 or df['Alcohol habits (/week-ml)']>=4:
            return 'Alcohol Dependence will affect drug reactions in any visits'
      
    def flag_enrol(df):
        if  df['BMI']=='Above30_obese' or df['Dipstick test']=='Abnormal':
            return 'Dipstick test results and Hepatitis Signal and BMI is not providing good evidence to enroll the trial'
        
    def flag_cm(df):
        if  df['Concometant Drug/Medications']=='Yes':
            return 'Other Concometant Drug/Medications and pervious Vaccination History will affect the process of pharmacokinetics.so please check the eligibility compound'

    
    df['Flag_c'] = df.apply(flag_che, axis = 1) 
    df['Flag_h'] = df.apply(flag_hem, axis = 1) 
    df['Flag_re'] = df.apply(flag_re, axis = 1) 
    df['Flag_t'] = df.apply(flag_test, axis = 1) 
    df['Flag_enroll'] = df.apply(flag_enrol, axis = 1) 
    df['Flag_hab'] = df.apply(flag_habit, axis = 1)
    df['Flag_cm'] = df.apply(flag_cm, axis = 1) 
    
    value=[df['Flag_c'][0],df['Flag_h'][0],df['Flag_re'][0],df['Flag_t'][0],df['Flag_enroll'][0],df['Flag_hab'][0],df['Flag_cm'][0]]
    
    return ';'.join((va) for va in value if va is not None)
    