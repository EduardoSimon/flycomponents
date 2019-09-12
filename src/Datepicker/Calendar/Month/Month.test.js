import React from 'react';
import { shallow } from 'enzyme';
import dayjs from 'dayjs';
import Month from './Month';
import Week from '../Week';
import { monthStartingWeekDates } from '../../../utils/date';

jest.mock('../../../utils/date', () => {
  const dayjs = require('dayjs');
  const startDay = dayjs('2016-11-13');

  return {
    monthStartingWeekDates: jest.fn(locale => [
      startDay.add(1, 'week'),
      startDay.add(2, 'week'),
      startDay.add(3, 'week'),
      startDay.add(4, 'week'),
      startDay.add(5, 'week')
    ])
  };
});

describe('Month', () => {
  test('has 5 weeks', async () => {
    const locale = 'en';
    const startDate = dayjs('2016-11-13');
    const props = {
      onDateClick: () => {},
      selectedDate: '',
      startDate
    };

    const component = shallow(<Month {...props} />, {
      context: { locale }
    });

    await Promise.resolve();

    const month = component.find('tbody');
    const weeks = month.find(Week);

    expect(monthStartingWeekDates.mock.calls).toEqual([[startDate, locale]]);
    expect(weeks).toHaveLength(5);

    monthStartingWeekDates.mockReset();
  });
});
