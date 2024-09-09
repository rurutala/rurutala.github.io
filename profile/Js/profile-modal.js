document.addEventListener('DOMContentLoaded', function() {
    const openCustomModalText = document.getElementById('openCustomModalText');
    const customModal = document.getElementById('customImageModal');
    const closeCustomModal = document.querySelector('.custom-close');
    const body = document.body; // <body>タグを取得

    // テキストをクリックするとモーダルを表示
    openCustomModalText.addEventListener('click', function() {
        customModal.style.display = 'block';
    });

    // 閉じるボタンをクリックするとモーダルを非表示
    closeCustomModal.addEventListener('click', function() {
        customModal.style.display = 'none';
    });

    // モーダルの背景をクリックしてもモーダルを閉じる
    window.addEventListener('click', function(event) {
        if (event.target === customModal) {
            customModal.style.display = 'none';
        }
    });
});
