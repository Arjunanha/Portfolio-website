function showMessage() {
    alert("hello! Thanks for viviting my portfolio1");
}
// Function to toggle the visibility of the project list
function toggleProjects() {
    const projectList = document.getElementById("project-list");
    
    // Check if project list is currently visible
    if (projectList.style.display === "none") {
        projectList.style.display = "block"; // Show the projects
    } else {
        projectList.style.display = "none"; // Hide the projects
    }
}
// Function to handle form submission
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation check
    if (name && email && message) {
        alert(Thank you, ${name}! Your message has been received.);
        
        // Clear the form
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
}