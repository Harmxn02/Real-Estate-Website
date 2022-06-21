document.addEventListener("DOMContentLoaded", init);


function init() {
    generateHouses();
}

function generateHouses() {
    let houses = [];

    for (let id = 1; id <= 5; id++) {
        let address = faker.address.streetAddress();
        let city_state = `${faker.address.city()}, ${faker.address.stateAbbr()}`
        let zipcode = faker.address.zipCode();

        let email = faker.internet.email();
        let phone = faker.phone.phoneNumber();

        let possiblePrices = [125000, 250000, 300000, 475000, 515000, 750000, 995000];
        let randomPrice = Math.floor(Math.random() * possiblePrices.length);
        let price = possiblePrices[randomPrice];

        let possibleRooms = [2, 3, 4];
        let randomBedroom = Math.floor(Math.random() * possibleRooms.length);
        let randomBathroom = Math.floor(Math.random() * possibleRooms.length);
        let bedrooms = possibleRooms[randomBedroom];
        let bathrooms = possibleRooms[randomBathroom] - 1;

        houses.push({
            id: id,
            address: address,
            city_state: city_state,
            zipcode: zipcode,
            email: email,
            phone: phone,
            price: price,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
        });
    }

    displayHouses(houses)
};

function displayHouses(data) {
    console.log(data);

    $allHouses = document.querySelector("#all-houses");

    data.forEach(data => {        
        const html = `
                <article id="house-container">
                    <div id="image"></div>
                    <div id="information-container">
                        <h1 id="address">${data.address}</h1>
                        <p id="location">${data.city_state}</p>
                        <div id="rooms-container">
                            <p id="bedrooms">🛌 Bedrooms: ${data.bedrooms}</p> 
                            <p id="bathrooms">🚿 Bathrooms: ${data.bathrooms}</p> 
                        </div>
                        <p id="price">Price: ${data.price},-</p>
                    </div>

                </article>
                      
                      
                      `;
        
        $allHouses.insertAdjacentHTML("beforeend", html);
    });
}