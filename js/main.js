const themeToggle = document.querySelector(".theme-toggle");
const icon = themeToggle.querySelector("i");

// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

} else {

    document.body.classList.remove("dark");

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

}


// Change theme
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});

//============== SECTION SCROLL ANIMATION ==============//

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(function(section) {
    observer.observe(section);
});