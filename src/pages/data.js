// src/data.js

export const projects = [
  {
    title: 'Trophés',
    //   description: "Description du projet 1. Un projet inspirant.",
    image: '/images/trophés/tro-1.jpg', // Image principale
    images: [
      // "/images/trophés/tro-2.jpg",
      '/images/trophés/tro-3.jpg',
      '/images/trophés/tro-4.jpg',
      '/images/trophés/tro-5.jpg'
    ]
  },
  {
    title: 'Coulisses',
    //   description: "Description du projet 2. Un projet innovant.",
    image: '/images/coulisses/coulisse.jpg', // Image principale
    images: [
      '/images/coulisses/coulisse-2.jpg',
      '/images/coulisses/coulisse-3.jpg',
      '/images/coulisses/coulisse-4.jpg',
      '/images/coulisses/coulisse-5.jpg',
      '/images/coulisses/coulisse-6.jpg',
      '/images/coulisses/coulisse-7.jpg',
      '/images/coulisses/coulisse-8.jpg',
      '/images/coulisses/coulisse-9.jpg',
      '/images/coulisses/coulisse-10.jpg'
    ] // Liste des images du projet
  },
  {
    title: 'Coulisses 2',
    //   description: "Description du projet 2. Un projet innovant.",
    image: '/images/coulisses/coulisse-11.jpg', // Image principale
    images: [
      '/images/coulisses/coulisse-12.jpg',
      '/images/coulisses/coulisse-13.jpg',
      '/images/coulisses/coulisse-14.jpg',
      '/images/coulisses/coulisse-15.jpg',
      '/images/coulisses/coulisse-16.jpg',
      '/images/coulisses/coulisse-17.jpg',
      '/images/coulisses/coulisse-18.jpg',
      '/images/coulisses/coulisse-19.jpg',
      '/images/coulisses/coulisse-20.jpg'
    ] // Liste des images du projet
  }
]

export const events = [
  {
    event: 'Concert de Rock',
    start: new Date(2025, 0, 12, 19, 0),  // 12 Janvier 2025
    end: new Date(2025, 0, 12, 22, 0),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4v0kcYUTXRoBnf9xpMFsVHWPTEKtNiqcPw&s', // Miniature de l'événement
    description: 'Un concert de rock inoubliable.',
  },
  {
    event: 'Spectacle de Magie',
    start: new Date(2025, 0, 15, 18, 0),
    end: new Date(2025, 0, 15, 20, 0),
    image: 'https://via.placeholder.com/100x100', // Miniature de l'événement
    description: 'Un spectacle de magie impressionnant.',
  },
  {
    event: 'Comédie Musicale',
    start: new Date(2025, 0, 20, 20, 0),
    end: new Date(2025, 0, 20, 22, 0),
    image: 'https://via.placeholder.com/100x100', // Miniature de l'événement
    description: 'Une comédie musicale spectaculaire.',
  },
];
