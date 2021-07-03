# Challenge 11 Express.js: Note Taker

## Description
An application called Note Taker that can be sued to write, save, and delete notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.

Done as a challenge for UoT's Coding Bootcamp.
___

## Talbe of Contents
* [Usage](#usage)
* [Links](#links)
* [Tools](#tools)
* [Credits](#credits)
* [License](#license)
* [Challenge Guidelines](#challenge-guidelines)
___

## Usage
To use this app, go to the deployed site. At the homescreen, press `get started`. This will take you to a new page where you can click on `Note title` and `Note text` to write your own note. Press the `save` button to save your note and the `trash` button to delete it.


![Home Page](/public/assets/images/ch11_ss1.png)
![Notes Page](/public/assets/images/ch11_ss2.png)
![JSON](/public/assets/images/ch11_ss3.png)
___

## Links
* Deployed App 
___

## Tools
* JavaScript
* Node.js
* Jest
* fs
* Express.js
* Insomnia Core
* Heroku

___

## Credits
* Completed by: [Shannon Nell](https://github.com/ShannonNell)
* Based off of starter code from: [Xandromus](https://github.com/Xandromus)
___

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    
___

## Challenge Guidelines
### User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

### Criteria: 
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```