const { get } = require("http");
const db = require("./require")
const inquirer = require("inquirer")

function list() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select an option.',
            choices: [
                'View Employees',
                'View Roles',
                'View Departments',
                'Add New Employee',
                'Add Department',
                'Quit'
            ],
        }
    ]
    )
        .then((answer) => {
            switch (answer.choice) {

                case 'View Employees':
                    viewEmployees();

                    break;
                case 'View Roles':

                    viewRoles();
                    break;
                case 'View Departments':

                    viewDepartments();
                    break;
                case 'Add New Employee':

                    newEmployee();
                    break;
                case 'Add Role':
                    newRole()
                    break;

                case 'Add Department':
                    newDepartment()
                    break;

                case 'Quit':

                    Quit();
                    break;
            }

        }

        )
};

function getEmployees() {
    return db.promise().query("SELECT * FROM employees;")
}

function viewEmployees() {
    getEmployees()
        .then(([data]) => {
            console.table(data)
            // list()
            setTimeout(list, 2000)
        })

};

function getRoles() {
    return db.promise().query("SELECT * FROM roles;")
};

function viewRoles() {
    getRoles()
        .then(([data]) => {
            console.table(data),
                setTimeout(list, 2000)

        })

};

function getDepartment() {
   return db.promise().query("SELECT * FROM department;")

}; 
function viewDepartments() {
    getDepartment()
        .then(([data]) => {
            console.table(data),
                setTimeout(list, 2000)
        })
        

};

async function newEmployee() {

    const [employeeData] = await getEmployees()
    const [roleData] = await getRoles()

    const managerChoices = employeeData.map((emp) => ({
        name: emp.first_name + " " + emp.last_name,
        value: emp.id
    }));
    managerChoices.push({ name: "no manager", value: null });
    const roleChoices = roleData.map((role) => ({
        name: role.title,
        value: role.id
    }));
    const data = await inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the first name of the employee?",

        },
        {
            name: "last_name",
            type: "input",
            message: "What is the last name of the employee?",

        },
        {
            name: "roles_id",
            type: "list",
            message: "What is the employee's role?",
            choices: roleChoices.length ? roleChoices : ["No roles"]
        },
        {
            name: "manager_id",
            type: "list",
            message: "who is this employee's manager?",
            choices: managerChoices.length ? managerChoices : ["No Employees"]
        }
    ])
    db.promise().query("insert into employees SET ?;", data)
        .then(([data]) => {
            console.log("Employee added!")
            setTimeout(list, 2000)
        })
};
async function newDepartment() {
    const [departmentData] = await getDepartment();

const data = await inquirer.prompt([
    {
        name: "department_name",
        type: "input",
        message: "What is the new name for the department?",
    }
])
db.promise().query("insert into department SET ?;", data)
        .then(([data]) => {
            console.log("department added!")
            setTimeout(list, 2000)
        })
};
//doesn't work
// async function newRole() {
//     const [rolesData] = await getRoles();

//     const data = await inquirer.prompt([
//         {
//             name: "title",
//             type: "input",
//             message: "What is the name of the role?",
//         },
//         {
//             name: "salary",
//             type: "input",
//             message: "What is the salary of the role?",
//         },
//         {
//             name: "department_id",
//             type: "list",
//             message: "What department does it belong in?",
//         }
//     ])
//     db.promise().query("insert into roles SET ?;", data)
//             .then(([data]) => {
//                 console.log("role added!")
//                 setTimeout(list, 2000)
//             })
//     };
list()