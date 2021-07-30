import mongoose from "mongoose";
import express from "express";
import Cors from "cors";
import Users from "./schemas/user.js";

// const mongoose = require("mongoose");
// const express = require("express");

const app = express();
const port = process.env.PORT || 8001;
const password = "FSgBWLje6pAdFA06";
const URI = `mongodb+srv://admin:${password}@cluster0.qde6a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(Cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/users", (req, res) => {
  const user = req.body;
  Users.create(
    { ...user, favourites: [], friends: [], notifications: [] },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
});

app.get("/users", (req, res) => {
  Users.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
    return data;
  });
});

app.put("/users/notification", (req, res) => {
  console.log(req.body);
  Users.findOne({ username: req.body.receiver }, function (err, user) {
    if (err) return console.log(err);
    console.log(user);
    user.notifications.push({ ...req.body.show, sender: req.body.sender });
    user.save((err, updatedPerson) => {
      if (err) return console.log(err);
      console.log(updatedPerson);
    });
  });
});

app.put("/users/friend", (req, res) => {
  console.log(req.body);
  Users.findOne({ username: req.body.user }, function (err, user) {
    if (err) return console.log(err);
    console.log(user);
    user.friends.push(req.body.friendName);
    user.save((err, updatedPerson) => {
      if (err) return console.log(err);
      console.log(updatedPerson);
    });
  });
});

app.put("/users/favourite", (req, res) => {
  console.log(req.body);
  Users.findOne({ username: req.body.user }, function (err, user) {
    if (err) return console.log(err);
    console.log(user);
    let isAlreadyFavourite = false;
    for (let i = 0; i < user.favourites.length; i++) {
      if (user.favourites[i].name === req.body.show.name) {
        isAlreadyFavourite = true;
      }
      break;
    }
    if (!isAlreadyFavourite) {
      user.favourites.push(req.body.show);
      user.save((err, updatedPerson) => {
        if (err) return console.log(err);
        console.log(updatedPerson);
      });
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
