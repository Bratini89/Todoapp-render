// vamos a importar todos nuestros modelos creados
const Users = require("./users.model");
const Todos = require("./todos.models");
const Categories = require("./categories.models");
const TodosCategories = require("./todos-categories.models");

const initModels = () => {
  // vamos a crear las relaciones
  // hasOne --> tiene uno solo
  // hasMany -> tiene muchos
  // belongsTo -> pertenece a
  Todos.belongsTo(Users, { as: "author", foreignKey: "user_id" });
  Users.hasMany(Todos, { as: "task", foreignKey: "user_id" });

  // relacion M-M categorias y tareas
  TodosCategories.belongsTo(Todos, { as: "task", foreignKey: "todo_id" });
  Todos.hasMany(TodosCategories, { as: "categories", foreignKey: "todo_id" });

  TodosCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
  Categories.hasMany(TodosCategories, {
    as: "task",
    foreignKey: "category_id",
  });
};

module.exports = initModels;