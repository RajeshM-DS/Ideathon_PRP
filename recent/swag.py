# -*- coding: utf-8 -*-
"""
Created on Sun Jun 21 23:04:59 2020

@author: rmanickam
"""

import sys
sys.path.append("D:\Rajesh\Ideathon\Patient Retention Predictor\Program\App_Angular")

import json
import numpy as np
from flask import Flask, request, jsonify
from flasgger import Swagger
from flasgger.utils import swag_from
from flasgger import LazyString, LazyJSONEncoder
from flask_cors import CORS


import pickle
import pandas as pd

model = pickle.load(open('D:\Rajesh\Ideathon\Patient Retention Predictor\Program\App_Angular\\engine.pkl', 'rb'))

model_columns = pickle.load(open('D:\Rajesh\Ideathon\Patient Retention Predictor\Program\App_Angular\\engine_columns.pkl', 'rb'))

model2 = pickle.load(open('D:\Rajesh\Ideathon\Patient Retention Predictor\Program\App_Angular\\engine_enrollment.pkl', 'rb'))

model2_columns = pickle.load(open('D:\Rajesh\Ideathon\Patient Retention Predictor\Program\App_Angular\\engine_enrollment_columns.pkl', 'rb'))

from reason import reason_dropout,reason_enroll

app = Flask(__name__)
CORS(app)
app.config["SWAGGER"] = {"title": "Swagger-UI", "uiversion": 2}

swagger_config = {
    "headers": [],
    "specs": [
        {
            "endpoint": "apispec_1",
            "route": "/apispec_1.json",
            "rule_filter": lambda rule: True,  # all in
            "model_filter": lambda tag: True,  # all in
        }
    ],
    "static_url_path": "/flasgger_static",
    # "static_folder": "static",  # must be set by user
    "swagger_ui": True,
    "specs_route": "/swagger/",
}

template = dict(
    swaggerUiPrefix=LazyString(lambda: request.environ.get("HTTP_X_SCRIPT_NAME", ""))
)

app.json_encoder = LazyJSONEncoder
swagger = Swagger(app, config=swagger_config, template=template)


#@app.route("/")
#def index():
#    return "Add 2 Numbers!"


@app.route("/patient_prediction", methods=["POST"])
@swag_from("D:\Rajesh\Ideathon\Patient Retention Predictor\Program\App_Angular\\swagger_config.yml")
def patient_prediction():
    input_json = request.get_json()
    
    v1=int(input_json["Visits_delay"])
    v2=int(input_json['Age'])
    v3=str(input_json['Race'])
    v4=str(input_json['Sex'])
    v5=str(input_json['AE_Intensity'])
    v6=str(input_json['Action_taken'])
    v7=int(input_json['Recovery_duration'])
    v8=str(input_json['Tumor_Lesion'])
    v9=str(input_json['Tumor_Location'])
    v10=str(input_json['Fatal'])
    v11=str(input_json['Pregnancy_Test'])
    v12=str(input_json['Dipstick_test'])
    v13=str(input_json['Hepatitis_Bsignal_per_cutoff'])
    v14=str(input_json['atopic_H'])
    v15=str(input_json['Surgical_H'])
    v16=str(input_json['Vaccination_History'])
    v17=str(input_json['Concometant_Drug_Medications'])
    v18=float(input_json['PK_Clearance'])
    v19=str(input_json['Asthma_Exac_Defin'])
    v20=str(input_json['Spirometry'])
    v21=int(input_json['Smoking_History'])
    v22=int(input_json['Alcohol_habits'])
    v23=float(input_json['Creatinine_mg_dL'])
    v24=int(input_json['Sodium_mmol_L'])
    v25=float(input_json['Potassium_mmol_L'])
    v26=float(input_json['Bilirubin_mg_dL'])
    v27=int(input_json['AST_U_L'])
    v28=int(input_json['ALT_U_L'])
    v29=int(input_json['Creatine_Kinase_U_L'])
    v30=int(input_json['Alkaline_Phosphatase_U_L'])
    v31=int(input_json['C_Reactive_Protein_mg_L'])
    v32=float(input_json['Hemoglobin_g_dL'])
    v33=float(input_json['Leukocytes_10_3_uL'])
    v34=int(input_json['Neutrophils_cells_uL'])
    v35=int(input_json['Eosinophils_cells_uL'])
    v36=int(input_json['Basophils_cells_uL'])
    v37=int(input_json['Lymphocytes_cells_uL'])
    v38=int(input_json['Monocytes_cells_uL'])
    v39=int(input_json['Platelets_10_3_uL'])
    v40=int(input_json['MCV_fL'])
    v41=float(input_json['Erythrocytes_M_uL'])
    v42=int(input_json['Hematocrit'])
    
    
    data=[[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,v28,v29,v30,v31,v32,v33,v34,v35,v36,v37,v38,v39,v40,v41,v42]]

    col=['Visits delay','Age','Race','Sex','AE Intensity','Action taken','Recovery duration','Tumor Lesion','Tumor Location','Fatal','Pregnancy Test','Dipstick test','Hepatitis B-signal per cutoff (s/c)','atopic H','Surgical H','Vaccination History','Concometant Drug/Medications','PK Clearance','Asthma Exac.Defin','Spirometry','Smoking History (/week)','Alcohol habits (/week-ml)','Creatinine_mg/dL','Sodium_mmol/L','Potassium_mmol/L','Bilirubin_mg/dL','AST_U/L','ALT_U/L','Creatine Kinase_U/L','Alkaline Phosphatase_U/L','C-Reactive Protein_mg/L','Hemoglobin_g/dL','Leukocytes_10_3/uL','Neutrophils_cells/uL','Eosinophils_cells/uL','Basophils_cells/uL','Lymphocytes_cells/uL','Monocytes_cells/uL','Platelets_10_3/uL','MCV_fL','Erythrocytes_M/uL','Hematocrit_%']
    df = pd.DataFrame(data, columns = col) 

    df_user = pd.get_dummies(df)
    
    for col in model_columns:
        if col not in df_user.columns:
            df_user[col] = 0
    reason_value=reason_dropout(df)
    
    if model.predict_classes(df_user) == 1:
        result='Patient will drop out from the oncology trial'
        results=result + ';' + reason_value
    else:
        result='Patient will not drop out from the oncology trial'
        results=result
      
    #except:
     #   result='error'
    return json.dumps(results)



@app.route("/patient_enrollment", methods=["POST"])
@swag_from("D:\Rajesh\Ideathon\Patient Retention Predictor\Program\App_Angular\\swagger_config_enrollment.yml")
def patient_enrollment():
    input_json = request.get_json()
    #try:
        
    v1=int(input_json['Age'])
    v2=str(input_json['Race'])
    v3=str(input_json['Sex'])
    v4=str(input_json['BMI'])
    v5=str(input_json['Blood_pressure'])
    v6=str(input_json['Heart_rate'])
    v7=str(input_json['Pregnancy_Test'])
    v8=str(input_json['Dipstick_test'])
    v9=str(input_json['Hepatitis_Bsignal_per_cutoff'])
    v10=str(input_json['atopic_H'])
    v11=str(input_json['Surgical_H'])
    v12=str(input_json['Vaccination_History'])
    v13=str(input_json['Concometant_Drug_Medications'])
    v14=float(input_json['PK_Clearance'])
    v15=str(input_json['Asthma_Exac_Defin'])
    v16=str(input_json['Spirometry'])
    v17=int(input_json['Smoking_History'])
    v18=int(input_json['Alcohol_habits'])
    v19=float(input_json['Creatinine_mg_dL'])
    v20=int(input_json['Sodium_mmol_L'])
    v21=float(input_json['Potassium_mmol_L'])
    v22=float(input_json['Bilirubin_mg_dL'])
    v23=int(input_json['AST_U_L'])
    v24=int(input_json['ALT_U_L'])
    v25=int(input_json['Creatine_Kinase_U_L'])
    v26=int(input_json['Alkaline_Phosphatase_U_L'])
    v27=int(input_json['C_Reactive_Protein_mg_L'])
    v28=float(input_json['Hemoglobin_g_dL'])
    v29=float(input_json['Leukocytes_10_3_uL'])
    v30=int(input_json['Neutrophils_cells_uL'])
    v31=int(input_json['Eosinophils_cells_uL'])
    v32=int(input_json['Basophils_cells_uL'])
    v33=int(input_json['Lymphocytes_cells_uL'])
    v34=int(input_json['Monocytes_cells_uL'])
    v35=int(input_json['Platelets_10_3_uL'])
    v36=int(input_json['MCV_fL'])
    v37=float(input_json['Erythrocytes_M_uL'])
    v38=int(input_json['Hematocrit'])
    
    data_2=[[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,v28,v29,v30,v31,v32,v33,v34,v35,v36,v37,v38]]

    col_2=['Age','Race','Sex','BMI','Blood pressure','Heart rate','Pregnancy Test','Dipstick test','Hepatitis B-signal per cutoff (s/c)','atopic H','Surgical H','Vaccination History','Concometant Drug/Medications','PK Clearance','Asthma Exac.Defin','Spirometry','Smoking History (/week)','Alcohol habits (/week-ml)','Creatinine_mg/dL','Sodium_mmol/L','Potassium_mmol/L','Bilirubin_mg/dL','AST_U/L','ALT_U/L','Creatine Kinase_U/L','Alkaline Phosphatase_U/L','C-Reactive Protein_mg/L','Hemoglobin_g/dL','Leukocytes_10_3/uL','Neutrophils_cells/uL','Eosinophils_cells/uL','Basophils_cells/uL','Lymphocytes_cells/uL','Monocytes_cells/uL','Platelets_10_3/uL','MCV_fL','Erythrocytes_M/uL','Hematocrit_%']
    df_2 = pd.DataFrame(data_2, columns = col_2) 

    df_user_2 = pd.get_dummies(df_2)
    
    for col in model2_columns:
        if col not in df_user_2.columns:
            df_user_2[col] = 0
            
    reason_value=reason_enroll(df_2)

    if model2.predict_classes(df_user_2) == 1:
        result_2='This patient is eligible for oncology trial and allow this patient for enrollment'
        results_2=result_2
    else:
        result_2='This patient is not eligible for oncology trial'
        results_2=result_2 + ';' + reason_value               

    #except:
        #results_2='error'
    return json.dumps(results_2)


if __name__ == "__main__":
    app.run(host="localhost",port=5000)