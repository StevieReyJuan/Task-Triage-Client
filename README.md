<!-- # Task Triage -->
# Task Triage

Task Triage is a task management/organization app with an emphasis on prioritizing tasks by their "status"/level of urgency. Task Triage's general theme and color-story draws inspiration from a medical triage and its tagging system. Task Triage allows users to share tasks with "teams" for collaboration, with access to any tasks that a user is a teammate of. Use Task Triage for personal or shared accountability and get things done!

## Motivation

My original thought and name for this app was “Tailor Triage”, as once again the purpose of this app is to streamline a process at my job in which I find myself stuck in the past. In this case, the scenario is picking up/dropping off alterations at the tailor. Since I work at a traditional haberdashery, we still handwrite alteration forms for the tailor to follow. In some cases, there are “rushes”--alterations that have to be completed by a specific date sooner than and outside of the usual workflow. The accountability for the tailoring to be completed on-time ends up falling on the person that marked up the alterations to communicate to the tailor, and it is up to that same person to keep stock of the dates for delivery to the client. Instead of relying on calendars and bulletin boards at work, I figured it could be fun to make an app that could help us keep one another apprised of priority alterations. I dropped the "tailor" aspect of the app and decided to keep the tasks/to-dos as open ended as possible to broaden appeal. As for the "triage" component... I was an EMT once upon a time, and I found the color-tagging system intuitive, which is especially important in situations of urgency. 

## Build Status

Version 1.0 is fully functional and ready for collaboration! A "teammate" with a unique team token can join an existing team and have access to its tasks, as well as edit them or create his/her own. Tasks can be "archived" when completed: In the event that a task needs to be restored I opted not to allow them to be deleted from the server, but I will look to implement deletion from the archived page with warnings that such an action is permanent. Of precedence next is real-time tracking of tasks and assigning due dates. It's not enough to just know which tasks are more important than others, there should be alerts and reminders when a task is about to bump up in urgency, or when an urgent task is dangerously due. Coming soon!

## Screenshots
Landing Page/Log In:

![landing page]()

User's Teams:

![teams]()

Task Lists: 

![task lists]()

Task Details:

![task details]()

Add/Edit Task: 

![add/edit task]()

User's Archived Tasks:

![archived]()

Join/Add Team: 

![join/add team]()

## Built With

### Front-End
* HTML
* CSS (No frameworks)
* Javascript
* React (Create React App, React Router)

### Testing
* Jest (Smoke tests)

### Production
* Deployed via Vercel

## Upcoming features

* Calendar integration
* Due date alerts
* Send team token/invite via auto-generated e-mail
* Send alerts/messages to teammates
* UX/UI improvements

## Demo

- [Live Demo](https://task-triage-client.vercel.app/)

## Getting Started

cd to `task--triage-client`

Run `npm install` to load dependencies

Run `npm test` to ensure build is stable

This repository only contains the front-end client. To develop locally, the server is required which can be found at the repository below:

[https://github.com/StevieReyJuan/Task-Triage-Server](https://github.com/StevieReyJuan/Task-Triage-Server)

## Authors

* **S. Reyes** - Development

## Acknowledgments

* **Mario Mol** - Mentor