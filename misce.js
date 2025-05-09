const button = document.getElementById("butto");
const popover = document.getElementById("_popover");
const close = document.getElementById("close");

    button.addEventListener("click", function() {
        console.log("button clivked");
        popover.classList.add("act");

    });

    close.addEventListener("click", function() {

        popover.classList.remove("act");

    });
