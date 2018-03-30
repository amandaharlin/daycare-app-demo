import moment from 'moment';

export const mockPotties = [
  {
    id: 1,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .format('ddd, MMM do, h:mm A')
      .toString(),
    type: 'wet diaper',
    notes: '',
    child: {
      id: 'b',
      firstName: 'Dorian',
      lastName: 'Harlin'
    }
  },
  {
    id: 2,
    activity: 'potty',
    icon: 'fire',
    date: moment()
      .subtract(3, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'BM diaper',
    notes: '',
    child: {
      id: 'a',
      firstName: 'Ada',
      lastName: 'Harlin'
    }
  },
  {
    id: 3,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .subtract(4, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'dry diaper',
    notes: 'Pull Ups leaked',
    child: {
      id: 'a',
      firstName: 'Ada',
      lastName: 'Harlin'
    }
  },
  {
    id: 4,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .subtract(4, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'potty attempt',
    notes: 'Pull Ups leaked',
    child: {
      id: 'a',
      firstName: 'Ada',
      lastName: 'Harlin'
    }
  },
  {
    id: 5,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .subtract(5, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'wet diaper',
    notes: '',
    child: {
      id: 'b',
      firstName: 'Dorian',
      lastName: 'Harlin'
    }
  },
  {
    id: 6,
    activity: 'potty',
    icon: 'fire',
    date: moment()
      .subtract(5, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'BM diaper',
    notes: '',
    child: {
      id: 'a',
      firstName: 'Ada',
      lastName: 'Harlin'
    }
  },
  {
    id: 7,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .subtract(6, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'dry diaper',
    notes: '',
    child: {
      id: 'a',
      firstName: 'Ada',
      lastName: 'Harlin'
    }
  },
  {
    id: 8,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .subtract(6, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'potty attempt',
    notes: '',
    child: {
      id: 'a',
      firstName: 'Ada',
      lastName: 'Harlin'
    }
  },
  {
    id: 9,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .subtract(6, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'wet diaper',
    notes: '',
    child: {
      id: 'a',
      firstName: 'Ada',
      lastName: 'Harlin'
    }
  },
  {
    id: 10,
    activity: 'potty',
    icon: 'fire',
    date: moment()
      .subtract(7, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'BM diaper',
    notes: '',
    child: {
      id: 'b',
      firstName: 'Dorian',
      lastName: 'Harlin'
    }
  },
  {
    id: 11,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .subtract(7, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'dry diaper',
    notes: '',
    child: {
      id: 'a',
      firstName: 'Ada',
      lastName: 'Harlin'
    }
  },
  {
    id: 12,
    activity: 'potty',
    icon: 'theme',
    date: moment()
      .subtract(8, 'days')
      .format('dddd, MMM Do, h:mm a')
      .toString(),
    type: 'potty attempt',
    notes: '',
    child: {
      id: 'b',
      firstName: 'Dorian',
      lastName: 'Harlin'
    }
  }
];
