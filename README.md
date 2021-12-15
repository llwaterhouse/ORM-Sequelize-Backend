# ORM-Sequelize-Backend
- [@LindaWaterhouse](https://www.github.com/llwaterhouse)


## Description
* Rocking Employee Management System is an app built with node.js, inquirer,etc. that interfaces with mysql. It is command line driven and allows the user to manipulate the data stored in the employees_db database.

* When starting the application, the user is presented with a list of options that are clear and easy to follow.

* The changes that the user requests are reflected in the database.

* The Bonus commands of "View Employees By Manager" and "Update Employee Manager were implemented.

* The chalk module was used to change the console.log color to make the text more apparent.

* I used a SELF JOIN to list the manager name in addition to the manager id in viewAllEmployees(), and in findAllManagers()

* I used the DISTINCT keyword to remove duplicates from findAllManagers().

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshots


### Initial screenshot


![Initial screenshot](./images/Initial-screenshot.PNG)


### ViewAllEmployees Example


![View All Employees](./images/ViewAllEmployees.PNG )



## Built With

* Express
* Sequelize
* mysql
* mysql2
* HTML
* CSS
* Javascript
* node.js
* inquirer
* chalk


## Installation Instructions

If you want to edit application you must have a Github account, download Visual Studio Code, install node.js and install Express.

[Create a Github account](https://github.com)

[Download Visual Studio](https://code.visualstudio.com/download/)

[Download node.js](https://nodejs.org/en/download/)


Clone the github project

To install packages dependencies in package.json, open a console in the top level directory and run the following command 

>npm i

## Usage
To run this application, login to your mysql database and run 
>source db/schema.sql

to create the database.  Then run

> npm run seed

to seed the database.

Enter
> node index

and then you can interface with the application from an application like Insomnia.

## Deliverables

### Walkthrough Video Links

**Required Commands**
[Rocking Employee Management app](https://watch.screencastify.com/v/DkkAK96SiyKpON5ybx7k)

**Bonus Commands - ViewAllEmployeesByManager, UpdateEmployeeManager**
[Manager Bonus Commands](https://watch.screencastify.com/v/YDKHTxTGdMZ2uYkWwvsR)

### Repository

[GitHub repository for this project](https://github.com/llwaterhouse/Rocking-Employee-Mgmt-Sys)


## Acknowledgements

Rutgers Coding Bootcamp

## License
MIT

[Click here for full license text](LICENSE)
