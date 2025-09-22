async function getImages() {
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=3&limit=100");
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}


