import moment, {Moment} from 'moment';

const en = {
  profile: {
    info: [
      'My name is {{name}}, I come from {{country}}',
      {
        name: 'Jack',
        country: 'USA',
      },
    ],
  },
  today: [
    'Current time is: {{time}}',
    {
      time: (time: Moment = moment()) => {
        return time.format('DD/MM/YYYY');
      },
    },
  ],
  button: {
    submit: 'Submit',
    cancel: 'Cancel',
  },
};

export default en;
export type Locale = typeof en;
