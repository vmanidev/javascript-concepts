const cards = document.getElementById("cards");

function createCards() {

    const placeholderObj = {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla mattis metus, eu porttitor eros accumsan molestie. Nulla facilisi. Nulla varius urna non turpis dictum, vel hendrerit quam viverra."
    };

    for (let i = 0; i <= 5; i++) {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        div.append(h3, placeholderObj.title);
        div.append(p, placeholderObj.description);

        div.setAttribute("class", "card");
        console.log(cards)
        cards.appendChild(div);

    }
};