## Week 7 Scripts
#### w7-parsing.js

This script scrapes and cleans information about: street names, location names and group names. There will be separate file names per each data type.

I also added a piece of code to merge all street name files into one so I can obtain the coordinates more easily in the next step.

####  w7-geo.js

This script will obtain the geocodes for all previously parsed street names and create files with json objects with: street name, latitude, longitude.

#### w7-db-init.js

This script will initialize the database and will create the table to receive all the collected data.

#### w7-db-populate.js

This will add all information into PostgreSQL.



I'll kep updating the files during the weekend.
