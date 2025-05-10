const button = document.getElementById("butto");
const popover = document.getElementById("_popover");
const close = document.getElementById("close");
const count = document.getElementById("spa");
const reduce = document.getElementById("reduce");

let counters = 5;

    button.addEventListener("click", function() {
        counters++;
        
        popover.classList.add("act");
        count.textContent = `button clicked ${counters} times `;


    });

    close.addEventListener("click", function() {
        // if(counters > 0){
        //     counters--;
        //     reduce.textContent = `close button reducing ${counters}`;
        // }
        popover.classList.remove("act");
        
        

    });


//deepseek solution to correcting(not working as expected, come back to it later)

        // const button = document.getElementById("butto");
        // const popover = document.getElementById("_popover");
        // const close = document.getElementById("close");
        // const countDisplay = document.getElementById("spa");
        // const reduceDisplay = document.getElementById("reduce");

        // let counters = 6;

        // // Initialize displays
        // countDisplay.textContent = `Count: ${counters}`;
        // reduceDisplay.textContent = `Reduce (${counters})`;

        // button.addEventListener("click", function() {
        //     counters++;
        //     popover.classList.add("act");
        //     countDisplay.textContent = `Count: ${counters}`;
        //     reduceDisplay.textContent = `Reduce (${counters})`;
        // });

        // close.addEventListener("click", function() {
        //     if(counters > 0) {
        //         counters--;
        //         countDisplay.textContent = `Count: ${counters}`;
        //         reduceDisplay.textContent = `Reduce (${counters})`;
        //     }
        //     popover.classList.remove("act");
        // });
