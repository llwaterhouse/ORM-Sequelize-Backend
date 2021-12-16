# ORM-Sequelize-Backend
- [@LindaWaterhouse](https://www.github.com/llwaterhouse)


## Description
* ORM Sequelize Backend is the backend to an eCommerce system.  

* The eCommerce system has Categories, Products, ProductTags and Tags.

* Categories can have many Products.  A Product can belong to only one Category.

* A Product can belong to many Tags, and a Tag can belong to many Products

* We use Insomnia to manipulate the database. Routes were created to perform RESTful CRUD Operations (create, read, update and delete). The Walkthrough Video demonstrates a GET, GET:id, PUT, POST and DELETE for Categories, Products and Tags.

* When a Category is deleted, all the Products in the category are also deleted.


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Built With

* Express
* Sequelize
* mysql2
* Javascript
* node.js
* dotenv

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

**Walkthrough of most of the commands**
[Demonstrating Crud](https://watch.screencastify.com/v/sqyYRCrTvdpQYcbNslzx)

**Last Tag Delete command that didn't fit in 5 minutes**
[Final Crud](https://watch.screencastify.com/v/wZYl1lfyiaNkokbxsfiE)

### Repository

[GitHub repository for this project](https://github.com/llwaterhouse/ORM-Sequelize-Backend)


## Acknowledgements

Rutgers Coding Bootcamp

## License
MIT

[Click here for full license text](LICENSE)
