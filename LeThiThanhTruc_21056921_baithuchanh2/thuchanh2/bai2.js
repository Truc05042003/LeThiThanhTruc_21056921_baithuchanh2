var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');
var currentIndex = 0;

function showGallery() {
    if (currentIndex === 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    if (currentIndex === images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        showGallery();
        gallery.classList.add('show');
    });
});

close.addEventListener('click', function() {
    gallery.classList.remove('show');
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        gallery.classList.remove('show');
    }
});

prev.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
});

next.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Thay đổi số 2000 thành thời gian bạn muốn hiển thị mỗi ảnh (miligiây)
}
