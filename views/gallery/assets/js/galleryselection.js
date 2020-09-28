function gallerySelector() {
    var selectedGallery = document.getElementById("main");
    var selectedList = document.getElementById("mediaLinkList");
    
    if (selectedGallery.class === selectedList.value) {
        selectedGallery.style.display = "block";
    } else {
        selectedGallery.style.display = "none";
    }
}