# Automation Exercise Testing Suite

This project is an automated testing suite for the [Automation Exercise](https://www.automationexercise.com/) website using Cypress. It implements various test cases to ensure the functionality and reliability of the website.

## Table of Contents

0. [Overview](#overview)
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Running Tests](#running-tests)
4. [Known Issues](#known-issues)

## Overview

In this project, we have implemented 8 test cases from the Automation Exercise test cases page. These tests cover various functionalities of the website, ensuring that all essential features work as expected. The tests are structured for maintainability and readability, following best practices in coding and testing.

## Requirements

-   **Node.js** (v14 or later)
-   **npm** (Node Package Manager, comes with Node.js)
-   **Cypress** (automatically installed through npm)
-   A GitHub account to access and clone the repository.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**
   git clone https://github.com/YOUR_USERNAME/automation-exercise-testing.git
   cd automation-exercise-testing

2. **Install Dependencies**
   Install the necessary packages by running:
   npm install

3. **GitHub Actions Configuration**
   The repository is configured to run tests automatically when changes are pushed to the `main` branch. Ensure your GitHub repository has the necessary actions set up.

## Running Tests

To run the Cypress tests, use the following commands:

1. **Open Cypress Test Runner**
   You can run the tests in an interactive mode:
   npx cypress open

    This command will launch the Cypress Test Runner, where you can choose the test files to run.

2. **Run Tests Headlessly**
   If you want to run the tests in headless mode (without the GUI), use:
   npx cypress run

## Known Issues

-   Some tests may fail due to changes in the website's structure or content. Ensure that the test selectors are correctly targeting elements on the page.
-   If the Cypress Test Runner does not open or crashes, ensure you have the correct version of Node.js and that Cypress is installed properly.
