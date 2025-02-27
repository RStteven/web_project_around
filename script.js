let profilModal = document.querySelector(".profile__modal");
let profilModalContent = document.querySelector(".profile__modal-content");
let profileModalForm = document.querySelector(".profile__modal-form");
let profilModalCerrar = dicument.querySelector(".prfile__modal-cerrar");

profilModal.onclick = function () {
  profilModalContent.style.display = "block";
};

profilModalCerrar.onclick = function () {
  profilModalContent.style.display = "none";
};
