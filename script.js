document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Filter cards
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                if (category === "all" || cardCategory === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
