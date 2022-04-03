const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');


const render = require('./src/index.js');

const staff = [];
const ids = [];


function menu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the team manager's id?",
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the team manager's email?",
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the team manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        staff.push(manager);
        ids.push(answers.managerId);
        addMember();
      });
  }


  function addMember() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'What kind of staff member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildStaff();
        }
      });
  }


  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineer's name?",
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is the engineer's id?",
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is the engineer's email?",
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is the engineer's GitHub? ",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        staff.push(engineer);
        ids.push(answers.engineerId);
        addMember();
      });
  }

  

function addMember() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'memberChoice',
        message: 'Which type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        default:
          buildStaff();
      }
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the intern's id?",
        },
      
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?",
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school?",
      }
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      staff.push(intern);
      ids.push(answers.internId);
      addMember();
    });
}



function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?",
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is your engineer's id?",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email?"
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is your engineer's GitHub username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      staff.push(engineer);
      ids.push(answers.engineerId);
      addMember();
    });
}


function buildStaff() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(staff), 'utf-8');
}

createManager();
}

menu();