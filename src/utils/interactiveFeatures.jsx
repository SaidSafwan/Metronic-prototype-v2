export const setupFeatureInteractions = () => {
    const featureLinks = document.querySelectorAll(".feature-links li");

    featureLinks.forEach((link) => {
        link.addEventListener("click", () => {
            featureLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // const filterItems = document.querySelectorAll(
    //     ".filter-section .search-bar, .filter-section .select-menu .select-btn"
    // );

    // filterItems.forEach((item) => {
    //     item.addEventListener("click", () => {
    //         filterItems.forEach((el) => el.classList.remove("clicked"));
    //         item.classList.add("clicked");
    //     });
    // });
};
