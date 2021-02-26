const btn = document.querySelector(".article__user .user__cta button"),
  mobileBtn = document.querySelector(".mobile__cta"),
  userMobileCta = document.querySelector(".mobile-user .mobile__cta"),
  mobileShare = document.querySelector(".article__details .mobile-share"),
  mobileUser = document.querySelector(".article__details .mobile-user"),
  socialPlatform = document.querySelector(".user__share");

btn.addEventListener("click", () =>
  !socialPlatform.classList.contains("open") ? openToolTip() : closeToolTip()
);

const openToolTip = () => {
  socialPlatform.classList.add("open");
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#fff" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>`;
  btn.style.backgroundColor = "#48556a";
};

const closeToolTip = () => {
  socialPlatform.classList.remove("open");
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>`;
  btn.style.backgroundColor = "#ecf2f8";
};

mobileBtn.addEventListener("click", () => {
  mobileUser.style.display = "flex";
  mobileShare.style.display = "none";
});

userMobileCta.addEventListener("click", () => {
  mobileShare.style.display = "flex";
  mobileUser.style.display = "none";
});
