// 팝업을 열거나 닫는 함수
function togglePopup() {
    let popup = document.getElementById("contactPopup");
    let overlay = document.getElementById("overlay");

    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
    }
}

// 배경(overlay)을 클릭하면 팝업 닫기
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactBtn").addEventListener("click", togglePopup);
    document.getElementById("overlay").addEventListener("click", togglePopup); // ✅ 추가됨
});

//emailJS
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 폼 제출 방지

    emailjs.sendForm("service_mygit", "template_heytlx7", this, "KIGbMSVc7WdPXu89H")
        .then(function(response) {
            alert("메일이 성공적으로 전송되었습니다!");
        }, function(error) {
            alert("메일 전송 실패: " + error.text);
        });
});
