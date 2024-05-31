// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var images = document.getElementsByClassName('product-img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = evt.target.src;
        captionText.innerHTML = evt.target.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the image
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
