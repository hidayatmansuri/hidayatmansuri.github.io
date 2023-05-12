// Opening a About Modal
const aboutModal = document.querySelector(".cv-about-overlay");
const openAbout = document.querySelector(".cv-about-open");
const closeAbout = document.querySelector(".close-modal-about");

function toggleAboutModal() {
    aboutModal.classList.toggle("open-cv-modal-about");
}

openAbout.addEventListener("click", toggleAboutModal);
closeAbout.addEventListener("click", toggleAboutModal);


// Opening a Contact Modal
const contactModal = document.querySelector(".cv-contact-overlay");
const openContact = document.querySelector(".cv-contact-open");
const closeContact = document.querySelector(".close-modal-contact");

function toggleContactModal() {
    contactModal.classList.toggle("open-cv-modal-contact");
}

openContact.addEventListener("click", toggleContactModal);
closeContact.addEventListener("click", toggleContactModal);


// Toggling Modal Background and Font Colour according to Mode
const cvCheckboxMode = document.getElementById("cvModeToggle");
const cvModalColor = document.querySelector(".cv-modal-about");
const cvContactModalColor = document.querySelector(".cv-modal-contact");
const cvOrBackground = document.getElementById('cvCODE');
const cvNCCBackground = document.getElementById('cvNCC');
const cvCDACBackground = document.getElementById('cvCDAC');
const cvGUBackground = document.getElementById('cvGU');

cvCheckboxMode.addEventListener("change", function() {
    if (cvCheckboxMode.checked) {
        cvOrBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvOrBackground.style.color = "var(--cv-font-color)";
        cvNCCBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvNCCBackground.style.color = "var(--cv-font-color)";
        cvCDACBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvCDACBackground.style.color = "var(--cv-font-color)";
        cvGUBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvGUBackground.style.color = "var(--cv-font-color)";
        cvModalColor.style.backgroundColor = "var(--cv-font-color)";
        cvModalColor.style.color = "var(--cv-bg-color)";
        cvContactModalColor.style.backgroundColor = "var(--cv-font-color)";
        cvContactModalColor.style.color = "var(--cv-bg-color)";
    }
    else
    {
        cvOrBackground.style.backgroundColor = "";
        cvOrBackground.style.color = "";
        cvNCCBackground.style.backgroundColor = "";
        cvNCCBackground.style.color = "";
        cvCDACBackground.style.backgroundColor = "";
        cvCDACBackground.style.color = "";
        cvGUBackground.style.backgroundColor = "";
        cvGUBackground.style.color = "";
        cvModalColor.style.backgroundColor = "";
        cvModalColor.style.color = "";
        cvContactModalColor.style.backgroundColor = "";
        cvContactModalColor.style.color = "";
    }
}
);


// Toggling Modes from Light to Dark or Vice-versa
const body = document.body;
const toggle = document.getElementById('cvModeToggle');
const modeKey = 'mode';

function cvToggleMode() {
    body.classList.toggle('dark-mode');
    toggle.checked = body.classList.contains('dark-mode');
    if (body.classList.contains('dark-mode')) {
        cvOrBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvOrBackground.style.color = "var(--cv-font-color)";
        cvNCCBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvNCCBackground.style.color = "var(--cv-font-color)";
        cvCDACBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvCDACBackground.style.color = "var(--cv-font-color)";
        cvGUBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvGUBackground.style.color = "var(--cv-font-color)";
        cvModalColor.style.backgroundColor = "var(--cv-font-color)";
        cvModalColor.style.color = "var(--cv-bg-color)";
        cvContactModalColor.style.backgroundColor = "var(--cv-font-color)";
        cvContactModalColor.style.color = "var(--cv-bg-color)";
    }
    else
    {
        cvOrBackground.style.backgroundColor = "";
        cvOrBackground.style.color = "";
        cvNCCBackground.style.backgroundColor = "";
        cvNCCBackground.style.color = "";
        cvCDACBackground.style.backgroundColor = "";
        cvCDACBackground.style.color = "";
        cvGUBackground.style.backgroundColor = "";
        cvGUBackground.style.color = "";
        cvModalColor.style.backgroundColor = "";
        cvModalColor.style.color = "";
        cvContactModalColor.style.backgroundColor = "";
        cvContactModalColor.style.color = "";
    }
    localStorage.setItem(modeKey, body.classList.contains('dark-mode') ? 'dark' : 'light');
}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // The user has set their system to use a dark color scheme
    body.classList.add('dark-mode');
    toggle.checked = true;
    cvOrBackground.style.backgroundColor = "var(--cv-bg-color)";
    cvOrBackground.style.color = "var(--cv-font-color)";
    cvNCCBackground.style.backgroundColor = "var(--cv-bg-color)";
    cvNCCBackground.style.color = "var(--cv-font-color)";
    cvCDACBackground.style.backgroundColor = "var(--cv-bg-color)";
    cvCDACBackground.style.color = "var(--cv-font-color)";
    cvGUBackground.style.backgroundColor = "var(--cv-bg-color)";
    cvGUBackground.style.color = "var(--cv-font-color)";
    cvModalColor.style.backgroundColor = "var(--cv-font-color)";
    cvModalColor.style.color = "var(--cv-bg-color)";
    cvContactModalColor.style.backgroundColor = "var(--cv-font-color)";
    cvContactModalColor.style.color = "var(--cv-bg-color)";
} else {
    // The user has set their system to use a light color scheme
    body.classList.remove('dark-mode');
    toggle.checked = false;
}


// Check localStorage for mode preference
const storedMode = localStorage.getItem(modeKey);
if (storedMode === 'dark') {
    cvToggleMode();
}


// Add event listener to checkbox
toggle.addEventListener('change', function() {
    cvToggleMode();
});


// Add event listener to system color scheme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
    if (body.classList.contains('dark-mode')) {
      // The user has set their system to use a dark color scheme
        toggle.checked = true;
        cvOrBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvOrBackground.style.color = "var(--cv-font-color)";
        cvNCCBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvNCCBackground.style.color = "var(--cv-font-color)";
        cvCDACBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvCDACBackground.style.color = "var(--cv-font-color)";
        cvGUBackground.style.backgroundColor = "var(--cv-bg-color)";
        cvGUBackground.style.color = "var(--cv-font-color)";
        cvModalColor.style.backgroundColor = "var(--cv-font-color)";
        cvModalColor.style.color = "var(--cv-bg-color)";
        cvContactModalColor.style.backgroundColor = "var(--cv-font-color)";
        cvContactModalColor.style.color = "var(--cv-bg-color)";
    } else {
      // The user has set their system to use a light color scheme
        toggle.checked = false;
    }
});


// Expand and Roll back Qualification card / Turn Chevron accordingly
function toggleQualification() {
    const qualificationContent = document.querySelector(".cv-qualification-content");
    const qualificationChevron = document.querySelector(".fa-chevron-down");
    if (qualificationContent.style.display === "none") {
        qualificationContent.style.display = "block";
        qualificationChevron.classList.add("rotate");
        // Add click event listener to document to close expanded card
        document.addEventListener('click', closeCard);
    } else {
        qualificationContent.style.display = "none";
        qualificationChevron.classList.remove("rotate");
    }
    function closeCard(e) {
        if (!qualificationContent.contains(e.target) && !qualificationChevron.contains(e.target)) {
            qualificationContent.style.display = "none";
            qualificationChevron.classList.remove("rotate");
            // Remove event listener when card is closed
            document.removeEventListener('click', closeCard);
        }
    }
}


// Expand and Roll back Experience card / Turn Chevron accordingly
function toggleExperience() {
    const experienceContent = document.querySelector(".cv-experience-content");
    const experienceChevron = document.querySelector(".cv-experience-arrow");
    if (experienceContent.style.display === "none") {
        experienceContent.style.display = "block";
        experienceChevron.classList.add("rotate");
        // Add click event listener to document to close expanded card
        document.addEventListener('click', closeCard);
    } else {
        experienceContent.style.display = "none";
        experienceChevron.classList.remove("rotate");
    }
    function closeCard(e) {
        if (!experienceContent.contains(e.target) && !experienceChevron.contains(e.target)) {
            experienceContent.style.display = "none";
            experienceChevron.classList.remove("rotate");
            // Remove event listener when card is closed
            document.removeEventListener('click', closeCard);
        }
    }
}


// Expand and Roll back Project card / Turn Chevron accordingly
function toggleProject() {
    const projectContent = document.querySelector(".cv-project-content");
    const projectChevron = document.querySelector(".cv-project-arrow");
    if (projectContent.style.display === "none") {
        projectContent.style.display = "block";
        projectChevron.classList.add("rotate");
        // Add click event listener to document to close expanded card
        document.addEventListener('click', closeCard);
    } else {
        projectContent.style.display = "none";
        projectChevron.classList.remove("rotate");
    }
    function closeCard(e) {
        if (!projectContent.contains(e.target) && !projectChevron.contains(e.target)) {
            projectContent.style.display = "none";
            projectChevron.classList.remove("rotate");
            // Remove event listener when card is closed
            document.removeEventListener('click', closeCard);
        }
    }
}


// Copy Email Address to Clipboard button
let email = document.getElementById('cvEmailCopy').innerHTML;
    const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(email);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}


// Copy Phone Number to Clipboard button
let phone = document.getElementById('cvPhoneCopy').innerHTML;
    const copyPhone = async () => {
    try {
        await navigator.clipboard.writeText(phone);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}


// Open default email client with pre-filled email address
document.querySelector('a[href^="mailto:"]').addEventListener('click', function(event) {
    event.preventDefault();
    var emailLink = event.target.href;
    var email = emailLink.substring(emailLink.indexOf(':') + 1);
    openEmailClient(email);
});

function openEmailClient(email) {
    window.location.href = 'mailto:' + email;
}
