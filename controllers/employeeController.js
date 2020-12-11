const { Employee } = require("../models");

class EmployeeController {
  static create(req, res) {
    const { name, phone_number, jobtitle } = req.body;
    Employee.create({
      name,
      phone_number,
      jobtitle,
    })
      .then((employee) => {
        res.status(201).json({
          id: employee.id,
          name: employee.name,
          phone_number: employee.phone_number,
          jobtitle: employee.jobtitle,
          msg: "employee success added!",
        });
      })
      .catch((err) => {
        console.log(err, "<=== error create at controller");
        res.status(500).json({ msg: "internal server error" });
      });
  }

  static findAll(req, res) {
    Employee.findAll({
      sort: [["id", "DESC"]],
    })
      .then((employee) => {
        employee = employee.map((el) => {
          return {
            id: el.id,
            name: el.name,
            phone_number: el.phone_number,
            jobtitle: el.jobtitle,
          };
        });
        res.status(200).json(employee);
      })
      .catch((err) => {
        console.log(err, "<=== error find all at controller");
        res.status(500).json({ msg: "internal server error" });
      });
  }

  static findById(req, res) {
    const { id } = req.params;
    Employee.findByPk(id)
      .then((employee) => {
        if (!employee) throw { msg: "employee not found!", statusCode: 404 };
        res.status(200).json(employee);
      })
      .catch((err) => {
        console.log(err, "<=== error find by id at controller");
        res.status(500).json({ msg: "internal server error" });
      });
  }

  static update(req, res) {
    const { id } = req.params;
    Employee.findByPk(id)
      .then((employee) => {
        if (!employee) throw { msg: "employee not found!", statusCode: 404 };
        return employee.update({
          ...employee,
          ...req.body,
        });
      })
      .then((employee) => {
        res.status(200).json(employee);
      })
      .catch((err) => {
        console.log(err, "<=== error update at controller ");
        res.status(500).json({ msg: "internal server error" });
      });
  }

  static delete(req, res) {
    const { id } = req.params;
    Employee.findByPk(id)
      .then((employee) => {
        if (!employee) throw { msg: "employee not found!", statusCode: 404 };
        employee.destroy();
        res.status(204).json({ msg: "success deleted employee" });
      })
      .catch((err) => {
        console.log(err, "<=== error delete employee at product");
        res.status(500).json({ msg: err.msg });
      });
  }
}

module.exports = EmployeeController;
