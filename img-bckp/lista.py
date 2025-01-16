import csv
import json

def csv_to_js_array(csv_file, js_file):
    try:
        with open(csv_file, mode='r') as csvfile:
            # Read CSV file
            reader = csv.DictReader(csvfile)
            
            # Convert rows to a list of dictionaries
            data = [row for row in reader]
        
        # Write the JavaScript file
        with open(js_file, mode='w', encoding='utf-8') as jsfile:
            jsfile.write('const data = ')
            jsfile.write(json.dumps(data, indent=4))
            jsfile.write(';')
        
        print(f"JavaScript file '{js_file}' created successfully.")
    except FileNotFoundError:
        print(f"Error: The file '{csv_file}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Replace 'input.csv' with your CSV file and 'data.js' with the desired output file name
csv_to_js_array('input.csv', 'data.js')
