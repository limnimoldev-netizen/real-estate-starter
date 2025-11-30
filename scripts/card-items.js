// feature card
const sectionItemsElement = document.getElementById("itemsCard")

fetch("../public/data/properties.json")
 .then((response) => response.json())
 .then((data) => {
    if (data.length > 0) {
        for (let i = 0; i < 3; i++) {
            
            sectionItemsElement.innerHTML += `
            <article class="card-items" href="">
                <div class="card-items_media">
                <a href=""><img src="${data[i].images}" alt=""></a>
                </div>

                <div class="card-items__body">
                    <div class="top-cols-item">
                        <h2>USD 150,000 <span>/ year</span></h2>
                        <small><i class="fa-solid fa-star"></i> 4.9/5.0</small>
                    </div>

                    <h1 class="title-cols">Premium Family House</h1>
                    <p class="txt-cols">Beoung Keng Kong 1</p>
                    <small>
                        <i class="fa-solid fa-bed"></i> 2 Bedroom
                        <i class="fa-solid fa-bath"></i> 2 Bathroom
                    </small>

                    <div class="card-btn">
                        <a href="">View Detail</a>
                    </div>
                </div>
            </article>
        `;
        }
    }
        
 })