const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    //Complete with your code
    let iso= isoCode;
    let country = countries.find(countries => countries.iso3 == iso); 
    return {
        name: country.name,
        iso3: country.iso3,
        iso2: country.iso2,
        numeric_code: country.numeric_code,
        phone_code: country.phone_code,
        capital: country.capital,
        currency: country.currency,
        tld: country.tld,
        native: country.native,
        region: country.region, 
    }
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    //Complete with your code
    /*let lang=language;
    let iso=isoCode;



    return{
        translations:countries.translations,
    }*/
    

}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    //Complete with your code
    let subr= countries.filter((sub) => sub.subregion === subregion );
    
    return{subr};
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();