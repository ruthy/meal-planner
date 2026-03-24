import { ExercisePlan } from '@/types';

export const EXERCISE_PLANS: ExercisePlan[] = [
  {
    day: 'Monday',
    type: 'Cardio',
    time: '10 min',
    moves: [
      { name: 'March in place', description: '2 min warm-up, lift knees high' },
      { name: 'Arm circles + side steps', description: '1 min each direction' },
      { name: 'Seated leg raises', description: '3 x 15 reps each leg' },
      { name: 'Standing wall push-ups', description: '3 x 10 reps' },
      { name: 'Gentle cool-down stretch', description: '2 min' },
    ],
  },
  {
    day: 'Tuesday',
    type: 'Strength',
    time: '12 min',
    moves: [
      { name: 'Chair squats', description: '3 x 12 reps, slow and controlled' },
      { name: 'Standing side leg lifts', description: '3 x 15 each side' },
      { name: 'Countertop push-ups', description: '3 x 10 reps' },
      { name: 'Resistance band rows', description: '3 x 12 reps' },
      { name: 'Stretch & breathe', description: '2 min' },
    ],
  },
  {
    day: 'Wednesday',
    type: 'Core',
    time: '10 min',
    moves: [
      { name: 'Seated ab twists', description: '3 x 20 reps' },
      { name: 'Pelvic tilts lying down', description: '3 x 15 reps' },
      { name: 'Bird-dog (on knees)', description: '3 x 10 each side' },
      { name: 'Hip bridges', description: '3 x 15 reps' },
      { name: 'Child pose stretch', description: '2 min' },
    ],
  },
  {
    day: 'Thursday',
    type: 'Cardio',
    time: '10 min',
    moves: [
      { name: 'Step side to side', description: '2 min warm-up' },
      { name: 'Heel raises + arm swing', description: '2 x 30 reps' },
      { name: 'Low-impact jumping jacks', description: '2 x 20 reps' },
      { name: 'March + punch forward', description: '2 min' },
      { name: 'Cool-down walk in place', description: '2 min' },
    ],
  },
  {
    day: 'Friday',
    type: 'Strength',
    time: '12 min',
    moves: [
      { name: 'Sumo squat hold', description: '3 x 10 reps, 3 sec hold' },
      { name: 'Tricep dips on chair', description: '3 x 10 reps' },
      { name: 'Standing back leg kicks', description: '3 x 15 each leg' },
      { name: 'Shoulder press (light)', description: '3 x 12 reps' },
      { name: 'Full body stretch', description: '2 min' },
    ],
  },
  {
    day: 'Saturday',
    type: 'Stretch',
    time: '8 min',
    moves: [
      { name: 'Neck & shoulder rolls', description: '2 min, slow and gentle' },
      { name: 'Standing hip circles', description: '1 min each direction' },
      { name: 'Seated hamstring stretch', description: '1 min each leg' },
      { name: 'Spinal twist stretch', description: '1 min each side' },
      { name: 'Deep breathing', description: '2 min' },
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
