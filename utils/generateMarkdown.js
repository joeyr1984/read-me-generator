function generateMarkdown(data) {
  return `
# ${data.projectName}

${generateLicenseBadge(data.projectLicense, data.projectUrl)}

## Description

${data.projectDescription}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#test)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.dependancyCommand}
\`\`\`

## Usage

${data.repoGuide}

## License

This project is licensed under the ${data.projectLicense} license.

## Contributing

${data.contributeGuide}

## Test

To run tests, run the following command:

\`\`\`
${data.testCommand}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact [${data.userName}](https://github.com/${data.userName}/) directly at ${data.email}


`;
}
function generateLicenseBadge(license, url) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](" + url + ")"
      break;
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](" + url + ")"
      break;
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](" + url + ")"
      break;
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](" + url + ")"
      break;
    case "None":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](" + url + ")"
      break;
  }
}
module.exports = generateMarkdown;
