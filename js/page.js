function toggleNav() {
    // Toggles menubar visible or invisible
    let menubar = document.getElementsByClassName("menubar")[0];
    if(menubar.style.display === "none") {
        menubar.style.display = "flex";
    }
    else {
        menubar.style.display = "none";
    }
}
window.onresize = function() {
    // Primarily for fixing an issue that happens
    // with the devtools responsive page mode
    if(window.innerWidth > 769) {
        document.getElementsByClassName("menubar")[0].style.display = "flex";
    }
}