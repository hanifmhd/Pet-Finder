import {environment} from '../../../app.json';

const baseUrlDevl = 'https://dog.ceo/api';
const baseUrlProd = 'https://dog.ceo/api';

const rest = environment === 'development' ? baseUrlDevl : baseUrlProd;

export default rest;
