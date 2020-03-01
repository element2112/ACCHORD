### [**Automated Testing**](https://github.com/element2112/ACCHORD/tree/master/client/src/__testing__)



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

| Action (Minimum length of password is 6 characters)| Observation|
| :------: | :-----------: |
| Navigate to acchord login page. | the login page should render |
| Click the link under the submit button that says register user | the register page should render |
| Enter in a first name, last name, email, and password with less than six characters | An alert pops up that says "password must be a minimum of six characters|
