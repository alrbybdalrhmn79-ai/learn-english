// TalkFluent - Interactive JavaScript Features

// Array of daily English conversation tips
const englishTips = [
    "Practice speaking English for 10 minutes daily - consistency beats perfection!",
    "Learn 3 new words each day and use them in sentences immediately.",
    "Watch English movies or TV shows with subtitles, then without them.",
    "Record yourself speaking and listen back to improve pronunciation.",
    "Join language exchange conversations online with native speakers.",
    "Don't be afraid to make mistakes - they're part of learning!",
    "Use translation apps for vocabulary, but try speaking without them.",
    "Start conversations with simple greetings: 'Hi, how's your day going?'",
    "When traveling, learn local slang and common phrases for that region.",
    "Practice describing your daily routine in English to build fluency.",
    "Listen to English podcasts while commuting or exercising.",
    "Keep a journal in English about your thoughts and experiences.",
    "Role-play common scenarios like ordering food or asking directions.",
    "Follow English social media accounts to stay immersed in the language.",
    "Set small, achievable goals like learning one new idiom per week."
];

// Function to show a random tip
function showRandomTip() {
    const randomIndex = Math.floor(Math.random() * englishTips.length);
    const tip = englishTips[randomIndex];

    // Create a modal or alert to show the tip
    showTipModal(tip);
}

// Function to create and show a tip modal
function showTipModal(tip) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.tip-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'tip-modal';
    modal.innerHTML = `
        <div class="tip-modal-content">
            <div class="tip-modal-header">
                <h3>💡 Daily English Tip</h3>
                <span class="tip-modal-close">&times;</span>
            </div>
            <div class="tip-modal-body">
                <p>${tip}</p>
            </div>
            <div class="tip-modal-footer">
                <button onclick="showRandomTip()">Another Tip</button>
            </div>
        </div>
    `;

    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    const modalContent = modal.querySelector('.tip-modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: modalSlideIn 0.3s ease-out;
    `;

    const modalHeader = modal.querySelector('.tip-modal-header');
    modalHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        border-bottom: 1px solid #eee;
        padding-bottom: 1rem;
    `;

    const modalTitle = modal.querySelector('h3');
    modalTitle.style.cssText = `
        color: #1a73e8;
        margin: 0;
        font-size: 1.5rem;
    `;

    const closeBtn = modal.querySelector('.tip-modal-close');
    closeBtn.style.cssText = `
        cursor: pointer;
        font-size: 2rem;
        color: #666;
        transition: color 0.3s ease;
    `;

    const modalBody = modal.querySelector('.tip-modal-body');
    modalBody.style.cssText = `
        margin: 1.5rem 0;
    `;

    const tipText = modalBody.querySelector('p');
    tipText.style.cssText = `
        font-size: 1.1rem;
        line-height: 1.6;
        color: #333;
        margin: 0;
    `;

    const modalFooter = modal.querySelector('.tip-modal-footer');
    modalFooter.style.cssText = `
        text-align: center;
        margin-top: 1.5rem;
    `;

    const anotherBtn = modalFooter.querySelector('button');
    anotherBtn.style.cssText = `
        background: linear-gradient(135deg, #1a73e8, #4285f4);
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    `;

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: scale(0.9) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Add event listeners
    closeBtn.addEventListener('click', () => {
        modal.remove();
        style.remove();
    });

    closeBtn.addEventListener('mouseover', () => {
        closeBtn.style.color = '#1a73e8';
    });

    closeBtn.addEventListener('mouseout', () => {
        closeBtn.style.color = '#666';
    });

    anotherBtn.addEventListener('mouseover', () => {
        anotherBtn.style.transform = 'translateY(-2px)';
        anotherBtn.style.boxShadow = '0 6px 20px rgba(26, 115, 232, 0.4)';
    });

    anotherBtn.addEventListener('mouseout', () => {
        anotherBtn.style.transform = 'translateY(0)';
        anotherBtn.style.boxShadow = 'none';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            style.remove();
        }
    });

    // Add modal to page
    document.body.appendChild(modal);
}

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to feature cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature and tip cards
    document.querySelectorAll('.feature-card, .tip-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
