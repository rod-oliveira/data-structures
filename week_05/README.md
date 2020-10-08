### Part 1: Plan

The initial model is described in the file: [model_blog.png]. This reflects reflect the example table for this week's assignment. The whole purpose for its creation is to test Dynamo.

#### Some decisions that will help with this drawing:

##### Will you use a Normalized Data Model or a Denormalized Data Model? Why?

For this week I'll use a denormalized data model, because it will be simpler to test out Dynamo. However, in future assignments or larger projects I will use Normalized data to facilitate data management. It will minimize duplicate data and redundance for instance: If John Doe attends to the same aa location multiple times, I won't have to store his First and Last names more than once to be able to represent that data. In the future, if I have to answer more complex business questions, I'll add separate tables with aggregated data from the basic normalized tables to facilitate answering those questions.
    
##### When the data comes back out of the database, how should it be structured? Why?
It should be structured so we can easily identify what is what. For example, a string flagged as "address" will easily indicate what that group of characthers stands for. thinking back to my first assignment, having to parse an unstructured txt file cost me a couple of hours just to clean it up so I could extract the addresses.

##### How would you describe the hierarchy of the data?
For this assignment, the db will ahve only one table, but in the future the hierarchy of the data will be based on location, then meeting require at leat one specific location to happen, then participants require to be part of at least one meeting location. I'm assuming I'll model a table with participants, which is still TBD.

### Part 2: Create some data for the table in your database

I'll work with the table described here: [model_blog.png] ad will use this data:

['1155 5th avenue, NY', "40.805958", "-73.940763",
'1155 6th avenue, NY', "40.805958", "-73.940763","Queens","The Happy Place","Monday",
'1155 7th avenue, NY', "40.805958", "-73.940763","Manhattan"]


### Part 3: Populate your database

I created a loop through the array and inserted all 3 locations in the DB.

 [model_blog.png]: <https://github.com/rod-oliveira/data-structures/blob/master/week_05/model_blog.png>
