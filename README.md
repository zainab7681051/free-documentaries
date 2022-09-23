# Free Documentaries
PEVN stack web app, frontended in vue and backended in nodejs express and database in postgresql.
# 
user can watch free YouTube documentaries embedded inside the page and download the documentaries.

Admin user can add, edit, delete documentaries, and the admin page is protected from unauthorised user access.
#
# Preview
![caption](screenshot/free-documentaries.gif)
# 
# tools & frameworks
the following `stack` of tools and frameworks were used in this project
* database:
  * postgres, object-relational database with associated tables(docs table, genres table, joint docs_genres table) 

* backend:
   * nodejs express for the web server
   * sequelize as the object relational mapper
   * REST API
   * jwt (json web token) and passport for admin user account authentication
   * Joi framework for validations of form input fields on the server side
   * bcrypt for password hashing

* frontend:
   * vuejs 2
   * vuetify framework for design 
   * axios to make requests to the API's in the backend
   * vuelidate for validations of input fields on the client side
   * vuex, vuex-router-sync, vue-persistedstate frameworks for state management


# how to run
first, make sure you have a postgres database with the same name as the one you type in ```config``` file. then, after cloning the project, for each of the directories-`frontend` and `backend` open a `command prompt` or a `git BASH`.
for the `backend`, run the following code in prompt or git to setup the server side using ***npm(Node Package Manager)***
```
npm install --save
```
to run the web server type the following
```
npm run dev
```
***the above code will run the `nodemon` framework in nodejs server which will be helpful for quickly restarting the server after changes***

and for the frontend run
```
npm install --save
```
then, to run it, type
```
vue serve
```
and click or copy the pagelink in the vue CLI prompt/git window and head towards the browser to see the app.
