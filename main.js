// ================================================================
//              TYPING ANIMATION FOR HERO SECTION
// ================================================================
try {
    var typed = new Typed(".text", {
        strings: ["Full Stack Developer", "Web Developer", "UI/UX Designer"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
} catch (error) {
    console.warn("Typed.js couldn't find the '.text' element. This is normal if you have removed the element.");
}


// ================================================================
//              PROJECT MODAL POPUP LOGIC
// ================================================================
const projectCardsForModal = document.querySelectorAll('.project-card');
const modalOverlay = document.getElementById('projectModal');

// Only run this code if the modal element actually exists on the page
if (modalOverlay) {
    
    const closeModalBtn = document.querySelector('.close-modal-btn');

    // Add a click listener to each project card
    projectCardsForModal.forEach(card => {
        const viewDetailsBtn = card.querySelector('.view-details-icon');

        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', () => {
                
                // Get data from the clicked card's data attributes
                const title = card.dataset.title;
                const img = card.dataset.img;
                const desc = card.dataset.desc;
                const tech = card.dataset.tech.split(',').map(t => t.trim());
                const github = card.dataset.github;
                const live = card.dataset.live;

                // Populate the modal with the data
                document.getElementById('modalProjectTitle').textContent = title;
                document.getElementById('modalProjectImage').src = img;
                document.getElementById('modalProjectDescription').textContent = desc;
                
                const techContainer = document.getElementById('modalProjectTech');
                techContainer.innerHTML = ''; // Clear any previous tech items
                tech.forEach(t => {
                    const skillDiv = document.createElement('div');
                    skillDiv.className = 'skill-item';
                    skillDiv.textContent = t;
                    techContainer.appendChild(skillDiv);
                });

                document.getElementById('modalGithubLink').href = github;
                document.getElementById('modalLiveLink').href = live;

                // Hide the 'Live Demo' button if no link is provided
                if (live === '#' || live === '') {
                    document.getElementById('modalLiveLink').style.display = 'none';
                } else {
                    document.getElementById('modalLiveLink').style.display = 'inline-block';
                }
                
                // Show the modal
                modalOverlay.classList.add('active');
            });
        }
    });

    // Function to close the modal
    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    // Event listeners to close the modal
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

} else {
    console.warn("Project modal element with id 'projectModal' not found. Modal functionality will be disabled.");
}

// ================================================================
//              END OF SCRIPT
// ================================================================