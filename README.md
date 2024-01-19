- npm init
  - this will add package,json - this will be used for npm configuration
- Install express.js

  - npm install express

- created index.js
  - imported express.js into it (used import)
  - get the instance of the express server
  - added listen method to it - to keep the server live and listen to the requests
  - created route configuation for root level
- added start script into package.json

  - added type: "module" - which helps to use import method instead of require method to get the package
  - "start": "node index.js" - node path_file_to start
  - use npm run start

- .gitignore file

  - added node_modules - which ignore this file to transfer to github

- Git-commands:

  - Created a git repository on github (rest-api)

  - git init
  - git add .
  - git branch -m main
  - git commit -m "Created simple express server"
  - git remote add origin https://github.com/Adarsha-React/rest-api.git
  - git push origin main

- finally: npm run start
  Server is up: http://localhost:5050/

- install npm install nodemon -D

  - this will keep the sever in sync with any updates on editors, kind of hot module replacement
  - updated package.json - "start": "nodemon index.js" previously: "start": "node index.js"

- Created a mock folder and added mockData.js

  - it contains few todos information in todos array and it is exported

- imported the same in index.js

  - remember the path should include the file extension as well.
    - example: import { todos } from "./mocks/mockData.js" // named import

- Route Configuaration

  - Request URL(home page): http://localhost:5050/
  - Request URL(todos): http://localhost:5050/todos

  **_Express.js server_**

  - Created a express.js server and started it.
  - Added get and post methods.
  - Initially, we have added dummy data (it should come from backend - code should be written for that)
  - Tried to get all todos which are present in mockdata.js
  - Tested it through **_Postman_** -
    - Created a new collection - Todos - CRUD operations
      - Added new request (Read_GET) - No need to send any body data
        - Path/URL - http://localhost:5050/api/todos
      - Added new request (Read_ID) - it accepts id to read particular record from the backend
        - Path/URL - http://localhost:5050/api/todos/1
      - Added create request (Create_POST)
        - Need to the data which we need to add to todos in the body
          - the same data can be retrieved from request.body in "POST" callback function
          - use body-parser middleware to stringify the serialized data.
          - added check if data is already present or not then insert the data to todos array.
