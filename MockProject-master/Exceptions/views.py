from django.shortcuts import render

from models import ExceptionType
# Create your views here.

def populateDBTAI(request):
    json_data=open("jsono1/json").read()
    data=json.loads(json_data)
    for pk,pv in data.iteritems():
        for k,v in pv.iteritems():
            print(k,v)