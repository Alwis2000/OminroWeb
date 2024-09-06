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

const button = document.getElementsByClassName('navButton')[0];

let Revealed = true;

function RevealContext() {
  mobileSetup = document.getElementsByClassName('mobileSelection')[0];
  mobileSetup.classList.add('clicked');
  // navButton.setAttribute('data-clicked', 'true');

  Revealed = !Revealed;
  console.log(Revealed);
  if (Revealed) {
    mobileSetup = document.getElementsByClassName('mobileSelection')[0];
    mobileSetup.classList.remove('clicked');
  }
}
