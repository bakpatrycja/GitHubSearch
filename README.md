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
