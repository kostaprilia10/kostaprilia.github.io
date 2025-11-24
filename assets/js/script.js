var swiper = new Swiper(".mySwiperPopuler", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".bx-chevron-right-circle",
        prevEl: ".bx-chevron-left-circle",
    },
});

document.getElementById("chat-toggle").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("main-kos").scrollIntoView({
      behavior: "smooth"
    });
  });

document.querySelectorAll('.open-detail').forEach(item => {
    item.addEventListener('click', function () {
      document.getElementById('detail-title').innerText = this.dataset.title;
      document.getElementById('detail-location').innerText = this.dataset.location;
      document.getElementById('detail-img').src = this.dataset.img;
    });
  });


  