//UNits.js
export const UNITS = [
  {
    id: '1',
    subcategory: 'Human Body',
    title: 'انسانی جسم',
    image: require('./images/HumanBody/1.png'), // Add the image source here
    content: [
      {
        type: 'image',
        source: require('./images/HumanBody/humanbody.png'),
        caption: 'یہ انسانی جسم ہے',
    },
    {
        type: 'image',
        source: require('./images/HumanBody/humanbody.png'),
        caption: 'ایک انسانی جسم مختلف حصوں سے مل کر بنا ہوتا ہے',
    },
    {
        type: 'image',
        source: require('./images/HumanBody/humanbody.png'),
        caption: 'اگر ہم ظاہری حصوں کی بات کریں تو یہ مختلف ہو سکتے ہیں',
    },
    {
        type: 'image',
        source: require('./images/HumanBody/muscles.png'),
        caption: 'ہمارے جسم کا وہ حصہ جو گوشت سے بنا ہے اس کو ہم مسلز کہتے ہیں',
    },
    {
        type: 'image',
        source: require('./images/HumanBody/muscles.png'),
        caption: 'مسلز جسم کے مختلف حصوں کو آپس میں جوڑتے ہیں',
    },
    {
        type: 'image',
        source: require('./images/HumanBody/muscles.png'),
        caption: 'ہمارے جسم میں چھ سو سے اوپر مسلز موجود ہیں',
    },
    {
        type: 'image',
        source: require('./images/HumanBody/muscles.png'),
        caption: 'جبکہ ہر مسل ہزاروں چھوٹے مسل فائبر سے بنتا ہے',
    },   
      { 
        type: 'mcq',
        question: 'مسلز کس سے بنے ہوتے ہیں؟ ',
        options: ['مسل فائبر ', ' بون فائبر', 'ہڈیاں', ' جسم'],
        correctAnswer: 0,
      },
      { 
        type: 'mcq',
        question: 'ہمارے جسم میں کتنے مسلز ہوتے ہیں؟ ',
        options: ['250 سے اوپر', ' 500 سے اوپر', '700 سے اوپر', ' 600 سے اوپر'],
        correctAnswer: 3,
      },
      {
        type: 'image',
        source: require('./images/HumanBody/skeleton.png'),
        caption: 'ہڈیاں ہمارے مسلز کو ایک جگہ رکھنے میں مدد فراہم کرتی ہیں',
    },
    {
        type: 'image',
        source: require('./images/HumanBody/skeleton.png'),
        caption: 'یہ ہڈیاں مسلز کو مختلف سمتوں میں حرکت کرنے میں مدد دیتی ہیں',
    },
    {
        type: 'image',
        source: require('./images/HumanBody/skeleton.png'),
        caption: 'ہمارے جسم میں 206 ہڈیاں پائی جاتی ہیں',
    },
    { 
      type: 'mcq',
      question: 'ہڈیوں کا کام ہمارے جسم کو سپورٹ فراہم کرنا ہے',
      options: ['درست', 'غلط'],
      correctAnswer: 0,
    },
    { 
      type: 'mcq',
      question: 'ہمارے جسم میں 203 ہڈیاں ہیں',
      options: ['درست', 'غلط'],
      correctAnswer: 1,
    },
    ],
  },
  {
    id: '2',
    subcategory: 'Human Body',
    title: 'Unit 2: Concepts',
    content: [
      {
        type: 'text',
        text: 'This is the content of unit 2.',
      },
    ],
  },
  {
    id: '3',
    subcategory: 'Human Body',
    title: 'Unit 3: Quiz',
    content: [
      {
        type: 'mcq',
        question: 'What is React Native?',
        options: ['A framework', 'A programming language', 'A database', 'A platform'],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: '4',
    subcategory: 'Human Body',
    title: 'Unit 4: Concepts',
    content: [
      {
        type: 'text',
        text: 'This is the content of unit 2.',
      },
    ],
  },
  {
    id: '5',
    subcategory: 'Human Body',
    title: 'Unit 5: Quiz',
    content: [
      {
        type: 'mcq',
        question: 'What is React Native?',
        options: ['A framework', 'A programming language', 'A database', 'A platform'],
        correctAnswer: 0,
      },
    ]
  },
  {
    id: '6',
    subcategory: 'Human Body',
    title: 'Unit 6: Quiz',
    content: [
      {
        type: 'mcq',
        question: 'What is React Native?',
        options: ['A framework', 'A programming language', 'A database', 'A platform'],
        correctAnswer: 0,
      },
    ]
  }
];

