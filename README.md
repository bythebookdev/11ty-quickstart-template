# [11ty quickstart template](https://github.com/bythebookdev/11ty-quickstart-template) of a static website

Use this template of a website to test out Eleventy project deployed on GitHub Pages.

Inspired by [https://github.com/11ty/eleventy-base-blog](https://github.com/11ty/eleventy-base-blog)

This template was created by following 11ty [Get Started](https://www.11ty.dev/docs/) Guide.

## Steps to recreate this website by yourself from scratch
#### Prerequisites:
Make sure you have [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com/) installed.
The following guide assumes you are fluent with [Git](https://www.w3schools.com/git/default.asp) and [bash](https://www.w3schools.com/bash/) commands.
#### On GitHub website, Create a *public* GitHub repo
If you name your public repo `account-name.github.io` using your GitHub account name (personal or organisation), your website URL will look like `https://account-name.github.io`. With any other name (e.g. `your-repo-name`) it will look like a subfolder (`https://account-name.github.io/your-repo-name/`). You can only have one website associated with account name and as many subfolders as you wish.

#### Clone repo from GitHub
Copy your repo URL from GitHub. Execute `git clone`:
```
git clone your-repo-URL-goes-here
```
#### Install and Run Eleventy
```
npm init -y						# Generate `package.json` file, -y flag skips questionnaire
npm pkg set type="module"		# Set usage of ESM instead of CommonJS
npm install @11ty/eleventy 		# Install eleventy and save it to package.json
npx @11ty/eleventy --serve		# Run Eleventy
```
#### Add Content and watch it appear live
Create `index.md` or `index.html` with some content in repo root. Watch it change dynamically in browser on `http://localhost:8080/`. In this case RenderPlugin was added to `eleventy.config.js` and `index.md` created to render README.md on index page.
#### Create `.gitignore` file in repo root with contents:
```
_site/
node_modules/
.cache
```
Nothing is cached right now, but it won't hurt to have .cache folder ignored for later

### Now let us deploy to GitHub pages

#### From [Deploy an Eleventy project to GitHub Pages Mini-Tutorial](https://www.11ty.dev/docs/deployment/#mini-tutorials).
Before first deploy has ever happened we cannot execute steps 1 and 2 of tutorial, because `gh-pages` branch does not exist yet. See [First Deployment with `GITHUB_TOKEN`](https://github.com/peaceiris/actions-gh-pages?tab=readme-ov-file#%EF%B8%8F-first-deployment-with-github_token)

3. Add "build-ghpages" command to your `package.json` scripts section
If your repo name is `account-name.github.io`:
```
"scripts": {
  "build-ghpages": "npx @11ty/eleventy",
}
```
else (case of subfolder)
```
"scripts": {
  "build-ghpages": "npx @11ty/eleventy --pathprefix=/your-repo-name/",
}
```
Consult [Deploy to a subdirectory with a Path Prefix](https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix) if you have absolute URLs in your HTML.

4. Create a new GitHub workflow file in `.github/workflows/deploy-to-ghpages.yml`
Populate this file as advised in mini-tutorial.
#### Make sure your GitHub Personal Access Token has `workflow` permission.
If you have never created a personal access token, look [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). During step 8 (Select the scope) make sure `repo` and `workflow` checkboxes are checked.
#### Make your first commit
```
git config --global core.safecrlf false		# suppress CRLF -> LF warnings
git add .									# add your files to staging area
git commit -m "Initial commit"				# create new commit
git push -u	origin main						# push your local main branch to remote
```
#### Return to [Deploy an Eleventy project to GitHub Pages Mini-Tutorial](https://www.11ty.dev/docs/deployment/#mini-tutorials)
Now we can perform steps 1 and 2

1. Go to GitHub -> repo Settings > Code and Automation -> Pages

2. Set Deploy from a branch. Source branch: `gh-pages`. Source folder: `/ (root)`
#### Make second commit
Trigger deploy again by making more changes (for example adding more content).
#### Enjoy :)