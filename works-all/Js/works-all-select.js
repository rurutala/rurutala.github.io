document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // 全てのボタンから 'active' クラスを削除
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // クリックされたボタンに 'active' クラスを追加
            button.classList.add("active");

            items.forEach(item => {
                if (filter === "all") {
                    item.style.display = "block";
                } else {
                    const genres = item.querySelectorAll(".works-all-genre-detail");
                    let match = false;
                    genres.forEach(genre => {
                        if (genre.textContent.trim() === filter) {
                            match = true;
                        }
                    });
                    item.style.display = match ? "block" : "none";
                }
            });
        });
    });
});
