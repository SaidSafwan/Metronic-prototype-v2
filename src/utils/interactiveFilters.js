export const setupFilterItemInteractions = () => {
    const filterSection = document.querySelector(".filter-section");

    // Remove existing listeners
    filterSection.removeEventListener("click", handleInteraction);

    // Attach a single listener for the entire filter section
    filterSection.addEventListener("click", handleInteraction);

    function handleInteraction(event) {
        // Define valid selectors for interaction
        const validSelector = ".select-menu .select-btn, .search-bar, .filter-btn";

        // Check if the clicked element matches one of the valid selectors
        const clickedElement = event.target.closest(validSelector);

        // if (!clickedElement) return; // Exit if the clicked element is not valid

        // Remove `.clicked` class from all elements matching the valid selectors
        const allInteractiveElements = filterSection.querySelectorAll(validSelector);
        allInteractiveElements.forEach((el) => el.classList.remove("clicked"));

        // Add `.clicked` class to the clicked element
        clickedElement.classList.add("clicked");
    }
};
