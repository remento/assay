# assay
Tools for experimenting with a website's UI code via a benevolent "man in the
middle."

## What it does:
  1. Dynamically creates new websites to proxy existing websites
  1. Each new website is accompanied by a “project” dashboard
  1. Shows what traffic/requests is passing through the proxy
  1. Collect options to guide future request handing behavior by the proxy

## What it lets you do:
  1. Replacing calls from one resource with a redirect to another. Examples
  uses include swapping one or more JS, CSS, HTML, or image file with another
  to see its impact on a site.
  2. Multiple people to concurrently view and tinker with an “edited” site

## What it could do...
### *if time were not such a cruel mistress*
  1. Enable easy experimentation on websites. For example:
    * Replacing image tags with HTML 5 responsive picture tags, or
    * Integrating some of the many optimizations outlined at
        [modPageSpeed](https://modpagespeed.com/).
    * User defined scripts/mods
  1. Offer other methods of file replacement
  1. Caching
  1. Online file editing
  1. Cookie management for session sharing

# Motivation
I created this project over the December 2016 holiday as an excuse to
<<<<<<< HEAD
play around with some technology that interests me. Some of the choices I made,
=======
play around with technology that interests me. Some of the choices I made,
>>>>>>> develop
like using Firebase, were made because I just wanted to play with that service
or framework.

# Setup
## Prerequisites
1. Create a [Firebase account](https://firebase.google.com/)
  * Download the private credential JSON file, you will need to update the
    config.json file with its location later
2. Node JS is installed
  * https://nodejs.org/
  * Tested/developed with Node 7.4+
3. WebPack 2 installed globally
  * Only required if changing & building the UI
  * ```npm install webpack -g```
  * https://webpack.github.io/docs/tutorials/getting-started/

## Installation
```
>git clone https://github.com/remento/assay.git
>cd assay
/assay>npm install
```

## Configure
Update the project's config.json file with your Firebase account
information. Take particular note to update the following three items:

  * firebaseDatabaseURL
  * firebaseCredentialPath
  * clientConfig/firebaseConfig: {...}

## Start the server
  * Normal Server Startup
    ```
        node index.js --inspect
    ```
  * Start Server In Debug Mode (Node 7+)
    ```
        node index.js --inspect
    ```

## Building the UI
Not required unless the UI files in ```./src/client``` have been modified.
  * Dev UI build & start watching for changes (alias for ```webpack -d --watch```)
    ```
    /assay>npm run dev
    ```
  * Production UI build (alias for ```webpack -p```)
    ```
    /assay>npm run build
    ```
