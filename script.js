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
