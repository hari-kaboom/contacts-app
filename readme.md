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
         