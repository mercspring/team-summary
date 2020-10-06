employeeTypeQus = {
    type: 'list',
    name: 'employeeType',
    message: 'What type of employee would you like to add?',
    choices: ["engineer", "intern", "done adding employees"]
}

beginQus = {
    type: 'confirm',
    name: 'ready',
    message: 'Ready to Begin?',
}
function EmpoyeeQuestions(type) {
    let flexQuestion = "";
    let pronoun = 'your'
    if(type === 'intern' || type === 'engineer') {
        pronoun = 'their';
    }
    switch (type) {
        case "manager":
            flexQuestion = 'What is your office number?';
            break;
        case "intern":
            flexQuestion = 'What school do they attend?';
            break;
        case "engineer":
            flexQuestion = 'What is their github username?';
            break;
        default:
            console.log("not a know worker type");

    }
    this.questions = [{
        type: 'input',
        name: 'name',
        message: `What is ${pronoun} name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is ${pronoun} id?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is ${pronoun} email?`
    },
    {
        type: 'input',
        name: 'flex',
        message: flexQuestion

    }]
}
const managerQuestions = new EmpoyeeQuestions("manager").questions
const engineerQuestions = new EmpoyeeQuestions("engineer").questions
const internQuestions = new EmpoyeeQuestions("intern").questions

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    beginQus,
    employeeTypeQus
}