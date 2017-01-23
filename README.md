# TRELORA Appoinments

A team project by:

[Thom Schlereth](http://github.com/thompickett)
[Chad Ellison](http://github.com/chadellison)

![denver trelora-appointments map](./app/assets/images/trelora-appointments.png)  

## Description

Takes in scheduled appointments through Google’s calendar api and then displays them on a map using Google’s maps api. The appointments are sorted by date and employee so that a new appointment can be scheduled easily.

[Production](http://trelora-appointments.herokuapp.com/)

## Setup

If you want to to use this application locally, follow these steps.

Clone the project from github.

```
 $ git clone https://github.com/thompickett/trelora_appointments.git
```

Navigate into project.

```
$ cd trelora_appointments
```

Bundle the project using the Gemfile.

```
$ bundle
```

Create the database and migrate it.

```
$ rake db:create db:migrate
```

Create application.yml to keep your ENVIRONMENT VARIABLES secret. It is already in the .gitignore file and figaro will append '/config/application.yml' to the .gitignore file for you, but it is good to verify.

```
$ bundle exec figaro install

=> create  config/application.yml
=> append  .gitignore
```

The following steps will help you set up API keys to outside services.

You will need to create a file named `client_secrets.json` from the route of the app.

```
$ touch client_secrets.json
```

You'll need to get a Google Client Service account. You can access it [here](https://console.developers.google.com/apis/credentials/serviceaccountkey). When you get to the step where you produce the json key for your new service account, copy it into the file you previously created, `client_secrets.json`.

Now in the `./config/application.yml` file, add the following ENV VAR.

```
GOOGLE_APPLICATION_CREDENTIALS: ./client_secrets.json
```

This gives permission for the Google Calendar service access your calendars. When you are finished make sure that `./client_secrets.json` is .gitignored.

If you are using sub-calendars within your calendar you will need to visit `./app/services/google_calendar_service.rb` withing this project and edit it to pull in events from the correct calendars. You will need to know the correct calendar-id to do this.

You will also need to create a Google API Key from the Google developers console. This is used for the map. Once you have created that key set it as an ENV VAR.

```
GOOGLE_API_KEY: YOUR_KEY_a4352nfsdsf43wehfsd
```

You'll need to obtain permission from TRELORA for their internal API key and set it as ENV VAR. This allows you to create filed workers with an image on the map.

```
TRELORA_API_KEY: YOUR_KEY_a4352nfsdsf43wehfsd
```

Go ahead and create either photographer or appraisers so that they show up on the map.

Now you just need some appointments in your calendar and you're all set. Fire up that server.

```
$ rails s
```

In your favorite browser visit `localhost:3000`.
