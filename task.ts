const users = [
    { name: 'Ahmad', age: 30 },
    { name: 'Yasser', age: 28 },
    { name: 'Jarle', age: 35 },
    { name: 'Svein', age: 61 },
];

const usersAbove28 = [];
users.forEach(user => {
    if (user.age > 28) {
        usersAbove28.push(user);
    }
});

console.log(usersAbove28);


