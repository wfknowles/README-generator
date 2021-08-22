const generateBadges = license => {
    // console.log('generateBadges', license);
    if (license.length > 0) {
        switch (license[0]) {
            case 'MIT':
                return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n";
            case 'Apache':
                return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n";
            case 'GPLv2':
                return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n";
            case 'GPLv3':
                return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n";
        }
    }
};

const generateDescribe = describe => {
    if (valid(describe)) {
        return `\n## Description\n${describe}`;
    } else {
        return false;
    }
};

const generateTableOfContents = appData => {
    const table = [
        "\n## Table Of Contents",
        valid(appData.install) ? "* [Installation](#installation)" : false,
        valid(appData.usage) ? "* [Usage](#usage)" : false,
        valid(appData.license) ? "* [License](#license)" : false,
        valid(appData.contribution) ? "* [Contribution](#contribution)" : false,
        valid(appData.tests) ? "* [Tests](#tests)" : false,
        "\n"
    ];

    return table.filter(content => content != false).join('\n');
};

const generateInstall = install => {
    if (valid(install)) {
        return `\n## Installation\n${install}`;
    } else {
        return false;
    }
};

const generateUsage = usage => {
    if (valid(usage)) {
        return `\n## Usage\n${usage}`;
    } else {
        return false;
    }
};

const generateLicense = license => {
    // Update License to output link and license copy
    if (license) {
        return `\n## License\n${license}`;
    } else {
        return false;
    }
};

const generateContribute = contribute => {
    if (valid(contribute)) {
        return `\n## Contribution\n${contribute}`;
    } else {
        return false;
    }
};

const generateTest = test => {
    if (valid(test)) {
        return `\n## Tests\n${test}`;
    } else {
        return false;
    }
};

const generateBody = appData => {
    let body = [
        generateDescribe(appData.describe),
        generateTableOfContents(appData),
        generateInstall(appData.install),
        generateUsage(appData.usage),
        generateLicense(appData.license),
        generateContribute(appData.contribute),
        generateTest(appData.test)
    ];
    
    return body.filter(content => content != false).join("\n");
}

const valid = val => {
    return val && val != '' && val != undefined ? true : false
}

module.exports = appData => {
    return `
${generateBadges(appData.license)}

# ${appData.title}
${generateBody(appData)}

## Questions
https://github.com/${appData.github}/
Email me for additional questions: ${appData.email}`;
}


