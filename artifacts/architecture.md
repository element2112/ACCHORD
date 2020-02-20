# Program Organization

[High Level Architecture](https://docs.google.com/document/d/1fRGJO0WuWy_onGmUY-X_2tus0E5H_XLB17wOOISiAd0/edit?usp=sharing)

* Sequence Diagram
[alt text](https://github.com/element2112/ACCHORD/blob/master/artifacts/Acchord%20Sequence%20Diagram.png)

# Major Classes

The major classes in Acchord are registerPage, loginPage, and dashboardPage.  loginPage and dashboardPage are subclasses of registerPage, since they are sharing the user information data.  The link to the UML class diagram is below.

* Class Diagram
![alt text](https://github.com/element2112/ACCHORD/blob/master/artifacts/class_architecture.png)

* UML Class Diagram

![alt text](https://github.com/element2112/ACCHORD/blob/master/artifacts/class_architecture.png)

* [Class Architecture](https://github.com/element2112/ACCHORD/blob/master/artifacts/class_architecture.md)

# Data Design

The Acchord website will store all user data, including first name, last name, email, and password externally.  This information will be stored in the MongoDB database service and accessed through the backend server and api.  Our website does not currently store any data internally.

* https://www.lucidchart.com/documents/view/344f8334-78c5-48de-a223-1d22b38a1bbf)

# Business Rules

# User Interface Design 
##### Descriptions and table are within the document

* https://docs.google.com/document/d/1i8sUkb_lvJayRaxq9Wzg5nWz46eU-wb24Y_wntDmVsY/edit

# Resource Management

# Security

# Performance

# Scalability

Hosting: Currently we are using the free tier of heroku where the server falls asleep after 30 minutes of not being pinged and provides 512MB of ram with one web worker. Once more users begin to visit the site, upgrading the "Hobby" for seven dollars per month keeps the server running 24 hours a day, provides free SSL  & automated certificate management for a custom domain if we purchase one, and multiple web workers with 10 process types.

Database: Currently we are using the free tier of MongoDB Atlas which provides shared RAM and has maximum storage size of 512MB. Once more users begin to visit the site, upgrading to the paid AWS cloud deployment would be necessary.  For $0.08 per month, MongoDB provides 2GB of RAM and a maximum storage size of 10GB.

# Interoperability

# Internationalization/Localization

# Input/Output

# Error Processing

# Fault Tolerance

# Architectural Feasibility

# Overengineering

# Build-vs-Buy Decisions

# Reuse

# Change Strategy
