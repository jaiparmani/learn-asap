from Exceptions.models import ExceptionType
from django.db import models
from django.shortcuts import render
from django.http import HttpResponse


def readFile(request, path):
#  reading the file
    # import json
    # j=json.loads(f.read())
    # print(j)
    print(path)

    # iterating over the json file
    # json = {"key":[array of values]}
    jsonVar = {
        "Book":[

            {
            "book_id":1,    
            "name":"Sakshi",
            "Type":"OTC",
            "Location":"Mumbai",
            },
            {
            "book_id":2,  
            "name":"Laksh",
            "Type":"FX",
            "Location":"Mumbai",
            },
        ]
    }
    for i in jsonVar.keys():
        print("Records of ", i)
        for j in jsonVar[i]:

            print(j)

    return HttpResponse(path)



