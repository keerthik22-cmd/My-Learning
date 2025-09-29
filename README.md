# My-Learning
A personal repository to practice and document my Git journey. Contains exercises, examples, and workflows to understand version control, branching, merging, and collaboration using Git. Ideal for tracking progress and revisiting Git concepts anytime.
## Built With
- Node.js
- Express.js
- MongoDB
- JavaScript
- Html
- css
### Git Commands Cheat Sheet
This document lists commonly used Git commands with short descriptions for quick reference. It covers both basic and advanced workflows.
#### Setup & Configuration
•	git config --global user.name "Your Name" → Set your username (used in commits).
•	git config --global user.email "you@example.com" → Set your email (used in commits).
•	git config --list → Show all current configuration settings.
##### Starting a Repository
•	git init → Initialize a new local Git repository in the current folder.
•	git clone <repo-url> → Download (clone) an existing repository from GitHub (or other remote).
###### Basic Workflow
•	git status → Show changed files and the current branch.
•	git add <file> → Stage a specific file for commit.
•	git add . → Stage all changed files for commit.
•	git reset <file> → Unstage a file (remove it from staging).
•	git commit -m "message" → Save staged changes with a message.
•	git log → View commit history.
###### Branching & Merging
•	git branch → List branches in the repo.
•	git branch <branch-name> → Create a new branch.
•	git checkout <branch-name> → Switch to a branch.
•	git checkout -b <branch-name> → Create and switch to a new branch.
•	git merge <branch-name> → Merge another branch into the current one.
•	git branch -d <branch-name> → Delete a branch (if already merged).
•	git branch -D <branch-name> → Force delete a branch.
###### Remote Repositories
•	git remote -v → Show remotes linked to your repo.
•	git remote add origin <url> → Connect local repo to a remote.
•	git push -u origin <branch> → Push changes to remote branch (first time).
•	git push → Push local commits to remote.
•	git pull → Fetch and merge changes from remote.
•	git fetch → Download changes but don’t merge yet.
###### Undoing & Fixing
•	git diff → Show unstaged changes.
•	git diff --staged → Show staged changes.
•	git checkout -- <file> → Discard local changes in a file.
•	git reset --hard HEAD → Reset repo to last commit (discard all changes).
•	git revert <commit-hash> → Undo a commit by creating a new one.
•	git stash → Save uncommitted changes temporarily.
•	git stash pop → Reapply the stashed changes.
###### Tags & Releases
•	git tag → List all tags.
•	git tag <tag-name> → Create a new tag.
•	git tag -d <tag-name> → Delete a tag.
•	git push origin <tag-name> → Push a tag to remote.


