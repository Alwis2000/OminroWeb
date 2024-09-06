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
