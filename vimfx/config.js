// // E.g.
// vimfx.set('hints.chars', 'abcdefghijklmnopqrstuvw xyz')
// vimfx.addCommand({
//   name: 'hello',
//   description: 'Log Hello World',
// }, () => {
//   console.log('Hello World!')
// })
// // Optional:
// vimfx.set('custom.mode.normal.hello', 'gö')

vimfx.addCommand({
  name: 'google_cache',
  description: 'Open Google Cache for current webpage',
}, ({vim}) => {
let uri = vim.window.gBrowser.selectedBrowser.currentURI.spec;
vim.window.gBrowser.loadURI("https://webcache.googleusercontent.com/search?q=cache:" + uri);
});