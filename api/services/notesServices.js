import Notes from "../models/notesModel";

const services = {};


//==========================================Create Notes Detail Service==========================================

services.createNotes = (req,data,id) =>
  new Promise(async (res, rej) => {
      try {

          const notes = await new Notes({
              user: req._id,
              course: id,
              ...data
          }).save();

      res(notes);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Update Notes Detail Service==========================================

services.updateNotes = (req,data,id) =>
  new Promise(async (res, rej) => {
    try {

      const newData = {
        text: data.text,
        user: req._id,
        course: id
      }
      const notes = await Notes.findOneAndUpdate({ user: req._id, course: id }, { ...data }, { upsert: true ,  new: true })

      res(notes);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });


//==========================================Get Notes Service==========================================
services.getNotes = (id) =>
  new Promise(async (res, rej) => {
    try {
      const notes = await Notes.findById(id);

      res(notes);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default services;
