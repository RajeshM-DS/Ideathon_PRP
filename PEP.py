# -*- coding: utf-8 -*-
"""
Created on Sat Jun 20 18:52:17 2020

@author: rmanickam
"""

import tensorflow as tf
import pandas as pd
from keras.models import Sequential
from keras.layers import Dense,Dropout
from keras.wrappers.scikit_learn import KerasClassifier
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import StratifiedKFold
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from keras.optimizers import Adam
# load dataset
dataframe = pd.read_csv(r"D:\Rajesh\Ideathon\Patient Retention Predictor\data_enrollment.csv")

# split into input (X) and output (Y) variables
X = dataframe.iloc[:,0:38]
Y = dataframe.iloc[:,38]
# encode class values as integers
encoder = LabelEncoder()
encoder.fit(Y)
encoded_Y = encoder.transform(Y)

x_ds=pd.get_dummies(X)

from sklearn.model_selection import train_test_split
x_train, x_valid, y_train, y_valid = train_test_split(x_ds, encoded_Y, test_size=0.33,random_state=0)



model = Sequential()
model.add(Dense(100, input_dim=63, activation='relu'))
model.add(Dense(100, activation='relu'))
model.add(Dense(1, activation='sigmoid'))



model.compile(loss='binary_crossentropy', optimizer=Adam(lr=0.001), metrics=['accuracy'])

model.summary()

model.fit(x_train, y_train,epochs=50, batch_size=5, verbose=1)


y_pred=model.predict_classes(x_valid)

from sklearn.metrics import classification_report, confusion_matrix

cm=confusion_matrix(y_valid,y_pred)

score = model.evaluate(x_valid, y_valid,verbose=1)

print(score)


import pickle
pickle.dump(model,open('D:\\Rajesh\\Ideathon\\Patient Retention Predictor\\Program\\engine_enrollment.pkl','wb')) #saving model to disk

engine=pickle.load(open('D:\\Rajesh\\Ideathon\\Patient Retention Predictor\\Program\\engine_enrollment.pkl','rb'))

dum=engine.predict_classes(x_valid)

engine_columns = list(x_ds.columns)
pickle.dump(engine_columns, open('D:\\Rajesh\\Ideathon\\Patient Retention Predictor\\Program\\engine_enrollment_columns.pkl','wb'))


# serialize model to JSON
model_json = model.to_json()
with open("D:\\Rajesh\\Ideathon\\Patient Retention Predictor\\Program\\model_enrollment.json", "w") as json_file:
    json_file.write(model_json)
# serialize weights to HDF5
model.save_weights("D:\\Rajesh\\Ideathon\\Patient Retention Predictor\\Program\\model_enrollment.h5")
print("Saved model to disk")
 