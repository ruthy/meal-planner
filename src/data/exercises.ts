import { ExercisePlan } from '@/types';

export const YOGA_30_DAYS: ExercisePlan[] = [
  // ═══════════════════════════════════════════════
  // WEEK 1: GENTLE FOUNDATIONS (Days 1–7)
  // ═══════════════════════════════════════════════

  // Day 1 — Breath & Awareness
  {
    day: 'Day 1',
    type: 'Gentle Flow',
    time: '15 min',
    moves: [
      {
        name: 'Deep breathing (Pranayama)',
        description: '3 min seated, inhale 4 counts, exhale 6 counts',
        videoUrl: 'DbDoBzGY3vo',
      },
      {
        name: 'Mountain pose (Tadasana)',
        description: '1 min, focus on alignment and grounding',
        videoUrl: 'Y0GDgQqt-bA',
      },
      { name: 'Cat-Cow stretch', description: '2 min, sync breath with movement', videoUrl: 'YVE4XLKV_Xo' },
      { name: "Child's pose (Balasana)", description: '2 min, arms extended forward', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Seated forward fold', description: '2 min, gentle hamstring stretch', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Corpse pose (Savasana)', description: '5 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 2 — Finding Your Foundation
  {
    day: 'Day 2',
    type: 'Standing Basics',
    time: '15 min',
    moves: [
      { name: 'Mountain pose (Tadasana)', description: '2 min, weight evenly distributed', videoUrl: 'Y0GDgQqt-bA' },
      { name: 'Gentle twist (standing)', description: '1 min each side, arms relaxed' },
      { name: 'Warrior I (supported)', description: '1 min each side, use wall for balance', videoUrl: 'DLvnXGygUyQ' },
      {
        name: 'Downward dog (modified)',
        description: '1 min, knees bent, focus on spine length',
        videoUrl: 'Y0GDgQqt-bA',
      },
      { name: 'Bridge pose (Setu Bandhasana)', description: '3 x 30 sec holds', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 3 — Gentle Spine Work
  {
    day: 'Day 3',
    type: 'Flexibility',
    time: '15 min',
    moves: [
      { name: 'Cat-Cow stretch', description: '2 min, slow and mindful', videoUrl: 'YVE4XLKV_Xo' },
      { name: 'Gentle twist (supine)', description: '2 min each side, knees together', videoUrl: 'qEVNj4tcr0Y' },
      { name: "Child's pose (Balasana)", description: '2 min, wide knees variation', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Seated forward fold', description: '2 min, use strap if needed', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Bridge pose (Setu Bandhasana)', description: '3 x 30 sec holds', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Deep breathing (Pranayama)', description: '3 min lying down', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 4 — Balance Intro
  {
    day: 'Day 4',
    type: 'Balance & Focus',
    time: '15 min',
    moves: [
      { name: 'Mountain pose (Tadasana)', description: '2 min, eyes closed for challenge', videoUrl: 'Y0GDgQqt-bA' },
      { name: 'Tree pose (with wall support)', description: '1 min each side, foot on calf', videoUrl: 'ZRS0dXit51Q' },
      {
        name: 'Warrior I (supported)',
        description: '1 min each side, focus on hip alignment',
        videoUrl: 'DLvnXGygUyQ',
      },
      { name: 'Cat-Cow stretch', description: '2 min, coordinate with breath', videoUrl: 'YVE4XLKV_Xo' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
      { name: 'Deep breathing (Pranayama)', description: '3 min seated', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 5 — Hip Openers
  {
    day: 'Day 5',
    type: 'Hip Openers',
    time: '16 min',
    moves: [
      { name: 'Cat-Cow stretch', description: '2 min warm-up', videoUrl: 'YVE4XLKV_Xo' },
      { name: 'Downward dog (modified)', description: '1 min, pedal feet gently', videoUrl: 'Y0GDgQqt-bA' },
      { name: 'Low lunge (Anjaneyasana)', description: '1.5 min each side, hands on knee', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Gentle twist (supine)', description: '2 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: "Child's pose (Balasana)", description: '2 min rest', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 6 — Restorative
  {
    day: 'Day 6',
    type: 'Restorative',
    time: '18 min',
    moves: [
      {
        name: 'Deep breathing (Pranayama)',
        description: '3 min, alternate nostril breathing',
        videoUrl: 'DbDoBzGY3vo',
      },
      { name: "Child's pose (Balasana)", description: '3 min, supported with pillow', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Gentle twist (supine)', description: '2.5 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Seated forward fold', description: '3 min, relax into it', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Bridge pose (Setu Bandhasana)', description: '2 min, supported with block', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Corpse pose (Savasana)', description: '5 min deep relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 7 — Week 1 Review Flow
  {
    day: 'Day 7',
    type: 'Gentle Flow',
    time: '17 min',
    moves: [
      { name: 'Mountain pose (Tadasana)', description: '1 min centering', videoUrl: 'Y0GDgQqt-bA' },
      { name: 'Cat-Cow stretch', description: '2 min flow', videoUrl: 'YVE4XLKV_Xo' },
      { name: 'Downward dog (modified)', description: '1 min hold', videoUrl: 'Y0GDgQqt-bA' },
      { name: 'Warrior I (supported)', description: '1 min each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Tree pose (with wall support)', description: '1 min each side', videoUrl: 'ZRS0dXit51Q' },
      { name: 'Corpse pose (Savasana)', description: '5 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // ═══════════════════════════════════════════════
  // WEEK 2: BUILDING STRENGTH (Days 8–14)
  // ═══════════════════════════════════════════════

  // Day 8 — Standing Strong
  {
    day: 'Day 8',
    type: 'Standing Strength',
    time: '16 min',
    moves: [
      { name: 'Mountain pose (Tadasana)', description: '1 min warm-up', videoUrl: 'Y0GDgQqt-bA' },
      {
        name: 'Warrior II (Virabhadrasana II)',
        description: '1.5 min each side, arms extended',
        videoUrl: 'DLvnXGygUyQ',
      },
      { name: 'Triangle pose (Trikonasana)', description: '1 min each side, hand on shin', videoUrl: 'upFYlxZHif0' },
      { name: 'Standing forward fold', description: '2 min, bend knees slightly', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Cobra pose (Bhujangasana)', description: '3 x 30 sec, gentle backbend', videoUrl: 'k48O2CxvZ3o' },
      { name: "Child's pose (Balasana)", description: '3 min rest', videoUrl: 'nMp3MlTz9fA' },
    ],
  },

  // Day 9 — Core Awakening
  {
    day: 'Day 9',
    type: 'Core & Twists',
    time: '16 min',
    moves: [
      { name: 'Cat-Cow stretch', description: '2 min warm-up', videoUrl: 'YVE4XLKV_Xo' },
      { name: 'Plank (on knees)', description: '3 x 20 sec holds, engage core', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Cobra pose (Bhujangasana)', description: '3 x 30 sec, press hips into floor', videoUrl: 'k48O2CxvZ3o' },
      { name: 'Gentle twist (supine)', description: '2 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Eagle arms (Garudasana)', description: '1 min each side, seated or standing', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 10 — Lower Body Strength
  {
    day: 'Day 10',
    type: 'Standing Strength',
    time: '17 min',
    moves: [
      { name: 'Chair pose (Utkatasana)', description: '3 x 20 sec holds, arms up', videoUrl: '5P3x3yByq_g' },
      { name: 'Warrior II (Virabhadrasana II)', description: '1.5 min each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Low lunge (Anjaneyasana)', description: '1 min each side, arms overhead', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Pigeon pose (modified)', description: '2 min each side, use props', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Standing forward fold', description: '2 min cool-down', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Deep breathing (Pranayama)', description: '3 min seated', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 11 — Backbends & Heart Openers
  {
    day: 'Day 11',
    type: 'Flexibility',
    time: '16 min',
    moves: [
      { name: 'Cat-Cow stretch', description: '2 min warm-up', videoUrl: 'YVE4XLKV_Xo' },
      { name: 'Cobra pose (Bhujangasana)', description: '3 x 30 sec, lift chest higher', videoUrl: 'k48O2CxvZ3o' },
      { name: 'Bridge pose (Setu Bandhasana)', description: '3 x 45 sec holds', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Half moon (with support)', description: '45 sec each side, hand on block', videoUrl: 'ZRS0dXit51Q' },
      { name: 'Seated forward fold', description: '2 min counter-stretch', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 12 — Hip & Leg Focus
  {
    day: 'Day 12',
    type: 'Hip Openers',
    time: '17 min',
    moves: [
      {
        name: 'Low lunge (Anjaneyasana)',
        description: '1.5 min each side, deepen the stretch',
        videoUrl: 'qMPN9cCDCq8',
      },
      { name: 'Warrior II (Virabhadrasana II)', description: '1 min each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Triangle pose (Trikonasana)', description: '1 min each side', videoUrl: 'upFYlxZHif0' },
      { name: 'Pigeon pose (modified)', description: '2.5 min each side', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Seated forward fold', description: '2 min', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 13 — Restorative Strength
  {
    day: 'Day 13',
    type: 'Restorative',
    time: '18 min',
    moves: [
      { name: 'Deep breathing (Pranayama)', description: '3 min, box breathing pattern', videoUrl: 'DbDoBzGY3vo' },
      { name: "Child's pose (Balasana)", description: '3 min, supported', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Gentle twist (supine)', description: '2.5 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Bridge pose (Setu Bandhasana)', description: '2 min, supported', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Standing forward fold', description: '2 min, rag doll variation', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Corpse pose (Savasana)', description: '5 min deep relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 14 — Week 2 Review Flow
  {
    day: 'Day 14',
    type: 'Full Body Flow',
    time: '18 min',
    moves: [
      { name: 'Mountain pose (Tadasana)', description: '1 min centering', videoUrl: 'Y0GDgQqt-bA' },
      { name: 'Chair pose (Utkatasana)', description: '3 x 20 sec holds', videoUrl: '5P3x3yByq_g' },
      { name: 'Warrior II (Virabhadrasana II)', description: '1 min each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Triangle pose (Trikonasana)', description: '1 min each side', videoUrl: 'upFYlxZHif0' },
      { name: 'Cobra pose (Bhujangasana)', description: '3 x 30 sec', videoUrl: 'k48O2CxvZ3o' },
      { name: 'Corpse pose (Savasana)', description: '5 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // ═══════════════════════════════════════════════
  // WEEK 3: FLOW & BALANCE (Days 15–21)
  // ═══════════════════════════════════════════════

  // Day 15 — Sun Salutation Intro
  {
    day: 'Day 15',
    type: 'Full Body Flow',
    time: '17 min',
    moves: [
      { name: 'Sun Salutation (modified)', description: '3 rounds, slow pace, follow breath', videoUrl: 'I9_wJmIAckA' },
      { name: 'Warrior flow (I to II)', description: '2 rounds each side, 1 min per pose', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Standing forward fold', description: '1 min, release tension', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Sphinx pose (Salamba Bhujangasana)', description: '2 min, forearms on floor', videoUrl: 'k48O2CxvZ3o' },
      { name: 'Happy baby (Ananda Balasana)', description: '2 min, rock gently side to side', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 16 — Balance Challenge
  {
    day: 'Day 16',
    type: 'Balance & Focus',
    time: '16 min',
    moves: [
      {
        name: 'Tree pose (unsupported)',
        description: '1.5 min each side, find a focus point',
        videoUrl: 'ZRS0dXit51Q',
      },
      { name: 'Dancer pose (modified)', description: '45 sec each side, hold wall if needed', videoUrl: 'ZRS0dXit51Q' },
      { name: 'Warrior flow (I to II)', description: '2 rounds each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Side plank (modified)', description: '30 sec each side, bottom knee down', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Thread the needle', description: '1.5 min each side, shoulder opener', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 17 — Core Flow
  {
    day: 'Day 17',
    type: 'Core & Twists',
    time: '17 min',
    moves: [
      { name: 'Sun Salutation (modified)', description: '2 rounds warm-up', videoUrl: 'I9_wJmIAckA' },
      { name: 'Boat pose (modified)', description: '3 x 20 sec, knees bent, lean back', videoUrl: '8KsyQvwi85Q' },
      { name: 'Side plank (modified)', description: '30 sec each side', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Camel pose (gentle)', description: '3 x 20 sec, hands on lower back', videoUrl: 'lVmESFGCdYo' },
      { name: 'Gentle twist (supine)', description: '2 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 18 — Hip Flow
  {
    day: 'Day 18',
    type: 'Hip Openers',
    time: '18 min',
    moves: [
      { name: 'Cat-Cow stretch', description: '2 min warm-up', videoUrl: 'YVE4XLKV_Xo' },
      {
        name: 'Low lunge to Warrior flow',
        description: '2 min each side, flowing transitions',
        videoUrl: 'DLvnXGygUyQ',
      },
      { name: 'Pigeon pose (modified)', description: '2.5 min each side, go deeper', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Happy baby (Ananda Balasana)', description: '2 min', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Thread the needle', description: '1.5 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 19 — Flowing Sequence
  {
    day: 'Day 19',
    type: 'Full Body Flow',
    time: '18 min',
    moves: [
      { name: 'Sun Salutation (modified)', description: '4 rounds, building confidence', videoUrl: 'I9_wJmIAckA' },
      { name: 'Warrior flow (I to II to Triangle)', description: '2 rounds each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Dancer pose (modified)', description: '1 min each side', videoUrl: 'ZRS0dXit51Q' },
      { name: 'Sphinx pose (Salamba Bhujangasana)', description: '2 min', videoUrl: 'k48O2CxvZ3o' },
      { name: 'Seated forward fold', description: '2 min cool-down', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 20 — Restorative Balance
  {
    day: 'Day 20',
    type: 'Restorative',
    time: '18 min',
    moves: [
      { name: 'Deep breathing (Pranayama)', description: '3 min, calming breath', videoUrl: 'DbDoBzGY3vo' },
      { name: "Child's pose (Balasana)", description: '3 min, supported', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Thread the needle', description: '2 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Happy baby (Ananda Balasana)', description: '2 min', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Gentle twist (supine)', description: '2 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Corpse pose (Savasana)', description: '5 min deep relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 21 — Week 3 Review Flow
  {
    day: 'Day 21',
    type: 'Full Body Flow',
    time: '19 min',
    moves: [
      { name: 'Sun Salutation (modified)', description: '3 rounds', videoUrl: 'I9_wJmIAckA' },
      { name: 'Tree pose (unsupported)', description: '1 min each side', videoUrl: 'ZRS0dXit51Q' },
      { name: 'Boat pose (modified)', description: '3 x 20 sec', videoUrl: '8KsyQvwi85Q' },
      { name: 'Warrior flow (I to II to Triangle)', description: '1 round each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Pigeon pose (modified)', description: '2 min each side', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Corpse pose (Savasana)', description: '5 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // ═══════════════════════════════════════════════
  // WEEK 4: DEEPENING PRACTICE (Days 22–28)
  // ═══════════════════════════════════════════════

  // Day 22 — Full Sun Salutation
  {
    day: 'Day 22',
    type: 'Full Body Flow',
    time: '18 min',
    moves: [
      { name: 'Full Sun Salutation', description: '4 rounds, complete sequence with lunges', videoUrl: 'I9_wJmIAckA' },
      { name: 'Extended side angle (Utthita Parsvakonasana)', description: '1 min each side', videoUrl: 'upFYlxZHif0' },
      { name: 'Reverse warrior (Viparita Virabhadrasana)', description: '1 min each side', videoUrl: '4Ejz7IgODlU' },
      { name: 'Standing forward fold', description: '2 min, hands to floor', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Seated twist (Ardha Matsyendrasana)', description: '1.5 min each side' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 23 — Deep Backbends
  {
    day: 'Day 23',
    type: 'Flexibility',
    time: '18 min',
    moves: [
      { name: 'Cat-Cow stretch', description: '2 min warm-up', videoUrl: 'YVE4XLKV_Xo' },
      { name: 'Full bridge (Urdhva Dhanurasana prep)', description: '3 x 30 sec, lift hips high' },
      { name: 'Fish pose (Matsyasana)', description: '1.5 min, chest lifted, supported', videoUrl: 'lVmESFGCdYo' },
      { name: 'Camel pose (gentle)', description: '3 x 30 sec, hands on heels or blocks', videoUrl: 'lVmESFGCdYo' },
      { name: "Child's pose (Balasana)", description: '3 min counter-stretch', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 24 — Deep Hip Work
  {
    day: 'Day 24',
    type: 'Hip Openers',
    time: '19 min',
    moves: [
      { name: 'Sun Salutation (modified)', description: '2 rounds warm-up', videoUrl: 'I9_wJmIAckA' },
      {
        name: 'Half pigeon full (Eka Pada Rajakapotasana)',
        description: '3 min each side, fold forward',
        videoUrl: 'qMPN9cCDCq8',
      },
      { name: 'Low lunge to Warrior flow', description: '2 min each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Standing splits (modified)', description: '45 sec each side, hands on blocks' },
      { name: 'Seated forward fold', description: '2 min', videoUrl: 'SLIaql7h6RQ' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 25 — Arm Balance Prep
  {
    day: 'Day 25',
    type: 'Core & Twists',
    time: '18 min',
    moves: [
      { name: 'Full Sun Salutation', description: '3 rounds', videoUrl: 'I9_wJmIAckA' },
      { name: 'Crow prep (Bakasana prep)', description: '3 x 15 sec, feet on block, lean forward' },
      { name: 'Boat pose (modified)', description: '3 x 30 sec, straighten legs if possible', videoUrl: '8KsyQvwi85Q' },
      { name: 'Side plank (modified)', description: '30 sec each side, lift top leg', videoUrl: 'OUgsJ8-Vi0E' },
      { name: 'Seated twist (Ardha Matsyendrasana)', description: '1.5 min each side' },
      { name: 'Corpse pose (Savasana)', description: '4 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 26 — Standing Balance Mastery
  {
    day: 'Day 26',
    type: 'Balance & Focus',
    time: '18 min',
    moves: [
      {
        name: 'Tree pose (unsupported)',
        description: '1.5 min each side, eyes closed challenge',
        videoUrl: 'ZRS0dXit51Q',
      },
      { name: 'Dancer pose (modified)', description: '1 min each side, reach back foot', videoUrl: 'ZRS0dXit51Q' },
      { name: 'Extended side angle (Utthita Parsvakonasana)', description: '1 min each side', videoUrl: 'upFYlxZHif0' },
      { name: 'Reverse warrior (Viparita Virabhadrasana)', description: '1 min each side', videoUrl: '4Ejz7IgODlU' },
      { name: 'Shoulder stand (supported)', description: '2 min, legs up the wall variation' },
      { name: 'Corpse pose (Savasana)', description: '5 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 27 — Restorative Deep
  {
    day: 'Day 27',
    type: 'Restorative',
    time: '20 min',
    moves: [
      { name: 'Deep breathing (Pranayama)', description: '4 min, body scan meditation', videoUrl: 'DbDoBzGY3vo' },
      { name: "Child's pose (Balasana)", description: '3 min, fully supported', videoUrl: 'nMp3MlTz9fA' },
      { name: 'Shoulder stand (supported)', description: '3 min, legs up the wall' },
      { name: 'Fish pose (Matsyasana)', description: '2 min, supported with bolster', videoUrl: 'lVmESFGCdYo' },
      { name: 'Gentle twist (supine)', description: '2.5 min each side', videoUrl: 'qEVNj4tcr0Y' },
      { name: 'Corpse pose (Savasana)', description: '5 min deep relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 28 — Week 4 Power Flow
  {
    day: 'Day 28',
    type: 'Full Body Flow',
    time: '20 min',
    moves: [
      { name: 'Full Sun Salutation', description: '4 rounds, strong and confident', videoUrl: 'I9_wJmIAckA' },
      { name: 'Warrior flow (I to II to Reverse)', description: '2 rounds each side', videoUrl: 'DLvnXGygUyQ' },
      { name: 'Extended side angle (Utthita Parsvakonasana)', description: '1 min each side', videoUrl: 'upFYlxZHif0' },
      { name: 'Full bridge (Urdhva Dhanurasana prep)', description: '3 x 30 sec' },
      { name: 'Seated twist (Ardha Matsyendrasana)', description: '1.5 min each side' },
      { name: 'Corpse pose (Savasana)', description: '5 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // ═══════════════════════════════════════════════
  // DAYS 29–30: INTEGRATION & CELEBRATION
  // ═══════════════════════════════════════════════

  // Day 29 — Integration Flow
  {
    day: 'Day 29',
    type: 'Full Body Flow',
    time: '20 min',
    moves: [
      { name: 'Full Sun Salutation', description: '4 rounds, flowing with breath', videoUrl: 'I9_wJmIAckA' },
      {
        name: 'Warrior flow (complete sequence)',
        description: 'I, II, Reverse, Triangle — 1 round each side',
        videoUrl: 'DLvnXGygUyQ',
      },
      { name: 'Tree pose (unsupported)', description: '1 min each side, confident balance', videoUrl: 'ZRS0dXit51Q' },
      { name: 'Half pigeon full (Eka Pada Rajakapotasana)', description: '2 min each side', videoUrl: 'qMPN9cCDCq8' },
      { name: 'Boat pose (modified)', description: '3 x 30 sec', videoUrl: '8KsyQvwi85Q' },
      { name: 'Corpse pose (Savasana)', description: '5 min relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },

  // Day 30 — Celebration Practice
  {
    day: 'Day 30',
    type: 'Full Body Flow',
    time: '20 min',
    moves: [
      { name: 'Full Sun Salutation', description: '5 rounds, celebrate your progress', videoUrl: 'I9_wJmIAckA' },
      {
        name: 'Warrior flow (complete sequence)',
        description: 'Full sequence each side, strong and graceful',
        videoUrl: 'DLvnXGygUyQ',
      },
      { name: 'Dancer pose (modified)', description: '1 min each side, reach for the sky', videoUrl: 'ZRS0dXit51Q' },
      { name: 'Crow prep (Bakasana prep)', description: '3 x 15 sec, test your strength' },
      { name: 'Shoulder stand (supported)', description: '2 min, legs up the wall' },
      { name: 'Corpse pose (Savasana)', description: '7 min celebration relaxation', videoUrl: 'DbDoBzGY3vo' },
    ],
  },
];

// Backward compatibility alias
export const EXERCISE_PLANS = YOGA_30_DAYS;
