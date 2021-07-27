const mysql = require("mysql");
const util = require("util");

var connString = `mysql://root:pass@localhost/employee_db?charset=utf8_general_ci&timezone=-0700`;

const connection = mysql.createConnection(connString);

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
});

connection.query = util.promisify(connection.query);

const inquirer = require("inquirer");
require("console.table");

async function init() {
  // use inquirer to prompt the user
  await inquirer
    .prompt([
      {
        type: "list",
        name: "appFlow",
        message: "What would you like to do?",
        choices: [
          "View Employees",
          "View Departments",
          "View Jobs",
          "Add Employee",
          "Add Department",
          "Add Job",
          "Update Role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers);
      switch (answers.appFlow) {
        case "View Employees":
          console.log(`\n`);
          console.table(viewEmployees());
          break;
        case "View Departments":
          console.log(`\n`);
          console.table(viewDepartments());
          break;
        case "View Jobs":
          console.log(`\n`);
          console.table(viewJobs());
          break;
        case "Add Employee":
          DATABASE.addEmployee();
          break;
        case "Add Department":
          DATABASE.addDepartment();
          break;
        case "Add Job":
          DATABASE.addJob();
          break;
        case "Update Role":
          DATABASE.updateRole();
          break;
        case "Exit":
          process.exit();
          break;
      }
    });
}

init();

function viewJobs() {
  connection.query(`SELECT * FROM job ORDER BY id`, (err, answer) => {
    if (err) throw err;
    console.table("Jobs:", answer);
  });
}

function viewDepartments() {
  connection.query(`SELECT * FROM department ORDER BY id`, (err, answer) => {
    if (err) throw err;
    console.table("Departments:", answer);
  });
}

function viewEmployees() {
  connection.query(`SELECT * FROM employee ORDER BY id`, (err, answer) => {
    if (err) throw err;
    console.table("Employees:", answer);
  });
}
