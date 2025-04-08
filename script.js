let dragged = null;

document.querySelectorAll('.image').forEach(div => {
  div.addEventListener('dragstart', (e) => {
    dragged = e.target;
    e.target.classList.add('selected');
  });

  div.addEventListener('dragend', (e) => {
    e.target.classList.remove('selected');
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (dragged !== e.target) {
      const draggedBg = getComputedStyle(dragged).backgroundImage;
      const targetBg = getComputedStyle(e.target).backgroundImage;

      dragged.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;
    }
  });
});
