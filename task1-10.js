"use strict";
import users from "./users.js";
console.log(
    "==================================TASK 1 ==============================="
);
const getUserNames = users => {
    return users.map(user => {
        return user.name;
    });
};
console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.log(
    "==================================TASK 2 ==============================="
);
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => {
        return user.eyeColor === color;
    });
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.log(
    "==================================TASK 3 ==============================="
);
const getUsersWithGender = (users, gender) =>
    users.filter(user => user.gender === gender).map(user => user.name);
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.log(
    "==================================TASK 4 ==============================="
);
const getInactiveUsers = users => {
    return users.filter(user => {
        return !user.isActive;
    });
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.log(
    "==================================TASK 5 ==============================="
);
const getUserWithEmail = (users, email) => {
    return users.find(user => {
        return user.email === email;
    });
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
console.log(
    "==================================TASK 6 ==============================="
);
const getUsersWithAge = (users, min, max) => {
    return users.filter(user => {
        return user.age > min && user.age < max;
    });
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
console.log(
    "==================================TASK 7 ==============================="
);
const calculateTotalBalance = users =>
    users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
console.log(
    "==================================TASK 8 ==============================="
);
const getUsersWithFriend = (users, friendName) =>
    users
        .filter(user => user.friends.find(friend => friend === friendName))
        .map(user => user.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
console.log(
    "==================================TASK 9 ==============================="
);
const getNamesSortedByFriendsCount = users => {
    const sortByFriendsAmount = (a, b) => a.friends.length - b.friends.length;
    return users.sort(sortByFriendsAmount).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.log(
    "==================================TASK 10 ==============================="
);
const getSortedUniqueSkills = users => {
    return users.reduce((skills, user) => {
        skills.push(...user.skills);
        return skills.sort().filter((item, pos) => {
            return skills.indexOf(item) === pos;
        });
    }, []);
};
console.log(getSortedUniqueSkills(users));