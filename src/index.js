const Intern = require("../lib/Intern");

const generateTeam = team => {

  
  
  const generateManager = manager => {
    return ` 

    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4"> My name is ${manager.getName()}</h1>
    <p class="lead">My employee ID is ${manager.getId()}</p>
    <p class="lead">My job title is ${manager.getRole()}</p>
    <h3> <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
    
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    </ul>
  </div>
</div>
`;

  };


  const generateEngineer = engineer => {
    return `<div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4"> My name is ${engineer.getName()}</h1>
      <p class="lead">My employee ID is ${engineer.getId()}</p>
      <p class="lead">My job title is ${engineer.getRole()}</p>
      <h3> <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is <a href="wwww.github.com/${engineer.getGithub()}"></li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      </ul>
    </div>
  </div>
  `;
  
    };

    const generateIntern = intern => {
      return `<div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4"> My name is ${intern.getName()}</h1>
        <p class="lead">My employee ID is ${intern.getId()}</p>
        <p class="lead">My job title is ${intern.getRole()}</p>
        <p class="lead">My school is ${intern.getSchool()}</p>

        <h3> <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>

        </ul>
      </div>
    </div>
    `;
    };

const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
   

    return html.join("");
    }

    module.exports = team => {

      return `
      <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${generateTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
  };