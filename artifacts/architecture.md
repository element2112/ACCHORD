# Program Organization

[High Level Architecture](https://docs.google.com/document/d/1fRGJO0WuWy_onGmUY-X_2tus0E5H_XLB17wOOISiAd0/edit?usp=sharing)

![alt text](https://github.com/element2112/ACCHORD/blob/master/artifacts/Acchord%20Sequence%20Diagram.png)

# Major Classes

The major classes in Acchord are registerPage, loginPage, and dashboardPage.  loginPage and dashboardPage are subclasses of registerPage, since they are sharing the user information data.  The link to the UML class diagram is below.

* UML Class Diagram

![alt text](https://github.com/element2112/ACCHORD/blob/master/artifacts/class_architecture.png)

* [Class Architecture](https://github.com/element2112/ACCHORD/blob/master/artifacts/class_architecture.md)

# Data Design

The Acchord website will store all user data, including first name, last name, email, and password externally.  This information will be stored in the MongoDB database service and accessed through the backend server and api.  Our website does not currently store any data internally.

* https://www.lucidchart.com/documents/view/344f8334-78c5-48de-a223-1d22b38a1bbf)

# Business Rules

Due to our web application not being used for business purposes, business rules do not apply.

# User Interface Design 
##### Descriptions and table are within the document

* https://docs.google.com/document/d/1i8sUkb_lvJayRaxq9Wzg5nWz46eU-wb24Y_wntDmVsY/edit

# Resource Management
By using Mongodb Atlas Cloud, all resources are managed by MongoDB and AWS.

# Security

# Performance

As a guideline, long wait times (approximately < 5 seconds at worst) will be tolerated for calls to external API such as Spotify. Since the project is small, we are hosting the webpage on Heroku for free, which means the server sleeps when it doesn’t receive requests after some time (about thirty minutes); this is acceptable, as the project is currently small and very early in development, but this should not cause greater than 5 seconds of delay when the app is released.

# Scalability

Hosting: Currently we are using the free tier of heroku where the server falls asleep after 30 minutes of not being pinged and provides 512MB of ram with one web worker. Once more users begin to visit the site, upgrading the "Hobby" for seven dollars per month keeps the server running 24 hours a day, provides free SSL  & automated certificate management for a custom domain if we purchase one, and multiple web workers with 10 process types.

Database: Currently we are using the free tier of MongoDB Atlas which provides shared RAM and has maximum storage size of 512MB. Once more users begin to visit the site, upgrading to the paid AWS cloud deployment would be necessary.  For $0.08 per month, MongoDB provides 2GB of RAM and a maximum storage size of 10GB.

# Interoperability

Data will be shared between the user and our server through HTTP requests handled by our own logic layer between the server and the client’s browser. Data will be shared with Spotify through Spotify’s API. 

# Internationalization/Localization

The website will be done in English and based in the United States.

# Input/Output

Due to the nature of the website, reading is mostly based on a just-in-time reading scheme. Input errors are detected immediately with initial requirements for specific inputs and checked again with the database where data is found or not found. Output errors are then detected once data from the database has been collected to verify that the correct information was returned.

# Error Processing

Error processing is handled correctively, stopping to require new input, and actively, checking the validity of input. Errors don’t propagate through the architecture because it discards the invalid data and takes new data to try.

# Fault Tolerance

The fault tolerance of our system is minimal as most of our error processing is where input is given.

# Architectural Feasibility

Storing user data in our database is feasible for the types of data we plan to store. The performance requirements are quite loose; they are already met and we expect they will remain feasible as the project grows.

# Overengineering

Written code should be robust enough as to handle all the expected errors in fail cases, such as attempting to access data where there is none. Use of magic values should be minimized, and server requests and responses should provide the minimal information for the intended functionality.

# Build-vs-Buy Decisions

The architecture doesn’t use many off-the-shelf components due to the simplicity and specificity of the required components.

# Reuse

Due to the nature of the project, there will be no reuse of pre-existing software. However there will be a use of resources such as the Spotify API.

# Change Strategy

In the future, we may want the react components to be refactored into more components if parts of our webpages will be added to other webpages or the navigation bar, such as login. Different major libraries have their own testing libraries, and are supported by node’s own testing library, and we may want to switch between the two as our project gets larger and there is more to test. We may also want to change the structure of the database to meet changing security demands before launch; mongo allows for this to be done post-launch in the case we want to change this.
