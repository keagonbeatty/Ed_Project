# Google Sheets Automatic Email

## Installation
1. Navigate to the sheet that will be populating the email
2. Click "Extensions" on the Toolbar
![Step 2](./WI_Images/Screenshot%202025-05-24%20at%207.55.44 PM.png)


3. Click "App Scripts"
![Step 3](./WI_Images/Screenshot%202025-05-24%20at%207.58.43 PM.png)


4. Delete all lines from the App Scripts IDE and rename this project
![Step 4](./WI_Images/Screenshot%202025-05-24%20at%208.00.33 PM.png)


5. Copy the code from [callable.js](https://github.com/keagonbeatty/Ed_Project/blob/main/callable.js) and copy it into the Google App Scripts IDE
![Step 5](./WI_Images/Screenshot%202025-05-24%20at%208.33.52 PM.png)

![Step 5.1](./WI_Images/Screenshot%202025-05-24%20at%208.37.52 PM.png)

6. In the code on change "Email" to the name of the sheet that will provide the information (the actual page that you sent me) and make sure no ther sheets share a name with it. If changing the name be sure to leave the double quotes (" ")

![Step 6](./WI_Images/Screenshot%202025-05-24%20at%208.45.28 PM.png)

7. Add the Sheet ID so the script references 

7. Click the "+" to add a new file, and select "HTML"
![Step 7](./WI_Images/Screenshot%202025-05-24%20at%208.52.14 PM.png)

8. Rename the HTML file to 'email_template.html' and delete all the markup inside of it
![Step 8](./WI_Images/Screenshot%202025-05-24%20at%208.56.11 PM.png)

9. Paste the markup from [email.html](https://github.com/keagonbeatty/Ed_Project/blob/main/email.html)
![Step 9](./WI_Images/Screenshot%202025-05-24%20at%209.01.04 PM.png)

10. Click the Sace Button
![Step 10](./WI_Images/Screenshot%202025-05-24%20at%209.04.34 PM.png)

11. Nevigate to "Code.gs" and click "Run"
![Step 10](./WI_Images/Screenshot%202025-05-24%20at%209.08.22 PM.png)

12. If the Email looks good continue to add the trigger

13. Click the Alarm Clock icon to the left of the screen

