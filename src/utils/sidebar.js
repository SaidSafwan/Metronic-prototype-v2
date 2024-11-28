export const toggleSidebar = (sidebarId) => {
    const sidebar = document.getElementById(sidebarId);
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-300px"; // Hide sidebar
    } else {
        sidebar.style.left = "0px"; // Show sidebar
    }
};
