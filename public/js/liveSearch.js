let searchInput = document.querySelector("#searchInput");
let searchResults = document.querySelector("#searchResults");

let timer;

searchInput.addEventListener("input", () => {
    clearTimeout(timer);

    let query = searchInput.value.trim();

    if (!query) {
        searchResults.innerHTML = "";
        return;
    }

    timer = setTimeout(async () => {
        let response = await fetch(`/listings/live-search?q=${encodeURIComponent(query)}`);
        let listings = await response.json();

        searchResults.innerHTML = "";

        if (listings.length === 0) {
            searchResults.innerHTML = `
                <div class="list-group-item text-muted">
                    No results found
                </div>
            `;
            return;
        }

        listings.forEach(listing => {
            let link = document.createElement("a");

            link.href = `/listings/${listing._id}`;
            link.className = "list-group-item list-group-item-action";

            link.textContent = `${listing.title} - ${listing.location}`;

            searchResults.appendChild(link);
        });

    }, 300);
});

document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) &&
        !searchResults.contains(event.target)) {
        searchResults.innerHTML = "";
    }
});