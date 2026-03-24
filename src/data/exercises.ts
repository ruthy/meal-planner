import { ExercisePlan } from '@/types';

export const EXERCISE_PLANS: ExercisePlan[] = [
  {
    day: 'Monday',
    type: 'Cardio',
    time: '10 min',
    moves: [
      {
        name: 'March in place',
        description: '2 min warm-up, lift knees high',
        videoUrl: 'https://www.youtube.com/results?search_query=march+in+place+exercise+for+seniors+beginner',
      },
      {
        name: 'Arm circles + side steps',
        description: '1 min each direction',
        videoUrl: 'https://www.youtube.com/results?search_query=arm+circles+side+steps+low+impact+seniors',
      },
      {
        name: 'Seated leg raises',
        description: '3 x 15 reps each leg',
        videoUrl: 'https://www.youtube.com/results?search_query=seated+leg+raises+for+seniors+beginner',
      },
      {
        name: 'Standing wall push-ups',
        description: '3 x 10 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=standing+wall+push+ups+for+seniors',
      },
      {
        name: 'Gentle cool-down stretch',
        description: '2 min',
        videoUrl: 'https://www.youtube.com/results?search_query=gentle+cool+down+stretch+for+seniors',
      },
    ],
  },
  {
    day: 'Tuesday',
    type: 'Strength',
    time: '12 min',
    moves: [
      {
        name: 'Chair squats',
        description: '3 x 12 reps, slow and controlled',
        videoUrl: 'https://www.youtube.com/results?search_query=chair+squats+for+seniors+beginner',
      },
      {
        name: 'Standing side leg lifts',
        description: '3 x 15 each side',
        videoUrl: 'https://www.youtube.com/results?search_query=standing+side+leg+lifts+for+seniors',
      },
      {
        name: 'Countertop push-ups',
        description: '3 x 10 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=countertop+push+ups+for+seniors+beginner',
      },
      {
        name: 'Resistance band rows',
        description: '3 x 12 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=resistance+band+rows+for+seniors+beginner',
      },
      {
        name: 'Stretch & breathe',
        description: '2 min',
        videoUrl: 'https://www.youtube.com/results?search_query=stretch+and+breathe+cool+down+for+seniors',
      },
    ],
  },
  {
    day: 'Wednesday',
    type: 'Core',
    time: '10 min',
    moves: [
      {
        name: 'Seated ab twists',
        description: '3 x 20 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=seated+ab+twists+for+seniors+beginner',
      },
      {
        name: 'Pelvic tilts lying down',
        description: '3 x 15 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=pelvic+tilts+lying+down+for+seniors',
      },
      {
        name: 'Bird-dog (on knees)',
        description: '3 x 10 each side',
        videoUrl: 'https://www.youtube.com/results?search_query=bird+dog+exercise+on+knees+for+seniors',
      },
      {
        name: 'Hip bridges',
        description: '3 x 15 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=hip+bridges+exercise+for+seniors+beginner',
      },
      {
        name: 'Child pose stretch',
        description: '2 min',
        videoUrl: 'https://www.youtube.com/results?search_query=child+pose+stretch+for+seniors+beginner',
      },
    ],
  },
  {
    day: 'Thursday',
    type: 'Cardio',
    time: '10 min',
    moves: [
      {
        name: 'Step side to side',
        description: '2 min warm-up',
        videoUrl: 'https://www.youtube.com/results?search_query=step+side+to+side+cardio+for+seniors',
      },
      {
        name: 'Heel raises + arm swing',
        description: '2 x 30 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=heel+raises+arm+swing+exercise+for+seniors',
      },
      {
        name: 'Low-impact jumping jacks',
        description: '2 x 20 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=low+impact+jumping+jacks+for+seniors',
      },
      {
        name: 'March + punch forward',
        description: '2 min',
        videoUrl: 'https://www.youtube.com/results?search_query=march+and+punch+forward+exercise+for+seniors',
      },
      {
        name: 'Cool-down walk in place',
        description: '2 min',
        videoUrl: 'https://www.youtube.com/results?search_query=cool+down+walk+in+place+for+seniors',
      },
    ],
  },
  {
    day: 'Friday',
    type: 'Strength',
    time: '12 min',
    moves: [
      {
        name: 'Sumo squat hold',
        description: '3 x 10 reps, 3 sec hold',
        videoUrl: 'https://www.youtube.com/results?search_query=sumo+squat+hold+for+seniors+beginner',
      },
      {
        name: 'Tricep dips on chair',
        description: '3 x 10 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=tricep+dips+on+chair+for+seniors+beginner',
      },
      {
        name: 'Standing back leg kicks',
        description: '3 x 15 each leg',
        videoUrl: 'https://www.youtube.com/results?search_query=standing+back+leg+kicks+for+seniors',
      },
      {
        name: 'Shoulder press (light)',
        description: '3 x 12 reps',
        videoUrl: 'https://www.youtube.com/results?search_query=light+shoulder+press+for+seniors+beginner',
      },
      {
        name: 'Full body stretch',
        description: '2 min',
        videoUrl: 'https://www.youtube.com/results?search_query=full+body+stretch+for+seniors+beginner',
      },
    ],
  },
  {
    day: 'Saturday',
    type: 'Stretch',
    time: '8 min',
    moves: [
      {
        name: 'Neck & shoulder rolls',
        description: '2 min, slow and gentle',
        videoUrl: 'https://www.youtube.com/results?search_query=neck+and+shoulder+rolls+stretch+for+seniors',
      },
      {
        name: 'Standing hip circles',
        description: '1 min each direction',
        videoUrl: 'https://www.youtube.com/results?search_query=standing+hip+circles+for+seniors',
      },
      {
        name: 'Seated hamstring stretch',
        description: '1 min each leg',
        videoUrl: 'https://www.youtube.com/results?search_query=seated+hamstring+stretch+for+seniors',
      },
      {
        name: 'Spinal twist stretch',
        description: '1 min each side',
        videoUrl: 'https://www.youtube.com/results?search_query=spinal+twist+stretch+for+seniors+beginner',
      },
      {
        name: 'Deep breathing',
        description: '2 min',
        videoUrl: 'https://www.youtube.com/results?search_query=deep+breathing+exercise+for+seniors+relaxation',
      },
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
