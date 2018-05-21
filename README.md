# Simple GraphQL + Firebase Demo

This repo provide an example to integrate GraphQL and Firebase

# Depedencies

To simplify this demo is using `express-graphql` as Node HTTP server. 
Other depedencies use in this demo is available in `package.json` file.

To help development process this repo using `nodemon` to monitor any node change so you will no need to restart the server everytime update the scripts.

# Note

To integrate with Firebase this repo using [firebase-admin](https://www.npmjs.com/package/firebase-admin), make sure to read the how to generate [Firebase Admin Private Key](https://firebase.google.com/docs/admin/setup#initialize_the_sdk) as you will need to generate your own `serviceAccountKey.json`

Be sure to manage your [Firebase database rules](https://firebase.google.com/docs/database/security/quickstart) to make it work