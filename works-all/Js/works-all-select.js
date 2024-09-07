document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".item");

    // デバッグ用：ボタンとアイテムの確認
    console.log("Filter buttons found: ", filterButtons.length);
    console.log("Items found: ", items.length);

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // デバッグ用：クリックされたボタンとそのフィルタ名の確認
            console.log("Button clicked: ", filter);

            items.forEach(item => {
                if (filter === "all") {
                    // "All"を選択した場合はすべて表示
                    item.style.display = "block";
                    console.log("Displaying all items.");
                } else {
                    const genres = item.querySelectorAll(".works-all-genre-detail");
                    let match = false;
                    genres.forEach(genre => {
                        // デバッグ用：各アイテムのジャンルを確認
                        console.log("Checking genre: ", genre.textContent.trim());
                        if (genre.textContent.trim() === filter) {
                            match = true;
                        }
                    });
                    // タグが一致するアイテムのみ表示
                    if (match) {
                        item.style.display = "block";
                        console.log("Item displayed for filter: ", filter);
                    } else {
                        item.style.display = "none";
                        console.log("Item hidden for filter: ", filter);
                    }
                }
            });
        });
    });
});
