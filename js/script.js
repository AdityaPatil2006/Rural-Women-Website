document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'mr';

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang');
            if (newLang === currentLang) return;

            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentLang = newLang;
            translatePage(newLang);
        });
    });

    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-mr], [data-hi], [data-en]');
        
        elements.forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translation;
                } else {
                    if (translation.includes('<strong>')) {
                        element.innerHTML = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
            }
        });

        document.documentElement.lang = lang;
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const name = document.getElementById('name').value;
            const village = document.getElementById('village').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const messages = {
                mr: `धन्यवाद ${name}! आपला संदेश आम्हाला मिळाला आहे. आम्ही लवकरच तुमच्याशी संपर्क करू.`,
                hi: `धन्यवाद ${name}! आपका संदेश हमें मिल गया है। हम जल्द ही आपसे संपर्क करेंगे।`,
                en: `Thank you ${name}! We have received your message. We will contact you soon.`
            };

            formMessage.textContent = messages[currentLang];
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';

            contactForm.reset();

            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);

            console.log('Form submitted:', { name, village, phone, subject, message });
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});