// Wait for the DOM content to load
window.addEventListener('DOMContentLoaded', (event) => {
  // Play the audio when the page loads
 

  // Select all the elements we want to animate
  const str1 = document.getElementById('Str1');
  const leftBorder = document.querySelector('.st-bound-left');
  const rightBorder = document.querySelector('.st-bound-right');
  const fullBorder = document.querySelector('.st-bound-full');
  
  // GSAP Animations
  gsap.fromTo(str1, 
    { x: -455, opacity: 0 },  // Start position (from left with opacity 0)
    { x: 0, opacity: 1, duration: 2.5, ease: "power3.out" }
  );

  gsap.from(leftBorder, {
      x: 200,  // Animate the left border from left
      opacity: 0,
      duration: 7.30,
      ease: "power3.out"
  });

  gsap.from(rightBorder, {
      x: -200,  // Animate the right border from right
      opacity: 0,
      duration: 7.30,
      ease: "power3.out"
  });

  // gsap.from(fullBorder, {
  //     width: 4, // Animate the width of the full border
  //     duration: 6,
  //     ease: "power2.out"
  // });

  // Optionally, you can animate the text "Things" with a specific delay
  gsap.from("#Things", {
      opacity: 0,
      y: 50,
      delay: 2, // Start after 2 seconds
      duration: 3.95,
      ease: "bounce.out"
  });
});
