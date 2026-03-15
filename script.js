// 인사하기 버튼 클릭 이벤트
document.getElementById('greetBtn').addEventListener('click', function() {
    alert('반갑습니다! 방문해 주셔서 감사합니다 😊');
});

// 폼 제출 이벤트
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`감사합니다, ${name}님!\n메시지가 전송되었습니다. (실제로는 전송되지 않음)`);
    
    // 폼 초기화
    this.reset();
});

// 스크롤 시 네비게이션 링크 부드럽게 이동
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
