export const setupFilterItemInteractions = () => {
    // Select elements in the FilterSection
    const filterItems = document.querySelectorAll(
        ".filter-section .search-bar, .filter-section .filter-btn, .filter-section .select-menu .select-btn"
    );

    filterItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Remove 'clicked' class from all filter items
            filterItems.forEach((el) => el.classList.remove("clicked"));

            // Add 'clicked' class to the clicked item
            item.classList.add("clicked");
        });
    });
};
