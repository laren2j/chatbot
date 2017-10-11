# Chatbot
Chatbot using Express.JS (Node.JS Framework) and Google's DialogFlow

## How to use the chatbot
* Create an account in Google DialogFlow: https://console.dialogflow.com

* Install node modules run `npm install`

* Create .env file in the root with keys present in .env.example

* Once you are logged-in, create a new Intent and copy the **'CLIENT_ACCESS_TOKEN'** and replace the line below in **server.js** file
  'const chat = apiai(process.env.CLIENT_ACCESS_TOKEN);'

* Next copy the **'process.env.DEVELOPER_ACCESS_TOKEN'** and replace the line below in **server.js** file
  'sessionId': process.env.DEVELOPER_ACCESS_TOKEN

* Save the **server.js** file, and then open command line and navigate to the root folder of the chatbot project.

* Run the command to start you Express Server.
  'node server.js'

* Open **http://localhost:8080** in browser, you will get the welcome message for the chatbot.
