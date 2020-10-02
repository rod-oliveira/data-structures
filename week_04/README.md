### Part 1:

The initial model is described in the file: model.png. This does not reflect the schema for this week's assignment, but it's an idea of what type of data I'll work with in the future.

#### Some decisions that will help with this drawing:

##### Will you use a Normalized Data Model or a Denormalized Data Model? Why?

I will use Normalized data to facilitate data management. It will minimize duplicate data and redundance for instance: If John Doe attends to the same aa location multiple times, I won't have to store his First and Last names more than once to be able to represent that data. In the future, if I have to answer more complex business questions, I'll add separate tables with aggregated data from the basic normalized tables to facilitate answering those questions.
    
##### When the data comes back out of the database, how should it be structured? Why?
It should be strugtured so we can easily identify what is what. For example, a string flagged as "address" will easily indicate what that group of characthers stands for. thinking back to my first assignment, having to parse an unstructured txt file cost me a couple of hours just to clean it up so I could extract the addresses.

##### How would you describe the hierarchy of the data?
The hierarchy of the data is based on location, then meeting require at leat one specific location to happen, then participants require to be part of at least one meeting location.

### Part 2: Create a table(s) in your database

I created a basic table with the following fields: streetname (varchar (50)), lat and long, both double precision.

### Part 3: Populate your database

Step 1: First thing I did was read last week's final file: data/final.json with 3 objects containing: street name, latitude and longintude.

Step 2: Parsing the results of the file, I populated an array with street name, latitude and longintude.

Step 3: Populate the tables.


### Part 4: Check your work

Using the provided code I ran: "SELECT * FROM Location" and got all 4 addresses from data/final.json
