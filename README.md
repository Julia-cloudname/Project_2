# **Stopwatch**
## **Overview**
The stopwatch can be used in a variety of ways in real life - at work, in studying, and at home.

* <strong>Time Management</strong>: 

A stopwatch can help you manage your time better by tracking the amount of time you spend on different tasks. For example, you can use the stopwatch to time how long it takes you to complete a task, such as exercising, cleaning the house or preparing a meal.

* <strong>Sports and Fitness</strong>: 

A stopwatch is commonly used in sports and fitness activities to measure the time it takes to complete an exercise or track your progress. For example, you can use the stopwatch to time your laps while running or swimming, or to time your rest intervals during sessions in the gym.

* <strong>Cooking and Baking</strong>: 

A stopwatch can also be useful in the kitchen when cooking or baking. You can use it to time how long you need to cook or bake a dish, or to keep track of the time for different cooking steps.

* <strong>Studying and Work</strong>: 

A stopwatch can be used to help you study or work more efficiently by tracking how long you spend on specific tasks or assignments. You can use it to time how long you study or work on a project, and then take breaks for a set amount of time to improve productivity and focus.

* <strong>Games and Competitions</strong>: 

A stopwatch can also be used in games and competitions, such as board games or track and field events. You can use it to time races, monitor how long each player takes to make their move or determine the winner in a tiebreaker situation.

Overall, a stopwatch can be a helpful tool in a variety of settings to measure time accurately and efficiently. The provided link offers a simple, user-friendly interface that can be used for all these purposes.

​
![Responsice Mockup](assets/images/StopwatchScreen.webp)
 
​
## Table of contents:
1. [**Site Overview**](#stopwatch)
1. [**Planning stage**](#planning-stage)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***Color Scheme***](#color-scheme)
    * [***Typography***](#typography)
1. [**Current Features**](#current-features)
    * [***The rest of your features***](#features)
1. [**Testing Phase**](#testing-phase)
1. [**Deployment**](#deployment)
1. [**Tech**](#tech)
1. [**Credits**](#credits)
​
## **Planning stage**
### **Target Audiences:**
​
Users who need to track time for different purposes:

* Users, who need a timer for personal aims - in sports, at home, for board games etc
* Users who need a time-tracker for working purposes - freelancers, full-time workers, who want to track task completion time to improve personal efficiency
​
### **User Stories:**

* As a user, I want to see the subject matter of the page.
* As a user, I want to navigate the page and buttons to find what I require quickly and easily.
* As a user, I want to see displaying results of my time tracking 
​
### **Site Aims:**

* To provide users simple and useful time-tracking tool
​
### **Color Scheme:**
​
For the page, I decided on dark-grey RGB (30 31 31 / 86%) colour in the official theme for contrast with the background. Green bottom for start, pause - yellow, red - reset and light grey for round, because they are typically associated with these activities. For the background, I chose a light rose RGB (255, 231, 226) and blue RGB (55, 133, 247) theme with gradient because it unobtrusive theme, which does not distract from the time tracker.
​
### **Typography**

Throughout the page, there is one font used font-family Zaychik.
​
## **Current Features**

#### *Navigation:*

* Buttons are presented in a way that is always obvious and reliable
* There is a menu on smaller screens is provided to ensure mobile users have an optimal experience
​
#### **Features**

The Stopwatch includes the possibility to track time, count and save rounds. The bottom How to use displays instructions for use. 

<details><summary>The Start button and the Space key duplicate each other and start the stopwatch:</Summary>
<img src="https://github.com/Julia-cloudname/Project_2/blob/main/assets/images/start-button.webp"></details> 

<details><summary>The Pause button and the Space key duplicate each other and pause the stopwatch:</Summary>

<img src="https://github.com/Julia-cloudname/Project_2/blob/main/assets/images/pause-button.webp"></details> 

<details><summary>The Round button and the Shift key save and display the result of the last lap. It displays:</Summary>

<img src="https://github.com/Julia-cloudname/Project_2/blob/main/assets/images/round-active-button.webp"></details> 

<details><summary>The button is displayed in a dimmer font when the timer is not running, which makes it clear to the user that it is inactive:</Summary>

<img src="https://github.com/Julia-cloudname/Project_2/blob/main/assets/images/round-not-active-button.webp"></details> 

<details><summary>The Reset button and the R key reset the timer value, stop it and delete the results of all previous rounds:</Summary>

<img src="https://github.com/Julia-cloudname/Project_2/blob/main/assets/images/reset-button.webp"></details> 

<details><summary>The button How to use the timer opens and hides the text with the instructions for use when you click on it:</Summary>

<img src="https://github.com/Julia-cloudname/Project_2/blob/main/assets/images/use-button.webp"></details> 

​
## **Testing Phase**

##### HTML 

* No errors detected when run through the official [W3C HTML Validation Service](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjulia-cloudname.github.io%2FProject_2%2F)

##### CSS

* CSS – no errors were found when passing through the official [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjulia-cloudname.github.io%2FProject_2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


##### Lighthouse

Results from Lighthouse testing:

* Mobile 
![Responsice Mockup](assets/images/lighthouse-mobile.webp)

* Desktop
![Responsice Mockup](assets/images/lighthouse-desktop.webp)

No errors on Javascript validator [jshint.com](https://jshint.com/):

![Responsice Mockup](assets/images/jshint.webp)

*Manual testing*: 

Devices:

- Apple MacBook Pro 2015 | 15.4"
- Acer Aspire 7750Z | 17.3"
- iPhone 8 Plus
- Samsung Galaxy M20

Browsers:

- Chrome
- Safari
- Brave
- Mozilla Firefox

Testing functionality - during the testing site on all available devices site behaves as the user expects, buttons work correctly.

☑️ When I click on the START, button starts the timer. When the timer is working the user sees the yellow button "Pause" instead of "Start". 

☑️ When I click the button "PAUSE", it pauses the timer, and a user sees the "Start" button instead "Pause".

☑️ When I click the button "ROUND", it creates an element with saved results of the last lap".

☑️ When I click the button "RESET" stops the timer and resets all data to 0 and clears round elements. 

☑️ When I click on the button "HOW TO USE TIMER" opens the area with a tutorial and hide it by clicking.

Testing responsiveness - the website was checked on responsiveness on dev tools
​
## **Bugs**

1

* Issue - When the user clicks on the button "New round", creates a new round even if the timer doesn't work and displays 0.
* Cause -  there is no checking if the timer starts or not
* Resolution - add if-condition to New round button listener, which returns nothing if the timer doesn't work (the button New round isn't active)

2

* Issue - When the user clicks on the button "New round", rounds start to display from bottom to top and the user doesn't see the value of the last round till scrolls to the bottom
* Cause -  rounds displayed in reverse order
* Resolution - change the method of adding rounds to HTML from .append() to prepend(), now user can see the last round on the top of the list
​
***
## **Deployment**

The site was deployed to GitHub pages. The steps to deploy:

* In the GitHub repository, navigate to the Settings tab
* From the menu on the left side of the screen, click on 'Pages'
* From the 'Source' section, click on the dropdown menu and select 'Deploy from branch'.  
* In the menu Branch below select the 'main' branch and folder 'root'

Clicking 'save' will refresh the page and publish the site.  Note, publishing will take a short amount of time.

The site is currently live and deployed in GitHub:  https://julia-cloudname.github.io/Project_2
​
## **Tech**
​
Used technologies:

- HTML
- CSS
- JavaScript
​
## **Credits**

**Fonts**

* [Google Fonts](https://fonts.google.com/)
