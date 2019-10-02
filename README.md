## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Additional information](#info)

## General info
This project is a simple tool for search GitHub repositories.
	
## Technologies
Project is created with:
* React.js
* react-bootstrap-table2 module
* Bootstrap
	
## Setup
To run this project download repository using git then use yarn to download dependencies and run project locally.
if you want test cached last result please use "localStorage.clear();" in console.

$ cd /my-app
$ yarn install
$ yarn start
	
## Features
* List repositories in table using keyword.
* Results can be sorted ascending and descending using columns.
* Amount of records per page is configurable via dropdown.
* Last search result is cached and displayed after refresh.

## Additional information
I spent on code approximately 7 hours (time included research for bugs, rebuild code, general research how to do somenthing). The most challenging part was learning React because i'm not working on this framework in my current work and i reminded what i have learned on Udemy course. Working on ServiceNow platform is a little bit different (a lot of databases). I think you will notice that there is only one commit :) it is because i downloaded wrong package and my old project is broken but i understand how to work on branches. One feature = one branch and commit message should be written impersonally. I used ready module for table, because i saw info about three hours of development. To save time i choosed most downloaded and up to date module. For CSS i used BEM (block-element-modifier) class naming. 