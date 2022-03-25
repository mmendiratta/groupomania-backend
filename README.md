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
- POST : sign into an account (/login)

/accounts/v1/{id}
- PUT : update account information
- GET : account information
- DELETE  : delete account

/groupomania-feed/v1/
Information Endpoints:

- GET : display all employee posts
- GET : dynamic display of all posts  ? 

Pass user-id through payload
/groupomania-feed/v1/new-post
- POST : create a new post

/groupomania-feed/v1/{post-id}
- PUT :  update post (text or multimedia) ( needed ? )
- DELETE : remove a post 

SQL ERD:

https://mermaid.live/edit#pako:eNptktFugzAMRX_F8nPXD-C5VJoqbdXY3pAmixgajRDkBG0T8O_LKB3QJXmxco-le-30WFjFmCDLQVMlZPIG_s5blr7AMOz3Qw9wTNPDw_k5e4UECmHy7NbsUi_V1N-vKQDnRTcVdI7lUcH5tFFnkQ3pOiZcyF1Yvbfk3KcVFUNKLc4_keGYWNO9NubN9d4elphx4611_r_xu1jHE-RYijUTfh2XlRyjPV77muMKf3nYKqWuGbShapthjeAODUsYoQp7nULk6C8cUmMSSkXy8etkDFzXqrDHVOngDpOSasc7pM7b7LspMPHS8Q2av8dMjT9cW6E-

https://mermaid.live/edit#pako:eNp1ktFugzAMRX_F8nPXD-C5VKoqbdXo9oQ0ecRANEJQEtZVwL8vy9iAlSUvlu5J7HvlDjMtGCNks5NUGFJpDb9nH8e7u9NDcoa-3277DuApiR8hgmfJFxZzdKqnKsDdnAKwzsi6gNayOQg4HRfqKLIiWa0JJdmSxUtD1l60EWtILo1196R4Tazof63R1h12sD9Ciu_BHrxew5wpTvyQ1t_3NqJ1o-HbG6N_YghNc6NVwCEzTE4v-s7eOOkqXlf4w8FSyWXFIBUVvPAwR3CDio2PXPg1CCZSdCX7lDDypSDz9jXJ4Lm2EeQ4FtJPh1FOleUNUut0cq0zjJxp-Qcat2mkhk9TK68a

