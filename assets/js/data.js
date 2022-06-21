function generateHouses() {
    let houses = [];

    for (let id = 1; id <= 20; id++) {
        let address = faker.address.streetAddress();
        let city_state = `${faker.address.city()}, ${faker.address.stateAbbr()}`
        let zipcode = faker.address.zipCode();

        let email = faker.internet.email();
        let phone = faker.phone.phoneNumber();

        let possiblePrices = [125000, 250000, 300000, 475000, 515000, 750000, 995000];
        let randomPrice = Math.floor(Math.random() * possiblePrices.length);
        let price = possiblePrices[randomPrice];

        let possibleRooms = [1, 2, 3, 4];
        let randomBedroom = Math.floor(Math.random() * possibleRooms.length);
        let randomBathroom = Math.floor(Math.random() * possibleRooms.length);
        let bedrooms = possibleRooms[randomBedroom];
        let bathrooms = possibleRooms[randomBathroom];

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

    console.log(houses);
};


generateHouses();