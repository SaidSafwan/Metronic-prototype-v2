export const setupFilterItemInteractions = () => {
    // Select all filter items in the filter section
    const filterItems = document.querySelectorAll(
        ".filter-section .search-bar, .select-menu .select-btn"
    );

    // Add click event listeners to each item
    filterItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Remove the 'clicked' class from all items
            filterItems.forEach((el) => el.classList.remove("clicked"));

            // Add the 'clicked' class to the clicked item
            item.classList.add("clicked");
        });
    });
};
