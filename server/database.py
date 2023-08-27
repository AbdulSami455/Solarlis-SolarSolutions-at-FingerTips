import mysql.connector

mydb = mysql.connector.connect(
  host="solarproject.cwnzxgpfmkwu.eu-north-1.rds.amazonaws.com",
  user="admin",
  password="sami1234",
database="solarlis"
)

# Create a cursor object to interact with the database
cursor = mydb.cursor()

# Execute the SQL query to fetch table names
cursor.execute("SHOW TABLES")

# Fetch all the rows (table names)
table_names = cursor.fetchall()

# Print the table names
for table in table_names:
    print(table[0])

# Close the cursor and the database connection
cursor.close()
mydb.close()
