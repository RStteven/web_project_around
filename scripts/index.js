const profileModal = document.querySelector(".profile__modal");
const profileModalForm = document.querySelector(".profile__modal-form");
const profileModalCerrar = document.querySelector(".profile__modal-cerrar");
const profileInfoButton = document.querySelector(".profile__info-button");
const profileModalOpen = document.querySelector(".profile__modal-open");
const profileModalInput = document.querySelectorAll(".profile__modal-input");
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");

function handleOpenModal() {
  profileModalInput[0].value = profileName.textContent;
  profileModalInput[1].value = profileText.textContent;
  profileModal.classList.add("profile__modal-open");
}

function handleCloseModal() {
  profileModal.classList.remove("profile__modal-open");
}

profileInfoButton.addEventListener("click", handleOpenModal);
profileModalCerrar.addEventListener("click", handleCloseModal);

profileModalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = profileModalInput[0].value;
  profileText.textContent = profileModalInput[1].value;
  profileModal.classList.remove("profile__modal-open");
});
