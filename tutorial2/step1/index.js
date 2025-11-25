window.addEventListener("scroll", () => {
    document.querySelectorAll(".fill").forEach(bar => {
        let rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});
