# Wedding-Crasher-frontend



## Set up 
1. This will be the front end portion of the Wedding Crasher app.


## **Ever wonder what sneaky person was able to slither their way into a wedding. Looking no further this is the solution!**

![crasher.jpg](./front-wedding-crasher/src/assets/images/crasher.jpg)

In this project I applied REST API for a Wedding Crasher application, which allows users to be validated at the door and also a seating chart provided to help them find the correct table. The user will login based on the information provided for the invites.So accounts are already made the password will be their last name.

## Entity Relationship Diagram (ERD):
So my thinking proccess orginally was an app that gives the guest a barcode to scan guest as they come in and automatically fills them into a database almost like a check in type app. Mitgates wedding crashers and can compare the guest you expected to come against who shows up even if someone tells them to download the app. 

![finalerd.jpg](/planning/finalerd.jpg)

## Original ERD Diagram (ERD):
At a later time I would like to build the validator to scan the user and also be able to validate the guest of the invitee.

![orginialWeddingCrasher.jpg](/planning/orginialWeddingCrasher.jpg)

## Planning and Timeline
I implemented the MVC design for this project which has a simple approach to it. The user interacts with the view which talks to the controller and the controller talks to the model. Then a seating chart is provided. I wanted to keep it simple user logins and barcode is provided I added the seating chart as a new feature.
![homePageWeddingCrasher.jpg](/planning/homePageWeddingCrasher.jpg)
![WeddingCrasherQRCode.jpg](/planning/WeddingCrasherQRCode.jpg)
Timeline :
- Day 1: create all models,packages and repos  
- Day 2 : Create service and controllers 
- Day 3:Create Excetion handling for all endpoints 
- Day 4: configure login and security for all endpoints and fix bugs 
- Day 5 -8: Work on frontend and connect to back end

In this project I created:
- 1 model
- 1 service classe
- 1 repository interface classes
- 2 controller classes 
- 2 endpoints 2  for the user to login
- Angular for the front end

# Final Product  Login Page

![loginpage.jpg](/planning/loginpage.jpg)

# QR page 
![qrpage.jpg](/planning/qrpage.jpg)

# Machineries Used

 - Post man : help serialize endpoints
 - postGres/pgAdmin4 : create database and also help visualize tables
 - SpringBoot : where all the magic happend, what I use to build everything
 - Intellji/JAVA : program I used to build database
 - Mavaen : what I used for my dependencies
 - StackFlow : help for debugging
 - Youtube: learn about annotations and JWT
 - Json Web Tokens (JWT) : what I used for authentication
 - Angular
 - Bootstrap
 - Heroku for deployment
 - 

 # User Stories
Type of user As a wedding guest
TASK I want to be able to login.
GOAL so that I can validate that I'm on the list.
- ACCEPTANCE CRITERIA
GIVEN Given I’m in the role of logged in guest.
-WHEN when I open the app I want to be able to login.
THEN the app gives me my QR code.

As a wedding guest
I Want to be able to view seating assignment
So that I know where to go when I arrive.
- ACCEPTANCE CRITERIA
GIVEN Given I am in the role of guest
WHEN I open the app there is a place for me enter my email and password.
THEN the app shows me the chart.



1. As a user I can  login into my account.
1. As a user I can view QR code.
1. As a user I can view seatin assignment.



## Project Challenges

1. A challenge faced with the JWT token I kept getting an error message saying that the token I have is not trust worthy. Fixed that then I got another error saying token has expired a couple of days ago. Seems to be a common thing people run into I was'nt able to find a fix for it. I just redid my package pretty much started over.
2. Debugging a LOT , I felt a majority of my time was spent debugging and when I finally figured it out it was the smallest thing. I will say I am geting better at it tho so pros and cons.
3. Early on in the project I guess spring boot has it own natural security? I couldn't get past spring boot loading. I disabled a bunch of dependencies till it let me in.
4. Bean errors were also killing me early on you really have to watch what you type I forgot an "S" one time on "post" sent my whole application crashing.


