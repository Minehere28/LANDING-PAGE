// Lấy các phần tử cần sử dụng
const header = document.querySelector('.header');
const menuToggle = document.querySelector(".header_bar");
const menu = document.querySelector(".header_title");
const headerPlaceholder = document.querySelector(".header_alternative");

// Sự kiện thay đổi kích thước màn hình
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        menu.classList.remove('active');
        menu.style.display = "flex"; 
    } else {
        menu.style.display = "none";
    }
});

// Xử lý sự kiện mở/đóng menu khi nhấn nút toggle
document.addEventListener('click', (e) => {
    if (menuToggle.contains(e.target)) {
        menu.classList.toggle('active');
        menu.style.display = menu.classList.contains('active') ? "flex" : "none";
    } else {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menu.style.display = "none";
        }
    }
});

// Xử lý sự kiện cuộn trang (thêm hiệu ứng header)
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        header.classList.add("scroll");
        headerPlaceholder.classList.add("visible");
    } else {
        header.classList.remove("scroll");
        headerPlaceholder.classList.remove("visible");
    }
});

