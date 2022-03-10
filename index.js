const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML =({ name, email, github, title, ID, office, done }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4"> My name is ${name}</h1>
    <p class="lead">My employee ID is ${ID}.</p>
    <p class="lead">My job title is ${title}.</p>
    <p class="lead">My office number is ${office}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">Email: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      
      
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      
      
    },
    {
      type: 'list',
      name: 'title',
      message: 'What is your job title',
      choices: ['team manager', 'engineer', 'intern'],
  },

  {
    type: 'number',
      name: 'ID',
      message: 'What is your employee ID?',
},
{
  type: 'number',
    name: 'office',
    message: 'What is your office number?',
},
{
  type: 'checkbox',
  name: 'title',
  message: 'What is your job title',
  choices: ['team manager', 'engineer', 'intern'],
},

  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });