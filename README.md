# MERN-PROJECT-BACKEND

KLOUT

Ironhack project at end of module 3 of Barcelona Full Stack Web Development Part Time March 2020

# Developers:

- [Chus Santana](https://github.com/chusantana/)

# Link to App:

https://klout.herokuapp.com/

## Description

It is a social media application that will allow you to control your online presence. It will measure your influence and give you a unified view of all your social media accounts. Presence, reach, interaction of the publications, make a ranking of punctuation compared to your friends on social networks

## MVP

The user registers and links his social networks.
View reports of your presence, reach and interaction of your social networks

## Epics / User Stories

- App

  - **homepage start** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
  - **about** - As a user I want to be know who are rear this project and know how to contact if I have a problem
  - **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
  - **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

- Authentication

  - **signup** - As a user I want to sign up on the application
  - **login** - As a user I want to be able to log in on the application
  - **logout** - As a user I want to be able to log out from the application so that I can make sure no one will access my account

- Applicaction Reports

  - **home** - 
  - **social profile** - 
  - **evolution** - 
  - **post** - 
  
- Applicaction Config

  - **profile** - 
  - **add networks** - 
  - **link network** - 
  - **network account** - 
  - **post** - 
  - **top ranking** -

## Backlog

List of other features outside of the MVPs scope

REAL Transactions

## ROUTES:  POR DEFINIR

| Method | URL            | Description                                              |
| ------ | -------------- | -------------------------------------------------------- |
| GET    | /              | Renders index                                            |
| GET    | api/auth/login | Redirects to /app/ if user logged in. Renders auth/login |
| POST   | api/auth/login | Return User data if user logged in.                    |

```
body:
    - email
    - password
```

| Method | URL          | Description                                                  |
| ------ | ------------ | ------------------------------------------------------------ |
| POST   | api/auth/logout | Logout                                                    |
| GET    | api/auth/signup | Redirects to /app/ if user logged in. Renders auth/signup |
| POST   | api/auth/signup | Add user and return user data                             |

```
body:
    - username
    - name
    - email
    - password
```

| Method | URL          | Description                                                  |
| ------ | ------------ | ------------------------------------------------------------ |
| GET    | api/user     | Return User                                                  |
| PUT    | api/user     | Update User                                                  |
| DELETE | api/user     | Delete User                                                  |

```
body:
    - name
    - email
```

| Method | URL          | Description                                                     |
| ------ | ------------ | --------------------------------------------------------------- |
| POST   | api/network  | Add Network                                                     |
| GET    | api/network  | Return Network                                                  |
| PUT    | api/network  | Update Network                                                  |
| DELETE | api/network  | Delete Network                                                  |


```
body:
    - facebook
    - twitter
    - instagram
```
| Method | URL          | Description                                                  |
| ------ | ------------ | ------------------------------------------------------------ |
| GET    | api/support  | Return Ticket Support                                        |
| POST   | api/support  | Add Ticket                                                   |


```
body:
    - name
    - email
    - subject
    - message
```


## Models

```
User model

- username: String
- email: String
- name: String
- password: String
- image: String
 

```

```
Network model

  facebook: {
    - username: String
    - password: String
  }

  twitter: {
    - username: String
    - password: String
  }

  instagram: {
    - username: String
    - password: String
  }

  user: User id

```
```
Report model

  facebook: {
    - followers: Number
    - likes: Number
    - comments: Number
    - shares: Number
  }

  twitter: {
    - followers: Number
    - likes: Number
    - comments: Number
    - retweet: Number
  }

  Instagram: {
    - followers: Number
    - likes: Number
    - comments: Number
    - shares: Number
  }

  user: User id

```
```
Ranking model

  user: User id
 

```
```
Log model

  date: Date
  user: User id
  description: String
 

```
```
Support model

  user: User id
  name: String
  email: String
  subject: String
  message: String
  status: String
 

```


## Links

### GitHub Reapository

The url to your repository and to your deployed project

- [Repository Link Frontend] (https://github.com/jesussantana/MERN-PROJECT-FRONTEND)
- [Repository Link Backend] (https://github.com/jesussantana/MERN-PROJECT-BACKEND)

- [Deploy Link](https://klout.herokuapp.com/)

### Wireframe

- [Wireframe Link](https://excalidraw.com/#json=6009705767895040,49KZI4H-Ua5U1a_n28mY6w)

### Agile Board

- [Trello Link](https://trello.com/b/Nkjk9Np1/klout)

### Slides

The url to your presentation slides

[Slides Link](https://prezi.com/i/0g80uhe7lw96/)
