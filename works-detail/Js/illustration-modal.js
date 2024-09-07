document.addEventListener('DOMContentLoaded', function () {
    const gridImages = document.querySelectorAll('.grid-image');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    // 各画像にクリックイベントを設定
    gridImages.forEach(image => {
        image.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src; // クリックした画像をモーダルに表示
            captionText.textContent = this.alt; // 画像のaltをキャプションとして表示
        });
    });

    // モーダルのクローズボタン
    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });

    // モーダルの背景をクリックして閉じる
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
