# Template for Chrome-App with node.js

This template / example demonstrates how to use packages from node.js with the require-syntax in an Chome-App. (https://developer.chrome.com/apps)  
In this template the markdown-package frome npm is used (https://www.npmjs.com/package/markdown)  
If you want to use another package you have to adjust this template/commands ...

## Install:

1. Install node.js from https://nodejs.org/
1. Clone this repository
1. Open the root of the cloned repository in commandline and the following commands
    1. Install markdown-package with:  
    `npm install markdown`
    1. Install browserify to get the require-syntax to work with:  
    `npm install -g browserify`
    1. Create the bundle.js for the markdown-require:  
    `browserify -r markdown -o bundle.js`
1. Open Chrome and navigate to chrome://extensions/
1. Activate developer-mode (Should be a slider on the top right)
1. Click on Load unpacked extension and select the root-folder of the repository
1. Open chrome://apps/ and click on the ChromeAppNodeTemplate-application

Preview:  
![App-Preview](https://raw.githubusercontent.com/D4koon/ChromeApp-with-node/master/images/preview.png "App-Preview")

Setup found from this video: https://www.youtube.com/watch?v=gkb_x9ZN0Vo  
Thanks to Paul Kinlan https://paul.kinlan.me/de/

License-free icons from:  
https://www.iconfinder.com/CarloRodriguez
