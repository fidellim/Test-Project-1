# Test Interview Project - Fidel Lim

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [Intructions](#instructions)
  - [Setup Development](#setup-development)
  - [Test Project](#test-project)
    - [Lighthouse](#lighthouse)
    - [Jest & React Testing Library](#jest-and-react-testing-library)
  - [Run Project](#run-project)
    - [Static Server](#static-server)
    - [Docker](#docker)
  - [Deploy Project](#deploy-project)
- [Resources](#resources)
- [Author](#author)

## Overview

### The challenge

This test has been designed for you to show us your ability to design, code, test, and document a small service.

### Built with

- **Frontend** - React, SASS
- **Testing** - Lighthouse (Performance, Accessibility, Best Practices, SEO), Jest, React Testing Library
- **Other** - Docker

### Links

- GitHub Repo: [Repo](https://github.com/fidellim/Test-Project-1)
- Live Site URL: [Live Site](https://fidellim-test-project-1.netlify.app/)

### Screenshot

![Desktop Dark](./src/images/desktop_dark.png)
![Desktop Light](./src/images/desktop_light.png)
![Mobile Light](./src/images/mobile_light.png)
![Mobile Dark](./src/images/mobile_dark.png)

## Instructions

### Setup Development

To setup the project for development, please follow these steps:

1. Download my project as a [zip](https://github.com/fidellim/Test-Project-1) or clone my repository using this command `git clone https://github.com/fidellim/Test-Project-1.git`
2. Once you are on the directory of the project, install all dependencies:
   1. npm: `npm install`
   2. yarn: `yarn install`
3. After that you can start running the project in development server using this command:
   1. npm: `npm start`
   2. yarn: `yarn start`

### Test Project

#### Lighthouse

If you would like to test the app's performance, accessibility, best practices, and SEO, there is Google Lighthouse.

Follow these steps to check the app's performance, accessibility, best practices, and SEO:

1. Use Google Chrome (Incognito Mode) to run the app. It is suggested to use Incognito window as Chrome extensions might negatively affect the page's/app's load performance.
2. Make sure the app is running. You can use `npm/yarn start` for now.
3. Once the app is running in Chrome, right click the app and press "Inspect".
4. Locate and press "Lighthouse". It is usually located at the top section of Chrome Dev Tools. <img style="display:block" width="400px" height="auto" src="./src/images/lighthouse_location.png">
5. Then, choose any category that you would want to generate a report. <img style="display:block" width="400px" height="auto" src="./src/images/lighthouse_generate_report.png">
6. After a few seconds, your report will be generated. Within this report, Lighthouse will inform you what went wrong and recommend ways to improve your app's performance, accessibility, best practices, and SEO. <img style="display:block" width="400px" height="auto" src="./src/images/lighthouse_data.png"><br/><img style="display:block" width="400px" height="auto" src="./src/images/lighthouse_data_local.png">

#### Jest And React Testing Library

To test react components, please follow these steps:

1. Run all test files do this command:
   1. npm: `npm test --watchAll`
   2. yarn: `yarn test --watchAll`
2. If you would like to stop testing or exit watch mode, just press `q`.

### Run Project

#### `Static Server`

To run the project in a production build, please follow these steps:

1. Make sure you have a build folder for the project.
   1. npm: `npm build`
   2. yarn: `yarn build`
2. Add serve dependency
   1. npm: `npm install -g serve`
   2. yarn: `yarn global add serve`
3. Finally, you can run with this command:
   1. npm/yarn: `npx serve -s build`

#### `Docker`

To run project in Docker, please follow these steps:

1. If you don't have docker on your local machine, you can download it [here](https://www.docker.com/get-started).
2. If you are using Visual Studio Code, you can download Docker extension as well. <img style="display:block" width="600px" height="auto" src="./src/images/docker_extension.png">
3. After that, create a docker image: `docker build -t name_of_image .`
4. Then, create a docker container: `docker run --publish 3000:3000 --name name_of_container name_of_image_created`
5. That's it! You can now run the project on `localhost:3000`
6. You can also check out some commands on the Dockerfile I made.

### Deploy Project

If you would like to deploy the project, please follow these steps:

1. The platform that I will use and explain is Netlify. You can also use other platforms like [Vercel](https://vercel.com/guides/deploying-react-with-vercel-cra), [Firebase](https://dzone.com/articles/react-apps-firebase), [GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f), and more.
2. Create an account. If you already have, just login.
3. There are two ways to deploy in Netlify, either through GitHub/GitLab/Bitbucket Continuous Deployment or Drag & Drop Deployment.

`GitHub/GitLab/Bitbucket Continuous Deployment`

1. Press the "New site from Git". Choose any Git repository manager (GitHub/GitLab/Bitbucket) you prefer. Make sure you have the repository of the project on your preferred option.
2. Now that you've connected Netlify and your preferred Git repository manager, choose the repository of the project. Then, configure your settings. Make sure the build command is `npm run build` or `yarn build` and publish directory is `dist` for npm or `build` for yarn. <br/><img style="display:block" width="400px" height="auto" src="./src/images/build_settings.png">
3. Wait for a few minutes to build the site. After that you can access the project. <img style="display:block" width="600px" height="auto" src="./src/images/project_deploy.png">

`Drag & Drop Deployment`

1. This would would be the easier way. All you need is the build folder of the project. Then go to the "Sites" section. Once you are there, drag & drop the folder to the designated place. <img style="display:block" width="1200px" height="auto" src="./src/images/drag_n_drop.png">
2. After a few seconds/mins, you will be able to access it. <img style="display:block" width="600px" height="auto" src="./src/images/project_deploy.png">

## Resources

- [Preconnect to required origin](https://www.afasterweb.com/2018/04/11/two-tips-for-using-3rd-party-fonts/) - using `<link>` instead of `@import` for using 3rd-party provider.
- [Front-end Testing](https://css-tricks.com/front-end-testing-is-for-everyone/) - get an overview of the different kinds of testing for front-end.
- [React Testing Tutorial](https://youtu.be/ML5egqL3YFE) - a tutorial on how to test components in React.
- [List Commits using GitHub API](https://docs.github.com/en/rest/reference/repos#list-commits) - a guide on how to fetch a list commits of repo using octokit.
- [List Commits using GitHub API 2](https://www.pluralsight.com/guides/fetching-most-recent-commits-from-all-repos-using-the-github-api) - a guide on how to fetch a list commits of repo using octokit.
- [Groupby using Reduce](https://sebhastian.com/javascript-group-by/) - How to group an array using reduce function.
- [Contributor's commit/s](https://docs.github.com/en/rest/reference/repos#get-all-contributor-commit-activity) - A guide on how to check each contributor's commit/s.
- [Learn Docker](https://youtu.be/gAkwW2tuIqE) - Learn what docker is.
- [How to build project in Docker](https://youtu.be/3xDAU5cvi5E) - A tutorial on how to build your project in Docker.
- [How to build project in Docker 2](https://youtu.be/xtllpDEOw4w) - Another tutorial on how to build your project in Docker.

## Author

- Website - [Fidel Lim Portfolio](https://fidellim-portfolio.netlify.app/)
- Github - [fidellim](https://github.com/fidellim)
