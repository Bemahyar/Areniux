// JavaScript Document

/*
AreNiux Website Scripts
*/

// Mobile menu functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });

        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced header functionality
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active menu item highlighting
        function updateActiveMenuItem() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveMenuItem);
        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', () => {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Neural lines pulse effect
        const neuralLines = document.querySelectorAll('.neural-line');
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);

        // Enhanced particle generation
        function createQuantumParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#8a2be2', '#9370db', '#8a2be2'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items and hexagons
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Contact Form submission
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        
        if (contactForm && submitBtn) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // جمع‌آوری داده‌های فرم
                const name = document.getElementById('contactName').value.trim();
                const email = document.getElementById('contactEmail').value.trim();
                const subject = document.getElementById('contactSubject').value.trim();
                const message = document.getElementById('contactMessage').value.trim();
                
                // Validation در سمت Client
                if (!name || name.length < 2) {
                    alert('نام باید حداقل 2 کاراکتر باشد');
                    document.getElementById('contactName').focus();
                    return;
                }
                
                if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert('ایمیل نامعتبر است');
                    document.getElementById('contactEmail').focus();
                    return;
                }
                
                if (!subject || subject.length < 3) {
                    alert('موضوع باید حداقل 3 کاراکتر باشد');
                    document.getElementById('contactSubject').focus();
                    return;
                }
                
                if (!message || message.length < 10) {
                    alert('پیام باید حداقل 10 کاراکتر باشد');
                    document.getElementById('contactMessage').focus();
                    return;
                }
                
                const formData = {
                    name: name,
                    email: email || '',
                    subject: subject,
                    message: message
                };
                
                // Change button state
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'در حال ارسال...';
                submitBtn.disabled = true;
                submitBtn.style.background = 'linear-gradient(45deg, #9370db, #8a2be2)';
                
                try {
                    // تعیین مسیر API - همیشه از مسیر نسبی استفاده می‌کنیم
                    const apiPath = 'api/contact.php';
                    
                    console.log('Sending request to:', apiPath);
                    
                    const response = await fetch(apiPath, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData)
                    });
                    
                    // خواندن پاسخ (چه موفق باشد چه خطا)
                    let result;
                    try {
                        const responseText = await response.text();
                        result = JSON.parse(responseText);
                    } catch (jsonError) {
                        console.error('JSON Parse Error:', jsonError);
                        throw new Error('پاسخ سرور نامعتبر است');
                    }
                    
                    // بررسی وضعیت HTTP
                    if (!response.ok) {
                        console.error('HTTP Error:', response.status, result);
                        
                        // اگر پیام خطا از سرور آمده، از آن استفاده کن
                        if (result && result.message) {
                            throw new Error(result.message);
                        } else {
                            throw new Error(`خطا در ارتباط با سرور (کد: ${response.status})`);
                        }
                    }
                    
                    if (result.success) {
                        submitBtn.innerHTML = '✓ پیام ارسال شد';
                        submitBtn.style.background = 'linear-gradient(45deg, #4caf50, #45a049)';
                        contactForm.reset();
                        
                        setTimeout(() => {
                            submitBtn.innerHTML = originalText;
                            submitBtn.style.background = 'linear-gradient(45deg, #8a2be2, #9370db)';
                            submitBtn.disabled = false;
                        }, 3000);
                    } else {
                        throw new Error(result.message || 'خطا در ارسال پیام');
                    }
                } catch (error) {
                    console.error('Form submission error:', error);
                    console.error('Error details:', {
                        message: error.message,
                        stack: error.stack
                    });
                    
                    submitBtn.innerHTML = '✗ خطا در ارسال';
                    submitBtn.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
                    
                    // نمایش پیام خطا به کاربر
                    let errorMessage = error.message || 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید.';
                    
                    // اگر خطای 403 است، پیام خاص نمایش بده
                    if (errorMessage.includes('403')) {
                        errorMessage = 'خطا در دسترسی به سرور (403). لطفاً مطمئن شوید که از سرور PHP استفاده می‌کنید و نه Python HTTP Server.';
                    }
                    
                    alert(errorMessage);
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = 'linear-gradient(45deg, #8a2be2, #9370db)';
                        submitBtn.disabled = false;
                    }, 3000);
                }
            });
        }

        // Notification Popup functionality
        const notificationPopup = document.getElementById('notificationPopup');
        const closeNotificationBtn = document.getElementById('closeNotification');

        // Show popup on page load (always show)
        if (notificationPopup) {
            notificationPopup.classList.remove('hidden');
        }

        // Close popup when close button is clicked
        if (closeNotificationBtn) {
            closeNotificationBtn.addEventListener('click', () => {
                if (notificationPopup) {
                    notificationPopup.classList.add('hidden');
                }
            });
        }

        // Close popup when clicking outside the content
        if (notificationPopup) {
            notificationPopup.addEventListener('click', (e) => {
                if (e.target === notificationPopup) {
                    notificationPopup.classList.add('hidden');
                }
            });
        }

