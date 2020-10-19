### Part 1: PostgreSQL

For week 6 assignment I will add the week day, meeting hour, and location name to the sttreet name. I might revisit this database and include more fields as we progress.

My 4 rows will look like this:

Day         Hour Location Name              Street Name
Saturday	4   125 - TWO FOR ONE	        35 East 125 Street
Tuesday 	6   EAST HARLEM - East Harlem   223 East 117th Street
Sunday  	5   GRUPO NUEVA VIDA            2126 2nd Avenue
Sunday  	1   HARLEM 1 PM RECOVERY        22 East 119th Street

#### Scripts
week6-init.js = It will initialize and create the table.
week6-populate.js = It will populate the table with the values above.
week6-report.js = It will run a query for meeting happening on Sunday at 5.


### Part 2: DynamoDB

I modified my database, please refer to week6-dynamo-init.js.

The query is in week6-dynamo-search.js
