document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  });
  
  // ฟังก์ชันสำหรับแสดง/ซ่อนเมนูบนมือถือ
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
  
  function validateLogin() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("กรุณากรอก Username และ Password ให้ครบถ้วน!");
        return false;
    }

    if (username === "embeded" && password === "koko") {
        alert("เข้าสู่ระบบสำเร็จ!");
        
        // ✅ เก็บสถานะการล็อกอิน
        localStorage.setItem("isLoggedIn", "true");

        // ✅ ไปหน้า dashboard
        window.location.href = "weather.html";
        return false;
    } else {
        alert("Username หรือ Password ไม่ถูกต้อง!");
        return false;
    }
}

