# **Tech-Savvy**
## **Site Preview**

## Contents-Page:
1. [**Project-Planning**](#project-planning)
    * [**Target Audiences:**](#target-audiences)
    * [**User Stories**](#user-stories)
    * [**Site Objectives:**](#site-objectives)
    * [**How Is This Will Be Achieved:**](#how-will-this-be-achieved)
    * [**Color Scheme**](#color-scheme)
    * [**Reused Code**](#reused-code)
1. [**Current Features on all pages**](#current-features-on-all-pages)
    * [**Headers:**](#headers)
        * [*Title*](#Title)
        * [*Call To Action Button*](#call-to-action-button)
        * [*Start Game Section*](#start-game-section)
      * [**Quiz-Section**:](#quiz-section)
          * [*Quiz-Tracker*](#quiz-tracker)
      * [**Questions and Answers**:](#questions-and-answers)
          * [*Q and A*](#q-and-a)
    * [**Point-Tracker**](#point-tracker)
    * [**Results-Section**](#results-section)
    * [**Footer**](#footer)
    * [**Typesetting**](#typesetting)
1. [**Potential-Features**](#future-enhancements)
1. [**Deployment**](#deployment)
1. [**Credits**](#credits)
    * [**Honorable mentions**](#honorable-mentions)
    * [**General reference:**](#general-reference)
    * [**Content**](#content)
    * [**Media**](#media)

## **Project Planning**
### **Target Audiences:**
* For potential clients and employers to present to about showcasing my personal portfolio.
* For users who want inspiration for a personal portfolio design.

### **Site Objectives:**
* Allowing users to able use and view projects and get in touch with the owner of the site. 
* To create a simple, effective and user-friendly site which clients and employers can navigate with.

### **User Stories:**
* As a user I want to be able to navigate the website with ease.
* As a user I want to be drawn in with the appearance of the website. 
* As an employer I want to be able to gauge at how much the user has shown their creativity.
* As a client I want to be able to see the work that the owner has done and be able to contact them for a future collaboration. 

<!--
### **How will this be achieved:**
* The landing page with have a simple CTA (Call To Action) input button at which the user must interact with to continue the quiz.
* The page will have the following things:
    * A large coloured CTA play button at which when the user/player hovers over, a small animation will occur and change colors briefly tempting the user to click it which leads to a different pop up to appear.
    * A small text box which the user has to input their name to start the quiz, if nothing has been inputted the quiz cannot start.
    * A series of questions out of ten which displays the question, and four different options at which the user must pick one correct answer to see if it is correct or not.
    * A results page which gives feedback to players as to how many questions they have answered correctly out of 10. 
 -->   
### **WireFrames:**
* To prevent any digressions towards the project aims & objectives I have made a basic wire-frame via [Figma](https://www.figma.com/file/uAbTphZwZsXFHnrtA8asCY/Welcome-to-FigJam?type=whiteboard&node-id=0%3A1&t=YDDw9WSsovAuHcRM-1) to refer back to in case of any major changes to the project. 

[Wire-frame](doc/wireframe/) were all designed in Figma for a more simpler design.
* [Home Page](doc/wireframe/home.png)
* [About Me Page](doc/wireframe/about.png)
* [Skills Page](doc/wireframe/skills.png)
* [Projects Page](doc/wireframe/projects.png)
* [Contact Page](doc/wireframe/contact.png)

<!-->
There was small changes the planned design of the static site however most of it was kept to teh original look but only with minor cosmetic changes,  which include:-
* An interactive CTA play button which is changes color upon hovering.
* A placeholder on the start-game section text box for players to input their names and warning to users if they start the game with no input in the text box.
* An animation on the timer clock which shows a small stop watch shake after each second to indicate the user that time is ticking.
* A hover animation over the 4 different choices of answers within the answers section of the quiz which change color whilst the animation occurs.
* The results page having a box which shows the player's score and a coloured gradient on the border of the box which constantly spins around the edge of the box.
* A small Favicon to act as an icon for the webpage.

### **Color Scheme:**
 * When creating the design of the quiz site I have went with this color scheme to match the overall theme of georgraphy with the colors of the earth having blue and green elements.  

 ![Contrast Grid](doc/screenshots/color-scheme.png)

### **Reused Code:**
* Some code has been re-used in from the first milestone project due to the simplicity and effectiveness it has on the overall layout of the final design.
    * Which one of any said web-links have an original colous.
    * Upon hovering over it or clicking it will change colors. 
    * After visiting the said web-link it will change to a secondary color. With the hover effect in place.
![Reused Code](doc/screenshots/reused-code.png)

## **Current Features on all pages**
###  **Header**
* The header has been placed in the top center of the page to allow for a easy transition between desktop and mobile so it doesn't affect the page in huge way. 

 The header itself contains the following features: 

### *Title:*
* The Title is there to show the name of the page.

![Title](doc/screenshots/header.png)

#### *Call To Action Button:*
* The CTA is there with theme of the Earth to match the theme and catch the user's attention the moment that they enter the site. 
    
![CTA Button](doc/screenshots/cta-play-button.png)
    
* Mobile version of CTA button with header and footer.

![Mobile-version](doc/screenshots/mobile-version.png)

#### *Start Game Section:*
* The start game section has an autofocus placeholder on the text box which allows for more accessbilty to the user, which is useful on mobile devices as the text cursor is already highlighted in the text box which saves time for the user to manually navigate to it as. 
* Two interactive buttons for the user to input one of which is the Start Game, which upon text input and clicking the button will send the user to commence the geography quiz. The Quit button will send the user back to the main screen where the CTA button is displayed.
* A error handler which dilays a red border in the text box if the user hasn't provided any sort of text or name.
* An event listener where the user can press the ENTER key which has the same response as clicking the Start game button. 

  ![Start Game Section](doc/screenshots/placeholder-input.png)

### **Quiz-Section**:
#### *Quiz-tracker:*
Features used:
* A indicator display to track the current question number the user is on out of the total quiz questions.
* A countdown timer with a animation which moves each time a second is lost within the alloted time length.
* A countdown bar to also track time but visually display the length of time left in the bar.
![Quiz-section](doc/screenshots/tracker-update.png)

### **Questions and Answers**:
#### *Q and A:*
Features used:
* A question with a four choice option answer selector. 
* Users being able to select any answer before clicking next to proceed to the next question.
* Each answer having a hover animation with a color changing function,  the color also changes when the user clicks on answer. 
* The Fisher-Yates method used to shuffle all the questions and answers to any given random order out of ten. So no same question is used twice.

![Quiz-Questions](doc/screenshots/quiz-questions.png)

## **Point-Tracker**
* The point tracker is used to display to the user whether they have; answered the question correctly, gave an incorrect answer, did not give answer and to show which answer they are currently on.
* The point tracker is indicated in four different colors:
    * Green: Meaning the user has answered the question correctly.
    * Red: Meaning the user has answered incorrectly.
    * Gray: Meaning the user has ran out of time or can alternatively skip the question.
    * Yellow: To indicate to the user that they are on the current question.
![](doc/screenshots/progress-tracker.png)

## **Results-Section**
* The results sections shows the following things:
    * The users score out of 10.
    * A feedback message to the user as to whatever associated score they have recieved.
    * A Play Again button if the users wishes to replay the quiz again.
![Resuts-Section](doc/screenshots/results-page.png)

## **Footer**
* All icons that were used in the footer is sourced from font awesome.
* A personal copyright has been added in-case of plagerism.
* A personal link to my GitHub page which users can track my coding journey.
![Footer-Page](doc/screenshots/footer.png)

## **Typesetting**
 Throughout the second project milestone only this font was used:
  * Poppins - for a more simplistic look to users so it not too much for them.
* Fonts that have used in the project have been sourced from Google Fonts (quoted in the credits).

## **Potential-Features**
* 
    * An interactive version with sounds and unique animations.
    * Potentially adding a leaderboard system/table to challenge and rival other users.
    * A narration voice over for all the questions and answers for users with disablity issues.
    * A mixture of sound, images and text based questions and answers.
    * A shuffler for answer as well.
    * Different modes within the quiz for example:
        * A speed test to see how quick and accurate the user can answer the questions.
        * Different difficulites in place to challenge the user.
***
## **Deployment**
The project has been deployed with the following steps: -

1. Within the project's [repository](https://github.com/leebri101/Geographically-Challenged), you select the **Settings** tab.
2. Then select the **Pages** menu tab on the left side.
3. Under **Source** then, select the **Main** branch from the drop-down menu and click **Save**.
4. A message will then pop up that the project has been successfully deployed with a live link.

You can visit the live link via this URL - [Geographically Challenged](https://leebri101.github.io/Geographically-Challenged/)
***

 ## **Credits**
### **Honorable mentions**
This project was a nice refresher for my self to be able to gauge at how much i have improved from when i first started with little to no knowledge of coding to enjoying the challenges it brings me and for giving me the creative freedom to go beyond. However this will be an ongoing self improving static site, as with each coding language that is being covered it will may or may not be potentially be implemented into the project portfolio.
for very interesting but difficult challenge, which tested my understanding of HTML & CSS but to incorperate JavaScript too. However the more stuff that was being introduced to the project the more simpler and effective the project became due to time restraints of the course, but nonetheless it is a good way to show what i can do, but i must credit the following people:
 * John Lamontagne My Code Institute mentor who is incredible at giving me insite and suggestions on further improving my project and is a huge help to continuously support me for any sort of technical issues within the project.
* My older brother for always being available for being a personal guinea pig for my projects (and with many more to come) and giving me constant constructive feedback all the time.

### **General reference:**
* The project theme was inspired by the Code Institute's coding project called Love Maths. I have tried to change as much as possible but there may be some similarties within the codes.
* I have used W3Schools for a basic understanding and learning process for knowing JavaScript a bit better, and for general basic coding references and as general encyclopedia for any code related issues or ideas.

### **Content:**
* All icons that were used throughout the project are sourced from [Font-Awesome](https://fontawesome.com/)
* All fonts used have been imported from - [Google-Fonts](https://fonts.google.com/)
-->
### **Media:**
* Contact page inspiration [Asana](https://asana.com/sales)
* Favicon generator for index.html: [Favicon-Pro](https://www.favicon.pro/)
* [GiSketch](https://gisketch.com/) for inspiration for the unique word animations and theme of coding. 
* General RGB color Table used in style.css: [RGB-Table](https://www.rapidtables.com/web/color/RGB_Color.html)
* Image compressions: [TinyPNG](https://tinypng.com/) 
* Colored grid scheme: [EightShapes](https://contrast-grid.eightshapes.com/)
* HubSpot for different styling of animations on CSS: [HubSpot](https://blog.hubspot.com/website/css-hover-animation)
* RapidTables for general encyclopedia for searching for color themes: [RapidTables](https://www.rapidtables.com/web/color/RGB_Color.html)
* [Figma](https://www.figma.com/?fuid=) for the basic and simple wire-frame design as a professional and practical project planning platform. 
<!-->
* (https://www.eggradients.com/gradient/thin-saz)
* (https://nekocalc.com/px-to-rem-converter)px to rem converter
* (https://codepen.io/baarbaracrr/pen/KKovmGb) css linear gradient animator via CodePen
* (https://unsplash.com/) image source finder
* (https://convertio.co/) image compress/converter
* (https://codepen.io/mattfried/pen/LJNXVz) Animated slideshow