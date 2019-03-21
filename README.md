# Smooth-Nav
Smooth Page Transitions using beforeunload and load event listeners

JS Package to add CSS based animations for page transitions. Works with IE ;)

### How it works
- uses befroeunload and load event listeners
- accepts tags, classes, ids for any element
- reads through array of items when object is instantiated to create appropriate listeners

### Make it work

- include smoothNav.js in your project
- create animation classes for pages and elements
- use animation attribute on css selector for initial page load to create smoothest experience and add animation classes on beforeunload call
- instantiate object

```
// Here is the syntax to use Smooth Nav

var pageNav = new SmoothNav(
  ["body", "fadeOut"],
  [".section", "slideOut"],
  ["#titleContainer", "fadeUp"],
  ["section", "moveRight"]
);
```

In order for elements to be targeted you need to explicity type the "." and "#" for ids and classes that are being animated.
Tags can be left as is.

Enjoy!
