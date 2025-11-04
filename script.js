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