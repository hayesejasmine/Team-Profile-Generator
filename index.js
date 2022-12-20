const inquirer = require('inquirer');
const fs = require('fs');


const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern')
const employee =[];
const teamHtml =[];

function startApp() {
    // writeHTML()
    teammemberprofile()
}

function teammemberprofile(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide the team members name:'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select the team members role:',
            choices: ['Manager','Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the team members employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide the team members email address:'
        },
    ])

    .then(async ({name, role, id, email} ) => {
        console.log (name, role, id, email)
        let rolespecific = '';
        if (role === 'Manager') {
            rolespecific = 'Please provide the managers office number:';
        } else if (role === 'Engineer') {
            rolespecific = 'Please provide the team members GitHub username:';
        } else {
            rolespecific = 'Please provide the name of the interns school:';
        }
        
        const answers = await inquirer.prompt([
            {
            type:'input',
            name: 'rolespecific',
            message: `${rolespecific}`,
            },
            {
            type:'list',
            name: 'new',
            message: 'Would you like to add a new team member?',
            choices: ['Yes', 'No'],

            name: 'newteammember'
        },
        ])
        return[{name, role, id, email}, answers]
    })


    .then(function (values){
        let person= undefined
        const {rolespecific, newteammember} = values[1]
        const {name, role, id, email} = values[0]
        if (role === 'Manager') {person = new Manager (name, id, email, rolespecific);}
        else if (role ==='Engineer') {person = new Engineer (name, id, email, rolespecific);}
        else {person = new Intern(name, id, email, rolespecific);}
        console.log (typeof person)
        employee.push(person);
        console.log(employee)
        writeHTML(person)
return newteammember
    })
    
   
    .then(function (newteammember) {
        if (newteammember === 'Yes') {teammemberprofile();}
        else{finishHTML();}
    });
    }


        function writeHTML(teammemberinfo) {
            // return new Promise(function (resolve, reject) {

                const name = teammemberinfo.getName();
                const role = teammemberinfo.getRole();
                const id = teammemberinfo.getId();
                const email = teammemberinfo.getEmail();
                let data = '';

                if (role ==='Manager') {
                    const phone = teammemberinfo.getPhone();
                    data = `<div class="col">
                    <div class="card h-100">
                      <div class="card-header"><h2>${name}</h2>
                          <br><h4>${role}</h4><br>
                      </div>
                      <div class="card-body manager">
                        <p class="card-text">ID Number: ${id}</p>
                        <p class="card-text">Email Address: ${email}</p>
                        <p class="card-text">Phone Number: ${phone}</p>
                      </div>
                    </div>
                  </div>`;
                }else if (role === 'Engineer') {
                    const gitHub = teammemberinfo.getgitHub();
                    data = `<div class="col">
                      <div class="card h-100">
                        <div class="card-header"><h2>${name}</h2>
                            <br><h4>${role}</h4><br>
                        </div>
                        <div class="card-body engineer">
                        <p class="card-text">ID Number: ${id}</p>
                        <p class="card-text">GitHub Username: ${gitHub}</p>
                        <p class="card-text">Email Address: ${email}</p>
                        </div>
                      </div>
                    </div>`;
                }else {
                    const school = teammemberinfo.getSchool();
                    data = `<div class="col">
                    <div class="card h-100">
                      <div class="card-header"><h2>${name}</h2>
                          <br><h4>${role}</h4><br>
                      </div>
                                <div class="card-body">  
                                <p class="card-text">ID Number: ${id}</p>
                                <p class="card-text">School: ${school}</p>
                                <p class="card-text">Email Address: ${email}</p>
                                </div> 
                                </div>
                              </div>
                          </div>`;
                };
teamHtml.push(data)
                    };

            function finishHTML() {
                const html = 
                `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        </head>
        <body>
        <div class="jumbotron jumbotron-fluid bg-secondary text-white text-center m-4" style="height:150px; width:90rem"><h1>My Team</h1></div>
                <div class="container">
                    ${teamHtml.join()}
                </div>
        
            </body>
            </html>`;

                fs.writeFile("./dist/index.html", html, function (err){
                    if (err) {
                        console.log(err);
                    };
                });
            };
startApp();