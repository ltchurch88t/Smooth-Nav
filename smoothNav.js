class SmoothNav {
  
  constructor(...elements) {

    var tags = new Array();
    var ids = new Array();
    var classes = new Array();
    this.tags = tags;
    this.ids = ids;
    this.classes = classes;

    var parsedString = "";

    for (var i = 0; i < elements.length; i++) {

      var element = elements[i];
      if (element[0].charAt(0).match('.*[a-z].*')) {

        tags.push([element[0], element[1]]);

      } else if (element[0].charAt(0).match('\.')) {
 
        parsedString = removeFirstChar(element[0]);
        classes.push([parsedString, element[1]]);

      } else if (element[0].charAt(0).match('#')) {

        parsedString = removeFirstChar(element[0]);
        ids.push([parsedString, element[1]]);

      }

    }

    function removeFirstChar(input) {

      while(input.charAt(0) === '0') {
       input = input.substr(1);
      }

      return input;

    }

    function init() {

      //function call to activate transitions
      smoothTags();
      smoothClasses();
      smoothIds();
    }

    function smoothClasses() {

      if (classes.length > 0) {
        for (var k = 0; k < classes.length; k++) {
          addLoadClasses(classes[k][0], classes[k][1]);
          addUnloadClasses(classes[k][0], classes[k][1]);
        }
      }

    }

    function smoothIds() {

      if (ids.length > 0) {
        for (var k = 0; k < ids.length; k++) {
          addLoadIds(ids[k][0], ids[k][1]);
          addUnloadIds(ids[k][0], ids[k][1]);
        }
      }

    }

    function smoothTags() {

      if (tags.length > 0) { for (var k = 0; k < tags.length; k++) {
          addLoadTags(tags[k][0], tags[k][1]);
          addUnloadTags(tags[k][0], tags[k][1]);
        }
      }

    }

    function addUnloadClasses(itemClass, className) {
      window.addEventListener('beforeunload', (event) => {
        event.preventDefault();

        var items = document.getElementsByClassName(itemClass);
        for (var i = 0; i < items.length; i++) {
          items[i].classList.add(className);
        }

      });
    }

    function addLoadClasses(itemClass, className) {
      window.addEventListener('load', (event) => {
        event.preventDefault();

        var items = document.getElementsByClassName(itemClass);
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove(className);
        }

      });
    }

    function addUnloadTags(tag, className) {
      window.addEventListener('beforeunload', (event) => {
        event.preventDefault();

        var items = document.getElementsByTagName(tag);
        for (var i = 0; i < items.length; i++) {
          items[i].classList.add(className);
        }

      });
    }

    function addLoadTags(tag, className) {
      window.addEventListener('load', (event) => {
        event.preventDefault();

        var items = document.getElementsByTagName(tag);
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove(className);
        }

      });
    }

    function addUnloadIds(id, className) {
      window.addEventListener('beforeunload', (event) => {
        event.preventDefault();

        var item = document.getElementById(id);
        item.classList.add(className);

      });
    }

    function addLoadIds(id, className) {
      // Add event listener for ids
      window.addEventListener('load', (event) => {
        event.preventDefault();

        var item = document.getElementById(id);
        item.classList.remove(className);

      });
    }

    init();
  }
}
