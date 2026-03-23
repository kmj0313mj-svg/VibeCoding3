document.addEventListener('DOMContentLoaded', () => {

    // ===== 토스트 알림 =====
    function showToast(message, type = 'info', duration = 3000) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('out');
            toast.addEventListener('animationend', () => toast.remove(), { once: true });
        }, duration);
    }

    // ===== 햄버거 메뉴 =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', '메뉴 열기');
        });
    });

    // ===== 인사하기 버튼 =====
    document.getElementById('greetBtn').addEventListener('click', () => {
        showToast('반갑습니다! 방문해 주셔서 감사합니다 😊', 'info');
    });

    // ===== 연락처 폼 유효성 검사 & 제출 =====
    const form = document.getElementById('contactForm');

    function validateField(id, errorId, message) {
        const field = document.getElementById(id);
        const error = document.getElementById(errorId);
        const isEmpty = !field.value.trim();

        if (isEmpty) {
            field.classList.add('error');
            error.textContent = message;
            return false;
        }

        if (id === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value.trim())) {
                field.classList.add('error');
                error.textContent = '올바른 이메일 형식을 입력해주세요.';
                return false;
            }
        }

        field.classList.remove('error');
        error.textContent = '';
        return true;
    }

    ['name', 'email', 'message'].forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
            const errorId = `${id}Error`;
            const messages = { name: '이름을 입력해주세요.', email: '이메일을 입력해주세요.', message: '메시지를 입력해주세요.' };
            validateField(id, errorId, messages[id]);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = validateField('name', 'nameError', '이름을 입력해주세요.');
        const isEmailValid = validateField('email', 'emailError', '이메일을 입력해주세요.');
        const isMessageValid = validateField('message', 'messageError', '메시지를 입력해주세요.');

        if (!isNameValid || !isEmailValid || !isMessageValid) return;

        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            form.reset();
            showToast('메시지가 성공적으로 전송되었습니다!', 'success');
        }, 1200);
    });

    // ===== 스무스 스크롤 =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== 스크롤 기반 활성 네비게이션 =====
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    // ===== 스크롤 투 탑 버튼 =====
    const scrollTopBtn = document.getElementById('scrollTop');

    function onScroll() {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        updateActiveNav();
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Intersection Observer 스크롤 애니메이션 =====
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

});
