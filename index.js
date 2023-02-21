const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const generateTeam = require("./src/template.js");


const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

function initApp() {

  function addManager() {
    inquirer.prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please enter the team's manager's name.",
          validate: (answer) => {
            if (answer === "") {
               return "You must enter the Manager's name!";
            } return true
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What's the manager's Id?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a valid Id.";
            } return true
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What's the manager's email?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a valid email.";
            } return true;
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What's the manager's office number? (format: 7631112222)",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        addMoreMembers();
      });
  }

 function addMoreMembers() {
   inquirer.prompt([
       {
         type: "list",
         name: "addMore",
         message: "Would you like to add another team member?",
         choices: ["Engineer", "Intern", "No, finish building team"],
       },
     ])
     .then((answer) => {
       switch (answer.addMore) {
         case "Engineer":
           addEngineer();
           break;
         case "Intern":
           addIntern();
           break;
         default:
           buildHTML(teamMembers);
       }
     });
 }
  function addEngineer() {
    inquirer.prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Please enter the Engineer's name.",
          validate: (answer) => {
            if (answer === "") {
              return "You must enter the Engineer's name!";
            }
            return true;
          },
        },

        {
          type: "input",
          name: "engineerId",
          message: "What's the Engineers Id?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a valid ID.";
            }
            return true;
          },
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What's the Engineers's email?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a valid email.";
            }
            return true;
          },
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "Please enter the Engineer's Github username",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a valid username";
            }
            return true;
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        addMoreMembers();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        
        {
          type: "input",
          name: "internName",
          message: "Please enter the Intern's name.",
          validate: (answer) => {
            if (answer === "") {
              return "You must enter the Interns's name!";
            }
            return true;
          },
        },

        {
          type: "input",
          name: "internId",
          message: "What's the Intern's Id?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a valid Id.";
            }
            return true;
          },
        },

        {
          type: "input",
          name: "internEmail",
          message: "What's the Interns's email?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a valid email.";
            }
            return true;
          },
        },

        {
          type: "input",
          name: "school",
          message: "What school does the Intern go to?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a valid school";
            }
            return true;
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.school
        );
        teamMembers.push(intern);
        addMoreMembers();
       
      });
  }
  
  function buildHTML() {
    console.log("Team generated!")
    fs.writeFileSync(outputPath, generateTeam(teamMembers), "utf-8")
  }

 addManager();
 
}

initApp();
