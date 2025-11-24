<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AreNiux - با بالاترین کیفیت</title>
    <link rel="icon" type="image/png" href="images/AreNiux.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="areniux-style.css" rel="stylesheet">
</head>
<body>
    <!-- Epic Neural Background -->
    <div class="neural-background"></div>
    
    <!-- Floating Geometric Shapes -->
    <div class="geometric-shapes">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
    </div>

    <!-- Neural Network Lines -->
    <div class="neural-lines">
        <div class="neural-line"></div>
        <div class="neural-line"></div>
        <div class="neural-line"></div>
    </div>

    <!-- Notification Popup -->
    <div class="notification-popup" id="notificationPopup">
        <div class="notification-content glass">
            <button class="notification-close" id="closeNotification" aria-label="بستن">×</button>
            <div class="notification-icon">🚀</div>
            <h3 class="notification-title">به AreNiux خوش آمدید!</h3>
            <p class="notification-text">
                این وب‌سایت در حال تکمیل است و به زودی قابلیت‌های جدیدی از جمله نماد اعتماد الکترونیکی (اینماد)، سیستم خرید آنلاین محصولات و خدمات، و امکانات پیشرفته‌تر اضافه خواهد شد.
                <br><br>
                در حال حاضر می‌توانید از طریق کانال تلگرام ما با ما در ارتباط باشید و محصولات خود را سفارش دهید. ما آماده ارائه خدمات با بالاترین کیفیت به شما هستیم.
            </p>
        </div>
    </div>

    <!-- Header -->
    <header class="glass">
        <nav>
            <a href="#home" class="logo">
                <img src="images/AreNiux.png" alt="AreNiux Logo" class="logo-img">
                <span class="logo-text">AreNiux</span>
            </a>
            <ul class="nav-links">
                <li><a href="#features">
                    <svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>خدمات</span>
                </a></li>
                <li><a href="#showcase">
                    <svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                    <span>محصولات</span>
                </a></li>
                <li><a href="#timeline">
                    <svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                    </svg>
                    <span>درباره ما</span>
                </a></li>
                <li><a href="#contact">
                    <svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>تماس با ما</span>
                </a></li>
                <li><a href="https://t.me/AreNiux" target="_blank" class="external-link telegram-link">
                    <svg class="telegram-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span>کانال تلگرام</span>
                </a></li>
            </ul>
            <div class="mobile-menu-toggle">
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
            </div>
        </nav>
        <div class="mobile-nav">
            <a href="#features">
                <svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>خدمات</span>
            </a>
            <a href="#showcase">
                <svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                <span>محصولات</span>
            </a>
            <a href="#timeline">
                <svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                </svg>
                <span>درباره ما</span>
            </a>
            <a href="#contact">
                <svg class="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>تماس با ما</span>
            </a>
            <a href="https://t.me/AreNiux" target="_blank" class="external-link telegram-link">
                <svg class="telegram-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>کانال تلگرام</span>
            </a>
        </div>
    </header>

    <!-- Section 1: Hero -->
    <section class="hero" id="home">
        <div class="hero-content">
            <div class="hero-subtitle">به AreNiux خوش آمدید</div>
            <h1>خدمات مجازی با بالاترین کیفیت</h1>
            
            <div class="hero-description">
                <p>ارائه خدمات مجازی همانند تلگرام پرمیوم، استارز تلگرام، فیلتر شکن، نیترو دیسکورد، اپل آیدی و سایر محصولات مجازی با بالاترین کیفیت و بهترین قیمت. تجربه خرید آسان و سریع در AreNiux.</p>
            </div>

            <div class="hero-stats">
                <div class="hero-stat">
                    <span class="hero-stat-number">100%</span>
                    <span class="hero-stat-label">رضایت مشتری</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-number">24/7</span>
                    <span class="hero-stat-label">پشتیبانی</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-number">∞</span>
                    <span class="hero-stat-label">محصولات</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-number">سریع</span>
                    <span class="hero-stat-label">ارسال فوری</span>
                </div>
            </div>
            
            <div class="cta-buttons">
                <a href="#features" class="cta-button">مشاهده خدمات</a>
                <a href="https://t.me/AreNiux" target="_blank" class="cta-button secondary telegram-link">
                    <svg class="telegram-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span>پیوستن به کانال</span>
                </a>
            </div>
        </div>
    </section>

    <!-- Section 2: Diagonal Features -->
    <section class="features" id="features">
        <div class="features-container">
            <h2 class="section-title">خدمات ما</h2>
            <div class="diagonal-grid">
                <div class="feature-row">
                    <div class="feature-content glass">
                        <div class="feature-icon">✨</div>
                        <h3>تلگرام پرمیوم</h3>
                        <p>ارائه تلگرام پرمیوم با بالاترین کیفیت و قیمت مناسب. فعال‌سازی فوری و پشتیبانی 24 ساعته برای رضایت شما.</p>
                    </div>
                    <div class="feature-visual glass"></div>
                </div>
                
                <div class="feature-row">
                    <div class="feature-content glass">
                        <div class="feature-icon">🌟</div>
                        <h3>استارز تلگرام</h3>
                        <p>خرید و فروش استارز تلگرام با بهترین نرخ بازار. تراکنش‌های سریع و امن برای تمام کاربران.</p>
                    </div>
                    <div class="feature-visual glass"></div>
                </div>
                
                <div class="feature-row">
                    <div class="feature-content glass">
                        <div class="feature-icon">🛡️</div>
                        <h3>فیلتر شکن</h3>
                        <p>ارائه فیلتر شکن‌های پرسرعت و پایدار با سرورهای قدرتمند. دسترسی به اینترنت آزاد و بدون محدودیت.</p>
                    </div>
                    <div class="feature-visual glass"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 3: Hexagonal Showcase -->
    <section class="showcase" id="showcase">
        <h2 class="section-title">محصولات ما</h2>
        <div class="hexagon-container">
            <div class="hexagon">
                <div class="hexagon-inner glass">
                    <div class="hexagon-icon">✨</div>
                    <h4>تلگرام پرمیوم</h4>
                    <p>فعال‌سازی فوری و مطمئن</p>
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-inner glass">
                    <div class="hexagon-icon">🌟</div>
                    <h4>استارز تلگرام</h4>
                    <p>خرید و فروش با بهترین قیمت</p>
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-inner glass">
                    <div class="hexagon-icon">🛡️</div>
                    <h4>فیلتر شکن</h4>
                    <p>سرورهای پرسرعت و پایدار</p>
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-inner glass">
                    <div class="hexagon-icon">💫</div>
                    <h4>نیترو دیسکورد</h4>
                    <p>فعال‌سازی نیترو دیسکورد</p>
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-inner glass">
                    <div class="hexagon-icon">🍎</div>
                    <h4>اپل آیدی</h4>
                    <p>اپل آیدی معتبر و فعال</p>
                </div>
            </div>
            <div class="hexagon">
                <div class="hexagon-inner glass">
                    <div class="hexagon-icon">⚡</div>
                    <h4>سایر محصولات</h4>
                    <p>محصولات مجازی متنوع</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 4: Timeline -->
    <section class="timeline" id="timeline">
        <h2 class="section-title">درباره AreNiux</h2>
        <div class="timeline-container">
            <div class="timeline-line"></div>
            
            <div class="timeline-item">
                <div class="timeline-content glass">
                    <div class="timeline-year">2024</div>
                    <h4>تأسیس AreNiux</h4>
                    <p>AreNiux با هدف ارائه خدمات مجازی با بالاترین کیفیت تأسیس شد. ما متعهد به ارائه بهترین تجربه خرید برای مشتریان خود هستیم.</p>
                </div>
                <div class="timeline-dot"></div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-content glass">
                    <div class="timeline-year">2025</div>
                    <h4>گسترش خدمات</h4>
                    <p>با اضافه کردن محصولات جدید و بهبود کیفیت خدمات، AreNiux به یکی از معتبرترین ارائه‌دهندگان خدمات مجازی تبدیل شد.</p>
                </div>
                <div class="timeline-dot"></div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-content glass">
                    <div class="timeline-year">حال</div>
                    <h4>پشتیبانی 24/7</h4>
                    <p>ارائه خدمات با پشتیبانی 24 ساعته و ارسال فوری محصولات. رضایت مشتری اولویت اصلی ماست.</p>
                </div>
                <div class="timeline-dot"></div>
            </div>
        </div>
    </section>

    <!-- Section 5: Contact -->
    <section class="contact" id="contact">
        <div class="contact-container">
            <div class="contact-info glass">
                <h3>تماس با ما</h3>
                <p>برای دریافت اطلاعات بیشتر و سفارش محصولات، از طریق کانال تلگرام یا ایمیل ما با ما در ارتباط باشید.</p>
                <p>پشتیبانی 24 ساعته برای پاسخگویی به سوالات شما آماده است.</p>
                
                <div class="social-links">
                    <a href="mailto:info@areniux.ir" class="glass email-link" title="ایمیل">
                        <svg class="email-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <span class="email-text">info@areniux.ir</span>
                    </a>
                    <a href="https://t.me/AreNiux" target="_blank" class="glass telegram-link" title="کانال تلگرام">
                        <svg class="telegram-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="contact-form glass">
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" name="name" id="contactName" placeholder="نام شما" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" id="contactEmail" placeholder="ایمیل (اختیاری)">
                    </div>
                    <div class="form-group">
                        <input type="text" name="subject" id="contactSubject" placeholder="موضوع" required>
                    </div>
                    <div class="form-group">
                        <textarea rows="5" name="message" id="contactMessage" placeholder="پیام شما (حداقل 10 کاراکتر)" required minlength="10"></textarea>
                    </div>
                    <button type="submit" class="submit-btn" id="submitBtn">ارسال پیام</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-brand">
                <img src="images/AreNiux.png" alt="AreNiux Logo" class="footer-logo">
                <span class="footer-brand-name">AreNiux</span>
            </div>
            <div class="footer-links">
                <a href="#features">
                    <svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>خدمات</span>
                </a>
                <a href="#showcase">
                    <svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                    <span>محصولات</span>
                </a>
                <a href="#timeline">
                    <svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                    </svg>
                    <span>درباره ما</span>
                </a>
                <a href="#contact">
                    <svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>تماس با ما</span>
                </a>
                <a href="https://t.me/AreNiux" target="_blank" class="telegram-link">
                    <svg class="telegram-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span>کانال تلگرام</span>
                </a>
            </div>
            <div class="footer-copyright">
                <p>&copy; 2025 AreNiux. تمامی حقوق محفوظ است.</p>
            </div>
            <div class="footer-design">
                کپی شده : <a href="https://t.me/Gerogun" target="_blank" rel="noopener">Mahyar</a>
            </div>
        </div>
    </footer>
<script src="areniux-scripts.js"></script>
</body>
</html>
