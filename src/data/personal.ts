import { PersonalInfo, SkillCategory, Hobby, ContactInfo, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Rdho Zaenal Mustaqim',
  title: 'Gaming Enthusiast & Student',
  subtitle: 'SMK Negeri 1 Liwa • TJKT Angkatan 20',
  description: 'Gamer passionate yang suka eksplorasi dunia gaming dan teknologi',
  school: 'SMK Negeri 1 Liwa',
  major: 'Teknik Jaringan Komputer dan Telekomunikasi (TJKT)',
  batch: 'Angkatan 20',
  location: 'Lampung Barat, Indonesia'
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Gaming Skills',
    skills: [
      { name: 'Strategy Games', level: 95, category: 'technical' },
      { name: 'FPS Gaming', level: 90, category: 'technical' },
      { name: 'RPG Mastery', level: 88, category: 'technical' },
      { name: 'Team Coordination', level: 92, category: 'technical' }
    ]
  },
  {
    title: 'Gaming Genres',
    skills: [
      { name: 'MOBA', level: 85, category: 'programming' },
      { name: 'Battle Royale', level: 90, category: 'programming' },
      { name: 'Racing Games', level: 80, category: 'programming' },
      { name: 'Fighting Games', level: 75, category: 'programming' },
      { name: 'Puzzle Games', level: 95, category: 'programming' }
    ]
  },
  {
    title: 'Gaming Attributes',
    skills: [
      { name: 'Quick Reflexes', level: 95, category: 'soft' },
      { name: 'Strategic Thinking', level: 90, category: 'soft' },
      { name: 'Team Leadership', level: 85, category: 'soft' },
      { name: 'Competitive Spirit', level: 98, category: 'soft' },
      { name: 'Adaptability', level: 88, category: 'soft' }
    ]
  }
];

export const hobbies: Hobby[] = [
  {
    title: 'Competitive Gaming',
    description: 'Aktif dalam competitive gaming dengan fokus pada strategi dan teamwork. Mencapai ranking tinggi di berbagai game multiplayer.',
    icon: 'Gamepad2',
    tags: ['Ranked Play', 'Tournaments', 'Team Strategy', 'Esports']
  },
  {
    title: 'Game Streaming',
    description: 'Streaming gameplay dan berbagi tips gaming dengan komunitas. Membangun audience dan berinteraksi dengan sesama gamer.',
    icon: 'Monitor',
    tags: ['Live Streaming', 'Content Creation', 'Community', 'Tips & Tricks']
  },
  {
    title: 'Gaming Hardware',
    description: 'Passionate tentang gaming setup dan hardware optimization. Eksperimen dengan konfigurasi terbaik untuk gaming experience.',
    icon: 'Cpu',
    tags: ['PC Building', 'Hardware Reviews', 'Performance', 'Setup Optimization']
  },
  {
    title: 'Gaming Community',
    description: 'Aktif dalam komunitas gaming lokal dan online. Membantu sesama gamer dan berbagi pengalaman gaming.',
    icon: 'Users',
    tags: ['Community Building', 'Mentoring', 'Gaming Events', 'Friendship']
  }
];

export const contactInfo: ContactInfo = {
  email: 'rdho.zaenal@email.com',
  phone: '+62 812-3456-7890',
  location: 'SMK Negeri 1 Liwa, Lampung Barat',
  school: 'SMK Negeri 1 Liwa - TJKT'
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/rdhozaenal',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rdhozaenal',
    icon: 'Linkedin'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/rdhozaenal',
    icon: 'Instagram'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/rdhozaenal',
    icon: 'Twitter'
  }
];

export const aboutSections = [
  {
    title: 'Gaming Journey',
    content: 'Halo! Saya Rdho Zaenal Mustaqim, seorang gamer passionate yang juga pelajar di SMK Negeri 1 Liwa. Gaming bukan hanya hobi, tapi passion yang membentuk karakter dan kemampuan problem solving saya.'
  },
  {
    title: 'Gaming Philosophy',
    content: 'Saya percaya gaming mengajarkan teamwork, strategi, dan leadership. Setiap game adalah pembelajaran baru yang mengasah kemampuan analisis dan quick decision making.'
  },
  {
    title: 'Gaming Goals',
    content: 'Bercita-cita menjadi professional gamer atau content creator yang dapat menginspirasi generasi muda melalui gaming. Gaming adalah masa depan dan saya ingin menjadi bagian darinya.'
  }
];

export const stats = [
  { number: '1000+', label: 'Hours Gaming' },
  { number: '50+', label: 'Games Mastered' },
  { number: 'Platinum', label: 'Achievement Level' },
  { number: '24/7', label: 'Gaming Spirit' }
];

