const Engineer = require("../lib/Engineer");

const template = `
    <!DOCTYPE html>
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


 <div class="card" style="width: 18rem;">
  <div class="card-body bg-dark">
    <h5 class="card-title text-light">${mangerName}</h5>
    <p class="text-light">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${mangerID}</li>
    <li class="list-group-item">${managerEmail}</li>
    <li class="list-group-item">${managerOfficeNumber}</li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body bg-dark">
    <h5 class="card-title text-white">${engineerName}</h5>
    <p class="text-light">Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineerId}</li>
    <li class="list-group-item">${engineerEmail}</li>
    <li class="list-group-item">${engineerGithub}</li>
  </ul>
</div>

 <div class="card" style="width: 18rem;">
  <div class="card-body bg-dark">
    <h5 class="card-title text-white">${internName}</h5>
    <p class="text-light">Intern</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${internId}</li>
    <li class="list-group-item">${internEmail}</li>
    <li class="list-group-item">${internSchool}</li>
  </ul>
</div>

        </div>
      </div>
</div>

</body>
</html>
`;