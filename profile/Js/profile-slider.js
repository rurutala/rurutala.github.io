document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.table-scroll-container');
    
    // コンテナが正しく取得できているか確認（デバッグ用）
    if (!container) {
        console.error("Table scroll container not found");
        return;
    }

    // マウスホイールで横スクロールを可能にする
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY * 2; // スクロール速度を調整
    });
});
