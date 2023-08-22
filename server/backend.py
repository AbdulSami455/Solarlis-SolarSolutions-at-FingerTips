from flask import Flask,jsonify

app=Flask(__name__)


@app.route('/checkstatus',methods=['GET'])
def hello():
    return {'Message':'200 OK'}
app.run(port=7000,debug=True)