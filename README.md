# lightbox
A CSS based lightbox plugin

View a <a href="http://wattydev.com/projects/lightbox/?lb=">Live Demo here</a>.

## Support
Lightbox is tested in Chrome, FireFox, Safari 5+, and IE 7+. Include fallback .css and fallback.jquery.js to support IE7 and IE8. IE7 and IE8 support as well as state management require jQUery. As is, the plugin should support multiple lightboxes, and linking from one lightbox to another (untested).

## Methodology
Lightbox uses hidden checkboxes and the CSS pseud selector :checked to create a lightbox without the use of javascript. Optional JavaScript is included to add support for older browsers that do not support the :checked pseudo element. Optional JavaScript is also included to add state management functionality.

### State Management
The state.js file uses url queries to keep track of what lightbox is currently open. This allows for linking to a lightbox, and for maintaining the users state should he/she reload or bookmark the page.

## Installation
### Markup
Use index.html as an example of how the html markup should be. The id used for the checkbox can be whatever you like as long ast eh "for" attribute in the labels coorespond.

### Fallback
Use conditional html tags to include the fallback.jquery.js and fallback.css files for IE8 and IE7/ I keep the conditional tags seperate because I have had issues with using the IE lt 9 tag in the past.

### State Management
Include the state.js file for state management.

### Modifications
See the style.css file for styling of the lightbox itself. See the fallback.css file for styling in IE7 or IE8.