console.log("Laboratoire prêt !");


const nom = "BIZET";
let age = 17;
console.log(nom);
console.log(age);


const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "secret123";

if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length<=8) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}


const moi = {
    prenom: "Antoine",
    nom: "Bizet",
    age: 19,
    ville: "Rillieux",
    competences: ["HTML", "CSS"]
};
console.log("je m'appelle" + " " + moi.prenom + " " + moi.nom + "," + " " + "j'ai" + " " + moi.age + " " + "et j'habite à" + " " + moi.ville)


const notes = [12, 15, 9, 18];
console.log(notes[0]);
console.log(notes.length);
for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}

const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
];

for (let i = 0; i < classe.length; i++) {
    if (classe[i].age >= 18)
console.log(classe[i].prenom);
}