### [**Automated Testing**](https://github.com/element2112/ACCHORD/tree/master/client/src/__testing__)
### [**MOCKS**](https://github.com/element2112/ACCHORD/tree/master/client/src/services/__mocks__)



### Manual Testing
================================================
| Action (Login) | Observation|
| :------: | :-----------: |
| navigate to the acchord login page |the acchord landing page loads with inputs for email and password |
| in the box that says email, enter in your email | the email typed in will show text in the email box |
| in the box that says password, enter in your password   | the password typed in will be shown as dots for security purposes |
| click the button that says submit under the password back| if the password is correct, the account's dashboard will load. If the password is incorrect, an alert box will say that the password is incorrect and the landing page will still be on the screen |

=================================================

| Action ( Accessing Account info from any screen)| Observation|
| :------: | :-----------: |
|after logging in, click the link that says "account page" at the very top of the screen | the account page should render |
| Repeat for every page accessible from the dashboard | the account page should render |

=================================================

| Action (Minimum length of password is 6 characters)| Observation|
| :------: | :-----------: |
| Navigate to acchord login page. | the login page should render |
| Click the link under the submit button that says register user | the register page should render |
| Enter in a first name, last name, email, and password with less than six characters | An alert pops up that says "password must be a minimum of six characters"|

=================================================

| Action (Each login email should be unique)| Observation|
| :------: | :-----------: |
| Navigate to acchord login page. | the login page should render |
| Click the link under the submit button that says register user | the register page should render |
| Enter in a first name, last name, email, and password with less than six characters | The form has each filled with the associated information |
| Click the submit button | The dashboard page should render |
| Click the logout button | The login page should render |
| Click the link under the submit button that says register user | the register page should render |
| Enter in a first name, last name, email, and password with less than six characters | The form has each filled with the associated information |
| Click the submit button | An alert pops up that says "email is not unique" |

=================================================

| Action (Update profile)| Observation|
| :------: | :-----------: |
| Navigate to acchord account page. | the account page should render |
| Click the button labeled 'Update account' | the update page should render |
| Change the first name to 'newName' | The form is filled with 'newName' |
| Click the 'Update' button | The account page should render |
| Verify that the First Name field now reads 'newName' | The first Name field says 'newName' |
| Navigate to the 'test users' cluster in the MongoDB database | The database loads informtion |
| Find the account that was edited | Account information should be in the database |
| Verify that the First Name field now reads 'newName' | The first Name field says 'newName' |

=================================================

| Action (Delete account)| Observation|
| :------: | :-----------: |
| Navigate to acchord account page. | the account page should render |
| Click the button labeled 'Delete account' | the delete page should render |
| Click the 'delete' button | The login page should render |
| Navigate to the 'test users' cluster in the MongoDB database | The database loads informtion |
| Verify that the account with the email that you deleted is no longer in the database | The account has been deleted |