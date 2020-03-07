# Software Engineering Project

# Setup
Install NodeJS and NPM. If you want the heroku CLI tool you should install that for your system.
If you want persistent storage while testing, install MongoDB.
1. Clone this repo.
2. Run `npm install` to install packages
3. You can run the system with `npm start`.
4. You can run it as Heroku will with `heroku local web` if you have the Heroku CLI tool installed.

# Pushing to Heroku
1. Add the heroku remote: `git remote add heroku https://git.heroku.com/young-shelf-19674.git`
2. Create a new commit. If you amend a previous commit or don't commit, Heroku won't properly build the project.
3. Push the commit: `git push heroku YOUR_BRANCH:master`

# Project Structure
Heroku wants the angular stuff to be at the project root, so that's where it is.
The backend folder, `/backend`, contains (right now) `/api` and `/models` folders.
The former is where actual functionality is implemented.
The latter is where database schema can be defined.
