#Preparing the Database
Do the folllowing as root


``` sql
login as root user
creating database for contacts and users:
+--------------------------------------------+
create database contactlist;
create user contact_operator identified by "1234";
use contactlist;
grant all privileges on contactlist to contact_operator;
grant all privileges on contactlist.* to contact_operator;
+----------------------------------------------------------------+
create tables for mycontacts and registered_users:
+-----------------------+
| Tables_in_contactlist |
+-----------------------+
| mycontacts            |
| users                 |
+-----------------------+
Creating our project directory:


      Project
         .
         .---------server.js
         .      -----package.json
         .              -Express
         .              -sequelize
         .              -mysql2
         .              -path
         .------routes
         .     ---index.js
         .     ---mycontacts.js
         .     ---users.js
         . -----public
         .        adding contacts to mycontacts table(name,phone number,email)
         .        ---add_contacts.html
         .        ---add_contacts.js
         .        ---contacts.js
         .        ---index.html
         .        ---index.js
         .        POST REQUEST TO localhost:5757/api/mycontacts (postman used)
         .------views
         .       sign up the registers (into users table( email,password,secret code))
         .        ----signup.html
         .        ----addusers.js
         .        ----index.html
         .        POST REQUEST TO localhost:5757/api/register (postman used)
         .                  
         .-----signin
         .       -----POST request to localhost:5757/login   (postman used)
         .----model
         .    ---db.js
 How to use :
 for login page:
     http://localhost:5757/login in this page we are able to login into my app if you have account .
     if you dont have account then click on signup link to register.
 After login into app:
     fill the details like name, phone number,email id whom you want to save then click on save button .
     finally you able to see your contacts after refreshing current webpage.
 
