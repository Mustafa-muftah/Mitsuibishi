const originalScrollLimit = 128;
let scrollLimitValue = originalScrollLimit;
window.onscroll = () => {
  let navImg = document.getElementById("nav-img"),
    navList = document.getElementById("nav-list");

  if (
    document.body.scrollTop > scrollLimitValue ||
    document.documentElement.scrollTop > scrollLimitValue
  ) {
    navList.style.display = "none";
    navImg.style.width = "40%";
    scrollLimitValue = 80;
  } else {
    navList.style.display = "flex";
    navImg.style.width = "100%";
    scrollLimitValue = originalScrollLimit;
  }
};
