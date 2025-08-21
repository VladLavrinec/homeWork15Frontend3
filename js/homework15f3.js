// МАСИВ З ЯКИМ МИ ПРАЦЮЄМО

const users = [
  {
    name: 'Moore Hensley',
    balance: 3621,
    friends: ['Sharlene Bush'],
    skills: ['ipsum', 'lorem', 'velit'],
  },
  {
    name: 'Sharlene Bush',
    balance: 2082,
    friends: ['Briana Decker', 'Sheree Anthony'],
    skills: ['tempor', 'mollit', 'velit', 'veniam'],
  },
  {
    name: 'Elma Head',
    balance: 3976,
    friends: ['Goldie Gentry', 'Briana Decker'],
    skills: ['adipisicing', 'anim', 'mollit', 'non'],
  },
  {
    name: 'Carey Barr',
    balance: 9516,
    friends: ['Blackburn Dotson', 'Sharlene Bush'],
    skills: ['ex', 'culpa', 'nostrud'],
  },
  {
    name: 'Blackburn Dotson',
    balance: 3908,
    friends: ['Jacklyn Lucas', 'Carey Barr'],
    skills: ['anim', 'nulla', 'proident', 'ipsum'],
  },
  {
    name: 'Sheree Anthony',
    balance: 2764,
    friends: ['Goldie Gentry', 'Briana Decker'],
    skills: ['lorem', 'veniam', 'culpa'],
  },
  {
    name: 'Ross Vazquez',
    balance: 1987,
    friends: ['Marilyn Monroe', 'Elma Head'],
    skills: ['elit', 'anim', 'commodo', 'irure'],
  },
];

// Завдання 1

// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 27854

// Завдання 2

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((acc, user) => {
    if (user.friends.includes(friendName)) {
      acc.push(user.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Завдання 3

// Масив імен (поле name) людей, 
// відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
// 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 
// 'Ross Vazquez' ]

// Завдання 4

// Отримати масив всіх умінь всіх користувачів (поле skills),
//  при цьому не має бути повторюваних умінь і вони повинні 
// бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((acc, user) => {
    user.skills.forEach(skill => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
    });
    return acc;
  }, []);
  return allSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 
// 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 
// 'mollit', 'non', 'nostrud', 'nulla', 'proident', 
// 'tempor', 'velit', 'veniam' ]