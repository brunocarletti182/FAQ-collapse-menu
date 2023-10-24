let selectItems = document.querySelectorAll(".acordeon__item");

selectItems.forEach(function(item) {
  item.addEventListener("click", function(){
    let removeActive = document.querySelector(".acordeon__item--active")
    removeActive.classList.remove("acordeon__item--active")
    item.classList.add("acordeon__item--active")
  })
})

