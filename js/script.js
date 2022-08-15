'use strict';

//
document.querySelector('.team-wrapper').addEventListener('click', function (e) {
  if (e.target.classList.contains('story-btn')) {
    e.target.classList.toggle('change');
    e.target.nextElementSibling.classList.toggle('change');
  }
});
