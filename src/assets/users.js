export const users = [
  {
    id: 1,
    username: 'nickgarbalau',
    firstName: 'Nick',
    lastName: 'Garbalau',
    origin: 'Moldova',
    email: 'nick.garbalau@gmail.com',
    follows: [],
    followers: ['anastasiamartiniuc'],
    countriesVisited: [
      {
        name: 'Netherlands',
        abbr: 'NL',
      },
    ],
    wantToVisit: [
      {
        name: 'United Kingdom',
        abbr: 'GB',
      },
    ],
    posts: [
      {
        id: 1,
        title: 'I Amsterdam',
        content: 'Very nice city, good smell of cheese',
        likes: 3,
      },
      {
        id: 2,
        title: 'Go in UK with 900 pounds',
        content: 'Is it good or is it bad?',
        likes: 15,
      },
    ],
  },
  {
    id: 2,
    username: 'anastasiamartiniuc',
    firstName: 'Anastasia',
    lastName: 'Martiniuc',
    origin: 'Moldova',
    email: 'a.mart@gmail.com',
    follows: ['nickgarbalau'],
    followers: [],
    countriesVisited: [
      {
        name: 'Poland',
        abbr: 'PL',
      },
      {
        name: 'Netherlands',
        abbr: 'NL',
      },
    ],
    wantToVisit: [
      {
        name: 'Japan',
        abbr: 'JP',
      },
    ],
    posts: [
      {
        id: 1,
        title: 'How I buy things in Primark',
        content: 'I like shopping in Europe, what can I do?',
        likes: 2,
      },
    ],
  },
];
