export const employees = [
    { id: '1', name: 'Prathyusha', designation: 'Software Engineer' },
    { id: '2', name: 'Divya', designation: 'Project Manager' },
    { id: '3', name: 'Chaitanya', designation: 'Project Manager' },
    { id: '3', name: 'Bhumika', designation: 'Project Manager' },
  ];

 export const verticals = [
    { name: 'DE', employeeCount: 136 },
    { name: 'CDE', employeeCount: 135 },
    { name: 'Heritage', employeeCount: 100},
    { name: 'HR', employeeCount: 50},
    { name: 'Talent Acquisition', employeeCount: 30},
  ];

 export const posts = [
    {
      id: 1,
      type: 'Anniversary',
      comment: 'Happy Anniversary! Wishing you many more years of success.',
      name: 'Chaitanya',
      date: '2024-09-30',
      image:  require('./Assets/anniversarypic.jpg'),
    },
    {
      id: 2,
      type: 'Birthday',
      comment: 'Happy Birthday! Have an amazing year ahead.',
      name: 'Zeenath',
      date: '2024-09-25',
      image:  require('./Assets/birthdaypic.png'),
    },
    {
      id: 3,
      type: 'Comment',
      comment: 'This is a comment, which can be longer than expected and might need to be truncated.',
      name: 'Chetan',
      date: '2024-09-20',
    },
  ];

 export const events = [
    {
      id: 1,
      eventType: 'Open House',
      duration: '30 Min',
      description: 'Open house event description here.',
      createdBy: 'Admin',
      dateTime: '2024-10-05 10:00 AM',
      image: require('./Assets/openhousepic.png'),
    },
  ];

export const phoneNumberRegex = /^[0-9]*$/;