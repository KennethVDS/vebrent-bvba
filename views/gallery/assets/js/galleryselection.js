document.getElementById('mediaLinkList').addEventListener('click', function () {
    toggle(document.querySelectorAll('#main'));
});

function toggle (elements, specifiedDisplay) {
  var element, index;
  var selectedGallery = document.getElementById("main");
  var selectedButton = document.getElementById("mediaLinkList");

  elements = elements.length ? elements : [elements];
  for (index = 0; index < elements.length; index++) {
    element = elements[index];

    if (isElementHidden(element)) {
      element.style.display = '';

      // If the element is still hidden after removing the inline display
      if (selectedButton.id === selectedGallery.class) {
        element.style.display = specifiedDisplay || 'flex';
      }
    } else {
      element.style.display = 'none';
    }
  }
  function isElementHidden (element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }
}