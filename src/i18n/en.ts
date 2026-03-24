const en: Record<string, string> = {
  // Auth / Navigation
  welcome_back: 'Welcome back',
  sign_out: 'Sign Out',
  sign_in: 'Sign In',
  sign_up: 'Sign Up',
  email: 'Email',
  password: 'Password',
  full_name: 'Full Name',
  forgot_password: 'Forgot password?',
  create_account: 'Create Account',
  back_to_signin: 'Back to Sign In',
  send_reset_link: 'Send Reset Link',
  update_password: 'Update Password',
  confirm_password: 'Confirm Password',
  check_email_confirm: 'Check your email for a confirmation link!',
  check_email_reset: 'Check your email for a password reset link!',
  no_account: "Don't have an account?",
  have_account: 'Already have an account?',
  app_name: 'DailyBite',
  app_tagline: 'The plan that transforms how you eat.',
  app_subtitle: 'Your daily meal planner — gluten-free',

  // Section titles & subtitles
  'section.progress.title': 'Progress Tracker',
  'section.progress.subtitle': 'Track your daily weight and streaks',
  'section.calculator.title': 'Daily Calorie Calculator',
  'section.calculator.subtitle': 'Calculate your personal daily calorie target',
  'section.meals.title': 'Weekly Meal Plan',
  'section.meals.subtitle': 'Gluten-free meals · Balanced macros · 7 days',
  'section.shots.title': 'MetaBoost Morning Shots',
  'section.shots.subtitle': 'One shot every morning on empty stomach',
  'section.water.title': 'Water Tracker',
  'section.water.subtitle': '8 glasses per day · Stay hydrated',
  'section.rules.title': 'Key Rules',
  'section.rules.subtitle': '9 rules that make this plan work',
  'section.sleep.title': 'Sleep & Recovery',
  'section.sleep.subtitle': 'Sleep is when your body burns fat',
  'section.shopping.title': 'Weekly Shopping List',
  'section.shopping.subtitle': 'Everything you need for the week',
  'section.exercise.title': 'Exercise Plan',
  'section.exercise.subtitle': '7–12 min daily · Low impact · No jumping',

  // Calculator
  'calc.header': 'Daily Calorie Calculator',
  'calc.description': 'Calculate your personal daily calorie target based on your body and activity level.',
  'calc.woman': 'Woman',
  'calc.man': 'Man',
  'calc.metric': 'Metric',
  'calc.imperial': 'Imperial',
  'calc.age': 'Age',
  'calc.weight_kg': 'Weight (kg)',
  'calc.weight_lbs': 'Weight (lbs)',
  'calc.height_cm': 'Height (cm)',
  'calc.height_ft': 'Height (ft/in)',
  'calc.activity': 'Activity Level',
  'calc.activity_sedentary': 'Sedentary (little or no exercise)',
  'calc.activity_light': 'Lightly active (1–3 days/week)',
  'calc.activity_moderate': 'Moderately active (3–5 days/week)',
  'calc.activity_very': 'Very active (6–7 days/week)',
  'calc.activity_extra': 'Extra active (very hard exercise)',
  'calc.calculate_btn': 'Calculate',
  'calc.maintain': 'Maintain',
  'calc.lose': 'Lose weight',
  'calc.gain': 'Gain weight',
  'calc.calories_day': 'cal/day',
  'calc.based_on': 'Based on your profile',
  'calc.recommended_macros': 'Recommended macros',
  'calc.your_target': 'Your target',
  'calc.plan_adjusted': 'Plan adjusted to your calories',

  // Meal planner
  'meals.cal_day': 'cal/day',
  'meals.protein': 'Protein',
  'meals.carbs': 'Carbs',
  'meals.fat': 'Fat',
  'meals.day_total': 'Day Total',
  'meals.ingredient': 'Ingredient',
  'meals.meal_total': 'Meal Total',
  'meals.gf_rules': 'Gluten-free',

  // Water
  'water.progress': 'Progress',
  'water.glasses': 'glasses',
  'water.reset': 'Reset',
  'water.glass': 'Glass',

  // Exercise
  'exercise.low_impact': 'Low impact · No jumping',
  'exercise.mark_done': 'Mark done',
  'exercise.done_today': 'Done today!',
  'exercise.watch_video': 'Watch video',

  // Exercise types
  'exercise.type.cardio': 'Cardio',
  'exercise.type.strength': 'Strength',
  'exercise.type.core': 'Core',
  'exercise.type.stretch': 'Stretch',
  'exercise.type.rest': 'Rest',

  // Shots
  'shots.why_title': 'Why morning shots?',
  'shots.why_text':
    'These natural shots boost metabolism, reduce inflammation, and support fat loss — taken on an empty stomach for maximum absorption.',
  'shots.ingredients': 'Ingredients',
  'shots.why_works': 'Why it works',
  'shots.mark_done': 'Mark done',
  'shots.done_today': 'Done today!',
  'shots.empty_stomach': 'Take on empty stomach',

  // Shot names
  'shots.name.metabolic_flush': 'Metabolic Flush',
  'shots.name.belly_blaster': 'Belly Blaster',
  'shots.name.immune_booster': 'Immune Booster',
  'shots.name.fat_flush': 'Fat Flush',
  'shots.name.anti_inflammatory': 'Anti-Inflammatory',
  'shots.name.detox_green': 'Detox Green',
  'shots.name.hormone_balance': 'Hormone Balance',

  // Progress
  'progress.day_streak': 'Day streak',
  'progress.best_streak': 'Best streak',
  'progress.weight_trend': 'Weight trend',
  'progress.log': 'Log',
  'progress.saved': 'Saved!',
  'progress.todays_weight': "Today's weight",
  'progress.loading': 'Loading...',

  // Shopping
  'shopping.reset_all': 'Reset all',
  'shopping.category.protein': 'Protein',
  'shopping.category.vegetables': 'Vegetables',
  'shopping.category.fruit': 'Fruit',
  'shopping.category.grains': 'Grains & Carbs (GF)',
  'shopping.category.pantry': 'Pantry & Cooking',

  // Sleep
  'sleep.hours_target': 'Hours Target',
  'sleep.bedtime_goal': 'Bedtime Goal',
  'sleep.wakeup_goal': 'Wake-up Goal',
  'sleep.evening_routine': 'Evening Routine',

  // Sleep tips
  'sleep.tip.1.title': 'Poor sleep raises ghrelin (hunger hormone) by 28%',
  'sleep.tip.1.desc':
    'Making you crave sugar and carbs the next day. Even one bad night can make you eat 300–500 extra calories without realising it.',
  'sleep.tip.2.title': 'Deep sleep is when your body burns fat',
  'sleep.tip.2.desc':
    '70% of growth hormone (which breaks down fat and builds muscle) is released during deep sleep. Less sleep = less fat burning.',
  'sleep.tip.3.title': 'No screens 1 hour before bed',
  'sleep.tip.3.desc': 'Blue light from phones blocks melatonin production. Read, stretch, or meditate instead.',
  'sleep.tip.4.title': 'Keep your bedroom cool and dark',
  'sleep.tip.4.desc':
    'Core body temperature must drop to initiate sleep. 18–19°C is ideal for deep sleep and fat burning.',

  // Sleep schedule
  'sleep.schedule.1': 'Light dinner or finish eating',
  'sleep.schedule.2': 'Dim lights — signal your brain to wind down',
  'sleep.schedule.3': 'No screens — read, stretch, or meditate',
  'sleep.schedule.4': 'Herbal tea (chamomile or valerian)',
  'sleep.schedule.5': 'Lights out — target 7–8 hours',
  'sleep.schedule.6': 'Wake up — drink 2 glasses of water immediately',

  // Reminders
  'reminders.get_daily': 'Get daily reminders',
  'reminders.turn_on': 'Turn on',
  'reminders.on': 'On',

  // Rules
  'rules.1.title': 'Drink 8 glasses of water every day',
  'rules.1.desc':
    'Start your morning with 2 glasses before eating. Water wakes up your metabolism, reduces hunger, and flushes fat.',
  'rules.2.title': 'No processed food or added sugar',
  'rules.2.desc':
    'Avoid fast food, fried food, white bread, soda, candy, and packaged snacks. These block fat loss and spike insulin.',
  'rules.3.title': 'Eat protein at every single meal',
  'rules.3.desc':
    'Chicken, salmon, eggs, Greek yogurt, cottage cheese at every meal. Protein keeps you full and protects your muscle.',
  'rules.4.title': 'Stop eating 2–3 hours before bed',
  'rules.4.desc':
    'Finish dinner by 6:30pm. Eating late stores calories as fat and disrupts sleep — both block weight loss.',
  'rules.5.title': 'Sleep 7–8 hours every night',
  'rules.5.desc':
    'Poor sleep raises hunger hormones by 28%. Sleep is when your body burns fat and repairs muscle. It is not optional.',
  'rules.6.title': '7–12 min workout every day',
  'rules.6.desc':
    'Short daily movement beats one long session per week. Low impact, no jumping, safe for joints. Consistency is everything.',
  'rules.7.title': 'Your daily calorie target: 1,150 cal',
  'rules.7.desc':
    'At 75kg, age 64, targeting 68kg — 1,150 cal/day creates a 1 kg/week weight loss. Never go below 1,000 cal/day.',
  'rules.8.title': 'Lose 1 kg per week safely',
  'rules.8.desc':
    'To lose 7 kg at this pace takes 7–14 weeks. Slow steady loss is healthier and easier to keep off permanently.',
  'rules.9.title': 'If you miss a day — just start again',
  'rules.9.desc':
    'One bad day does not ruin the plan. The people who succeed are the ones who keep going, not the ones who are perfect.',

  // Days (short)
  'day.mon': 'Mon',
  'day.tue': 'Tue',
  'day.wed': 'Wed',
  'day.thu': 'Thu',
  'day.fri': 'Fri',
  'day.sat': 'Sat',
  'day.sun': 'Sun',

  // Days (full)
  'day.monday': 'Monday',
  'day.tuesday': 'Tuesday',
  'day.wednesday': 'Wednesday',
  'day.thursday': 'Thursday',
  'day.friday': 'Friday',
  'day.saturday': 'Saturday',
  'day.sunday': 'Sunday',

  // Footer
  'footer.copyright': 'The plan that transforms how you eat.',

  // Landing page
  'landing.hero.title': 'The plan that transforms how you eat.',
  'landing.hero.subtitle':
    'A personalized gluten-free meal planner for men and women 40+. Track meals, water, exercise, and weight — all in one beautiful app.',
  'landing.hero.cta': 'Get Started Free →',
  'landing.hero.cta_dashboard': 'Go to Dashboard →',
  'landing.hero.learn_more': 'Learn More ↓',

  'landing.features.title': 'Everything you need in one place',

  'landing.feature.meals.title': '7-Day Meal Plan',
  'landing.feature.meals.desc':
    'Complete gluten-free meals with per-ingredient macros. 1,150 cal/day, perfectly balanced.',
  'landing.feature.calculator.title': 'Calorie Calculator',
  'landing.feature.calculator.desc': 'Personalized daily target based on your age, weight, height & activity level.',
  'landing.feature.water.title': 'Water Tracker',
  'landing.feature.water.desc': '8 glasses a day with tap-to-track and daily reminders.',
  'landing.feature.exercise.title': 'Exercise Videos',
  'landing.feature.exercise.desc': '7–12 minute low-impact workouts with embedded YouTube tutorials.',
  'landing.feature.shots.title': 'Morning Shots',
  'landing.feature.shots.desc': 'MetaBoost wellness shots designed for metabolism and hormone balance.',
  'landing.feature.progress.title': 'Progress Tracking',
  'landing.feature.progress.desc': 'Weight trend charts, daily streaks, and completion tracking.',

  'landing.social.title': 'Designed for real results',
  'landing.social.stat1': 'cal/day balanced plan',
  'landing.social.stat2': 'unique daily menus',
  'landing.social.stat3': 'exercise videos with tutorials',

  'landing.how.title': 'How it works',
  'landing.how.step1.title': 'Sign up in 30 seconds',
  'landing.how.step1.desc': 'Create your free account — no credit card required.',
  'landing.how.step2.title': 'Get your personalized plan',
  'landing.how.step2.desc': 'The calculator adjusts meals to your body and goals.',
  'landing.how.step3.title': 'Track daily & see results',
  'landing.how.step3.desc': 'Water, meals, exercise, weight — all in one place.',

  'landing.bilingual': '🌍 Available in English and Hebrew with full RTL support',

  'landing.cta.title': 'Start your transformation today.',
  'landing.cta.subtitle': 'No credit card required. Free forever.',
  'landing.cta.button': 'Get Started Free →',

  'landing.email.title': 'Get notified when we launch new features',
  'landing.email.placeholder': 'Enter your email',
  'landing.email.button': 'Subscribe',
  'landing.email.success': "Thanks! We'll keep you posted.",
  'landing.email.error': 'Oops — please try again.',

  'landing.footer.privacy': 'Privacy',
  'landing.footer.terms': 'Terms',

  // Common
  'common.cal': 'cal',
  'common.loading': 'Loading...',
};

export default en;
