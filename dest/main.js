const options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: "auto",
  groupCells: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
  initialIndex: 0,
  nextButton: ".next-button",
};

const $carousel = $("[data-carousel]").flickity(options);
const $slideContent = $(".slider__item");

function advanceToNextSlide() {
  $carousel.flickity("next", true, false);
}

$carousel.on("select", function () {
  // Remove 'mask' class from all slides
  $slideContent.removeClass("mask");

  // Add 'mask' class after a delay of 4 seconds
  setTimeout(function () {
    $slideContent.addClass("mask");
  }, 30000);
});

$carousel.on("dragStart", function (event, pointer, moveVector) {
  // Check the direction of the drag
  const index =
    moveVector.x > 0
      ? $carousel.flickity("selectedIndex") + 1 // direction right
      : $carousel.flickity("selectedIndex") - 1; // direction left

  // Remove 'mask' class from the targeted slide
  $slideContent.eq(index).removeClass("mask");
});

// Initial 'mask' class addition after a delay of 4 seconds
setTimeout(function () {
  $slideContent.addClass("mask");
}, 30000);

// Automatically advance to the next slide every 4 seconds
setInterval(advanceToNextSlide, 30000);

// Carousel Scroll Progress Bar
const progressBar = document.querySelector(".carousel__progress div");

$carousel.on("scroll", function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + "%";
});










Handletab = () => {
  const tabs = document.querySelectorAll(".tab"),
    newsItem = document.querySelectorAll(
      ".course__item-wrap .course__item .course__table"
    );
  tabs.forEach((item) => {
    item.addEventListener("click", () => {
      tabs.forEach((btn) => btn.classList.remove("active"));
      item.classList.add("active");

      const tabNumber = item.getAttribute("data-tabs");
      newsItem.forEach((wrapper) => wrapper.classList.remove("active"));

      const selectedNews = document.querySelector(`.new__item-${tabNumber}`);
      selectedNews.classList.add("active");
    });
  });
};
Handletab();

HandleTag = () => {
  const changeTag = (index) => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => tag.classList.remove("active"));
    tags[index].classList.add("active");
  };

  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag, index) => {
    tag.addEventListener("click", () => {
      changeTag(index);
    });
  });
};
HandleTag();

//======================btn__search=========================
HandleSearch = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchModal = document.querySelector(".desktop__search-modal");

    searchInput.addEventListener("focus", () => {
      searchModal.classList.add("active");
    });

    searchInput.addEventListener("blur", () => {
      searchModal.classList.remove("active");
    });
  });
};
HandleSearch();