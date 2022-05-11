# groupomania-backend
Backend Application for the Groupomania Employee Forum 

Start application:
`nodemon`

API Endpoints

Flow: 
- Account creation 
- Account sign in
- Display information
- Scroll through information
- Delete account
- Create multimedia post
- Create text post
- View all posts (know If they have been viewed or not)

/accounts/v1/
Account Endpoints:
- POST : create a new account
- POST : sign into an account (/login)

/accounts/v1/{id}
- GET : account information
- DELETE  : delete account

/groupomania-feed/v1/
Information Endpoints:

- GET : display all employee posts
- GET : dynamic display of all posts  ? 

Pass user-id through payload
/groupomania-feed/v1/new-post
- POST : create a new post

SQL ERD:
<img width="408" alt="Screen Shot 2022-04-07 at 9 00 11 PM" src="https://user-images.githubusercontent.com/40476522/162348392-5118aec2-e2f4-425d-88e2-f7e788a8c8b0.png">

https://mermaid.live/edit#pako:eNqNk0FugzAQRa9ieR3lAOyqBDaVmkhJdkhohAewim1kD02rwN1rGkihQFtWg97_o_ke-8ZTI5AHHO1eQm5BxZo9vnH9tNsdLi_nJArDfXI8nM4n1jbbbdMMJGCQpqbWlFTGUfIm8Yrifx26nx_21CLQ2P9d9X3YbdycMUdW6vzRRQp2fJ4oegEqkOUSKMAVKJIKnLsaK5YkmbR-Ng0Kl2gJM9jGejb4-AD-ynA_jHkWJjWNo0YLeLBGv1pXfVNAUqEjUBW7LzYRfj0rObtoK8nW4vSYJJW4TPCd2JRkskQmFeTTOcYSvuEKrV-48Ff8a6KYU4F-QzzwpQD7GvNYt15XV12iUEgylgcZlA43HGoypw-d8oBsjYOofym9qv0EnTHwIw

