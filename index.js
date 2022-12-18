const inquirer = require('inquirer');
const fs = require('fs');


const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern')
const employee =[];

function teammemberprofile(){
inquirer.prompt([
{
    type: 'Input',
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
    type: 'Input',
    name: 'ID',
    message: 'Please provide the team members employee ID:'
},
{
    type: 'Input',
    name: 'email',
    message: 'Please provide the team members email address:'
},
])

.then(function ({name, role, id, email}){
    let rolespecific = '';
    if (role === 'Manager') {
        rolespecific = 'Please provide the managers office number:';
    } else if (role === 'Engineer') {
        rolespecific = 'Please provide the team members GitHub username:';
    } else {
        rolespecific = 'Please provide the name of the interns school:';
    }
    inquirer.prompt([
    {
    type:'input',
    name: 'rolespecific',
    message: `${rolespecific}`,
    },
    {
    type:'list',
    name: 'newteammember',
    message: 'Would you like to add a new team member?',
    choices: ['Yes', 'No'],
    },])

    .then(function ({rolespecific, newteammember}){
        let newteammember;
        if (role === )
    }
    
    
    
    )
    }
    }
})
}