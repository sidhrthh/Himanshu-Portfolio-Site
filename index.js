const toggleBtn = document.querySelector(".toggle-btn a")
const toggleBtnIcon = document.querySelector(".toggle.btn")
const dropDownMenu = document.querySelector(".dropdown-menu")

toggleBtn.onClick = function() {
    dropDownMenu.classList.toggle('open')

}