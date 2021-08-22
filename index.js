const inquirer = require('inquirer');
const generateMarkdown = require('./src/template.js');
const writeFile = require('./utils/generate-md.js');

const promptApp = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'describe',
            message: 'Please describe your application: (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                console.log('Please enter a description for your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide any installation instructions: [ Press ENTER to SKIP ]'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide any usage examples or instructions: [ Press ENTER to SKIP ]'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please provide any contribution guidelines or instructions for working with the codebase: [ Press ENTER to SKIP ]'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide any testing instructions: [ Press ENTER to SKIP ]'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license(s) for your application:',
            choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'none']
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ]);
};

promptApp()
  .then(appData => generateMarkdown(appData))
  .then(markdown => writeFile(markdown))
  .then(writeFileResponse => console.log(writeFileResponse.message))
  .catch(err => {
    console.log(err);
  });