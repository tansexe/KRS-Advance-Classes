# KRS-Advance-Classes

## Description: 
This repository stores code from my practice sessions during KIIT Robotics Society's Advanced classes in the 2023 academic year.

## Tech Stack Used: 
1. MERN Stack

## Frontend Documentation: 
The KRS-Advance-Frontend contains the frontend code for the classes. 

### Folder Breakdown:
1. Assets: Contains the images used in the website.
2. Components: The necessary components required for each page are systematically arranged and organized. 
3. Pages: This folder contains all the necessary website pages.

### Screenshots: 

1. Home Page
<img width="960" alt="image" src="https://github.com/tansexe/KRS-Advance-Classes/assets/112875959/8bbbd7ed-de7c-49ff-b029-5b411812e6d0">

2. Register Page
<img width="960" alt="image" src="https://github.com/tansexe/KRS-Advance-Classes/assets/112875959/f169231c-8ac9-4d2f-aa2d-0ea89df1d4e5">

3. Login Page
<img width="960" alt="image" src="https://github.com/tansexe/KRS-Advance-Classes/assets/112875959/4867e4ec-b45c-41be-b936-b4f122ddcc56">

## Backend Documentation: 
The Backend-E-attendance folder contains the folder for the backend.
It would locally run on localhost: 5000. 

### Routing Guide

This project has the following endpoints:

### User

| Methods | Route                 | Description              | Request                                        | Response                                                           |
| ------- | --------------------- | ------------------------ | ---------------------------------------------- | ------------------------------------------------------------------ |
| GET    | `/users/getAllUsers` | To get the info of all users.            | _id, Username, RollNo, Hostel, Email, Password, Phone                          | All the User details are sent.  |                                                                   
| POST     | `/users/Signup`       | Registering all the users            | Username, RollNo, Hostel, Email, Password, Phone  | success: True/False |
| POST   | `/users/Login`     |  Logging all the users |    email, password, Username | message: User found or not| 

## Troubleshooting
If you encounter any issues while using the Hostel-E-attendance, consider the following troubleshooting steps:
1. Check Dependencies: Ensure you have installed all required dependencies.
2. Review Error Messages: If you encounter any errors, carefully review the error messages to identify the source of the issue.

