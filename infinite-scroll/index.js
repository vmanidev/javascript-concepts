const cards = document.getElementById("cards");

function createCards() {
    return new Promise(resolve => {
        const placeholderObj = {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla mattis metus, eu porttitor eros accumsan molestie. Nulla facilisi. Nulla varius urna non turpis dictum, vel hendrerit quam viverra."
        };

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < 8; i++) {
            const article = document.createElement("article");
            const h3 = document.createElement("h3");
            const p = document.createElement("p");

            h3.textContent = placeholderObj.title;
            p.textContent = placeholderObj.description;

            article.append(h3, p);
            article.className = "card";
            fragment.append(article);
        }

        setTimeout(() => {
            cards.appendChild(fragment);
            resolve();
        }, 500);
    });
};


function onDemandCardsLoad() {

    const loader = document.getElementById("loader");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(loader);
                createCards().then(() => observer.observe(loader));
            }
        })
    }, { root: null, rootMargin: "0px", threshold: 0.7 });

    observer.observe(loader);
};

onDemandCardsLoad();