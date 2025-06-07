     var modal = document.getElementById("about");

// Get the button that opens the modal
var btn = document.getElementById("openAbout");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(document).ready(function() {
    const $cursor = $('#circularcursor');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.25; // Lower is slower/smoother
  
    $(document).on('mousemove', function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  
    function animate() {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
  
      $cursor.css({
        left: currentX + 'px',
        top: currentY + 'px'
      });
  
      requestAnimationFrame(animate);
    }
  
    animate();
  });

$(document).ready(function () {
  $('.toggle-dropdown').click(function () {
    $(this).siblings('.dropdown').slideToggle(200);
    // Optional: close others
    $('.dropdown').not($(this).siblings('.dropdown')).slideUp();
  });

  // Optional: close if clicked outside
  $(document).click(function (e) {
    if (!$(e.target).closest('.nav-group').length) {
      $('.dropdown').slideUp();
    }
  });
});

function wrapWords(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const words = node.textContent.trim().split(/\s+/);
    const wrappedWords = words.map(word => {
      return `<span>${word}</span>`;
    }).join(' ');

    const temp = document.createElement("span");
    temp.innerHTML = wrappedWords;
    node.replaceWith(...temp.childNodes);
  } else if (
    node.nodeType === Node.ELEMENT_NODE &&
    node.tagName !== "A" // skip <a> tags completely
  ) {
    Array.from(node.childNodes).forEach(wrapWords);
  }
}

const para = document.getElementById("my-paragraph");
wrapWords(para);

// After wrapping, select all spans inside #my-paragraph
const spans = para.querySelectorAll("span");

// Parameters for crookedness
const totalSpans = spans.length;
const countToTransform = Math.max(5, Math.floor(totalSpans * 0.3));

function getRandomRotation(maxDegree = 5) {
  return (Math.random() * 2 - 1) * maxDegree; // -maxDegree to +maxDegree
}

// Pick unique random indexes for spans to transform
const indexes = new Set();
while (indexes.size < countToTransform) {
  indexes.add(Math.floor(Math.random() * totalSpans));
}

// Apply random rotation to selected spans
indexes.forEach(i => {
  spans[i].style.display = "inline-block"; // ensure transform works
  spans[i].style.transform = `rotate(${getRandomRotation()}deg)`;
});
