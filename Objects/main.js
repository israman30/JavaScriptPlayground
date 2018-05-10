var obj, i, j, x = '';
obj = {
    'name':'Israel',
    'age': 42,
    'cars': [
        {'name': 'Ford', 'models':['Fiesta', 'Focus', 'Mustang']},
        {'name': 'BMW', 'models':['320', 'X3', 'X5']},
        {'name' : 'Fiat', 'models' :['500', 'Panda']}
    ]
}

for (i in obj.cars) {
    x += '<h2>' + obj.cars[i].name + '</h2>';
    for (j in obj.cars[i].models) {
        x += obj.cars[i].models[j] + '<br>';
    }
}

document.getElementById('demo').innerHTML = x;