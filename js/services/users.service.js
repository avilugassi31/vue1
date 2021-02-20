var users = [
    {
        username: 'Avi',
        tvshows: [
            { name: 'harry potter', img: './images/harry-potter.jpg' },
            { name: 'Superman', img: './images/superman.jpg' },
        ],
        img: './images/user1.png',
    },
    {
        username: 'Geva',
        tvshows: [
            { name: 'Batman', img: './images/batman.jpg' },
            { name: 'Mickey', img: './images/mickey.jpg' },
            { name: 'Superman', img: './images/superman.jpg' },
        ],
        img: './images/user2.png',
    },
    {
        username: 'Talia',
        tvshows: [
            { name: 'harry potter', img: './images/harry-potter.jpg' },
            { name: 'Casa De Papel', img: './images/casa.jpg' },
            { name: 'Batman', img: './images/batman.jpg' },
        ],
        img: './images/user3.png',
    },
    {
        username: 'Rafi',
        tvshows: [
            { name: 'harry potter', img: './images/harry-potter.jpg' },
            { name: 'Casa De Papel', img: './images/casa.jpg' },
            { name: 'Superman', img: './images/superman.jpg' },
        ],
        img: './images/user4.png',
    },
    {
        username: 'Assaf',
        tvshows: [
            { name: 'Batman', img: './images/batman.jpg' },
            { name: 'Mickey', img: './images/mickey.jpg' },
            { name: 'Superman', img: './images/superman.jpg' },
        ],
        img: './images/user5.png',
    },
];

var userImages = [
    './images/user1.png',
    './images/user2.png',
    './images/user3.png',
    './images/user4.png',
    './images/user5.png',
];

var userTvShows = [
    { name: 'harry potter', img: './images/harry-potter.jpg' },
    { name: 'Casa De Papel', img: './images/casa.jpg' },
    { name: 'Batman', img: './images/batman.jpg' },
    { name: 'SuperMan', img: './images/superman.jpg' },
    { name: 'Mickey Mouse', img: './images/mickey.jpg' },
];
console.log('userTvShows:', userTvShows);
function getUsers() {
    return users;
}

function removeUser(id) {
    const idx = users.findIndex((user) => user[id] === id);
    users.splice(idx, 1);
}

function addUser(userName) {
    var user = {
        username: userName,
        tvshows: [_getRandomTvShow()],
        img: _getRandomImage(),
    };
    users.push(user);
    console.log(user, users);
    return user;
}

function _getRandomTvShow() {
    return userTvShows[_getRandomIntInclusive(0, userTvShows.length -1)];
}

function _getRandomImage() {
    return userImages[_getRandomIntInclusive(0, userImages.length - 1)];
}

export const userService = {
    addUser,
    removeUser,
    getUsers,
};

function _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
