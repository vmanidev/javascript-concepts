async function getImages() {
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=3&limit=100");
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

getImages().then(res => {
    const rootElement = document.getElementById("root");
    res.forEach(({ download_url }) => {
        const img = document.createElement("img");
        img.setAttribute("data-src", download_url);
        img.setAttribute("loading", "lazy")
        rootElement.append(img);
    })
});


