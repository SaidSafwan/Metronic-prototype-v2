export const initDropdowns = () => {
    // Select all dropdown menus
    const dropdownMenus = document.querySelectorAll(".select-menu");

    dropdownMenus.forEach((optionMenu) => {
        const selectBtn = optionMenu.querySelector(".select-btn");
        const options = optionMenu.querySelectorAll(".option");
        const sBtn_text = optionMenu.querySelector(".sBtn-text");

        // Ensure no duplicate event listeners
        selectBtn.removeEventListener("click", toggleDropdown);
        options.forEach((option) =>
            option.removeEventListener("click", handleOptionClick)
        );

        // Add event listener for dropdown toggle
        selectBtn.addEventListener("click", toggleDropdown);

        // Add event listeners for option clicks
        options.forEach((option) => {
            option.addEventListener("click", handleOptionClick);
        });

        // Define the toggleDropdown function
        function toggleDropdown(e) {
            e.stopPropagation(); // Prevent event bubbling
            // Close other dropdowns
            dropdownMenus.forEach((menu) => {
                if (menu !== optionMenu) menu.classList.remove("active");
            });
            // Toggle this dropdown
            optionMenu.classList.toggle("active");
        }

        // Define the handleOptionClick function
        function handleOptionClick(e) {
            e.stopPropagation(); // Prevent event bubbling
            console.log("Option clicked:", this.innerText);

            // Remove 'selected' from other options
            options.forEach((opt) => opt.classList.remove("selected"));

            // Add 'selected' to clicked option
            this.classList.add("selected");

            // Update the dropdown button text
            sBtn_text.innerText = this.querySelector(".option-text").innerText;

            // Close the dropdown
            optionMenu.classList.remove("active");  
        }
    });

    // Close dropdowns on document click
    document.addEventListener("click", () => {
        dropdownMenus.forEach((menu) => menu.classList.remove("active"));
    });
};
