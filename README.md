# FirefoxSearchEnginePlugins
Steps to add new search engines into Firefox through XML files:
1. Open about:config and set `devtools.chrome.enabled` to `true`;
2. Press `Ctrl (Command) + Shift + J` to open **Browser Console**;
3. Execute following code (use your prefered search engine XML links):
```javascript
Services.search.addEngine("https://raw.githubusercontent.com/YandLiu/FirefoxSearchEnginePlugins/master/google-images.xml", null, null, false);
```
