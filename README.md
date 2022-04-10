# erics-social-network-api  ![Github license](https://img.shields.io/badge/license-MIT-green.svg)

The aim of this project is to create a social network API.

## Table of Contents
[Technologies Used](#technologies-used) <br>
[Installation](#installation) <br>
[Usage](#use) <br>
[Testing](#tests) <br>
[Media](#media) <br>
[Contact and Questions](#questions) <br>
[License](#license) <br>
[User Story](#user-story) <br>
[Acceptance Criteria](#acceptance-criteria) <br>
  

## Technologies Used
* javascript
* nodejs
* express
* mongodb
* mongoosejs



## Installation
Navigate to the root directory in the terminal and initialize the project with **npm install** to install all the proper node module dependencies.



## Use
Navigate to the root directory in the terminal and type **node server** to run the server.

Use an API tool of your choice, I recommend Insomnia.

## Tests
There are no formal tests for this project

## Media
[Link to the demo video](https://youtu.be/HvscNz_2D-4)

The following link is to this project's github repository
https://github.com/ericbwebdev86/erics-social-network-api


## Questions
Any questions feel free to contact me via my github or by sending me an email. <br/>
* Email: ericbwebdev86@gmail.com   
* Github: https://github.com/ericbwebdev86


## License
MIT license is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## USER STORY
* AS A social media startup
* I WANT an API for my social network that uses a NoSQL database
* SO THAT my website can handle large amounts of unstructured data

## ACCEPTANCE CRITERIA
* GIVEN a social network API
* WHEN I enter the command to invoke the application
* THEN my server is started and the Mongoose models are synced to the MongoDB database
* WHEN I open API GET routes in Insomnia for users and thoughts
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
* THEN I am able to successfully create, update, and delete users and thoughts in my database
* WHEN I test API POST and DELETE routes in Insomnia
* THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
