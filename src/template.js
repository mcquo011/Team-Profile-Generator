

const team = generateTeam => { 
  const managerHTML = manager => {;
  return `
 
 <div class="card" style="width: 18rem;">
  <div class="card-body bg-dark">
    <h5 class="card-title text-light">${manager.getName()}</h5>
    <p class="text-light">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: ${manager.getEmail()}</li>
    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
  </ul>
</div>`
  }

const engineerHTML = engineer => {
  return`
<div class="card" style="width: 18rem;">
  <div class="card-body bg-dark">
    <h5 class="card-title text-white">${engineer.getName()}</h5>
    <p class="text-light">Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
    <li class="list-group-item">Github Username: ${engineer.getGithub()}</li>
  </ul>
</div> `
}

const internHTML = intern => {
return`
<div class="card" style="width: 18rem;">
  <div class="card-body bg-dark">
    <h5 class="card-title text-white">${intern.getName()}</h5>
    <p class="text-light">Intern</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: ${intern.getEmail()}</li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
  </ul>
</div> `
}

let managerArray = [];
let engineerArray = [];
let internArray = [];

// your code for generating the team arrays here

managerArray = generateTeam
  .filter((employee) => employee.getRole() === "Manager")
  .map((manager) => managerHTML(manager));

engineerArray = generateTeam
  .filter((employee) => employee.getRole() === "Engineer")
  .map((engineer) => engineerHTML(engineer));

internArray = generateTeam
  .filter((employee) => employee.getRole() === "Intern")
  .map((intern) => internHTML(intern));

const html = [...managerArray, ...engineerArray, ...internArray].join("");
return html;

}

module.exports = generateTeam => {
  const html = [];

  // add the fixed HTML code for the page header
  html.push(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profiles</title>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <nav class="navbar bg-danger">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1 text-light">Team Profile Generator</span>
    </div>
  </nav> 
  
<div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center column-gap-3 my-4">
   
                ${team(generateTeam)}

  
        </div>
      </div>
</div>
  </body>
  </html>`);

  return html.join("");
}



