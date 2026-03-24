import { ExercisePlan } from '@/types';

export const EXERCISE_PLANS: ExercisePlan[] = [
  {
    day: 'Monday',
    type: 'Cardio',
    time: '10 min',
    moves: [
      { name: 'March in place', description: '2 min warm-up, lift knees high', videoUrl: 'u1gmWFvEluM' },
      { name: 'Arm circles + side steps', description: '1 min each direction', videoUrl: 'UVMEnIaY8aU' },
      { name: 'Seated leg raises', description: '3 x 15 reps each leg', videoUrl: 'ZLqvDBFHp4E' },
      { name: 'Standing wall push-ups', description: '3 x 10 reps', videoUrl: 'Z57ODV9eGWc' },
      { name: 'Gentle cool-down stretch', description: '2 min', videoUrl: '5hOj0q9ES48' },
    ],
  },
  {
    day: 'Tuesday',
    type: 'Strength',
    time: '12 min',
    moves: [
      { name: 'Chair squats', description: '3 x 12 reps, slow and controlled', videoUrl: 'OViE2ghEop0' },
      { name: 'Standing side leg lifts', description: '3 x 15 each side', videoUrl: '_pdP8wqUyqA' },
      { name: 'Countertop push-ups', description: '3 x 10 reps', videoUrl: 'PkFu8ee6IuY' },
      { name: 'Resistance band rows', description: '3 x 12 reps', videoUrl: 'LSkyinhmA8k' },
      { name: 'Stretch & breathe', description: '2 min', videoUrl: '5hOj0q9ES48' },
    ],
  },
  {
    day: 'Wednesday',
    type: 'Core',
    time: '10 min',
    moves: [
      { name: 'Seated ab twists', description: '3 x 20 reps', videoUrl: '_cD9f078WQ4' },
      { name: 'Pelvic tilts lying down', description: '3 x 15 reps', videoUrl: '44D6Xc2Fkek' },
      { name: 'Bird-dog (on knees)', description: '3 x 10 each side', videoUrl: 'r6xE76wX-5s' },
      { name: 'Hip bridges', description: '3 x 15 reps', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Child pose stretch', description: '2 min', videoUrl: 'nMp3MlTz9fA' },
    ],
  },
  {
    day: 'Thursday',
    type: 'Cardio',
    time: '10 min',
    moves: [
      { name: 'Step side to side', description: '2 min warm-up', videoUrl: '6l-UmEbQvwY' },
      { name: 'Heel raises + arm swing', description: '2 x 30 reps', videoUrl: 'MW2WG5l-fYE' },
      { name: 'Low-impact jumping jacks', description: '2 x 20 reps', videoUrl: 'qhy7VjMqsck' },
      { name: 'March + punch forward', description: '2 min', videoUrl: 'VgFChD5u5kA' },
      { name: 'Cool-down walk in place', description: '2 min', videoUrl: '5hOj0q9ES48' },
    ],
  },
  {
    day: 'Friday',
    type: 'Strength',
    time: '12 min',
    moves: [
      { name: 'Sumo squat hold', description: '3 x 10 reps, 3 sec hold', videoUrl: 'kjlfpqXnyL8' },
      { name: 'Tricep dips on chair', description: '3 x 10 reps', videoUrl: 'rjdpMVtMehw' },
      { name: 'Standing back leg kicks', description: '3 x 15 each leg', videoUrl: '_pdP8wqUyqA' },
      { name: 'Shoulder press (light)', description: '3 x 12 reps', videoUrl: 'Ni5pqcE9vjU' },
      { name: 'Full body stretch', description: '2 min', videoUrl: 'dF965ll2J0c' },
    ],
  },
  {
    day: 'Saturday',
    type: 'Stretch',
    time: '8 min',
    moves: [
      { name: 'Neck & shoulder rolls', description: '2 min, slow and gentle', videoUrl: 'JpaYwJLzElM' },
      { name: 'Standing hip circles', description: '1 min each direction', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Seated hamstring stretch', description: '1 min each leg', videoUrl: 'CrdlJykUdaQ' },
      { name: 'Spinal twist stretch', description: '1 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Deep breathing', description: '2 min', videoUrl: 'DbDoBzGY3vo' },
    ],
  },
  {
    day: 'Sunday',
    type: 'Rest',
    time: '0 min',
    moves: [
      { name: 'Rest day', description: 'Gentle 15-20 min walk outside' },
      { name: 'Drink extra water', description: 'Aim for 10 glasses today' },
      { name: 'Meal prep for the week', description: 'Cook proteins in batches' },
      { name: 'Review your plan for Monday', description: '5 min check-in' },
    ],
  },
];
