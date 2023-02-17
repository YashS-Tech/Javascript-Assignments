/*Q8
Flatten all the data in the input.json file attached into following structure:
Only the key-value pairs given below should be present in the output, rest can be deleted.
*/

//input.json file
const data=
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]


function flattenJsonData(data) {
  const result = {};

  function flatten(obj, prefix = '') {
    for (let key in obj) {
      const propName = prefix + key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flatten(obj[key], propName + '.');
      } else {
        result[propName] = obj[key];
      }
    }
  }

  flatten(data);

  return result;
}

const flattenedData = flattenJsonData(data);

console.log(flattenedData);

/*OUTPUT:
{
  '0.id': 1,
  '0.name': 'Leanne Graham',
  '0.username': 'Bret',
  '0.email': 'Sincere@april.biz',
  '0.address.street': 'Kulas Light',
  '0.address.suite': 'Apt. 556',
  '0.address.city': 'Gwenborough',
  '0.address.zipcode': '92998-3874',
  '0.address.geo.lat': '-37.3159',
  '0.address.geo.lng': '81.1496',
  '0.phone': '1-770-736-8031 x56442',
  '0.website': 'hildegard.org',
  '0.company.name': 'Romaguera-Crona',
  '0.company.catchPhrase': 'Multi-layered client-server neural-net',
  '0.company.bs': 'harness real-time e-markets',
  '1.id': 2,
  '1.name': 'Ervin Howell',
  '1.username': 'Antonette',
  '1.email': 'Shanna@melissa.tv',
  '1.address.street': 'Victor Plains',
  '1.address.suite': 'Suite 879',
  '1.address.city': 'Wisokyburgh',
  '1.address.zipcode': '90566-7771',
  '1.address.geo.lat': '-43.9509',
  '1.address.geo.lng': '-34.4618',
  '1.phone': '010-692-6593 x09125',
  '1.website': 'anastasia.net',
  '1.company.name': 'Deckow-Crist',
  '1.company.catchPhrase': 'Proactive didactic contingency',
  '1.company.bs': 'synergize scalable supply-chains',
  '2.id': 3,
  '2.name': 'Clementine Bauch',
  '2.username': 'Samantha',
  '2.email': 'Nathan@yesenia.net',
  '2.address.street': 'Douglas Extension',
  '2.address.suite': 'Suite 847',
  '2.address.city': 'McKenziehaven',
  '2.address.zipcode': '59590-4157',
  '2.address.geo.lat': '-68.6102',
  '2.address.geo.lng': '-47.0653',
  '2.phone': '1-463-123-4447',
  '2.website': 'ramiro.info',
  '2.company.name': 'Romaguera-Jacobson',
  '2.company.catchPhrase': 'Face to face bifurcated interface',
  '2.company.bs': 'e-enable strategic applications',
  '3.id': 4,
  '3.name': 'Patricia Lebsack',
  '3.username': 'Karianne',
  '3.email': 'Julianne.OConner@kory.org',
  '3.address.street': 'Hoeger Mall',
  '3.address.suite': 'Apt. 692',
  '3.address.city': 'South Elvis',
  '3.address.zipcode': '53919-4257',
  '3.address.geo.lat': '29.4572',
  '3.address.geo.lng': '-164.2990',
  '3.phone': '493-170-9623 x156',
  '3.website': 'kale.biz',
  '3.company.name': 'Robel-Corkery',
  '3.company.catchPhrase': 'Multi-tiered zero tolerance productivity',
  '3.company.bs': 'transition cutting-edge web services',
  '4.id': 5,
  '4.name': 'Chelsey Dietrich',
  '4.username': 'Kamren',
  '4.email': 'Lucio_Hettinger@annie.ca',
  '4.address.street': 'Skiles Walks',
  '4.address.suite': 'Suite 351',
  '4.address.city': 'Roscoeview',
  '4.address.zipcode': '33263',
  '4.address.geo.lat': '-31.8129',
  '4.address.geo.lng': '62.5342',
  '4.phone': '(254)954-1289',
  '4.website': 'demarco.info',
  '4.company.name': 'Keebler LLC',
  '4.company.catchPhrase': 'User-centric fault-tolerant solution',
  '4.company.bs': 'revolutionize end-to-end systems',
  '5.id': 6,
  '5.name': 'Mrs. Dennis Schulist',
  '5.username': 'Leopoldo_Corkery',
  '5.email': 'Karley_Dach@jasper.info',
  '5.address.street': 'Norberto Crossing',
  '5.address.suite': 'Apt. 950',
  '5.address.city': 'South Christy',
  '5.address.zipcode': '23505-1337',
  '5.address.geo.lat': '-71.4197',
  '5.address.geo.lng': '71.7478',
  '5.phone': '1-477-935-8478 x6430',
  '5.website': 'ola.org',
  '5.company.name': 'Considine-Lockman',
  '5.company.catchPhrase': 'Synchronised bottom-line interface',
  '5.company.bs': 'e-enable innovative applications',
  '6.id': 7,
  '6.name': 'Kurtis Weissnat',
  '6.username': 'Elwyn.Skiles',
  '6.email': 'Telly.Hoeger@billy.biz',
  '6.address.street': 'Rex Trail',
  '6.address.suite': 'Suite 280',
  '6.address.city': 'Howemouth',
  '6.address.zipcode': '58804-1099',
  '6.address.geo.lat': '24.8918',
  '6.address.geo.lng': '21.8984',
  '6.phone': '210.067.6132',
  '6.website': 'elvis.io',
  '6.company.name': 'Johns Group',
  '6.company.catchPhrase': 'Configurable multimedia task-force',
  '6.company.bs': 'generate enterprise e-tailers',
  '7.id': 8,
  '7.name': 'Nicholas Runolfsdottir V',
  '7.username': 'Maxime_Nienow',
  '7.email': 'Sherwood@rosamond.me',
  '7.address.street': 'Ellsworth Summit',
  '7.address.suite': 'Suite 729',
  '7.address.city': 'Aliyaview',
  '7.address.zipcode': '45169',
  '7.address.geo.lat': '-14.3990',
  '7.address.geo.lng': '-120.7677',
  '7.phone': '586.493.6943 x140',
  '7.website': 'jacynthe.com',
  '7.company.name': 'Abernathy Group',
  '7.company.catchPhrase': 'Implemented secondary concept',
  '7.company.bs': 'e-enable extensible e-tailers',
  '8.id': 9,
  '8.name': 'Glenna Reichert',
  '8.username': 'Delphine',
  '8.email': 'Chaim_McDermott@dana.io',
  '8.address.street': 'Dayna Park',
  '8.address.suite': 'Suite 449',
  '8.address.city': 'Bartholomebury',
  '8.address.zipcode': '76495-3109',
  '8.address.geo.lat': '24.6463',
  '8.address.geo.lng': '-168.8889',
  '8.phone': '(775)976-6794 x41206',
  '8.website': 'conrad.com',
  '8.company.name': 'Yost and Sons',
  '8.company.catchPhrase': 'Switchable contextually-based project',
  '8.company.bs': 'aggregate real-time technologies',
  '9.id': 10,
  '9.name': 'Clementina DuBuque',
  '9.username': 'Moriah.Stanton',
  '9.email': 'Rey.Padberg@karina.biz',
  '9.address.street': 'Kattie Turnpike',
  '9.address.suite': 'Suite 198',
  '9.address.city': 'Lebsackbury',
  '9.address.zipcode': '31428-2261',
  '9.address.geo.lat': '-38.2386',
  '9.address.geo.lng': '57.2232',
  '9.phone': '024-648-3804',
  '9.website': 'ambrose.net',
  '9.company.name': 'Hoeger LLC',
  '9.company.catchPhrase': 'Centralized empowering task-force',
  '9.company.bs': 'target end-to-end models'
}
*/