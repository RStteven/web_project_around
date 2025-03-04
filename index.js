let profileModal = document.querySelector(".profile__modal");
/*let profileModalContent = document.querySelector(".profile__modal-content");*/

let profileModalForm = document.querySelector(".profile__modal-form");
let profileModalCerrar = document.querySelector(".profile__modal-cerrar");
let profileInfoButton = document.querySelector(".profile__info-button");
let profileModalOpen = document.querySelector(".profile__modal-open");
let profileModalInput = document.querySelectorAll(".profile__modal-input");
let profileInputName = document.querySelector(".profile__input-name");
let profileName = document.querySelector(".profile__name");
let profileText = document.querySelector(".profile__text");
let profileGuardarButton = document.querySelector(".profile__guardar-button");

function handleOpenModal() {
  profileModal.classList.add("profile__modal-open");
}

function handleCloseModal() {
  profileModal.classList.remove("profile__modal-open");
}

profileInfoButton.addEventListener("click", handleOpenModal);
profileModalCerrar.addEventListener("click", handleCloseModal);

profileModalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(profileModalInput);
  profileName.textContent = profileModalInput[0].value;
  profileText.textContent = profileModalInput[1].value;
  profileModal.classList.remove("profile__modal-open");
});
