const cards = document.getElementById("cards");

function createCards() {

    const placeholderObj = {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla mattis metus, eu porttitor eros accumsan molestie. Nulla facilisi. Nulla varius urna non turpis dictum, vel hendrerit quam viverra."
    };

    for (let i = 0; i <= 5; i++) {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        h3.textContent = placeholderObj.title;
        p.textContent = placeholderObj.description;

        article.append(h3, p);
        article.className = "card";
        cards.append(article);

    }
};