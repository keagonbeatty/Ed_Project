# Email Script

# Installation

1. Go to the sheet that will be providing the informatio for the email

2. Click Extensions in the toolbar

![Step 2](./WI_Images/Screenshot%202025-05-24%20at%207.55.44 PM.png)

3. Click App Scripts

![Step 3](./WI_Images/Screenshot%202025-05-24%20at%207.58.43 PM.png)

4. Renmae the Project

5. Delete the existing cod block in the IDE

![Step 4 & 5](./WI_Images/Screenshot%202025-05-24%20at%208.00.33 PM.png)

6. Copy the code from [callable.js](https://github.com/keagonbeatty/Ed_Project/blob/main/callable.js) into the IDE

![Step 6](./WI_Images/Screenshot%202025-05-24%20at%208.33.52 PM.png)

![Step 6.1](./WI_Images/Screenshot%202025-05-24%20at%208.37.52 PM.png)

7. Prepare the script
    1. In the script on line 1 replace "sheet-ID" with your sheet-ID, keeo the double qoutes around the sheet ID

        1. The sheet ID can be found in the URL of the sheet, nsvigste the to sheet in the browser and in the URL your Sheet ID should be here : https://docs.google.com/spreadsheets/d/[SCRIPT_ID_HERE]/edit?gid=272332615#gid=272332615

        ![Step 7](./WI_Images/Screenshot%202025-05-26%20at%209.27.50 PM.png)
        ![Step 7.1](./WI_Images/Screenshot%202025-05-26%20at%209.18.46 PM.png)
        ![Step 7.1.1](./WI_Images/Screenshot%202025-05-26%20at%209.30.32 PM.png)

    2. On line 4 and 10 replace "Email" with the name of the sheet which contains the information. Make sure the sheet name is not used on any other sheets

    ![Step 7.2](./WI_Images/Screenshot%202025-05-26%20at%209.38.22 PM.png)
    ![Step 7.2](./WI_Images/Screenshot%202025-05-26%20at%209.36.43 PM.png)

    3. Click "Save"

    ![Step 7.3](./WI_Images/Screenshot%202025-05-26%20at%209.43.57 PM.png)

8. Create the HTML template for the email

    1. Click the "+" icon on the top of the File Nav bar

    2. Click "HTML" in the option Dropdown

    3. Name the file "email_template" and click tab, ".html" will be appended to the end of the file

    ![Step 8](./WI_Images/Screenshot%202025-05-24%20at%208.52.14 PM.png)
    
    4. Delete the html template from the IDE

    ![Step 7.4](./WI_Images/Screenshot%202025-05-24%20at%208.56.11 PM.png)

    5. Copy email_template.html from the GitHub repository and paste it into the IDE

    ![Step 7.5](./WI_Images/Screenshot%202025-05-24%20at%209.01.04 PM.png)

    6. Click Save

    ![Step 7.6](./WI_Images/Screenshot%202025-05-24%20at%209.04.34 PM.png)

9. Test the script

    1. Navigate to "Code.gs"

    2. Make sure "sendEmailWithChart" is selected

    3. Click "Run"

    ![Step 9.3](./WI_Images/Screenshot%202025-05-26%20at%209.48.12 PM.png)

    4. If an error pops up send it to me on teams, if I write instructions on how to debug this hellhole of a script this will be a 3 part novela

    5. If it works you should recieve an email, review the email to your sheet and make sure everything looks right