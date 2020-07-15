
let request = require('request');


//appel API pour se logger 

request.get('https://api.external.thegoodseat.fr/loginuser', {
  'auth': {
    'user': 'username',
    'pass': 'WkaejKFztN6Tz1cIPi35M7UcvyYwPZcS6ixumJaP'
  }

});

