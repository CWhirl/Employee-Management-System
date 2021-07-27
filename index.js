const { prompt } = require('inquirer');
const DATABASE = require('./db')
require('console.table');

// use inquirer to prompt the user
prompt([
  {
    type: 'list',
    name: 'appFlow',
    message: 'What would you like to do?',
    choices: [
        "View Employees",
        "View Departments",
        "View Jobs",
        "Add Employee",
        "Add Department",
        "Add Job",
        "Update Role",
        "Exit"
    ]
  }
], (answers) => {
    switch (answers) {
        case "View Employees":
            console.log(`\n`);
            console.table(DATABASE.viewEmployees());
            break;
        case "View Departments":
            console.log(`\n`);
            console.table(DATABASE.viewDepartments());
            break;
        case "View Jobs":
            console.log(`\n`);
            console.table(DATABASE.viewJobs());
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
