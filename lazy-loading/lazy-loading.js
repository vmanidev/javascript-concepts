async function getImages() {
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=3&limit=100");
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
}

getImages().then(res => {
    const rootElement = document.getElementById("root");
    res.forEach(({ download_url }) => {
        const img = document.createElement("img");
        img.setAttribute("data-src", download_url);
        img.setAttribute("loading", "lazy")
        rootElement.append(img);
    });

    loadImageOnDemand();
});

function loadImageOnDemand() {

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;

                img.onload = () => img.classList.add("loaded");

                observer.unobserve(img);
            }
        })
    }, { root: null, rootMargin: "0px", threshold: 0.5 });

    const images = document.querySelectorAll("img[data-src]");
    images.forEach(img => observer.observe(img));
}


