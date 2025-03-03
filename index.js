let profileModal = document.querySelector(".profile__modal");
/*let profileModalContent = document.querySelector(".profile__modal-content");
let profileModalForm = document.querySelector(".profile__modal-form");*/
let profileModalCerrar = document.querySelector(".profile__modal-cerrar");
let profileInfoButton = document.querySelector(".profile__info-button");
let profileModalOpen = document.querySelector(".profile__modal-open");

profileInfoButton.addEventListener("click", function () {
  profileModal.classList.add("profile__modal-open");
});

profileModalCerrar.addEventListener("click", function () {
  profileModal.classList.remove("profile__modal-open");
});
