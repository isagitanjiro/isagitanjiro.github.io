export type Experience = {
  id: string;
  index: string;
  role: string;
  org: string;
  industry: string;
  date: string;
  href?: string;
  description: string;
  responsibilities: string[];
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 'general-cm',
    index: '00',
    role: 'Community Manager & Moderator',
    org: 'Web3 / Discord Communities',
    industry: 'Web3 · Community',
    date: 'Ongoing',
    description:
      'Worked across multiple Web3 communities, helping projects build organized, active and welcoming communities.',
    responsibilities: [
      'Managed Discord servers, channels, roles and onboarding systems.',
      'Moderated discussions and maintained healthy community standards.',
      'Planned engagement activities and community events.',
      'Supported recruitment, partnerships and community growth initiatives.',
      'Helped identify and resolve community issues.',
      'Maintained positive community culture.',
    ],
  },
  {
    id: 'zenchain',
    index: '01',
    role: 'Lead Community Manager',
    org: 'ZenChain',
    industry: 'Web3 / Layer-1 Blockchain',
    date: 'Jan 2025 – Present',
    href: 'https://x.com/zen_chain?s=20',
    featured: true,
    description:
      'I led community operations for ZenChain, a Layer-1 blockchain combining Bitcoin\u2019s network security with Ethereum-compatible smart-contract programmability.',
    responsibilities: [
      'Managed and moderated Discord communities and regional channels.',
      'Organized community events, campaigns, quizzes, game nights and AMAs.',
      'Created educational content around ZenChain and its ecosystem.',
      'Supported community growth, engagement and member retention.',
      'Helped promote ecosystem products including ZenBridge, ZenFi, ZenSwap and ZenEarn.',
      'Handled member support, conflict resolution and day-to-day community operations.',
    ],
  },
  {
    id: 'alpine',
    index: '02',
    role: 'Community Manager',
    org: 'Alpine Gaming',
    industry: 'Gaming / Esports',
    date: 'Aug 2026 – Present',
    href: 'https://x.com/AlpineGamingGG',
    description:
      'Managing community operations for Alpine Gaming with a focus on building an active gaming community and strengthening its Discord ecosystem.',
    responsibilities: [
      'Managing community engagement and moderation.',
      'Helping structure and improve the Discord community.',
      'Developing activities and events that encourage participation.',
      'Supporting community growth and recruitment.',
      'Helping build a strong community culture.',
    ],
  },
  {
    id: 'steppas',
    index: '03',
    role: 'Staff Moderator',
    org: 'Steppas',
    industry: 'Gaming / Fortnite',
    date: 'Aug 2026 – Present',
    href: 'https://x.com/steppafnf?s=20',
    description: '',
    responsibilities: [
      'Enforcing community rules.',
      'Monitoring discussions.',
      'Handling rule violations.',
      'Supporting community members.',
      'Assisting with day-to-day server operations.',
      'Working with the staff team to improve community organization and engagement.',
    ],
  },
];

export type Expertise = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const expertise: Expertise[] = [
  {
    id: 'management',
    title: 'Community Management',
    description:
      'Building organized, welcoming communities with strong culture, systems and member experiences.',
    icon: 'Users',
  },
  {
    id: 'discord',
    title: 'Discord Operations',
    description:
      'Server structure, onboarding, roles, moderation, tickets and staff workflows.',
    icon: 'MessageSquare',
  },
  {
    id: 'growth',
    title: 'Community Growth',
    description:
      'Creating campaigns and initiatives that turn passive members into active participants.',
    icon: 'TrendingUp',
  },
  {
    id: 'events',
    title: 'Events & Engagement',
    description:
      'AMAs, quizzes, game nights, competitions and interactive community experiences.',
    icon: 'CalendarDays',
  },
  {
    id: 'marketing',
    title: 'Web3 Marketing',
    description:
      'Community-led awareness, educational content and ecosystem storytelling.',
    icon: 'Megaphone',
  },
  {
    id: 'bd',
    title: 'Business Development',
    description:
      'Partnership outreach, collaborations and connecting projects with relevant communities.',
    icon: 'Handshake',
  },
];

export type Ambassador = {
  id: string;
  name: string;
  role: string;
  href?: string;
  description: string;
};

export const ambassadors: Ambassador[] = [
  {
    id: 'zybrafi',
    name: 'ZybraFi',
    role: 'Ambassador',
    href: 'https://x.com/ZybraEcosystem',
    description:
      'Supported community growth and ecosystem awareness through content creation, engagement, education and outreach.',
  },
  {
    id: 'maavatar',
    name: 'MaAvatar',
    role: 'Ambassador',
    href: 'https://x.com/MaAvatarmeta',
    description:
      'Promoted project awareness, engaged with the community and supported user adoption through content and outreach.',
  },
  {
    id: 'neurolov',
    name: 'Neurolov',
    role: 'Ambassador',
    href: 'https://x.com/neurolov?s=20',
    description:
      'Contributed to community growth and project visibility through engagement, promotion and educational content.',
  },
  {
    id: 'middle',
    name: 'Middle',
    role: 'Ambassador',
    description:
      'Supported community awareness and growth through social engagement, content sharing and outreach.',
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const sectionIds = ['about', 'experience', 'work', 'skills', 'contact'];

export const contact = {
  email: 'anointedbenson@gmail.com',
  xUrl: 'https://x.com/isagitanjiro',
  discordUrl: 'https://discord.com/users/isagitanjiro',
  telegramUrl: 'https://t.me/isagitanjiro',
};
