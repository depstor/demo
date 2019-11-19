export default class SwapiService {
    constructor() {
        this._apiBase = 'https://swapi.co/api/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Cold not fetch ${url}; recived ${res.status}`);
        }

        return await res.json();
    }

    getAllInfo = async () => {
        const res = await this.getResource('people/');
        return res;
    }

    
}