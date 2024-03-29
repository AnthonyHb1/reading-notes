# Version Controls

system that allows you to revisit various versions of a file or a set of files by recording changes. Through version control, one can revert a file or project to a previous version, track modifications and modifying individuals, and compare changes.

## Local Version Control

entails one database on your hard disk that stores changes to files.

## Centralized Version Control

system entails a single server storing all changes and file versions, which can be accessed by various clients. Centralized Version Control System (CVS)

## Distributed Version Control

addresses the major vulnerability of the CVS: the server as a single point of failure. a DVCS allows clients to create mirrored repositories.

## What’s Git??

## Snapshots

Git is a DVCS that stores data in a file system made up of snapshots. Git creates a snapshot of the file and stores a reference to it.

## Local Operations

Git mostly uses on local operation since a bulk of its information are from local resources.

## Tracking Changes

Every single change applied to any file or directory is tracked by Git. And, as the gatekeeper, Git will always detect file corruption or loss of information in transit.

## Loss of Data

Git is set up too greatly minimize the possibility of accidentally lost data. Hence the snapshots, stored. Remember DVCS function

## States

Git has three states Committed-Stored locally, Modified-Changed but not committed to database and Staged-Flagged a file’s changed version to be committed in the next snapshot

## Story about Git…

-roots to the open source software project Linux kernel
-Linus Torvalds, the chief architect of the Linux kernel, began creating Git after the revocation of BitKeeper 02’-05’

## Graphical Clients

-it includes inherent Graphical User Interface (GUI) tools

## Initial Customization

### Configuration of Variables

- An inherent Git tool called git config allows the setting of configuration variables that control aspects of Git’s operation and look.

## Identity Setting

- After installing Git, users should immediately set the user name and email address, which will be used for every Git commit.

## Type the following into Terminal or Command Line:

- git config --global user.name "Jane Smith"

- git config --global user.email "example@email.com"

- To confirm that you have the correct settings, enter the following command:
- git config --global user.name (should return Jane Smith)

- git config --global user.email (should return example@email.com)


## Default Text Editor

- Git will use the system’s default editor–most likely Vim. To configure a different text editor, such as Emacs, type the 
following into your Terminal or ## Command Line:
- $ git config --global core.editor emacs


## Check Settings

- To check settings, use the git config --list command.
- Example:
- $ git config --list

user.name=Jane Smith

user.email=example@email.com

color.status=auto

color.branch=auto

color.interactive=auto



Getting Help
There are three ways to get more information on a particular command, by accessing the manual:
git help command

git command --help

man git-command



Importing
To import an existing project or directory into Git, follow these steps using the Terminal or Command Line:

1. Switch to the target project’s directory Example:$ cd test (cd = change directory)

2. Use the git init command $ git init


At this point, you’ve created a new subdirectory named .git that has the repository files


To start tracking these repository files, perform an initial commit by typing the following:
$ git add *.c
$ git add LICENSE
$ git commit -m “any message here”

Now tracking has commenced, you’re stored.

Cloning
You can also create a copy of an existing Git repository from a particular server by using the clone command with a repository’s URL:
$ git clone https://github.com/test

By cloning, all files are copied and also automatically checks for edited copy of the newest version


To clone a repository into a directory with another name of your choosing, use the following command format$ git clone https://github.com/test mydirectory



Workflow
Local Repository Structure
The local Git repository has three components:

1. Working Directory: The actual files reside here.

2. Index: The area used for staging

3. Head: Points to the most recent commit.

Saving Changes
Tracked
Tracked files can be modified, unmodified, or staged; they were part of the most recent file snapshot.
Untracked
Untracked files were not in the last snapshot and do not currently reside in the staging area.


Check File Status
To determine the state of files, utilize the git status command:
$ git status

Tracking and Staging a New File
Single File
Track one file only by using the following format:
git add filename

All Files
Track all files in a repository by using the following command:
$ git add *

*After using these commands, files are tracked and staged for committing.


After adding a new file called EXAMPLE, you would see information regarding changes to be committed when using the git status command:
$ git status

On branch master

Changes to be committed:

  (use "git reset HEAD ..." to unstage)
new file: EXAMPLE

This information tells us that there are changes to be committed and that the file has been staged.


Committing a File
you should commit the changes and record what you did within the commit message:
$ git commit -m “made change x,y,z”

PUSHING CHANGES
$ git push origin master

*This command pushes changes from the local “master” branch to the remote repository named “origin”.

*For cloned repositories, Git will automatically give the name “origin” to the server from which you cloned and the name “master” to your local repository. However, these names can be changed by the user.



git stash 
is for when your are unprepared to commit to changes

Git stash apply 
Command to retrieve the hidden changes

Remote Repositories
Teams can use remote repositories to push information to and pull data from.

Cloned Repositories
Git will automatically give the name “origin” to the server from which you cloned and the name “master” to your local branch.

Seeing Your Remotes
By running the git remote command, you can view the short names, such as “origin,” of all specified remote handles.
By using git remote -v, you can view all the remote URLs next to their corresponding short names.

$ cd example

$ git remote -v

remote1 https://github.com/remote1/example (fetch)

remote1 https://github.com/remote1/example (push)

remote2 https://github.com/remote2/example (fetch)

remote2 https://github.com/remote2/example (push)

remote3 https://github.com/remote3/example (fetch)

remote3 https://github.com/remote3/example (push)
