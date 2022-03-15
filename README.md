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

## How to use

### iframe:

Copy paste this code in your HTML
```html
<iframe src="https://Zseni051.github.io/Github-Widget/#/?username=Zseni051&toprepos=4" width="330" height="515" scrolling="no" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
```
Options:
  - `username=:username` replace `:username` with your GitHub username
  - `toprepos=:number` replace `:number` with number of repos you want to list | ***10 is max, Default is 3 if left blank***
  - `style=:styles` replace `:styles` with your own styles
  - `css=:csslink` replace `:csslink` with an external css link | ***Must be the last paramater***

### Inline DOM manipulation:

Copy paste this code in your HTML
```html
<div class="github-widget" data-username="github" data-toprepos="3"></div>
<div class="github-widget" data-username="Zseni051" data-toprepos="4"></div>
<script src="https://Zseni051.github.io/Github-Widget/githubwidget.js"></script>
```

## Example:
 [![Zseni051 Example](https://raw.githubusercontent.com/Zseni051/-Github-Widget/main/Example1.png)](https://github.com/Zseni051)
 
 ## To Do List:
 - [ ] Find out if this is the proper method of doing things
 
 
