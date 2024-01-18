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
