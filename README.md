# CRUD_Operations_Solera_Task
This is a very simple CRUD operations api applied with Nodesjs and Mongooose.
It's as we have students and want to apply this CRUP operations on them.
***
### Get Started
#### First : Create Database
* Here I use cloud database on mongoose atlas.
* You can register in and make new cluster, then create **user** and **password** and you should save them.

#### Second : setup nodejs project
* Clone this repo first.
* Create **.env** file and add these variables :
  * `PORT=3000`
  * `MONGODB_URL=(URL that given to you when you created the cluster)`.
* Run `npm install` to get node-modules we need here.

#### Third : Run
* You should run `npm start` to get server up and connect to database

#### Finally : Run CRUD operations
* Here I've used postman to add and retrieve the data within m database.
  * GET `http://localhost:3000/students`
     > to get all students
  * GET `http://localhost:3000/students/:id`
     > to get specific student
  * PUT `http://localhost:3000/students`
     > to add a student
  * PATCH `http://localhost:3000/students/:id`
     > to edit a student
  * DELETE `http://localhost:3000/students/:id`
     > to delete a student
