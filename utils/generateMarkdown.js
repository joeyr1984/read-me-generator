function generateMarkdown(data) {
  return `
# ${data.projectName}


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

module.exports = generateMarkdown;
