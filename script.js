let dragged = null;

document.querySelectorAll('.image').forEach(div => {
  // When dragging starts
  div.addEventListener('dragstart', (e) => {
    dragged = e.target;
    e.target.classList.add('selected');
  });

  // When dragging ends
  div.addEventListener('dragend', (e) => {
    e.target.classList.remove('selected');
  });

  // Allow drop by preventing default behavior
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // On drop, swap the background images
  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (dragged !== e.target) {
      const draggedBg = dragged.style.backgroundImage;
      dragged.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedBg;
    }
  });
});
