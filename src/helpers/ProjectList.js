import coinbaseimg from "../assets/coinbaseclon.png"
import carelibro from "../assets/carelibro.png"
import notesappimg from "../assets/appnotas.png"

import htmlcssimg from "../assets/htmlcss.png"
import javascriptimg from "../assets/javascript.png"
import sqlite from "../assets/sqlite.png"
import pythonimg from "../assets/pythonlogo.png"
import django from "../assets/djangolargo.png"
import reactimg from "../assets/reacttt.png"
import sassimg from "../assets/sass.png"
import flaskimg from "../assets/flask.png"
import bootstrapimg from "../assets/bootstrap.png"

export const ProjectList =[
    {
        name: "Coinbase clone",
        image: coinbaseimg,
        skills: "HTML, CSS, Sass",
        link: "https://github.com/Kenguan1/coinbase-clone",
        skillsimg: [htmlcssimg, sassimg]
    },
    {
        name: "E-commerce Bookstore",
        image: carelibro,
        skills: "HTML, CSS, Bootstrap, Python, Django, SQLite",
        link: "https://github.com/Kenguan1/e-commerce-bookstore",
        skillsimg: [bootstrapimg, sqlite, javascriptimg, django, pythonimg]

    },
    {
        name: "Notes App",
        image: notesappimg,
        skills: "HTML, CSS, React",
        link: "https://github.com/Kenguan1/appnotas",
        skillsimg: [reactimg, javascriptimg]
    },
    {
        name: "React Project soon",
        /* image: carelibro, */
        skills: "HTML, CSS, React",
        skillsimg: [reactimg, javascriptimg]
    }
]