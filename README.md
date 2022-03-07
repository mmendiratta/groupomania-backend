# groupomania-backend
Backend Application for the Groupomania Employee Forum 

Initial API Spec: 
API Endpoints

Flow: 
- Account creation 
- Account sign in
- Display information
- Scroll through information
- View account info
- Edit account info
- Delete account
- Create multimedia post
- Create text post
- View all posts (know If they have been viewed or not)

/accounts/v1/
Account Endpoints:
- POST : create a new account
- POST : sign into an account
- PUT : update account information
- GET : account information
- DELETE  : delete account

/groupomania-feed/v1/
Information Endpoints:
- GET : display all employee posts
- GET : dynamic display of all posts  ? 
- POST : create a new text post
- POST : create a new multimedia post with text
- PUT :  update post (text or multimedia) ( needed ? )
- DELETE : remove a post 

SQL ERD:
<img width="587" alt="Screen Shot 2022-03-06 at 7 44 24 PM" src="https://user-images.githubusercontent.com/40476522/156953837-278a00df-62e6-42a6-abed-4b38e3f79502.png">


