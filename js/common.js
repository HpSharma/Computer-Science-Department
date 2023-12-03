
// Set Currect page in Nav/Menu Bar
function setCurrentPage() {
  var path = window.location.pathname;
  // Extract the page name from the pathname
  var pageName = path.split('/').filter(Boolean).pop() || 'index.html';
  let element = null;
  switch (pageName) {
    case "description.html":
      element = document.getElementById("description");
      break;
    case "TA.html":
      element = document.getElementById("ta");
      break;
    case "GPA.html":
      element = document.getElementById("gpa");
      break;
    case "index.html":
    default:
      element = document.getElementById("home");
      break;
  }

  if (element) {
    element.classList.add('active');
  } else {
    document.getElementById("home").classList.add('active');
  }
}

// Fetch and insert content from header HTML file
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementsByTagName('header')[0].innerHTML = html;
    setCurrentPage();
  });


// Fetch and insert content from footer HTML file
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementsByTagName('footer')[0].innerHTML = html;
  });