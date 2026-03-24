import { ExercisePlan } from '@/types';

export const EXERCISE_39_DAYS: ExercisePlan[] = [
  // ═══════════════════════════════════════════════
  // PHASE 1: FOUNDATION (Days 1–13)
  // ═══════════════════════════════════════════════

  // Day 1 — Lower Body Intro
  {
    day: 'Day 1',
    type: 'Lower Body',
    time: '15 min',
    moves: [
      { name: 'Bodyweight Squats', description: '2 x 10 reps, slow and controlled', videoUrl: 'OViE2ghEop0' },
      { name: 'Wall Sit Hold', description: '2 x 15 sec' },
      { name: 'Standing Calf Raises', description: '2 x 12 reps', videoUrl: 'MW2WG5l-fYE' },
      { name: 'Glute Bridges', description: '2 x 10 reps', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Standing Quad Stretch', description: '30 sec each leg' },
    ],
  },

  // Day 2 — Upper Body Intro
  {
    day: 'Day 2',
    type: 'Upper Body',
    time: '15 min',
    moves: [
      { name: 'Wall Push-ups', description: '2 x 8 reps', videoUrl: 'Z57ODV9eGWc' },
      { name: 'Arm Circles', description: '1 min each direction', videoUrl: 'UVMEnIaY8aU' },
      { name: 'Tricep Dips on Chair', description: '2 x 8 reps', videoUrl: 'rjdpMVtMehw' },
      { name: 'Shoulder Taps in Plank', description: '2 x 6 each side' },
      { name: 'Chest Stretch', description: '30 sec' },
    ],
  },

  // Day 3 — Core Basics
  {
    day: 'Day 3',
    type: 'Core',
    time: '15 min',
    moves: [
      { name: 'Pelvic Tilts Lying Down', description: '2 x 12 reps', videoUrl: '44D6Xc2Fkek' },
      { name: 'Dead Bugs', description: '2 x 8 each side' },
      { name: 'Bird Dog Hold', description: '2 x 10 sec each side', videoUrl: 'r6xE76wX-5s' },
      { name: 'Seated Ab Twists', description: '2 x 10 reps', videoUrl: '_cD9f078WQ4' },
      { name: "Child's Pose", description: '1 min', videoUrl: 'nMp3MlTz9fA' },
    ],
  },

  // Day 4 — Cardio Light
  {
    day: 'Day 4',
    type: 'Cardio',
    time: '15 min',
    moves: [
      { name: 'March in Place', description: '3 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Step Touch Side to Side', description: '2 min' },
      { name: 'Gentle Arm Swings', description: '1 min' },
      { name: 'Standing Knee Lifts', description: '2 x 10 each leg' },
      { name: 'Cool Down Stretch', description: '2 min', videoUrl: '5hOj0q9ES48' },
    ],
  },

  // Day 5 — Full Body Easy
  {
    day: 'Day 5',
    type: 'Full Body',
    time: '15 min',
    moves: [
      { name: 'Chair Squats', description: '2 x 10 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Wall Push-ups', description: '2 x 10 reps', videoUrl: 'Z57ODV9eGWc' },
      { name: 'Standing Side Leg Lifts', description: '2 x 10 each side', videoUrl: '_pdP8wqUyqA' },
      { name: 'Seated Twists', description: '2 x 12 reps', videoUrl: '_cD9f078WQ4' },
      { name: 'Full Body Stretch', description: '3 min', videoUrl: 'dF965ll2J0c' },
    ],
  },

  // Day 6 — Lower Body Focus
  {
    day: 'Day 6',
    type: 'Lower Body',
    time: '18 min',
    moves: [
      { name: 'Sumo Squats', description: '2 x 10 reps', videoUrl: 'kjlfpqXnyL8' },
      { name: 'Forward Lunges Holding Chair', description: '2 x 8 each leg' },
      { name: 'Calf Raises', description: '2 x 15 reps', videoUrl: 'MW2WG5l-fYE' },
      { name: 'Glute Bridges', description: '2 x 12 reps', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Hamstring Stretch', description: '1 min', videoUrl: 'CrdlJykUdaQ' },
    ],
  },

  // Day 7 — Active Recovery
  {
    day: 'Day 7',
    type: 'Stretch',
    time: '15 min',
    moves: [
      { name: 'Neck and Shoulder Rolls', description: '2 min', videoUrl: 'JpaYwJLzElM' },
      { name: 'Cat-Cow Stretch', description: '1 min' },
      { name: 'Seated Hamstring Stretch', description: '1 min each leg', videoUrl: 'CrdlJykUdaQ' },
      { name: 'Spinal Twist', description: '1 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Deep Breathing', description: '3 min', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 8 — Upper Body Build
  {
    day: 'Day 8',
    type: 'Upper Body',
    time: '16 min',
    moves: [
      { name: 'Wall Push-ups', description: '2 x 12 reps', videoUrl: 'Z57ODV9eGWc' },
      { name: 'Bicep Curls with Water Bottles', description: '2 x 10 reps' },
      { name: 'Overhead Press with Bottles', description: '2 x 10 reps' },
      { name: 'Arm Circles', description: '2 min', videoUrl: 'UVMEnIaY8aU' },
      { name: 'Tricep Stretch', description: '1 min' },
    ],
  },

  // Day 9 — Core Strength
  {
    day: 'Day 9',
    type: 'Core',
    time: '15 min',
    moves: [
      { name: 'Plank Hold on Knees', description: '2 x 15 sec' },
      { name: 'Bird Dog', description: '2 x 8 each side', videoUrl: 'r6xE76wX-5s' },
      { name: 'Pelvic Tilts', description: '2 x 15 reps', videoUrl: '44D6Xc2Fkek' },
      { name: 'Dead Bugs', description: '2 x 10 each side' },
      { name: 'Spinal Twist Stretch', description: '1 min', videoUrl: 'qEVNj4tcr0Y' },
    ],
  },

  // Day 10 — Cardio Step Up
  {
    day: 'Day 10',
    type: 'Cardio',
    time: '15 min',
    moves: [
      { name: 'March in Place', description: '2 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Boxing Punches Standing', description: '2 min' },
      { name: 'Step Touches with Arms', description: '2 min' },
      { name: 'Heel Touches Forward', description: '2 x 12 reps' },
      { name: 'Cool Down Stretch', description: '2 min', videoUrl: '5hOj0q9ES48' },
    ],
  },

  // Day 11 — Lower + Core
  {
    day: 'Day 11',
    type: 'Lower Body + Core',
    time: '17 min',
    moves: [
      { name: 'Squats', description: '2 x 12 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Side Leg Lifts', description: '2 x 12 each side', videoUrl: '_pdP8wqUyqA' },
      { name: 'Glute Bridges with Hold', description: '2 x 10 reps', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Seated Twists', description: '2 x 15 reps', videoUrl: '_cD9f078WQ4' },
      { name: 'Quad Stretch', description: '1 min' },
    ],
  },

  // Day 12 — Upper + Cardio
  {
    day: 'Day 12',
    type: 'Upper Body + Cardio',
    time: '17 min',
    moves: [
      { name: 'Wall Push-ups', description: '3 x 8 reps', videoUrl: 'Z57ODV9eGWc' },
      { name: 'March with Arm Punches', description: '3 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Shoulder Press with Bottles', description: '2 x 12 reps' },
      { name: 'Arm Circles Fast', description: '1 min', videoUrl: 'UVMEnIaY8aU' },
      { name: 'Chest Stretch', description: '1 min' },
    ],
  },

  // Day 13 — Full Body Review
  {
    day: 'Day 13',
    type: 'Full Body',
    time: '18 min',
    moves: [
      { name: 'Chair Squats', description: '2 x 12 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Wall Push-ups', description: '2 x 12 reps', videoUrl: 'Z57ODV9eGWc' },
      { name: 'Bird Dog', description: '2 x 10 each side', videoUrl: 'r6xE76wX-5s' },
      { name: 'March in Place', description: '3 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Full Body Stretch', description: '3 min', videoUrl: 'dF965ll2J0c' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PHASE 2: BUILD (Days 14–26)
  // ═══════════════════════════════════════════════

  // Day 14 — Lower Power
  {
    day: 'Day 14',
    type: 'Lower Body',
    time: '18 min',
    moves: [
      { name: 'Squats', description: '3 x 12 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Reverse Lunges', description: '2 x 10 each leg' },
      { name: 'Sumo Squat Hold', description: '2 x 20 sec', videoUrl: 'kjlfpqXnyL8' },
      { name: 'Calf Raises', description: '3 x 15 reps', videoUrl: 'MW2WG5l-fYE' },
      { name: 'Hamstring Stretch', description: '1 min', videoUrl: 'CrdlJykUdaQ' },
    ],
  },

  // Day 15 — Upper Strength
  {
    day: 'Day 15',
    type: 'Upper Body',
    time: '18 min',
    moves: [
      { name: 'Wall Push-ups', description: '3 x 10 reps', videoUrl: 'Z57ODV9eGWc' },
      { name: 'Bicep Curls', description: '3 x 10 reps' },
      { name: 'Tricep Dips', description: '2 x 10 reps', videoUrl: 'rjdpMVtMehw' },
      { name: 'Overhead Press', description: '2 x 12 reps' },
      { name: 'Arm Stretch', description: '2 min' },
    ],
  },

  // Day 16 — Core Challenge
  {
    day: 'Day 16',
    type: 'Core',
    time: '16 min',
    moves: [
      { name: 'Plank on Knees', description: '2 x 20 sec' },
      { name: 'Dead Bugs', description: '2 x 12 each side' },
      { name: 'Bird Dog with Reach', description: '2 x 10 each side', videoUrl: 'r6xE76wX-5s' },
      { name: 'Modified Bicycle Crunches', description: '2 x 10 reps' },
      { name: "Child's Pose", description: '1 min', videoUrl: 'nMp3MlTz9fA' },
    ],
  },

  // Day 17 — Cardio Burn
  {
    day: 'Day 17',
    type: 'Cardio',
    time: '18 min',
    moves: [
      { name: 'March Fast', description: '2 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Boxing Combos', description: '3 min' },
      { name: 'Step Touch with Reaches', description: '2 min' },
      { name: 'Knee Lifts', description: '2 x 15 each leg' },
      { name: 'Cool Down Stretch', description: '2 min', videoUrl: '5hOj0q9ES48' },
    ],
  },

  // Day 18 — Legs + Glutes
  {
    day: 'Day 18',
    type: 'Lower Body',
    time: '18 min',
    moves: [
      { name: 'Squats', description: '3 x 12 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Single Leg Glute Bridge', description: '2 x 8 each leg', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Side Leg Lifts', description: '3 x 12 each side', videoUrl: '_pdP8wqUyqA' },
      { name: 'Wall Sit', description: '2 x 20 sec' },
      { name: 'Quad Stretch', description: '1 min' },
    ],
  },

  // Day 19 — Arms + Shoulders
  {
    day: 'Day 19',
    type: 'Upper Body',
    time: '18 min',
    moves: [
      { name: 'Counter Push-ups', description: '3 x 10 reps' },
      { name: 'Lateral Arm Raises with Bottles', description: '2 x 12 reps' },
      { name: 'Bicep Curls', description: '3 x 12 reps' },
      { name: 'Tricep Dips', description: '3 x 10 reps', videoUrl: 'rjdpMVtMehw' },
      { name: 'Shoulder Stretch', description: '1 min' },
    ],
  },

  // Day 20 — Core + Balance
  {
    day: 'Day 20',
    type: 'Core',
    time: '17 min',
    moves: [
      { name: 'Plank Hold', description: '2 x 25 sec' },
      { name: 'Standing Single Leg Hold', description: '2 x 15 sec each side' },
      { name: 'Seated Twists', description: '3 x 15 reps', videoUrl: '_cD9f078WQ4' },
      { name: 'Bird Dog Slow', description: '2 x 12 each side', videoUrl: 'r6xE76wX-5s' },
      { name: 'Spinal Twist', description: '1 min', videoUrl: 'qEVNj4tcr0Y' },
    ],
  },

  // Day 21 — Active Recovery
  {
    day: 'Day 21',
    type: 'Stretch',
    time: '15 min',
    moves: [
      { name: 'Full Body Gentle Stretch', description: '5 min', videoUrl: 'dF965ll2J0c' },
      { name: 'Neck Rolls', description: '2 min', videoUrl: 'JpaYwJLzElM' },
      { name: 'Hip Circles Standing', description: '2 min' },
      { name: 'Deep Breathing', description: '3 min', videoUrl: 'DbDoBzGY3vo' },
      { name: 'Cat-Cow', description: '2 min' },
    ],
  },

  // Day 22 — Circuit Lower
  {
    day: 'Day 22',
    type: 'Lower Body',
    time: '18 min',
    moves: [
      { name: 'Squats to Calf Raise', description: '3 x 10 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Lunges Alternating', description: '2 x 10 each leg' },
      { name: 'Glute Bridge March', description: '2 x 10 reps', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Side Steps', description: '2 x 12 each side' },
      { name: 'Hamstring Stretch', description: '1 min', videoUrl: 'CrdlJykUdaQ' },
    ],
  },

  // Day 23 — Circuit Upper
  {
    day: 'Day 23',
    type: 'Upper Body',
    time: '18 min',
    moves: [
      { name: 'Counter Push-ups', description: '3 x 12 reps' },
      { name: 'Bicep to Overhead Press', description: '2 x 10 reps' },
      { name: 'Arm Circles to Punches', description: '2 min', videoUrl: 'UVMEnIaY8aU' },
      { name: 'Tricep Dips', description: '3 x 10 reps', videoUrl: 'rjdpMVtMehw' },
      { name: 'Full Arm Stretch', description: '2 min' },
    ],
  },

  // Day 24 — Core Blast
  {
    day: 'Day 24',
    type: 'Core',
    time: '17 min',
    moves: [
      { name: 'Plank', description: '2 x 30 sec' },
      { name: 'Dead Bug Slow', description: '3 x 10 each side' },
      { name: 'Bicycle Crunches', description: '2 x 12 each side' },
      { name: 'Pelvic Tilt to Bridge', description: '2 x 12 reps', videoUrl: '44D6Xc2Fkek' },
      { name: "Child's Pose", description: '1 min', videoUrl: 'nMp3MlTz9fA' },
    ],
  },

  // Day 25 — Cardio Mix
  {
    day: 'Day 25',
    type: 'Cardio',
    time: '18 min',
    moves: [
      { name: 'March with High Knees', description: '3 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Boxing with Steps', description: '3 min' },
      { name: 'Step Touch Fast', description: '2 min' },
      { name: 'Standing Twist Punches', description: '2 min' },
      { name: 'Cool Down Stretch', description: '2 min', videoUrl: '5hOj0q9ES48' },
    ],
  },

  // Day 26 — Total Body
  {
    day: 'Day 26',
    type: 'Full Body',
    time: '20 min',
    moves: [
      { name: 'Squats', description: '3 x 12 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Counter Push-ups', description: '3 x 10 reps' },
      { name: 'Bird Dog', description: '3 x 10 each side', videoUrl: 'r6xE76wX-5s' },
      { name: 'March with Punches', description: '3 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Full Body Stretch', description: '3 min', videoUrl: 'dF965ll2J0c' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PHASE 3: TRANSFORM (Days 27–39)
  // ═══════════════════════════════════════════════

  // Day 27 — Lower Power+
  {
    day: 'Day 27',
    type: 'Lower Body',
    time: '20 min',
    moves: [
      { name: 'Squat to Calf Raise', description: '3 x 12 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Walking Lunges', description: '2 x 10 each leg' },
      { name: 'Single Leg Bridge', description: '2 x 10 each leg', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Sumo Squat Pulse', description: '2 x 15 reps', videoUrl: 'kjlfpqXnyL8' },
      { name: 'Leg Stretch', description: '2 min' },
    ],
  },

  // Day 28 — Upper Power+
  {
    day: 'Day 28',
    type: 'Upper Body',
    time: '20 min',
    moves: [
      { name: 'Counter Push-ups', description: '3 x 12 reps' },
      { name: 'Bicep Curl to Press', description: '3 x 10 reps' },
      { name: 'Tricep Dips', description: '3 x 12 reps', videoUrl: 'rjdpMVtMehw' },
      { name: 'Lateral Raises', description: '3 x 12 reps' },
      { name: 'Arm Stretch', description: '2 min' },
    ],
  },

  // Day 29 — Core Power+
  {
    day: 'Day 29',
    type: 'Core',
    time: '18 min',
    moves: [
      { name: 'Plank', description: '2 x 35 sec' },
      { name: 'Dead Bug Cross', description: '3 x 10 each side' },
      { name: 'Slow Mountain Climbers', description: '2 x 10 each side' },
      { name: 'Seated Twist with Hold', description: '3 x 12 reps', videoUrl: '_cD9f078WQ4' },
      { name: 'Spinal Twist', description: '1 min', videoUrl: 'qEVNj4tcr0Y' },
    ],
  },

  // Day 30 — Cardio Power+
  {
    day: 'Day 30',
    type: 'Cardio',
    time: '20 min',
    moves: [
      { name: 'Fast March', description: '3 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Boxing Power Combos', description: '4 min' },
      { name: 'Side Shuffle Steps', description: '2 min' },
      { name: 'Knee Lift to Twist', description: '2 x 12 each side' },
      { name: 'Cool Down Stretch', description: '2 min', videoUrl: '5hOj0q9ES48' },
    ],
  },

  // Day 31 — Total Body Circuit
  {
    day: 'Day 31',
    type: 'Full Body',
    time: '20 min',
    moves: [
      { name: 'Squats', description: '15 reps — repeat circuit 3x', videoUrl: 'OViE2ghEop0' },
      { name: 'Push-ups', description: '10 reps — repeat circuit 3x', videoUrl: 'Z57ODV9eGWc' },
      { name: 'Bird Dogs', description: '10 each side — repeat circuit 3x', videoUrl: 'r6xE76wX-5s' },
      { name: 'March in Place', description: '1 min — repeat circuit 3x', videoUrl: 'u1gmWFvEluM' },
      { name: 'Full Body Stretch', description: '2 min', videoUrl: 'dF965ll2J0c' },
    ],
  },

  // Day 32 — Legs Sculpt
  {
    day: 'Day 32',
    type: 'Lower Body',
    time: '20 min',
    moves: [
      { name: 'Pulse Squats', description: '3 x 15 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Curtsy Lunges', description: '2 x 10 each leg' },
      { name: 'Bridge Hold', description: '2 x 30 sec', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Standing Kickbacks', description: '2 x 12 each leg' },
      { name: 'Leg Stretch', description: '2 min' },
    ],
  },

  // Day 33 — Arms Sculpt
  {
    day: 'Day 33',
    type: 'Upper Body',
    time: '20 min',
    moves: [
      { name: 'Narrow Push-ups on Counter', description: '3 x 10 reps' },
      { name: 'Hammer Curls', description: '3 x 12 reps' },
      { name: 'Overhead Tricep Extension', description: '2 x 12 reps' },
      { name: 'Front and Lateral Raises Combo', description: '2 x 10 reps' },
      { name: 'Arm Stretch', description: '2 min' },
    ],
  },

  // Day 34 — Active Recovery
  {
    day: 'Day 34',
    type: 'Stretch',
    time: '15 min',
    moves: [
      { name: 'Cat-Cow Flow', description: '3 min' },
      { name: 'Downward Dog Modification', description: '2 min' },
      { name: "Child's Pose", description: '2 min', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Hip Stretch and Spinal Twist', description: '5 min', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Deep Breathing', description: '3 min', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 35 — Core Finisher
  {
    day: 'Day 35',
    type: 'Core',
    time: '18 min',
    moves: [
      { name: 'Plank', description: '2 x 40 sec' },
      { name: 'Dead Bugs', description: '3 x 12 each side' },
      { name: 'Bicycle Crunches', description: '3 x 12 each side' },
      { name: 'Pelvic Tilt to Bridge to March', description: '2 x 10 reps', videoUrl: '44D6Xc2Fkek' },
      { name: 'Full Body Stretch', description: '2 min', videoUrl: 'dF965ll2J0c' },
    ],
  },

  // Day 36 — Cardio Finisher
  {
    day: 'Day 36',
    type: 'Cardio',
    time: '20 min',
    moves: [
      { name: 'March with Punches', description: '3 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Speed Step Touches', description: '3 min' },
      { name: 'Boxing + Knee Lifts Combo', description: '3 min' },
      { name: 'Standing Twists Fast', description: '2 min' },
      { name: 'Cool Down Stretch', description: '3 min', videoUrl: '5hOj0q9ES48' },
    ],
  },

  // Day 37 — Total Body Strength
  {
    day: 'Day 37',
    type: 'Full Body',
    time: '20 min',
    moves: [
      { name: 'Squats', description: '3 x 15 reps', videoUrl: 'OViE2ghEop0' },
      { name: 'Counter Push-ups', description: '3 x 12 reps' },
      { name: 'Single Leg Bridge', description: '3 x 10 each leg', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Bird Dog with Reach', description: '3 x 10 each side', videoUrl: 'r6xE76wX-5s' },
      { name: 'Full Body Stretch', description: '3 min', videoUrl: 'dF965ll2J0c' },
    ],
  },

  // Day 38 — Final Push Circuit
  {
    day: 'Day 38',
    type: 'Full Body',
    time: '20 min',
    moves: [
      { name: 'Squats', description: '12 reps — repeat circuit 3x', videoUrl: 'OViE2ghEop0' },
      { name: 'Push-ups', description: '10 reps — repeat circuit 3x', videoUrl: 'Z57ODV9eGWc' },
      { name: 'Plank', description: '20 sec — repeat circuit 3x' },
      { name: 'Lunges', description: '10 each leg — repeat circuit 3x' },
      { name: 'Celebration Stretch', description: '3 min', videoUrl: 'dF965ll2J0c' },
    ],
  },

  // Day 39 — Celebration + Stretch
  {
    day: 'Day 39',
    type: 'Stretch',
    time: '20 min',
    moves: [
      { name: 'Light March', description: '3 min', videoUrl: 'u1gmWFvEluM' },
      { name: 'Gentle Full Body Movements', description: '3 min' },
      { name: 'Complete Stretch Routine', description: '10 min — every muscle group', videoUrl: 'dF965ll2J0c' },
      { name: 'Deep Breathing and Reflection', description: '3 min', videoUrl: 'DbDoBzGY3vo' },
    ],
  },
];
