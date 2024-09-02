function openPage(evt, page) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  pagecontent = document.getElementsByClassName('pagecontent');
  for (i = 0; i < pagecontent.length; i++) {
    pagecontent[i].style.display = 'none';
  }

  // pagelinks = document.getElementsByClassName('pagelinks');
  // for (i = 0; i < pagelinks.length; i++) {
  //   pagelinks[i].className = pagelinks[i].className.replace(' active', '');
  // }

  // Get all elements with class="tablinks" and remove the class "active"
  // tablinks = document.getElementsByClassName("tablinks");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].className = tablinks[i].className.replace(" active", "");
  // }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(page).style.display = 'flex';
  // evt.currentTarget.className += ' active';
}

// Add event listener
document.addEventListener('mousemove', parallax);
// parallax();

function parallaxFix() {
  document.getElementById('Home').style.setProperty('--x', '50%');
  document.getElementById('Home').style.setProperty('--y', '50%');
}

// Magic happens here
function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${50 - (_mouseX - _w) * 0.015}% ${
    50 - (_mouseY - _h) * 0.0075
  }%`;
  let _depth2 = `${50 - (_mouseX - _w) * 0.0005}% ${
    50 - (_mouseY - _h) * 0.001
  }%`;

  document.getElementById('Home').style.setProperty('--x', `${_depth1}`);
  document.getElementById('Home').style.setProperty('--y', `${_depth2}`);

  // console.log(getComputedStyle(document.body).getPropertyValue('--x'));
}
