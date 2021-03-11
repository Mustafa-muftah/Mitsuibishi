window.onscroll = (e) => {
  let navImg = document.getElementById("nav-img"),
    navList = document.getElementById("nav-list");
  if (window.pageYOffset > 200) {
    navList.style.display = "none";
    navImg.style.width = "40%";
  } else {
    navList.style.display = "flex";
    navImg.style.width = "100%";
  }
};
