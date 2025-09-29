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
Setup & Configuration
    git config --global user.name "Your Name" → Set your username (used in commits).
	git config --global user.email "you@example.com" → Set your email (used in commits).
	git config --list → Show all current configuration settings.
Starting a Repository
	git init → Initialize a new local Git repository in the current folder.
	git clone <repo-url> → Download (clone) an existing repository from GitHub (or other remote).
Basic Workflow
	git status → Show changed files and the current branch.
	git add <file> → Stage a specific file for commit.
	git add . → Stage all changed files for commit.
	git reset <file> → Unstage a file (remove it from staging).
	git commit -m "message" → Save staged changes with a message.
	git log → View commit history.
Branching & Merging
	git branch → List branches in the repo.
	git branch <branch-name> → Create a new branch.
	git checkout <branch-name> → Switch to a branch.
	git checkout -b <branch-name> → Create and switch to a new branch.
	git merge <branch-name> → Merge another branch into the current one.
	git branch -d <branch-name> → Delete a branch (if already merged).
	git branch -D <branch-name> → Force delete a branch.
Remote Repositories
	git remote -v → Show remotes linked to your repo.
	git remote add origin <url> → Connect local repo to a remote.
	git push -u origin <branch> → Push changes to remote branch (first time).
	git push → Push local commits to remote.
	git pull → Fetch and merge changes from remote.
	git fetch → Download changes but don’t merge yet.
Undoing & Fixing
	git diff → Show unstaged changes.
	git diff --staged → Show staged changes.
	git checkout -- <file> → Discard local changes in a file.
	git reset --hard HEAD → Reset repo to last commit (discard all changes).
	git revert <commit-hash> → Undo a commit by creating a new one.
	git stash → Save uncommitted changes temporarily.
	git stash pop → Reapply the stashed changes.
Tags & Releases
	git tag → List all tags.
	git tag <tag-name> → Create a new tag.
	git tag -d <tag-name> → Delete a tag.
	git push origin <tag-name> → Push a tag to remote.
Advanced Commands
Rebase
	git rebase <branch> → Replay your commits on top of another branch.
	git rebase -i HEAD~n → Interactive rebase (squash, reorder, or edit commits).
	git rebase --abort → Cancel a rebase in progress.
	git rebase --continue → Resume rebase after resolving conflicts.
Cherry-pick
	git cherry-pick <commit-hash> → Apply a specific commit from another branch.
Amend
	git commit --amend -m "new message" → Change the last commit message.
	git commit --amend → Add changes to the previous commit.
Reset (Careful!)
	git reset --soft HEAD~1 → Undo last commit, keep changes staged.
	git reset --mixed HEAD~1 → Undo last commit, keep changes unstaged.
	git reset --hard HEAD~1 → Undo last commit and discard changes.
Clean Workspace
	git clean -n → Preview which untracked files will be removed.
	git clean -f → Delete untracked files.
	git clean -fd → Delete untracked files and directories.
Log & History (Advanced)
	git log --oneline → Compact commit history.
	git log --graph --oneline --all → Visualize branch history.
	git blame <file> → Show who changed each line in a file.
	git show <commit-hash> → Show details of a commit.
Worktree
	git worktree add ../new-branch <branch> → Work on multiple branches simultaneously in different folders.
	git worktree list → Show linked working directories.
Collaboration Workflow
Typical workflow with GitHub:
1.	git pull origin main → Get latest changes from main branch.
2.	git checkout -b feature-branch → Create a branch for your work.
3.	git add . → Stage your changes.
4.	git commit -m "Add new feature" → Commit your changes.
5.	git push origin feature-branch → Push to GitHub.
6.	Open a Pull Request on GitHub.
