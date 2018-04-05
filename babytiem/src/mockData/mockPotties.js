import moment from 'moment';

const AdaHarlin = {
  id: 'a',
  firstName: 'Ada',
  lastName: 'Harlin',
  photo: 'https://randomuser.me/api/portraits/lego/1.jpg'
};

const DorianHarlin = {
  id: 'b',
  firstName: 'Dorian',
  lastName: 'Harlin',
  ageInMonths: 12,
  photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
};

const RipleyHarlin = {
  id: 'c',
  firstName: 'Ripley',
  lastName: 'Harlin',
  photo: 'https://randomuser.me/api/portraits/lego/3.jpg'
};

const RadixHarlin = {
  id: 'd',
  firstName: 'Radix',
  lastName: 'Harlin',
  ageInMonths: 12,
  photo: 'https://randomuser.me/api/portraits/lego/4.jpg'
};

const accidentType = {
  icon: 'fire',
  value: 'potty_accident',
  label: 'Potty Accident'
};

const attemptType = {
  icon: 'theme',
  value: 'potty_attempt',
  label: 'Potty Attempt'
};

const lastWeek = daaysago => {
  return moment()
    .subtract(daaysago, 'days')
    .format('dddd, MMM Do, h:mm a')
    .toString();
};

export const mockPotties = [
  {
    id: 1,
    activity: 'potty',
    icon: 'theme',
    date: lastWeek(1),
    type: attemptType,
    notes: '',
    child: RipleyHarlin
  },
  {
    id: 2,
    activity: 'potty',
    icon: 'fire',
    date: lastWeek(2),
    type: accidentType,
    notes: '',
    child: RadixHarlin
  },
  {
    id: 3,
    activity: 'potty',
    icon: 'theme',
    date: lastWeek(3),
    type: accidentType,
    notes: 'Pull Ups leaked',
    child: AdaHarlin
  },
  {
    id: 4,
    activity: 'potty',
    icon: 'theme',
    date: lastWeek(27),
    type: attemptType,
    notes: 'Pull Ups leaked',
    child: AdaHarlin
  },
  {
    id: 5,
    activity: 'potty',
    icon: 'theme',
    date: lastWeek(17),
    type: accidentType,
    notes: '',
    child: DorianHarlin
  },
  {
    id: 6,
    activity: 'potty',
    icon: 'fire',
    date: lastWeek(7),
    type: accidentType,
    notes: '',
    child: AdaHarlin
  },
  {
    id: 7,
    activity: 'potty',
    icon: 'theme',
    date: lastWeek(7),
    type: accidentType,
    notes: '',
    child: AdaHarlin
  },
  {
    id: 8,
    activity: 'potty',
    icon: 'theme',
    date: lastWeek(67),
    type: accidentType,
    notes: '',
    child: AdaHarlin
  },
  {
    id: 9,
    activity: 'potty',
    icon: 'theme',
    date: lastWeek(7),
    type: accidentType,
    notes: '',
    child: AdaHarlin
  },
  {
    id: 10,
    activity: 'potty',
    icon: 'fire',
    date: lastWeek(7),
    type: attemptType,
    notes: '',
    child: DorianHarlin
  },
  {
    id: 11,
    activity: 'potty',
    icon: 'fire',
    date: lastWeek(7),
    type: attemptType,
    notes: '',
    child: AdaHarlin
  },
  {
    id: 12,
    activity: 'potty',
    icon: 'theme',
    date: lastWeek(7),
    type: accidentType,
    notes: '',
    child: DorianHarlin
  }
];
