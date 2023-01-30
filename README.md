#  Challenge Twelve - E-Commerce Back-End

  [![ISC license](https://img.shields.io/badge/License-ISC-blue.svg)](https://choosealicense.com/licenses/isc/)
        
  ## Description
   This week's assignment was to create the back-end functionality of an e-commerce website by adding in routes to retrieve, add, edit, and delete category, product, and tag information. The project was done in JavaScript, and I used the sequelize, dotenv, mysql2, and express npm packages.
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demonstration](#demonstration)
  - [License](#license)
  
  ## Installation
  You must have a source code editor tool, such as VS Code, TextEdit on Mac, or NotePad on Windows. Additionally, you will need node.js installed. 
  
  Once those tools are installed, hit the “code” button in this repository and copy the link. In your command line, type "git clone" followed by pasting the copied link to clone onto your own local machine. 
  
  Once you're in your project via the code editing software as well as in the command line, type "npm install" in your command line to ensure you have all the modules needed. Make sure you add a .env file to your local repo, and add in your sql information as: 

    - DB_NAME=''
    - DB_USER=''
    - DB_PASSWORD=''

  ## Usage
  This application could be used in a retail setting.
  
  To start using this application, start by setting up your database by entering into mysql. Type "mysql -u <username> -p", then press enter. You will then get a prompt to enter you password. Enter you password, then press enter.

  Once you are in mysql, type "source db/schema.sql". Once that is complete, exit mysql by typing "exit" or "quit". You will get a "bye" message from mysql. Type "npm run seed" to seed your database, then "npm run start" to start the server. 

  Once the server has started, open up insomnia. The port is set to 3001, so enter "http://localhost:3001/api/" into the address bar. After api/, enter either "categories", "products", or "tags", depending on which item you are working with.
  
  Make sure you select the route you want to try.

    - To retrieve, use GET
    - To add, use POST
    - To edit, use PUT
    - To delete, use DELETE

  If you're retrieving, editing, or deleteing a specific item, add the id number to the end of the address in the address bar. You can get the id numbers but retriving all items. To retrieve all items, use a get request with no id at the end. 

  To add an item, use a post request with no id at the end.

  To exit the application, press CTRL + C.

  ## Demonstration
  [Click this link](https://drive.google.com/file/d/1RQ0Wfp_uPMvIQ0u-MEVPCw8VSsTRMeYf/view) see a video demonstration of this application in action.
  

  ## License
    This project is covered under the ISC license. To learn more, click the badge at the top.

  ## Questions
  If you have any questions, reach out to me at https://github.com/carlihudson, or shoot me an email at carlihudson@gmail.com.
   