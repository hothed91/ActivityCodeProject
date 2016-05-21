Code written by: Kathleen Sebree
Date finished: 5/21/2016

*****************
* Dependencies  *
*****************
- ejs         : v3.3.6  : View engine
- express     : v4.13.4 : web application framework
- mongoose    : v4.4.17 : modeling tool, interact with mongodb.
- request     : v2.72.0 : used to make a HTTP request
- bootstrap   : v3.3.6  : html, css, js framework
- jQuery      : v2.2.3  : Javascript library
- font-awesome: v 4.6.3 : iconic font and CSS toolkit

*********************
*   Tools Used      *
*********************
- Node JS
- MongoDB
- 

* This is assuming you already have Node js environment setup and mongodb setup and running.
*********************
*  Install Notes    *
*********************
- Run 'npm install', this command will look at the package.json and download the dependencies.
- Run the app by typing 'node app.js' from the app directory.*

*********************
*       NOTES       *
*********************
- So I decided to build a simple application due to time constraints (moving long distance to Kentucky from Virginia)
- The interaction I chose was to allow users to like an 'actors' post
- Whenever the app is started it will seed the database with the activities from the provided endpoint.
- Regarding the user liking posts, i decided to not restrict users from liking more than once. This was due to time,
  but if I decided to implement the restriction i would have used local authentication to restrict users to only like once per 'activity'.

If you have any questions you can contact me with the following:
Phone: 502-609-4029
e-mail: kathleen.sebree@gmail.com or redlion91@me.com