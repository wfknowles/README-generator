const inquirer = require('inquirer');

const generateFile = () => {
    // const apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    // const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    // const gplv2 = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    // const gplv3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
}

const promptApp = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application? (Required)',
            validate: nameInput => {
              if (nameInput) {
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
            message: 'Please describe your application: [ Press ENTER to SKIP ]'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide any installation instructions: [ Press ENTER to SKIP ]'
        },
        {
            type: 'input',
            name: 'use',
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
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license(s) for your application: [ Press ENTER to SKIP ]',
            choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3']
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (Required)',
            validate: nameInput => {
                if (nameInput) {
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
            validate: nameInput => {
                // I need validation to check for email address
                if (nameInput) {
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
  .then(appData => console.log(appData))
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
  .catch(err => {
    console.log(err);
  });