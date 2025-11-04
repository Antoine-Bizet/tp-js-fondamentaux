console.log("Laboratoire prêt !");


const nom = "BIZET";
let age = 17;
console.log(nom);
console.log(age);


const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "secret123";

if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if ("Vérification de la longueur du mot de passe (< 8 caractères)") {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}