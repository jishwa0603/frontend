// JavaScript to handle form submission and filters

// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get values from dropdowns and input field
    const internshipType = document.getElementById('internship-type').value;
    const domain = document.getElementById('domain').value;
    const company = document.getElementById('companies').value;

    // Check if all fields are filled
    if (internshipType && domain && company) {
        alert(`Searching for ${internshipType} internships in ${domain} domain at ${company}!`);
        // Here you can add code to send this data to the backend or filter the internship list dynamically
    } else {
        alert('Please fill in all the fields!');
    }
}
const templateSelect = document.getElementById('templateSelect');

templateSelect.addEventListener('change', function() {
    const selectedTemplate = this.value;
    // Load the selected template dynamically (this can be done using Ajax or by swapping innerHTML)
    loadTemplate(selectedTemplate);
});
function enableEditMode() {
    editableElements.forEach(el => {
        el.setAttribute('contenteditable', 'true');
    });
    editToggleButton.style.display = 'none';
    saveButton.style.display = 'block';
}

function disableEditMode() {
    editableElements.forEach(el => {
        el.setAttribute('contenteditable', 'false');
    });
    editToggleButton.style.display = 'block';
    saveButton.style.display = 'none';
}
const saveButton = document.getElementById('save');

saveButton.addEventListener('click', function () {
   const resumeContent = document.querySelector('.container');
   html2pdf().from(resumeContent).save('resume.pdf');
});


editToggleButton.addEventListener('click', enableEditMode);
saveButton.addEventListener('click', disableEditMode);


function loadTemplate(templateName) {
    // Example function to dynamically load template
    const resumeContainer = document.querySelector('.resume-container');
    fetch(templateName + '.html')
        .then(response => response.text())
        .then(data => {
            resumeContainer.innerHTML = data;
        });
}


// Add an event listener to the form for submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.filter-section');
    form.addEventListener('submit', handleFormSubmit);
});
function login() {
    document.getElementById("login-form").style.left = "0";
    document.getElementById("signup-form").style.left = "400px";
    document.getElementById("btn").style.left = "0";
}

function signup() {
    document.getElementById("login-form").style.left = "-400px";
    document.getElementById("signup-form").style.left = "0";
    document.getElementById("btn").style.left = "110px";
}
