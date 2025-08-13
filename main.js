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
//filter button

// Select ALL buttons with the class '.filter-btn'
const filterButtons = document.querySelectorAll('.filter-btn');
// Select ALL project cards
const projectCardsForFilter = document.querySelectorAll('.portfolio-grid .project-card');

if (filterButtons.length > 0 && projectCardsForFilter.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCardsForFilter.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                // fade animation
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    if (filterValue === 'all' || (cardCategory && cardCategory.includes(filterValue))) {
                        card.style.display = 'block';

                        // Fade in the visible cards
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);

                    } else {
                        card.style.display = 'none';
                    }
                }, 300); // Wait for fade-out to finish
            });
        });
    });
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
