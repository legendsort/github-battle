A web app that does fun stuff with GitHub APIs, such as listing most popular repositories, and comparing two users, etc.

Demo: [https://react-github-battle-2017.firebaseapp.com/](https://react-github-battle-2017.firebaseapp.com/)

The output is based on the GitHub Battle Project originated from the new [ReactJS Fundmental course](tylermcginnis.com)
by [@tylermcginnis](https://github.com/tylermcginnis) - I did not "invent" this web app from scratch but this
does demonstrate the tech that I have worked with (and learnt from).

Notes:

- this app is not bullet proof - mainly used for educational / (my own) boiler-plate purposes. There are limitations.
- though I did write this app up from scratch, I did so by following through the ReactJS Fundamentals course.
All credits go to[@tylermcginnis](https://github.com/tylermcginnis) who created the course.
This work is not entirely my own!
- my development environment: Node v6.11, Mac OSX 10.11. I use nvm to create isolated NodeJS environment.
- the app is written in hybrid JavaScript ES5/ES6. There is an opportunity to turn it into full-blown ES6/ES7.

# Instruction

To run this app on your laptop (I used a Mac) do the followings:

## Clone Repository

git clone this repository to an appropriate location on your machine:

```
git clone https://github.com/Atlas7/react-github-battle-2017.git
```


## Install NPM Dependencies

Navigate to the root level of the repository.

Install NPM dependencies:

```
npm install
```


## Manually Setup GitHub API Access ID and Secret

At the root level of the repository, manually create a folder called `secrets`
(this folder is included in `.gitignore` to avoid accidentally exposing your GitHub API access credentials):

```
mkdir secrets
```

Manually create a file called `githubAPIConfig.js` within this `secrets` directory:

```
touch secrets/githubAPIConfig.js
```

Populate the content of this `githubAPIConfig.js` like this:

```js
export function getGitHubSecrets () {
  return {
    id: "CLIENT-ID",
    secret: "CLIENT-SECRET"
  }
}
```

Replace the string values for `id` and `secret` accordingly. You need to register an app that uses the GitHub API. 
Use the GitHub [Register a new OAuth Application](https://github.com/settings/applications/new) to register your
application and obtain a new pair of GitHub API ID and Secret. I completed the fields like this:

```
Application Name: react-github-battle-2017

Homepage URL: http://localhost:8080

Application Description: A web app that does fun stuff with GitHub APIs, such as listing most popular repositories,
and comparing two users, etc..

Authorization callback URL: http://localhost:8080/callback
```

Once you have registered your app with GitHub you can retrieve your GitHub API ID and Secrets easily by going to your 
GitHub Profile -> Settings -> OAuth Applications -> Developer Applications -> github-battle (or whatever the app name 
you have registered with GitHub API).

## Run the App in development mode

```
npm run start
```

Navigate via a browser (I use Chrome Incognito) at [http://localhost:8080](http://localhost:8080) - yay the app
should be live!

(hosted by webpack-dev-server - essentially referencing `app/index.html` and `app/index.js`
(non-minimized development version).


## Build the App for production deployment

```
npm run build
```

This will update `dist/index.html` and `dist/index_bundle.js` (minimized production version) - essentially your
core web app production files.

Open the actual `dist/index.html` file (via Mac Finder) to start playing with the single page web app!

Note: To build the non-minimized version bundled files, do this instead (not used often)):

```
npm run build-dev
```

## Deploy to Firebase

### One off Firebase config

Create a new project on [firebase](https://firebase.google.com/) with a gmail / google account.

Do the following to configure Firebase:

```
npm run firebase-init
```

Complete fields:

```
You're about to initialize a Firebase project in this directory:

  /Users/johnny/repos/react-github-battle-2017

Before we get started, keep in mind:

  * You are initializing in an existing Firebase project directory

? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices. Hosting: Configure and deploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: react-github-battle-2017 (react-github-battle-2017)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File dist/index.html already exists. Overwrite? No
i  Skipping write of dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

### Continual Firebase deployment

```
npm run build && firebase deploy
```

You may see this in the console:

```
(some build messages...)

=== Deploying to 'react-github-battle-2017'...

i  deploying hosting
i  hosting: preparing dist directory for upload...
✔  hosting: 2 files uploaded successfully

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/react-github-battle-2017/overview
Hosting URL: https://react-github-battle-2017.firebaseapp.com
```

Here is the demo link: [https://react-github-battle-2017.firebaseapp.com/](https://react-github-battle-2017.firebaseapp.com/)

# References

Check out this more (original and) comprehensive
[React-Fundamentals GitHub repository](https://github.com/tylermcginnis/react-fundamentals).
