# swagger-to-postman

Convert swagger in yaml to a simplified JSON to be imported in postman.

It deletes responses definitions to free space and unclutter postman interface.

You can invoke throught the command line with

curl -X POST --data-binary @swagger.yaml http://localhost:3000/convert
