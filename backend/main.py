from fastapi import FastAPI

from bson import ObjectId
from schematics.models import Model
from schematics.types import StringType
import database
from pydantic import BaseModel
from typing import Dict, List, Any

class Notes(Model):
    _id = ObjectId()
    title = StringType(required=True)
    content = StringType(required=True)

app = FastAPI()

@app.post("/notes")
def create_notes(title: List | Dict | Any=None,  content: List | Dict | Any=None):
    database.db.notescollection.insert_one({"title": title, "content": content})
    return {"Success":"Note created successfully"}

@app.get("/getnotes")
def get_notes():
    l=[]
    notes = database.db.notescollection.find()
    for i in notes:
        i["_id"] = str(i["_id"])
        l.append(i)
    return l
