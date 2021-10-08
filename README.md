# Web BirthDay
# Author: Nguyen Hoang Phuong (nhphuong020193@gmail.com)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

[DEMO](https://phuonghoangnguyenkms.github.io/happy-birthday/)

## Config
Open `config.js` to update variable, Email server

## Install
Run `npm install` to install all packages

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy to github

Run `ng deploy --base-href=/` to deployee the project to github. After completed, it will push code to git branch `gh-pages`. Please open and edit line `6` on `index.html` file as bellow:

<base href="/<your-repository>/">

Example: Your repository is `happy-birth-day`

<base href="/happy-birth-day/">

## Config Email
This project use smtp.js as email service. Please access this site for more info: https://smtpjs.com
Follow guideline to generate `SecureToken`
I alsse use `elasticemail` as SMTP server.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
