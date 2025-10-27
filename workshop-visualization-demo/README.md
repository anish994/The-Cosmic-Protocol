### Project Structure

```
my-mini-demo-project/
│
├── index.html
├── styles/
│   └── styles.css
├── scripts/
│   └── script.js
└── images/
    └── logo.png
```

### File Contents

1. **index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Mini Demo Project</title>
    <link rel="stylesheet" href="styles/styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Mini Demo Project</h1>
        <img src="images/logo.png" alt="Logo" id="logo">
    </header>
    <main>
        <p>This is a simple demo project to visualize the structure of an HTML project.</p>
        <button id="clickMe">Click Me!</button>
    </main>
    <footer>
        <p>&copy; 2023 My Mini Demo Project</p>
    </footer>
    <script src="scripts/script.js"></script>
</body>
</html>
```

2. **styles/styles.css**

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #35424a;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
}

main {
    padding: 20px;
}

footer {
    text-align: center;
    padding: 10px 0;
    background: #35424a;
    color: #ffffff;
    position: relative;
    bottom: 0;
    width: 100%;
}
```

3. **scripts/script.js**

```javascript
document.getElementById('clickMe').addEventListener('click', function() {
    alert('Button clicked!');
});
```

4. **images/logo.png**

You can use any image for the logo. For this demo, you can create a simple placeholder image or download one from the internet.

### How to Run the Project

1. Create a folder named `my-mini-demo-project`.
2. Inside this folder, create the subfolders `styles`, `scripts`, and `images`.
3. Create the files `index.html`, `styles.css`, and `script.js` with the provided content.
4. Place an image named `logo.png` in the `images` folder.
5. Open `index.html` in a web browser to see the project in action.

This structure provides a clear separation of concerns, making it easier to manage styles, scripts, and images in a web project.