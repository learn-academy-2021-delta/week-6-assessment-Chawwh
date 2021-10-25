# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Fear not! We can add a column! head into your terminal and run $rails g migration add_column_to_students . Next in your ruby file, add_column :students, :cohort_id, :integer . 
To add for answering questions: easy fix; add cloumn, foreign key's name would be cohort_id, and the foreign key will be on the student's model. BONUS the foreign key is the corhot's primary key!

  Researched answer: Alrighty. So to add a column after the inital creation we need to use a migration. After your migration is initalized head to the migration file, in method named change, drop a line and add 'add_column :students, :cohort_id, :integer'. This will add a new column to the table students with the column name cohort_id and this column will only be able to hold integers.



2. Which RESTful routes must always be passed params? Why?

  Your answer: Ooo Okay. I believe the get actions should always be passed params?
<!-- O.O I was wrong... -->
  Researched answer:  The RESTful routes that must always be passed params are the show, update, and delete methods. These require params because we are asking to interact with a single object in the database.



3. Name three rails generator commands. What is created by each?

  Your answer: $rails g controller, $rails g model, $rails g migration! These create a controller, a model, and migration respectively.

  Researched answer: Rails generator commands that I've personally used are $rails g controller, $rails g model, and $rails g migration. The rails g controller command will create a controller file that will be in charge of routing external requests to internal actions. The rails g model command will create the skeleton of a database. In the inital command is where we will set the column names and data types for each column to contain. Finally the rails g migration command will generate a new file in the migrations folder. Withtin this file, we can create a method 'change' to add changes to our database.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students => 'Student#index'        this will get all the students from the database!

method="POST"   /students => 'Student#create'       this will add new students to the databse!

method="GET"    /students/new => 'Student#new'      this will create a new student!

method="GET"    /students/2  => 'Student#show'      this will get one student from the database!

method="GET"    /students/2/edit => 'Student#edit'  this will modify a student!

method="PATCH"  /students/2 => 'Student#update'     this will modify students in the database!

method="DELETE" /students/2 => 'Student#destroy'    this will remove students from the database!
<!-- I'm still struggling to understand what this question is even asking lol. Let me know if I answered this incorrectly!!! I can fix it if so! -->


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user: I can see a homepage with every task in my to do list
As a user: I can click on a task to see all steps in a seprate page
As a user: On a task page, I can click a button to mark a task done
As a user: I can add a task to my to do list with 3 steps
As a user: I can update steps in a task
As a user: I can navigate back to the main to do list page
As a user: I can click a button to add tasks
As a user: I can click a button to delete tasks
As a user: When I submit a new or updated post, I'm redirected to the home page
As a user: I can see a seperate list of all tasks to be completed

<!-- IM SORRY THESE ARENT IN A PERFECT ORDER. -->
<!-- :) -->