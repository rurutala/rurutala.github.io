window.addEventListener('load', function() {
    var header = document.getElementById('main-header');
    // 画面幅に応じてヘッダーの内容を変更する関数
    function switchHeader() {
        if (window.innerWidth > 600) {
            // PC用のヘッダーを表示
            header.classList.remove('mobile-header');
            header.classList.add('pc-header');
        } else {
            // スマホ用のヘッダーを表示
            header.classList.remove('pc-header');
            header.classList.add('mobile-header');
        }
    }

    // 初回実行
    switchHeader();

    // ウィンドウのリサイズ時に実行
    window.addEventListener('resize', switchHeader);
})