# Let's clean and format the provided CSV-like data into a properly structured CSV file
import pandas as pd
from io import StringIO

# Raw CSV-like data (with irregular line breaks and spaces)
raw_data = """ID,CRN,Course,Section,Title,Instructor,Exam_Start_Time
0,"42022\n8:00 - 8:50 AM, T","ECS 012\nARTANX 103","A01\n0/0/0","Media Computation\nAH QL SE VL","McCoy, J\n4.0","Tuesday, March 18 at 3:30 pm"
1,"42022\n3:10 - 4:30 PM, MW","ECS 012\nCRUESS 1003","A01\n0/0/0","Media Computation\nAH QL SE VL","McCoy, J\n4.0","Tuesday, March 18 at 3:30 pm"
2,"42028\n3:10 - 4:30 PM, MW","ECS 012\nCRUESS 1003","A02\n0/0/0","Media Computation\nAH QL SE VL","McCoy, J\n4.0","Tuesday, March 18 at 3:30 pm"
3,"42028\n9:00 - 9:50 AM, T","ECS 012\nARTANX 103","A02\n0/0/0","Media Computation\nAH QL SE VL","McCoy, J\n4.0","Tuesday, March 18 at 3:30 pm"
"""

# Step 1: Replace newlines within fields
formatted_data = raw_data.replace("\n", " ")

# Step 2: Read into a DataFrame
csv_data = StringIO(formatted_data)
df = pd.read_csv(csv_data)

# Step 3: Save as a clean CSV file
file_path = '/mnt/data/cleaned_courses.csv'
df.to_csv(file_path, index=False)

file_path