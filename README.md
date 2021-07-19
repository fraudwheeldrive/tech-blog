# tech-blog
MVC Content Management System Tech blog

## user story 
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria 
`GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site `

## Description 
Tech Blog is a simple Content Management System type blog (CMS) that allows you to add, delete and edit tech related articles. To do this you must sign in with a pre existing account or create and new 
account and sign up. It uses the MVC model to leverage Javascript, handlebars, sequelize, mysql2, and JAWSdb. 

<img src="https://github.com/fraudwheeldrive/tech-blog/blob/main/public/images/tech-blog.PNG" alt="Application Overview" width="400"/>

## Installation on Local Machine / Mobile Device 

## how to use 

Navigate the to the deployed application at https://t3ch-b1og.herokuapp.com/

signup to create an account and be granted access to the dashboard   

cycle thru the various options from creating a new post, to looking at previous posts, 
adding comments and deleted posts. (not all functional)



## Technologies used 
* express-handlebars 
* MySQL2 
* Sequelize 
* dotenv
* Bcrypt
* express-sessions 
* connect-session-sequelize 
