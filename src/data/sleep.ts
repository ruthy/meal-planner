import { SleepTip, SleepScheduleItem } from '@/types';

export const SLEEP_STATS = [
  { value: '7\u20138', label: 'Hours Target' },
  { value: '10pm', label: 'Bedtime Goal' },
  { value: '6am', label: 'Wake-up Goal' },
];

export const SLEEP_TIPS: SleepTip[] = [
  {
    title: 'Poor sleep raises ghrelin (hunger hormone) by 28%',
    description:
      'Making you crave sugar and carbs the next day. Even one bad night can make you eat 300\u2013500 extra calories without realising it.',
  },
  {
    title: 'Deep sleep is when your body burns fat',
    description:
      '70% of growth hormone (which breaks down fat and builds muscle) is released during deep sleep. Less sleep = less fat burning.',
  },
  {
    title: 'No screens 1 hour before bed',
    description: 'Blue light from phones blocks melatonin production. Read, stretch, or meditate instead.',
  },
  {
    title: 'Keep your bedroom cool and dark',
    description:
      'Core body temperature must drop to initiate sleep. 18\u201319\u00b0C is ideal for deep sleep and fat burning.',
  },
];

export const SLEEP_SCHEDULE: SleepScheduleItem[] = [
  { time: '6:00 pm', action: 'Light dinner or finish eating' },
  { time: '8:00 pm', action: 'Dim lights \u2014 signal your brain to wind down' },
  { time: '8:30 pm', action: 'No screens \u2014 read, stretch, or meditate' },
  { time: '9:30 pm', action: 'Herbal tea (chamomile or valerian)' },
  { time: '10:00 pm', action: 'Lights out \u2014 target 7\u20138 hours' },
  { time: '6:00 am', action: 'Wake up \u2014 drink 2 glasses of water immediately' },
];
