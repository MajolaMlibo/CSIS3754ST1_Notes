let search = document.getElementById("search");

search.addEventListener("keyup", function () {
    let filter = search.value.toLowerCase();
    let content = document.getElementById("content");

    content.innerHTML = content.innerHTML.replace(/<mark>|<\/mark>/g, "");

    if (filter.length > 0) {
        content.innerHTML = content.innerHTML.replace(
            new RegExp(filter, "gi"),
            match => `<mark>${match}</mark>`
        );
    }
});