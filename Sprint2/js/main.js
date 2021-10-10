const checkbox = document.querySelector(
    '.markform input [type="checkbox"]'
);
const btns = document.querySelectorAll(
    '.markform button'
);
checkbox.addEventListener("change", function(){
    const checked = this.checked;
    for (const btn of btns){
        checked ? (btn.disable = false) : (btn.disable = true )
    }
})