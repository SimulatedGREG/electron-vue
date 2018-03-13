# Example of the CSS Grid

```css
.wrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: auto 1fr 1fr;
        grid-template-areas:
        "header  header  header"
        "sidebar content content"
        "footer  footer  footer";
}

.sidebar {
  grid-area: sidebar;
  
}

.content {
  grid-area: content;
  position: relative;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}
```


```html
  <div class="wrapper">
    <div class="header red">Header</div>
    <div class="sidebar blue">Sidebar very big</div>
    <div class="content red">Content
      <br /> The four arrows are inline images inside the content area.
    </div>
    <div class="footer blue">Footer</div>
  </div>
```