import {environment} from '../../../app.json';

const baseUrlDevl = 'https://dog.ceo/api/breeds';
const baseUrlProd = 'https://dog.ceo/api/breeds';

const baseUrl =
  environment === 'development'
    ? baseUrlDevl
    : baseUrlProd;

const rest = {
    //list all breeds
    getListBreed: `${baseUrl}/list/all`,

    //display random image
    getRandomImage: `${baseUrl}/image/random`,

    //display image by breeds
    getImage: `${baseUrl}/${type}/images`,

    //list all sub breeds
    getSubBreeds: `${baseUrl}/${type}/list`,
};

export default rest;
