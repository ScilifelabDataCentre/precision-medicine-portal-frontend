# Precision Medicine Portal (Frontend)

The Precision Medicine Portal is a national resource developed and maintained by SciLifeLab Data Centre. It is intended to serve as a resource for professionals in the field of precision medicine, and content will be added continuously.

The portal supports researchers in precision medicine by providing information on available datasets, including national quality registries, research cohorts, and other structured data relevant to clinical and translational research. Moreover, it provides links to customised dashboards and resources for navigating data management challenges. Researchers can also find guidance on handling sensitive data.

## Table of Contents

- [Background](#background)
- [Development](#development)
  - [Step 1: Clone the repository](#step-1-clone-the-repository)
  - [Step 2: Create a branch and develop](#step-2-create-a-branch-and-develop)
  - [Step 3: Make a pull request](#step-3-make-a-pull-request)

## Background

The [Data Driven Life Science](https://www.scilifelab.se/data-driven/) (DDLS) initiative has appointed four [Data Science Nodes](https://www.scilifelab.se/news/ddls-data-science-nodes-to-be-launched/) (DSNs) to serve as database, data and bioinformatics support for data driven research in life science. This repository contains the code for the frontend of a Precision Medicine Portal by the Precision Medicine DSN, which is hosted at [Karolinska Institutet](https://ki.se/en) and [SciLifeLab](https://www.scilifelab.se).

The portal is one of our main projects. Other projects the team has been or is involed

### Step 1: Clone the Repository

#### Git setup

Clone the repository to your machine:

```bash
git clone https://github.com/ScilifelabDataCentre/precision-medicine-portal-frontend.git
```

Fetch changes at any time from this remote:

```bash
git pull upstream dev
```

The project is set up using npm. If you want to run the project locally, install npm and use it to run the available scripts:

## Available Scripts

Note that you need to be in the "react-app" directory. In this directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

You will see that a local development server starts running. You can access the web page by opening a web browser and visiting the URI "localhost:5000". To stop the server press CTRL+C in the terminal.

#### Docker

You can use the provided Dockerfile to build and run a container.

### Step 2: Create a branch and develop

Note that commits need to be signed as per SciLifeLab policy. There are many different ways to sign github commits and how to set it up may vary based on your operating system. An example of how to set it up for MacOS can be seen here:

https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e

To create a new branch and start developing in it:

```bash
git branch my_branch
git checkout my_branch
```

After doing this you can make any changes you want. You must then either add all changed files or specific changed files to your commit:

```bash
git add -A
```

or

```bash
git add my_changed_file
```

You can then commit and push to your branch:

(NOTE: DO NOT FORGET TO SIGN YOUR COMMITS, by policy only signed commits can be merged into the main branches.)

```bash
git commit -S -m "My commit"
git push origin my_branch
```

The code is now in my_branch in the repository, but you it does not get merged into the main branches without being reviewed as a pull request.

### Step 3: Make a pull request

Once you're finished with your edits and they are committed and pushed to your branch, it's time to open a pull request.

You can find full documentation on the [GitHub help website](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests), however in short:

- Visit the dev repository: [https://github.com/ScilifelabDataCentre/precision-medicine-portal-frontend](https://github.com/ScilifelabDataCentre/precision-medicine-portal-frontend)
- Find the branch my_branch that you created and pushed to
- Click the button that reads _"New Pull Request"_
- Add/change title as well as a description of what you've done
- Add reviewers from the organization to review your pull request
- Click Create Pull Request

Once created, a member of the website team will review your changes.
Once approved, they will be merged and deployed.

## How to get help

If in doubt, you can ask for help by emailing [datacentre@scilifelab.se](mailto:datacentre@scilifelab.se).

## Credits

The portal was built by the DDLS Precision Medicine Data Science Node with colleagues at SciLifeLab.

# License

This project is licensed under the terms of the MIT license.

Copyright &copy; 2025 SciLifeLab Data Centre
