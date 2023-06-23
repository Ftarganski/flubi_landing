---
title: 'Flubi - Landing'
disqus: flubi.co
--- 

Flubi - Landing
===

## Table of Contents

[TOC]

## How to start on the project

If you are a total beginner to this, start here!

1. Configure your SSH Keys.
2. Make a pull from develop (git pull origin develop)
3. Ask a partner and make your .env.develop.local
4. run > yarn install
5. Make sure your enviroment runs on http://localhost:3000/.


## How to manage with git (Git Flow)

1. git checkout develop / On your editor or terminal, go to develop branch
2. git pull origin develop --rebase / Allways run this command (with --rebase flag) before coding to pull last changes on parent branch to your child branch.
3. git checkout -b your_new_branch / Create your branch from develop with the last pull from develop.
4. git add . / Add the files you worked on to the header of your git repo.
5. git commit - 'Feature(nameOfFeature)Description of the feature' / Commit your changes, to make good commit decriptions follow => https://mokkapps.de/blog/how-to-automatically-generate-a-helpful-changelog-from-your-git-commit-messages/#conventional-commits
6. git push origin your_new_branch / push the changes to your branch
7. go to github and make the PULL REQUEST (PR) to be approved by your Team Lead.
8. With the PR merge on develop branch.
9. You can continue using the same branch.

Technical Specifications
---

- Languages - EN/ES - (i18next =>https://www.i18next.com/)
- Images - Next Images as SVG format.
- Routing - Next Routing (mostly static)
- Themes - Configure to have 2 themes (can be with https://www.npmjs.com/package/next-themes), but just use the main.
- Styles - Can be MaterialUI, but free of choise, you can use SASS, SCSS, pure CSS with do it well to, or componente styles would do the magic.

