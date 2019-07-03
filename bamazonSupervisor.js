//require inquirer, chalk and connection.js file
var inquirer = require("inquirer");
var chalk = require("chalk");
var connection = require("./connection.js");

// make sure it's connected to my local database by a console.log
// display items
connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    promptAction();
});

function promptAction() {
    inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: ["View Product Sales by Department", "Create New Department", "Exit"]
    }]).then(function (response) {
        switch (response.action) {
            case "View Product Sales by Department":
                viewDepartments(displayDepartments);
                break;
            case "Create New Department":
                createDep();
                break;
            case "Exit":
                exit();
                break;
            default:
                exit();
        }
    });
}

//  write a function that creates a new department and updates the database
function createDep() {
    inquirer.prompt([{
            type: "input",
            message: "Department name: ",
            name: "depName"
        },
        {
            type: "input",
            message: "Estimated Costs: ",
            name: "costs"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO departments SET ?", {
                over_head_costs: response.costs,
                dep_name: response.depName
            },
            function (err, res) {
                if (err) throw err;
                console.log(chalk.green.bold("\n Department successfully inserted!\n"));
                promptAction();
            });
    });
}

//  write a function that returns the items in the database for the supervisor to another function
function viewDepartments(callback) {
    connection.query("SELECT dep_id, dep_name, over_head_costs, SUM(product_sales) AS product_sales, SUM(product_sales) - over_head_costs AS total_profit FROM departments JOIN products ON departments.dep_name = products.department_name GROUP BY dep_id", function (err, res) {
        if (err) throw err;
        callback(res);
    });
}

// write a function that lists departments to the console
function displayDepartments(departmentList) {
    console.table(departmentList);
    promptAction();
}

// exit function
function exit() {
    connection.end();
}