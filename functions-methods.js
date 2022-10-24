// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(emailadress) {
    const indexOfAt = emailadress.indexOf('@');
    //We willen de apenstaart vinden in een email adress.
    const domain = emailadress.substring(indexOfAt +1);
    //we willen de uitkomst loggen die na de apenstaart komt

    return domain;
}

const domain1 = getEmailDomain('n.eeken@novi-education.nl');
const domain2 = getEmailDomain('t.mellink@novi.nl');
const domain3 = getEmailDomain('a.wiersma@outlook.com');

console.log(domain1);
console.log(domain2);
console.log(domain3);

// console.log(domain1, domain2, domain3)

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail (emailadress) {
    const indexOfAt = emailadress.indexOf('@');
    const domain = emailadress.substring(indexOfAt +1);
    console.log(domain);
}
if (domain === novi-education.nl) {
    //code breekt hier, snap niet waarom deze niet werkt... Hij geeft aan "domain is not defined.
    return 'Student';
} else if (domain === novi.nl){
    return 'Medewerker';
} else {
    return 'Extern';
}

const type1 = typeOfEmail('n.eeken@novi-education.nl');
const type2 = typeOfEmail('t.mellink@novi.nl');
const type3 = typeOfEmail('a.wiersma@outlook.com');

console.log(type1);
console.log(type2);
console.log(type3);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (emailadress) {
    const containsAt = emailadress.includes('@');
    const containsComma = emailadress.includes(',');
    const indexOfFinalDot = emailadress.lastIndexOf('.')
    const containsNoDot = indexOfFinalDot !== emailadress.length -1;
    if (containsAt && containsComma && containsNoDot) {
        return true;
    } else {
        return false;
    }
}

const mailOne = checkEmailValidity('n.eeken@novi.nl')
const mailTwo = checkEmailValidity('tessmellink@novi.nl')
const mailThree = checkEmailValidity('n.eekenanovi.nl')
const mailFour = checkEmailValidity('n.eeken@novinl.')
const mailFive = checkEmailValidity('tessmellink@novi,nl')

console.log(mailOne, mailTwo, mailThree, mailFour, mailFive);
