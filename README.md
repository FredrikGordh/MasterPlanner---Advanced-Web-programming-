# MasterChooser

## Link to final presentation
https://vimeo.com/760320086

Albins individual presentation: https://vimeo.com/760614528 


### Functional specifications:

MasterChooser, an app where students can create their own course schedule at Industriell Ekonomi, at LiU for their chosen master.
The idea of the app is that it will contain course reiviews, number of credits per course, advancement level of courses, calculator that ensures that the student meets the requirements, chat function with student counselor. In addition, the app will also include a member system with log in feature, where the students can see other member's course plans.

| Requirement |  Description                                                           |
| ----------- | ---------------------------------------------------------------------- |
| 1           | User must be able to log in                |
| 2           | User must be able to browse among courses                              |
| 3           | Users are able to add courses to their course plan                     |
| 4           | Userfriendly interface with course overview and points                 |
| 5           | Calculator that determines if the requirements are met                 |
| 6           | Userfriendly interface of other user's profiles and courseplans        |
| 7           | Chat function with student counselor                                   |
| 8           | Detalied descriptions of courses                                       |



## Technical specifications:

Client-side: We will use react and redux as the frontend framework including the component library material-ui.

Server-side: We will use node.js and express as the backend framework. Furthermore, we will use postman for testing.

Database: The data will be stored using SQLlite for user and course information and Firebase Realtime Database for images and chat information.
