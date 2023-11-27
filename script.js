document.getElementById("openNav").addEventListener("click", function() {
    document.getElementById("sidebar").style.right = "0";
    document.querySelector(".content").style.marginRight = "250px";
});

document.getElementById("closeNav").addEventListener("click", function() {
    document.getElementById("sidebar").style.right = "-250px";
    document.querySelector(".content").style.marginRight = "0";
});
