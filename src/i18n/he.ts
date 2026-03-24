const he: Record<string, string> = {
  // Auth / Navigation
  welcome_back: 'ברוך שובך',
  sign_out: 'התנתקות',
  sign_in: 'כניסה',
  sign_up: 'הרשמה',
  email: 'אימייל',
  password: 'סיסמה',
  full_name: 'שם מלא',
  forgot_password: 'שכחת סיסמה?',
  create_account: 'יצירת חשבון',
  back_to_signin: 'חזרה לכניסה',
  send_reset_link: 'שליחת קישור איפוס',
  update_password: 'עדכון סיסמה',
  confirm_password: 'אישור סיסמה',
  check_email_confirm: 'בדקי את המייל — שלחנו קישור אישור!',
  check_email_reset: 'בדקי את המייל — שלחנו קישור לאיפוס סיסמה!',
  no_account: 'אין לך חשבון?',
  have_account: 'כבר יש לך חשבון?',
  app_name: 'DailyBite',
  app_tagline: 'התוכנית שמשנה את הדרך שבה את אוכלת.',
  app_subtitle: 'תכנון ארוחות יומי — ללא גלוטן',

  // Section titles & subtitles
  'section.progress.title': 'מעקב התקדמות',
  'section.progress.subtitle': 'מעקב משקל יומי ורצפים',
  'section.calculator.title': 'מחשבון קלוריות יומי',
  'section.calculator.subtitle': 'חשבי את יעד הקלוריות היומי שלך',
  'section.meals.title': 'תפריט שבועי',
  'section.meals.subtitle': 'ארוחות ללא גלוטן · מאקרו מאוזן · 7 ימים',
  'section.shots.title': 'שוטים בוקר — MetaBoost',
  'section.shots.subtitle': 'שוט אחד כל בוקר על קיבה ריקה',
  'section.water.title': 'מעקב מים',
  'section.water.subtitle': '8 כוסות ביום · שמרי על לחות',
  'section.rules.title': 'כללי מפתח',
  'section.rules.subtitle': '9 כללים שגורמים לתוכנית לעבוד',
  'section.sleep.title': 'שינה והתאוששות',
  'section.sleep.subtitle': 'בזמן השינה הגוף שורף שומן',
  'section.shopping.title': 'רשימת קניות שבועית',
  'section.shopping.subtitle': 'כל מה שצריך לשבוע',
  'section.exercise.title': 'תוכנית אימונים',
  'section.exercise.subtitle': '7–12 דקות ביום · עומס נמוך · בלי קפיצות',

  // Calculator
  'calc.header': 'מחשבון קלוריות יומי',
  'calc.description': 'חשבי את יעד הקלוריות היומי שלך לפי הנתונים ורמת הפעילות.',
  'calc.woman': 'אישה',
  'calc.man': 'גבר',
  'calc.metric': 'מטרי',
  'calc.imperial': 'אימפריאלי',
  'calc.age': 'גיל',
  'calc.weight_kg': 'משקל (ק״ג)',
  'calc.weight_lbs': 'משקל (פאונד)',
  'calc.height_cm': 'גובה (ס״מ)',
  'calc.height_ft': 'גובה (פיט/אינץ׳)',
  'calc.activity': 'רמת פעילות',
  'calc.activity_sedentary': 'יושבנית (כמעט ללא פעילות)',
  'calc.activity_light': 'פעילות קלה (1–3 ימים בשבוע)',
  'calc.activity_moderate': 'פעילות בינונית (3–5 ימים בשבוע)',
  'calc.activity_very': 'פעילות גבוהה (6–7 ימים בשבוע)',
  'calc.activity_extra': 'פעילות אינטנסיבית (אימונים קשים מאוד)',
  'calc.calculate_btn': 'חשבי',
  'calc.maintain': 'שמירה על משקל',
  'calc.lose': 'ירידה במשקל',
  'calc.gain': 'עלייה במשקל',
  'calc.calories_day': 'קלוריות/יום',
  'calc.based_on': 'מבוסס על הפרופיל שלך',
  'calc.recommended_macros': 'מאקרו מומלץ',
  'calc.your_target': 'היעד שלך',
  'calc.plan_adjusted': 'התוכנית הותאמה לקלוריות שלך',

  // Meal planner
  'meals.cal_day': 'קלוריות/יום',
  'meals.protein': 'חלבון',
  'meals.carbs': 'פחמימות',
  'meals.fat': 'שומן',
  'meals.day_total': 'סה״כ יומי',
  'meals.ingredient': 'מרכיב',
  'meals.meal_total': 'סה״כ ארוחה',
  'meals.gf_rules': 'ללא גלוטן',

  // Meal names
  'meals.breakfast': 'ארוחת בוקר',
  'meals.morning_snack': 'חטיף בוקר',
  'meals.lunch': 'ארוחת צהריים',
  'meals.afternoon_snack': 'חטיף אחה״צ',
  'meals.dinner': 'ארוחת ערב',
  'meals.dessert': 'קינוח',

  // Water
  'water.progress': 'התקדמות',
  'water.glasses': 'כוסות',
  'water.reset': 'איפוס',
  'water.glass': 'כוס',

  // Exercise
  'exercise.low_impact': 'עומס נמוך · בלי קפיצות',
  'exercise.mark_done': 'סמני כבוצע',
  'exercise.done_today': 'בוצע היום!',
  'exercise.watch_video': 'צפי בסרטון',

  // Exercise types
  'exercise.type.cardio': 'אירובי',
  'exercise.type.strength': 'חיזוק',
  'exercise.type.core': 'ליבה',
  'exercise.type.stretch': 'מתיחות',
  'exercise.type.rest': 'מנוחה',

  // Shots
  'shots.why_title': 'למה שוטים בוקר?',
  'shots.why_text':
    'השוטים הטבעיים מאיצים חילוף חומרים, מפחיתים דלקות ותומכים בשריפת שומן — נלקחים על קיבה ריקה לספיגה מרבית.',
  'shots.ingredients': 'מרכיבים',
  'shots.why_works': 'למה זה עובד',
  'shots.mark_done': 'סמני כבוצע',
  'shots.done_today': 'בוצע היום!',
  'shots.empty_stomach': 'לקחת על קיבה ריקה',

  // Shot names
  'shots.name.metabolic_flush': 'שטיפה מטבולית',
  'shots.name.belly_blaster': 'מפוצץ בטן',
  'shots.name.immune_booster': 'חיזוק חיסוני',
  'shots.name.fat_flush': 'שטיפת שומן',
  'shots.name.anti_inflammatory': 'נוגד דלקת',
  'shots.name.detox_green': 'דיטוקס ירוק',
  'shots.name.hormone_balance': 'איזון הורמונלי',

  // Shot "why" descriptions
  'shots.why.metabolic_flush': 'מעורר עיכול, שוטף רעלני לילה, מפעיל את חילוף החומרים לפני האכילה.',
  'shots.why.belly_blaster': 'מפחית נפיחות, נוגד דלקת חזק, מאיץ שריפת שומן ועיכול.',
  'shots.why.immune_booster': 'נוגד דלקת חזק, תומך במערכת החיסון, כורכומין נספג טוב יותר עם פלפל שחור.',
  'shots.why.fat_flush': 'מייצב סוכר בדם, מפחית תשוקות, שוטף תאי שומן ותומך בכבד.',
  'shots.why.anti_inflammatory': 'מפחית כאבי מפרקים ודלקות, מאיץ חילוף חומרים, תומך באיזון הורמונלי.',
  'shots.why.detox_green': 'ניקוי תאי עומק, מאזן חומציות, מעלה אנרגיה ותומך בירידה במשקל.',
  'shots.why.hormone_balance': 'תומך באיזון אסטרוגן, מפחית תסמיני גיל המעבר, מעלה אנרגיה ומצב רוח.',

  // Progress
  'progress.day_streak': 'רצף ימים',
  'progress.best_streak': 'רצף שיא',
  'progress.weight_trend': 'מגמת משקל',
  'progress.log': 'שמירה',
  'progress.saved': 'נשמר!',
  'progress.todays_weight': 'משקל היום',
  'progress.loading': 'טוען...',

  // Shopping
  'shopping.reset_all': 'איפוס הכל',
  'shopping.category.protein': 'חלבון',
  'shopping.category.vegetables': 'ירקות',
  'shopping.category.fruit': 'פירות',
  'shopping.category.grains': 'דגנים ופחמימות (ללא גלוטן)',
  'shopping.category.pantry': 'מזווה ובישול',

  // Sleep
  'sleep.hours_target': 'יעד שעות',
  'sleep.bedtime_goal': 'יעד שעת שינה',
  'sleep.wakeup_goal': 'יעד שעת קימה',
  'sleep.evening_routine': 'שגרת ערב',

  // Sleep tips
  'sleep.tip.1.title': 'שינה גרועה מעלה גרלין (הורמון הרעב) ב-28%',
  'sleep.tip.1.desc':
    'גורמת לתשוקות לסוכר ופחמימות למחרת. אפילו לילה אחד רע יכול לגרום לך לאכול 300–500 קלוריות נוספות בלי לשים לב.',
  'sleep.tip.2.title': 'שינה עמוקה היא הזמן שבו הגוף שורף שומן',
  'sleep.tip.2.desc': '70% מהורמון הגדילה (שמפרק שומן ובונה שריר) מופרש בזמן שינה עמוקה. פחות שינה = פחות שריפת שומן.',
  'sleep.tip.3.title': 'בלי מסכים שעה לפני השינה',
  'sleep.tip.3.desc': 'אור כחול מהטלפון חוסם ייצור מלטונין. קראי, מתחי שרירים, או עשי מדיטציה במקום.',
  'sleep.tip.4.title': 'שמרי על חדר שינה קריר וחשוך',
  'sleep.tip.4.desc': 'טמפרטורת הגוף חייבת לרדת כדי להירדם. 18–19 מעלות זה אידיאלי לשינה עמוקה ושריפת שומן.',

  // Sleep schedule
  'sleep.schedule.1': 'ארוחת ערב קלה או סיום אכילה',
  'sleep.schedule.2': 'עמעום אורות — אות למוח להתחיל להירגע',
  'sleep.schedule.3': 'בלי מסכים — קראי, מתחי שרירים, או מדיטציה',
  'sleep.schedule.4': 'תה צמחים (קמומיל או ולריאן)',
  'sleep.schedule.5': 'כיבוי אורות — יעד 7–8 שעות',
  'sleep.schedule.6': 'קימה — שתי 2 כוסות מים מיד',

  // Reminders
  'reminders.get_daily': 'קבלת תזכורות יומיות',
  'reminders.turn_on': 'הפעלה',
  'reminders.on': 'פעיל',

  // Rules
  'rules.1.title': 'שתי 8 כוסות מים כל יום',
  'rules.1.desc': 'התחילי את הבוקר עם 2 כוסות לפני אכילה. מים מעירים את חילוף החומרים, מפחיתים רעב ושוטפים שומן.',
  'rules.2.title': 'בלי מזון מעובד או סוכר מוסף',
  'rules.2.desc':
    'הימנעי מפאסט פוד, מטוגנים, לחם לבן, שתייה מוגזת, ממתקים וחטיפים ארוזים. אלה חוסמים ירידה במשקל ומעלים אינסולין.',
  'rules.3.title': 'אכלי חלבון בכל ארוחה',
  'rules.3.desc': 'עוף, סלמון, ביצים, יוגורט יווני, גבינת קוטג׳ בכל ארוחה. חלבון שומר על שובע ומגן על השריר.',
  'rules.4.title': 'הפסיקי לאכול 2–3 שעות לפני השינה',
  'rules.4.desc': 'סיימי ארוחת ערב עד 18:30. אכילה מאוחרת מאגרת קלוריות כשומן ופוגעת בשינה — שניהם חוסמים ירידה במשקל.',
  'rules.5.title': 'ישני 7–8 שעות כל לילה',
  'rules.5.desc': 'שינה גרועה מעלה הורמוני רעב ב-28%. שינה היא הזמן שבו הגוף שורף שומן ומתקן שרירים. זה לא אופציונלי.',
  'rules.6.title': 'אימון 7–12 דקות כל יום',
  'rules.6.desc':
    'תנועה יומית קצרה עדיפה על אימון ארוך אחד בשבוע. עומס נמוך, בלי קפיצות, בטוח למפרקים. עקביות היא הכל.',
  'rules.7.title': 'יעד קלוריות יומי: 1,150 קלוריות',
  'rules.7.desc':
    'במשקל 75 ק״ג, גיל 64, עם יעד 68 ק״ג — 1,150 קלוריות ליום יוצרות ירידה של 1 ק״ג בשבוע. לעולם אל תרדי מתחת ל-1,000 קלוריות.',
  'rules.8.title': 'ירידה של 1 ק״ג בשבוע בבטחה',
  'rules.8.desc': 'לרדת 7 ק״ג בקצב הזה לוקח 7–14 שבועות. ירידה איטית ויציבה בריאה יותר וקל יותר לשמור עליה.',
  'rules.9.title': 'אם פספסת יום — פשוט תתחילי שוב',
  'rules.9.desc': 'יום אחד גרוע לא הורס את התוכנית. האנשים שמצליחים הם אלה שממשיכים, לא אלה שמושלמים.',

  // Days (short)
  'day.mon': 'ב׳',
  'day.tue': 'ג׳',
  'day.wed': 'ד׳',
  'day.thu': 'ה׳',
  'day.fri': 'ו׳',
  'day.sat': 'ש׳',
  'day.sun': 'א׳',

  // Days (full)
  'day.monday': 'יום שני',
  'day.tuesday': 'יום שלישי',
  'day.wednesday': 'יום רביעי',
  'day.thursday': 'יום חמישי',
  'day.friday': 'יום שישי',
  'day.saturday': 'שבת',
  'day.sunday': 'יום ראשון',

  // Footer
  'footer.copyright': 'התוכנית שמשנה את הדרך שבה את אוכלת.',

  // Common
  'common.cal': 'קל׳',
  'common.loading': 'טוען...',
};

export default he;
