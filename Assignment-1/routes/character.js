// this js is set to be the routing process of "/character"
const express = require("express");
const router = express.Router();

const data = require("../db/character.json").data;
const chars = data.chars;

router.get("/", (req, res) => {
  console.log(req.query);
  res.render("character");
});

router.get("/:id", (req, res) => {
  const prop = req.query.prop;
  const id = req.params.id;
  const text = chars[id][prop];
  const name = chars[id].name;
  const pack = { text, name };

  res.render("character", pack);
});
module.exports = router;

/*
{
    "data": {
        "title": "JavaScript Flashcards",
        "cards": [
            {
                "question": "What language are Express apps written in?",
                "hint": "It starts with a \"J\"",
                "answer": "JavaScript"
            },
            {
                "question": "What is one way a website can store data in a user's browser?",
                "hint": "They are delicious with milk",
                "answer": "Cookies"
            },
            {
                "question": "What is a common way to shorten the response object's name inside middleware?",
                "hint": "It has the same abbreviation as \"resolution\"",
                "answer": "res"
            },
            {
                "question": "How many different values can booleans have?",
                "hint": "Think: binary",
                "answer": "2"
            },
            {
                "question": "Which HTML element can contain JavaScript?",
                "hint": "It starts with an \"s\"",
                "answer": "<script>"
            }
        ]
    }
}

*/
