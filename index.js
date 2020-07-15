
let request = require('request');


//appel API pour se logger 

request.get('https://api.external.thegoodseat.fr/loginuser', {
  'auth': {
    'user': 'username',
    'pass': 'WkaejKFztN6Tz1cIPi35M7UcvyYwPZcS6ixumJaP'
  }

});


// appel API pour s'enregistrer (register)

request.get('https://api.external.thegoodseat.fr/registeruser', {
  'auth': {
    'user': 'username',
    'pass': 'WkaejKFztN6Tz1cIPi35M7UcvyYwPZcS6ixumJaP'
  }

});

// appel API pour recuperer les prix et attentes

let requete = request.get('https://api.external.thegoodseat.fr/getalloffers', {
  'auth': {
    'user': 'username',
    'pass': 'WkaejKFztN6Tz1cIPi35M7UcvyYwPZcS6ixumJaP'
  }
});


// Ce cernier commit ne permet pas vraiment de recuperer les prix et attentes,
// J'avais aussi essaye ce code en-dessous mais j'ai reçu une erreur, 
// est-ce que tu pourrais me dire ce qu'il ne va pas sur cette partie de code ?

/*
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let requete = new XMLHttpRequest();

const url_login = "https://api.external.thegoodseat.fr/loginuser";
requete.open("GET", url_login);

requete.send();
requete.onload = () => {
	console.log(requete);
	if(requete.status===200){
		console.log(JSON.parse(requete.response));
	}else{
		console.log('error ${requete.status}')
	}
}
*/