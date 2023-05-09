class Client {
    constructor(firstname, lastname, night, room, petitdej) {
        this.firstname = firstname
        this.lastname = lastname;
        this.night = night;
        this.room = room;
        this.petitdej = petitdej;
    }
}
function displayRadioValue() {
    var x = document.querySelector('input[name="petit_dej"]:checked')  ;
    return x.value;
}
const Clients = new Array();
let newP = document.createElement('p');
let placediv = document.getElementById("billHide");
let sectionHide = document.getElementById("sectionFacture")


function CreateClient(){
    const Create = new Client(prenom, nom, nuits, chambre, dej);
    return Create
}

function getValue(){
let prenom = document.getElementById("prenom").value;
let nom = document.getElementById("nom").value;
let nuits = document.getElementById("nuits").value;
let chambre = document.getElementById("typechambre").value;
let dej = displayRadioValue();
    function CreateClient(){
        const Create = new Client(prenom, nom, nuits, chambre, dej);
        return Create;
    }
    Clients.push(CreateClient());
    console.table(Clients)
}

function price(room, nightnumber) {
    const roomNumber = room;
    let price;
    if (roomNumber === "ch1") {
        price = 65;
    } else if (roomNumber === "ch2") {
        price = 89;
    } else if (roomNumber === "ch3") {
        price = 139;
    } else {
        price = 189;
    }
    all = price * nightnumber;
    return `${price} € par nuit(s) donc un total de ${all} €`;
}


function removeSection() {
    sectionHide.classList.add("display-none");
    sectionHide.classList.remove("display-flex")
}
function search(){
    placediv.append(newP);
    sectionHide.classList.remove("display-none")
    sectionHide.classList.add("display-flex")
    const clientSearch = Clients.find(element => element.firstname === prenom.value && element.lastname === nom.value);
    setTimeout(removeSection, 5000);
    if (clientSearch){
        newP.textContent = (`La facture de ${clientSearch.firstname} ${clientSearch.lastname} est de ${price(clientSearch.room, clientSearch.night)}`);
    }
    else {
        newP.textContent = (`Client introuvable`);
    }
}