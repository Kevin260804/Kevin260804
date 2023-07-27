// Fade in projects on scroll
const projects = document.querySelectorAll('.project'); 

window.addEventListener('scroll', () => {
  projects.forEach(project => {
    if(isInViewport(project)) {
      project.classList.add('active');
    }
  });
})

function isInViewport(el) {
  // Viewport logic
}


// Slide in section titles
const sectionTitles = document.querySelectorAll('section h2');

sectionTitles.forEach(title => {
  title.style.transform = 'translateX(-100%)';
  
  new Waypoint({
    element: title,
    handler: function() {  
      title.classList.add('active');
    }
  })
})


// Scale buttons on hover 
const buttons = document.querySelectorAll('form button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
  })
  
  button.addEventListener('mouseout', () => {  
    button.style.transform = 'scale(1)';
  })
})