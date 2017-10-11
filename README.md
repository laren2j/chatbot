# Chatbot
Chatbot using Express.JS (Node.JS Framework) and Google's DialogFlow

## How to use the chatbot
* Create an account in Google DialogFlow: https://console.dialogflow.com
* Once you are logged-in, create a new Intent and copy the **'Client access token'** and replace the line below in **server.js** file
  'const chat          = apiai("< Client access token >");'
* Next copy the **'Developer access token'** and replace the line below in **server.js** file
  'sessionId: < Developer access token >'
* Save the **server.js** file, and then open command line and navigate to the root folder of the chatbot project.
* Run the command to start you Express Server.
  'node server.js'
* Open **http://localhost:8080** in browser, you will get the welcome message for the chatbot.
