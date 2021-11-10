const express = require('express');
const faker = require('faker');

const app = express();
const port = 8000

const generateUserObj = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});eet: faker

const generateCompanyObject = () =>({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address:{
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    const newUser = generateUserObj ();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = generateCompanyObject ();
    res.json(newCompany);
});

app.get("api/user/company", (req, res) => {
    const newUser = generateUserObj ();
    const newCompany = generateCompanyObject();
    const responseObject = {
        user: newUser,
        company: newCompany,
    };
    res.json(responseObject);
})

app.listen(port, () => console.log('express server running on port ${port}'));