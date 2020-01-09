// Add yourself. Insert an object at any point - it doesn't matter if you go before someone else as results are randomized.

// please remove the comments before You PR
const pages = [
  {
    name: 'Wes Bos',
    // Short description
    description:
      'Maker of this site. Web Developer, Tutorial Maker, Podcaster, BBQ Lover',
    // URL to your /uses page
    url: 'https://wesbos.com/uses',
    twitter: '@wesbos',
    // An emoji that describes you
    emoji: '🔥',
    // emoji of your country's flag
    country: '🇨🇦',
    // ONE of: apple, windows or linux
    computer: 'apple',
    // iphone or android
    phone: 'iphone',
    // Tags - You can add your own, but please keep it to one word. "Social vape entrepreneur influencer denver" isn't a tag.

    // Dev Tags: Engineer, Developer, Designer, Front End, Back End, Full Stack,
    // Other: Tags: Entrepreneur, Teacher, Podcaster, YouTuber, Blogger, Speaker,
    // Language Tags: JavaScript, PHP, Rails, Ruby, TypeScript, React, Vue, Node
    tags: [
      'Developer',
      'Full Stack',
      'Entrepreneur',
      'Teacher',
      'YouTuber',
      'JavaScript',
      'React',
      'Node',
    ],
  },
  {
    name: 'Troy Forster',
    description: 'Consulting Technology Director and CTO for Hire',
    url: 'https://tforster.com/uses',
    twitter: '@tforster',
    emoji: '',
    country: '🇨🇦',
    computer: 'windows',
    phone: 'android',
    tags: [
      'Engineer',
      'Back End',
      'Front End',
      'Consultant',
      'Entrepreneur',
      'JavaScript',
      'C#',
      'PHP',
      'Serverless',
      'SOA',
      'Enterprise',
    ],
  },
  {
    name: 'Kent C. Dodds',
    description: 'JavaScript Software Engineer, speaker, and trainer',
    url: 'https://kentcdodds.com/uses',
    emoji: '🙌',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'android',
    tags: [
      'Developer',
      'Full Stack',
      'Entrepreneur',
      'Teacher',
      'YouTuber',
      'JavaScript',
      'Testing',
      'React',
      'Speaker',
      'Blogger',
    ],
  },
  {
    name: 'Glenn Reyes',
    description:
      'Independent Software Engineer, trainer & speaker. Into sports & music.',
    url: 'https://glennreyes.com/uses',
    emoji: '💃',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Front End',
      'Entrepreneur',
      'Teacher',
      'JavaScript',
      'React',
      'GraphQL',
      'TypeScript',
      'Speaker',
    ],
  },
  {
    name: 'Adam Jahnke',
    description:
      'Caffiend, motorcyclist, climber, recovering perfectionist. I love to make the complex simple.',
    url: 'https://adamyonk.com/uses',
    emoji: '⤫',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Engineer', 'Full Stack', 'JavaScript', 'Ruby'],
  },
  {
    name: 'Andrew Healey',
    description: 'Software Engineer, Writer, Learner!',
    url: 'https://healeycodes.com/uses',
    emoji: '🦉',
    country: '🇬🇧',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Software Engineer', 'Full Stack', 'JavaScript', 'Python', 'Writer'],
  },
  {
    name: 'Scott Tolinski',
    description: 'Web Developer, Tutorial Maker, Podcaster, Bboy',
    url: 'https://scotttolinski.com/uses',
    emoji: '💪🏻',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Developer', 'FrontEnd', 'Entrepreneur', 'Teacher', 'JavaScript'],
  },
  {
    name: 'Josiah Wiebe',
    description: 'Designer & developer, lifelong learner.',
    url: 'https://jwie.be/uses/',
    emoji: '🚴',
    country: '🇨🇦',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Full Stack',
      'Developer',
      'Designer',
      'Python',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    name: 'Benjamin Lannon',
    description: 'Web Developer, Open Source Contributor, Livestreamer',
    url: 'https://lannonbr.com/uses/',
    emoji: '🎤',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Full Stack',
      'Blogger',
      'Teacher',
      'JavaScript',
      'GraphQL',
    ],
  },
  {
    name: 'Braden Watkins',
    description: 'Student, Full Stack Developer, Lover of all things analog',
    url: 'https://bradenwatkins.dev/uses',
    emoji: '🐐',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Full Stack',
      'Developer',
      'Web Developer',
      'JavaScript',
      'Python',
      'Golang',
    ],
  },
  {
    name: 'Lauro Silva',
    description: 'Software Engineer and Technical Writer',
    url: 'https://laurosilva.com/uses',
    emoji: '😄',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'JavaScript',
      'React',
      'Full Stack',
      'Writer',
      'Independent',
      'Speaker',
      'Blogger',
    ],
  },
  {
    name: 'Nuno Maduro',
    description: 'Software engineer, Open Source contributor, Speaker',
    url: 'https://nunomaduro.com/uses/',
    emoji: '🏄‍♂️',
    country: '🇵🇹',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Engineer',
      'Developer',
      'Speaker',
      'PHP',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    name: 'Adrian Marin',
    description:
      'Product-Minded Software Engineer, Digital nomad, no-nonsense enjoyer of life, friends and family.',
    url: 'https://adrianthedev.com/uses',
    twitter: '@adrianthedev',
    emoji: '🥑',
    country: '🇷🇴',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Developer', 'Full Stack', 'Entrepreneur', 'Rails', 'TypeScript'],
  },
  {
    name: 'Jahir Fiquitiva',
    description: 'Passionate and Creative Full Stack Developer',
    url: 'https://jahir.dev/uses',
    twitter: '@jahirfiquitiva',
    emoji: '💎',
    country: '🇨🇴',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Full Stack',
      'JavaScript',
      'Python',
      'Kotlin',
      'React',
    ],
  },
  {
    name: 'Brad Garropy',
    description:
      'Self taught frontender at Adobe, into lifting and country music.',
    url: 'https://bradgarropy.com/uses',
    twitter: '@bradgarropy',
    emoji: '🤠',
    country: '🇺🇸',
    computer: 'windows',
    phone: 'android',
    tags: [
      'Developer',
      'Front End',
      'Full Stack',
      'Streamer',
      'YouTuber',
      'Blogger',
      'JavaScript',
      'Python',
    ],
  },
  {
    name: 'Abdisalan Mohamud',
    description: 'Software Engineer, blogger, lifetime learner',
    url: 'https://abdisalan.com/uses',
    twitter: '@abdisalan_js',
    emoji: '🤷🏾‍♂️',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Full Stack',
      'Blogger',
      'JavaScript',
      'React',
      'ReasonML',
      'Go',
      'AWS'
    ],
  },
  {
    name: 'Josh Barker',
    description:
      'Front end engineer at Red Ventures. Soccer enthusiast. Lover of stories.',
    url: 'https://joshuabarker.com/uses',
    twitter: '@joshuafbarker',
    emoji: '⚽️',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Developer', 'Front End', 'JavaScript'],
  },
  {
    name: 'Aaron Dunphy',
    description: 'Full Stack Developer, Coffee Lover and Photo Taker',
    url: 'https://aarondunphy.com/uses',
    twitter: '@aaronjohndunphy',
    emoji: '📷',
    country: '🇬🇧',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Full Stack',
      'Back End',
      'Laravel',
      'PHP',
      'JavaScript',
    ],
  },
  {
    name: 'Mohamed Benhida',
    description: 'Web Developer, Open source contributor.',
    url: 'http://mohamedbenhida.com/uses',
    twitter: '@simo_benhida',
    emoji: '🔥',
    country: '🇲🇦',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Full Stack',
      'Entrepreneur',
      'Teacher',
      'Back End',
      'Laravel',
      'Vuejs',
      'Tailwindcss',
      'PHP',
      'JavaScript',
    ],
  },
  {
    name: 'Andrew McCombe',
    // Short description
    description:
      'Experienced full stack web developer with a passion for testing.',
    url: 'https://www.euperia.com/uses',
    twitter: '@euperia',
    emoji: '🏁',
    country: '🇬🇧',
    computer: 'apple',
    phone: 'android',
    tags: [
      'Developer',
      'Full Stack',
      'Back End',
      'Laravel',
      'PHP',
      'JavaScript',
      'Vue',
      'LAMP',
      'ElasticSearch',
      'AWS',
    ],
  },
  {
    name: 'Smakosh',
    description: 'Full stack JavaScript Developer, blogger and speaker.',
    url: 'https://smakosh.com/the-tech-tools-I-use',
    twitter: '@smakosh',
    emoji: '👌',
    country: '🇲🇦',
    computer: 'apple',
    phone: 'android',
    tags: ['Developer', 'Full Stack', 'Entrepreneur', 'Blogger', 'JavaScript'],
  },
  {
    name: 'Pouria Ezzati',
    description: 'Web developer. Digs music, football and a e s t h e t i c s',
    url: 'https://pouria.dev/uses',
    twitter: '@poeti8',
    emoji: '🐬',
    country: '🇮🇷',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Full Stack',
      'Designer',
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
    ],
  },
  {
    name: 'Jonathan Suh',
    description: 'Designer, Developer, Sneakerhead',
    url: 'https://jonsuh.com/uses',
    twitter: '@jonsuh',
    emoji: '👟',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Designer', 'Developer', 'Front End', 'JavaScript', 'React'],
  },
  {
    name: 'Jonathan Speek',
    description: 'Developer & Musician',
    url: 'https://speek.design/uses',
    twitter: '@jonspeek',
    emoji: '🦄',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Full Stack', 'Developer', 'Front End', 'JavaScript', 'React'],
  },
  {
    name: 'Béla Varga',
    description: 'Developer & Designer',
    url: 'http://ecmanauten.de/',
    twitter: '@netzzwerg',
    emoji: '🍺',
    country: '🇩🇪',
    computer: 'apple',
    phone: 'android',
    tags: ['JavaScript', 'Developer', 'Event Organizer', 'Teacher', 'Vue'],
  },
  {
    name: "David O'Trakoun",
    description: 'Software Engineer',
    url: 'https://www.davidosomething.com/uses/',
    twitter: '@davidosomething',
    emoji: '⛄',
    country: '🇺🇸',
    computer: 'linux',
    phone: 'android',
    tags: ['Developer'],
  },
  {
    name: 'Dean Harris',
    description:
      'Front End Developer. Husband. Skateboarder. Occasional blogger',
    url: 'https://deanacus.com/uses/',
    twitter: '@deanacus',
    emoji: '🛹',
    country: '🇦🇺',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Developer', 'Font End', 'JavaScript', 'React', 'Node', 'PHP'],
  },
  {
    name: 'Michael Hoffmann',
    description: 'Freelance Software Engineer',
    url: 'https://www.mokkapps.de/blog/my-development-setup/',
    twitter: '@mokkapps',
    emoji: '🍺',
    country: '🇩🇪',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Developer', 'Blogger', 'Angular'],
  },
  {
    name: 'Michael Le',
    description: 'Software Engineer',
    url: 'https://www.michael1e.com/uses/',
    twitter: '@michaelnle',
    emoji: '🤣',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Engineer',
      'Developer',
      'Full Stack',
      'Front End',
      'Entrepreneur',
      'JavaScript',
      'React',
      'Node',
      'Vue',
    ],
  },
  {
    name: 'Sil van Diepen',
    description: 'Creative Developer',
    url: 'https://www.silvandiepen.nl/uses/',
    twitter: '@silvandiepen',
    emoji: '🐯',
    country: '🇳🇱',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Designer',
      'Illustrator',
      'Photography',
      'Front End',
      'JavaScript',
      'Vue',
      'Node',
      'CSS',
      'Sass',
      'Design Systems',
    ],
  },
  {
    name: 'Kilian Valkhof',
    description: 'User experience developer',
    url: 'https://kilianvalkhof.com/using/',
    twitter: '@kilianvalkhof',
    emoji: '🐧',
    country: '🇳🇱',
    computer: 'linux',
    phone: 'iphone',
    tags: [
      'Developer',
      'Designer',
      'Full stack',
      'Front-end',
      'Entrepreneur',
      'JavaScript',
      'React',
      'Node',
      'Electron',
      'Polypane',
      'Devtools',
    ],
  },
  {
    name: 'Timothy Miller',
    description: 'Web Designer/Developer for hire. Wears lots of hats.',
    url: 'https://timothymiller.dev/uses',
    twitter: '@WebInspectInc',
    emoji: '🥓',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Designer',
      'Front End',
      'Full Stack',
      'Entrepreneur',
      'YouTuber',
      'JavaScript',
      'CSS',
      'PHP',
      'Blogger',
    ],
  },
  {
    name: 'Tim Dorr',
    description:
      'Founder of Spaceship and SalesLoft. Maintainer of Redux and React Router. Dad, husband, and all-around nerd.',
    url: 'https://timdorr.com/',
    twitter: '@timdorr',
    emoji: '🤘',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'android',
    tags: [
      'Developer',
      'Full Stack',
      'Entrepreneur',
      'Investor',
      'JavaScript',
      'TypeScript',
      'Ruby',
      'Go',
      'Elixir',
      'Swift',
      'React',
    ],
  },
  {
    name: 'Christopher Hranj',
    description:
      'Software Engineer, Blogger, Musician, Ultimate player.',
    url: 'https://brodan.biz/uses',
    twitter: '@brodan_',
    emoji: '🍁',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'android',
    tags: [
      'Engineer',
      'Back End',
      'Blogger',
      'Python',
      'Crystal',
    ],
  },
];

export default pages;
