import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin
import sqlite3


app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/api/restos', methods=['GET'])
@cross_origin()
def api_all():
    conn = sqlite3.connect('restaurantB.db')
   
    cur = conn.cursor()
    all_resto = cur.execute('SELECT * FROM resto ;').fetchall()

    
    all_resto_list = []
    rest_dict = {}
    for restaurant in all_resto :
        d = {"Id": restaurant[0],"Name": restaurant[1], "Address": restaurant[2], "Zip_Code": restaurant[3], "Phone_Number": restaurant[4], "Website": restaurant[5], "Latitude": restaurant[6], "Longitude": restaurant[7]}
        all_resto_list.append(d)

    return jsonify(all_resto_list)

@app.route('/api/resto/<int:Id>', methods=['GET'])
@cross_origin()
def getid(Id):
    conn = sqlite3.connect('restaurantB.db')
   
    cur = conn.cursor()
    all_restoId = cur.execute('SELECT * FROM resto where Id=%s'% Id).fetchall()
    all_restoID_list = []
    restid_dict = {}
    for restaurant in all_restoId :
        d = {"Id": restaurant[0],"Name": restaurant[1], "Address": restaurant[2], "Zip_Code": restaurant[3], "Phone_Number": restaurant[4], "Website": restaurant[5], "Latitude": restaurant[6], "Longitude": restaurant[7]}
        
        all_restoID_list.append(d)

    
    return  jsonify(all_restoID_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000)


# import time
# from flask import Flask
# from flask_cors import CORS, cross_origin

# app = Flask(__name__)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# @app.route('/time')
# @cross_origin()
# def get_current_time():
#     return {'time': time.time()}

# if __name__ == '__main__':
#     app.run(host='0.0.0.0',port=4000)


# to activate backend-flask-venv: source backend-flask/backend-flask-venv/bin/activate
# to run flask:  flask run -h yourAPadress -p 4000
