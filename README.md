<div>
  <h1 align="center">Github Widget</h1>
  <p align="center">
    <a href="https://www.youtube.com/channel/UCsIaU94p647veKr7sy12wmA">
      <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube">
    </a>
    <a href="https://discord.gg/SXng95f">
      <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord">
    </a> 
    <a href="https://twitter.com/zseni10">
      <img src="https://img.shields.io/badge/Twitter-55ADEE?style=for-the-badge&logo=Twitter&logoColor=white" alt="Twitter">
    </a> 
  </p>
</div>

## About

Forked from: [surbhioberoi/github-widget](https://github.com/surbhioberoi/github-widget)

Changes:
- Updated the css to incorporate github theme colors.
- Added option to specify how many repos it displays.
- Can use the Repo's gh-pages in your iframe.

## How to use

- **Inline DOM manipulation:** <details><summary>Expand</summary>
  Copy paste this code in your HTML
  ```html
  <div class="github-widget" data-username="github" data-toprepos="3"></div>
  <div class="github-widget" data-username="Zseni051" data-toprepos="4"></div>
  <script src="https://Zseni051.github.io/Github-Widget/githubwidget.js"></script>
  ```
</details>

- **iframe:** <details><summary>Expand</summary>
  1. Create a new html file and use the *Inline DOM manipulation* method shown above.
  2. Link your new html file into your iframe.
  <br>Example:
  ```html
  <iframe src="github-widget/widget.html" width="330" height="515" scrolling="no" allowtransparency="true" frameborder="0"     sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
  ```
</details>

- **iframe_2:** *(Using this repo's gh-pages)* <details><summary>Expand</summary>
  Copy paste this code in your HTML
  ```html
  <iframe src="https://Zseni051.github.io/Github-Widget/#/?username=Zseni051&toprepos=4" width="330" height="515" scrolling="no" allowtransparency="true" frameborder="0"     sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
  ```
  Options:
  - `username=:username` replace `:username` with your GitHub username
  - `toprepos=:number` replace `:number` with number of repos you want to list
  - `style=:styles` replace `:styles` with your own styles
  - `css=:csslink` replace `:csslink` with an external css link | ***Must be the last paramater***
</details>

## Example Result:
**Example Usage:**
- https://zseni051.github.io/Github-Widget/Example/

**ImagePreview:**
<br>[![Zseni051 Example](https://raw.githubusercontent.com/Zseni051/Github-Widget/main/Example1.png)](https://github.com/Zseni051)

 
 ## To Do List:
 - [ ] Add a Scroll bar
 - [ ] Option to remove the pfp section
 
 
