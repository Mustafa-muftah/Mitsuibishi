let scrollValue = 0;
window.onscroll = () => {
  let navImg = document.getElementById("nav-img"),
    navList = document.getElementById("nav-list");

  if (
    document.body.scrollTop > 128 ||
    document.documentElement.scrollTop > 128
  ) {
    scrollValue = document.documentElement.scrollTop;
    navList.style.display = "none";
    navImg.style.width = "40%";
  } else {
    navList.style.display = "flex";
    navImg.style.width = "100%";
  }
};
