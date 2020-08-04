/*
These two functions are taken from:
https://jekyllcodex.org/without-plugin/new-window-fix/
Authored by J.H. van der Schee
*/

function external_new_window()  // Open external links in a new window
{
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}

function pdf_new_window()  // Open PDF links in a new window
{
  if (!document.getElementsByTagName) return false;
  var links = document.getElementsByTagName("a");
  for (var eleLink = 0; eleLink < links.length; eleLink++) {
    if (links[eleLink].href.indexOf(".pdf") !== -1) {
      links[eleLink].onclick =
        function() {
          window.open(this.href);
          return false;
        }
    }
  }
}

external_new_window();
pdf_new_window();

/*
This function is modified from:
https://stackoverflow.com/a/19531814
*/

function wrap_tables() {
  for (var tbls = document.getElementsByTagName("table"), t = 0; t < tbls.length; t++) {
    var tbl = tbls[t]
    var parent = tbl.parentNode;
    var wrapper = document.createElement("div");
    wrapper.style.overflowX = "auto";
    wrapper.style.webkitOverflowScrolling = "touch";
    parent.insertBefore(wrapper, tbl);
    wrapper.appendChild(tbl);
  }
}

wrap_tables();
