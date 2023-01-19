const Users = require("../models/users.model");
const Todos = require("../models/todos.models");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithTasks(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
        include: {
          model: Todos,
          attributes: ["title"],
          as: "task",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;