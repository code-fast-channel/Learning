export const lists = [
    {
      path: '/learning',
      title: 'Learning',
      description: `1) Here we can learn list of all topics.
      2) Ex: Array,Object, Array of Objects, Angular
      `
    },
    {
      path: '/general/quiz',
      title: 'Quiz test',
      description: `1) Here we can learn by writting test.
      2) Ex: Html,Css, Angular
      `
    },
    {
      path: '/general/calculator',
      title: 'Calculator',
      description: `1) Here we can use simple calculator.
      2) Simple calculator
      `
    },
    {
      path: '/general/time-calculator',
      title: 'Date Time calculator',
      description: `1) Basic time and date calculator.
      2) Ex: Difference between two times and date
      `
    },
    // {
    //   path: '/general/chat',
    //   title: 'Chat',
    //   description: `1) Here we can chat to any person.
    //   2) using sockets we can communicate
    //   `
    // },
    {
      path: '/general/games',
      title: 'Game',
      description: `1) Here we can chat to any person.
      2) using sockets we can communicate
      `
    },
    {
      path: '/general/bills',
      title: 'Bills',
      description: `1) Here we can create a quick bill.
      2) Here we can use list of values based on that bill can generate.
      `
    }
  ];

  export const dropdownConfig = {
    selectedValue : null,
    placeholder: '',
    displayName: 'name',
    bindValue: 'value',
    data: [
      {
        name: 'Auto Adjust',
        value: null
      },
      {
        name: '1frame',
        value:'1'
  
      },
      {
        name: '2frame',
        value:'2'
        
      },
      {
        name: '3frame',
        value:'3'
      }
    ]
};