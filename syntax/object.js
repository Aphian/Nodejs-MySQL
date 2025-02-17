var members = ['egoing', 'k9900', 'hoya'];
console.log(members[1]);

var i = 0;

while(i < members.length) {
    console.log('array loop :', members[i]);
    i += 1;
}

var roles= {
    'programmer' : 'egoing',
    'designer' : 'k9900',
    'manager' : 'hoya',
}
console.log(roles.manager);
console.log(roles['manager']);

for (var key in roles) {
    console.log('object :', key, ', value :', roles[key]);
}