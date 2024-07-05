document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav_item');

  // 각 네비게이션 메뉴에 클릭 이벤트 리스너 추가
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          // 클릭된 메뉴의 dropdown-content를 토글
          const dropdown = item.querySelector('.dropdown-content');
          dropdown.classList.toggle('show');
      });
  });

  // 네비게이션 외 다른 곳 클릭 시 dropdown-content 닫기
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav_item')) {
          navItems.forEach(item => {
              const dropdown = item.querySelector('.dropdown-content');
              dropdown.classList.remove('show');
          });
      }
  });
});


