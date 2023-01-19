const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");
const TodosCategories = require("../models/todos-categories.models");

const users = [
  { username: "Iannacus", email: "ian@gmail.com", password: "1234" }, // id: 1
  { username: "Jhorman", email: "jhorman@gmail.com", password: "1234" }, // id: 2
  { username: "Lucero", email: "lucero@gmail.com", password: "1234" }, // id: 3
];

const todos = [
  { title: "Estudiar node", description: "shalala shalalal", userId: 1 }, // 1
  { title: "Pasear al perro", description: "shalala shalalal 2", userId: 1 }, // 2
  { title: "lavar platos", userId: 2 }, // 3
  {
    title: "ir chequeo mensual",
    description: "porque node no me deja",
    userId: 3,
  }, // 4
];

const categories = [
  { name: "personal" }, // 1
  { name: "educacion" }, // 2
  { name: "salud" }, // 3
  { name: "trabajo" }, // 4
  { name: "hogar" }, // 5
  { name: "cocina" }, // 6
  { name: "deporte" }, // 7
  { name: "ocio" }, // 8
  { name: "financiero" }, // 9
  { name: "entretenimiento" }, // 10
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 1 },
  { categoryId: 4, todoId: 1 },
  { categoryId: 1, todoId: 2 },
  { categoryId: 7, todoId: 2 },
  { categoryId: 10, todoId: 2 },
  { categoryId: 3, todoId: 2 },
  { categoryId: 5, todoId: 3 },
  { categoryId: 6, todoId: 3 },
  { categoryId: 1, todoId: 4 },
  { categoryId: 3, todoId: 4 },
];

// create
// findOne, findAll, findByPk
// update
// destroy

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 250);
    setTimeout(() => {
      todosCategories.forEach((tc) => TodosCategories.create(tc));
    }, 400);
  })
  .catch((error) => console.log(error));