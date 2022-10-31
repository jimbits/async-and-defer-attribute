# Async And Defer Attributes
In modern websites, scripts often have large file sizes sometimes much more than HTML document. This means that the script take longer to download and the time to process the script is often longer.  

When the browser loads HTML and comes across a ```script tag```, it can’t continue building the DOM. It must execute the script right away. 

```html 
<script>...</script>
```

This is also true for external javascript resources loaded using the script tags src attribute. The browser must wait for the script to download, then execute the script right away. Once the script finishes execution, only then can it process the rest of the page. 

```html
<script src="..."></script>
```

__That leads to two important issues:__
1. Scripts can’t see DOM elements below them, so they can’t add event handlers etc.
2. If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:


## Defer Attribute  
The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
```html

```


## Async Attribute
When the async attribute is used, JavaScript is downloaded as soon as the script is encountered and after the download, it will be executed asynchronously (parallelly) along with HTML parsing.