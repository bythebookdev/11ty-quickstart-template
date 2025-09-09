# [11ty quickstart template](https://github.com/bythebookdev/11ty-quickstart-template) of a static website

Use this template of a website to test out Eleventy project deployed on GitHub Pages.

Inspired by [https://github.com/11ty/eleventy-base-blog](https://github.com/11ty/eleventy-base-blog)

This template was created by following 11ty [Get Started](https://www.11ty.dev/docs/) Guide.

## Steps to recreate this website by yourself from scratch
#### Prerequisites:
Make sure you have [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com/) installed.

On Windows, Git for Windows installs for you Git GUI and Git Bash. You can launch Git Bash from context menu (right-click) in any folder on your PC. (On Windows 11 choose 'Show more options').
#### On GitHub website, Create a *public* GitHub repo
If you name your public repo `account-name.github.io` using your GitHub account name (personal or organisation), your website URL will look like `https://account-name.github.io`. With any other name (e.g. `my-repo-name`) it will look like a subfolder (`https://account-name.github.io/my-repo-name`). You can only have one website associated with your account name and as many subfolders as you wish.

Your newly created GitHub repo is empty. GitHub shows you the URL to it under Quick Setup section (it is different from your future website URL).

Copy your repo URL from GitHub.

Navigate to some place on your PC where you want your repo (its local copy) to appear.

#### Clone repo from GitHub
Open Git Bash and execute `git clone` providing your repo URL:
```
git clone your-repo-URL-goes-here
```
Navigate inside the appeared folder named after your repo. 

To see all files and folders inside any folder use [`ls`](https://www.w3schools.com/bash/bash_ls.php) command and navigate inside any folder using [`cd my-folder-name`](https://www.w3schools.com/bash/bash_cd.php).
#### Install Eleventy
 
Generate `package.json` file, -y flag skips questionnaire
```
npm init -y 
```
Set usage of ESM instead of CommonJS
```
npm pkg set type="module"
```
Install eleventy and save it to package.json
```
npm install @11ty/eleventy
```
#### Run Eleventy
```
npx @11ty/eleventy --serve
```
#### Add Content and watch it appear live
Create `index.md` or `index.html` with some content in repo root. Watch it change dynamically in browser on `http://localhost:8080/`. In this case RenderPlugin was added to `.eleventy.config.js` and `index.md` created to render README.md on index page.
#### Create `.gitignore` file in repo root with contents:
```
_site/
node_modules/
.cache
```
Nothing is cached right now, but it won't hurt to have .cache folder ignored
#### Create GitHub workflow file for deploying on GitHub pages
In repo root create `.github/workflows/deploy-to-ghpages.yml` file and populate it with content as shown [here (Step 4)](https://www.11ty.dev/docs/deployment/#deploy-an-eleventy-project-to-git-hub-pages).
#### Make sure your GitHub Personal Access Token has `workflow` permission.
If you have never created a personal access token, look [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). During step 8 (Select the scope) check `repo` and `workflow` checkboxes.
#### Make your first commit
```
git config --global core.safecrlf false		# suppress CRLF -> LF warnings
git add .									# add your files to staging area
git commit -m "Initial commit"				# create new commit
git push -u origin main						# push your local main branch to remote
```
If your Git Bash or other terminal is busy now serving your website, you can open a new one or terminate current process (In Git Bash press ctrl+C).

