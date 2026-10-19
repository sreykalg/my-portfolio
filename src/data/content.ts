export type NavItem = {
  id: string
  label: string
}

export type Cta = {
  label: string
  href: string
  primary: boolean
}

export type MetaItem = {
  label: string
  text: string
}

export type RailItem = {
  title: string
  text: string
}

export type ExperienceItem = {
  title: string
  org: string
  period: string
  text: string
  current?: boolean
}

export type ProjectStatusTone = 'live' | 'mvp' | 'muted'

export type Project = {
  title: string
  status?: string
  statusTone?: ProjectStatusTone
  summary: string
  year: string
  role: string
  href: string | null
}

export type SkillGroup = {
  title: string
  items: string[]
  note?: string
}

export type Certificate = {
  title: string
  subtitle: string
  image: string
}

export const site = {
  name: 'Sreyka',
  surname: 'Leng',
  role: 'Mobile & Web Developer',
  location: 'Sihanouk Ville, Cambodia',
  email: 'lengsreyka.apple@gmail.com',
  phone: '+855 10 867 566',
  resume: '/Sreyka-Leng-Resume.pdf',
  portrait: '/portrait.jpg',
  links: {
    github: 'https://github.com/sreykalg',
    linkedin: 'https://www.linkedin.com/in/sreyka-leng-226555315/',
    telegram: 'https://t.me/wei01221',
  },
} as const

export const nav: NavItem[] = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Mobile & Web Developer | 2 years Experience',
  intro:
    'I build modern mobile and web applications with clean UI, secure backend architecture, and real-world business value. From self-ordering café apps to rental billing with ABA PayWay, I ship interfaces that feel intentional and backends that hold up under real use.',
  highlight: 'interfaces that feel intentional',
  ctas: [
    { label: 'See Work', href: '#work', primary: true },
    { label: 'Get in touch', href: '#contact', primary: false },
  ] satisfies Cta[],
  meta: [
    {
      label: 'Focus',
      text: 'Flutter, Laravel, API integration, and payment workflows (ABA PayWay & Bakong).',
    },
    {
      label: 'Track record',
      text: '2+ years experience with 5 shipped projects across mobile, web, and campus systems.',
    },
    {
      label: 'Open to',
      text: 'Mobile/web roles, freelance, remote or hybrid, teams shipping real products.',
    },
  ] satisfies MetaItem[],
}

export const positioning = {
  label: 'Positioning',
  title: 'I build products that ship and last.',
  items: [
    {
      title: 'Mobile craft',
      text: 'Flutter apps with clean UI, solid state management (GetX / Riverpod), and APIs that stay in sync with the server.',
    },
    {
      title: 'Web systems',
      text: 'Laravel platforms with practical backend logic, billing, roles, QR flows, and PDF invoices for real businesses.',
    },
    {
      title: 'Integration',
      text: 'Payment checkouts, EmailJS workflows, Firebase, and REST, wiring product behavior so releases feel finished.',
    },
    {
      title: 'Validation loop',
      text: 'I test features before handoff and am actively learning QA (Postman, Playwright, Katalon) so what goes live stays stable.',
    },
  ] satisfies RailItem[],
}

export const experience = {
  label: 'Experience',
  title: 'Building systems for campus and local business.',
  items: [
    {
      title: 'Software Developer',
      org: 'Synorra | Start-up Company',
      period: '2026 – Present',
      current: true,
      text: 'Building software for coffee shops, clothing shops, and university websites, including AI chatbot features and other tools businesses need day to day.',
    },
    {
      title: 'Assistant, Computer Science Department',
      org: 'Life University | Sihanouk Ville',
      period: 'Nov 2025 – Present',
      current: true,
      text: 'Full-cycle building: internal systems, public websites, integrations, testing, and hosting. Not desk admin: hands-on shipping.',
    },
    {
      title: 'Flutter Web Developer',
      org: 'Software Factory | South Korea',
      period: 'Dec 2024 – Jan 2025',
      text: 'Flutter web UI aligned with design specs, EmailJS integrations, and day-to-day collaboration with designers.',
    },
    {
      title: 'R&D Center Member',
      org: 'Life Hope R&D | Life University',
      period: '2023 – 2025',
      text: 'Research and development on tech initiatives; café ordering, API-driven apps, and learning by shipping.',
    },
    {
      title: 'Designer: Posters & Certificates',
      org: 'Startup school | Sihanouk Ville',
      period: 'Jan 2025 – May 2025',
      text: 'Promotional posters and official certificates in Canva and Word for school programs and events.',
    },
  ] satisfies ExperienceItem[],
}

export const projects: Project[] = [
  {
    title: 'Commune Cafe',
    status: 'Business',
    statusTone: 'muted',
    summary:
      'Landing page and Android POS for Commune Cafe (We commune, over coffee) in Zamboanga City, with receipt and label printing for daily café operations.',
    year: '2026',
    role: 'Next.js | Android POS',
    href: 'https://commune-cafe.com',
  },
  {
    title: 'Room Renting Platform',
    summary:
      'Rental listing, monthly billing, PDF invoices, and ABA PayWay checkout for Sihanouk Ville, guest, tenant, and owner dashboards.',
    year: '2025',
    role: 'Laravel | Solo',
    href: 'https://github.com/sreykalg/room-renting',
  },
  {
    title: 'Café App LU Café',
    summary:
      'Self-ordering coffee platform for students and professors, queue efficiency and independent pickup.',
    year: '2024',
    role: 'Flutter | Firebase',
    href: 'https://github.com/lengponay/lucafe',
  },
  {
    title: 'Attendee',
    summary:
      'University attendance via QR scan, Flutter + Riverpod thesis for Life University.',
    year: '2025',
    role: 'Flutter | Riverpod',
    href: 'https://github.com/sreykalg/attendee',
  },
  {
    title: 'Digital Bill',
    summary:
      "Billing and PDF invoice generator built for my mother's small business on Laravel + MySQL.",
    year: '2024',
    role: 'Laravel | Solo',
    href: 'https://github.com/sreykalg/home_digital_bill',
  },
  {
    title: 'SMART Interview',
    status: 'Company',
    statusTone: 'muted',
    summary:
      'Browser voice capture with automated EmailJS delivery, Flutter web for Software Factory.',
    year: '2025',
    role: 'Flutter Web',
    href: null,
  },
  {
    title: 'Life Football Club Website',
    status: 'Org',
    statusTone: 'muted',
    summary:
      'Official club presence site for Life Football Club in Sihanouk Ville.',
    year: '2025',
    role: 'Laravel | Blade',
    href: 'https://github.com/aynac/lfc-web',
  },
  {
    title: 'Life University Attendance System',
    status: 'Org',
    statusTone: 'muted',
    summary:
      'Student and staff QR check-in/check-out attendance platform for the university.',
    year: '2025',
    role: 'Laravel',
    href: null,
  },
  {
    title: 'FocusTimer',
    summary:
      'Pomodoro-style focus app with custom focus and break durations, Flutter + GetX.',
    year: '2024',
    role: 'Flutter | GetX',
    href: 'https://github.com/sreykalg/FocusTimer',
  },
]

export const skills = {
  label: 'Toolkit',
  title: 'What I reach for when shipping.',
  groups: [
    {
      title: 'Languages',
      items: ['Dart', 'Java', 'PHP'],
    },
    {
      title: 'Frameworks & UI',
      items: ['Flutter', 'Laravel', 'Next.js', 'Blade'],
    },
    {
      title: 'State & data',
      items: ['GetX', 'Riverpod', 'REST APIs', 'Firebase', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Delivery',
      items: ['Git', 'GitHub', 'Jira', 'ABA PayWay', 'QR workflows', 'Hosting'],
    },
    {
      title: 'Design',
      items: ['Figma', 'Canva'],
    },
    {
      title: 'QA',
      items: ['Postman', 'API Testing', 'Katalon', 'Playwright', 'Selenium', 'Appium'],
    },
  ] satisfies SkillGroup[],
}

export const certificates: Certificate[] = [
  {
    title: 'Dart Programming',
    subtitle: 'Beginner to Advanced of Dart',
    image: '/certificates/dart_certi.png',
  },
  {
    title: 'Basic Application Development',
    subtitle: 'Coding Certificate of Flutter #01',
    image: '/certificates/basic_flutter.png',
  },
  {
    title: 'Advanced Flutter Development',
    subtitle: 'Coding Certificate of Flutter #02',
    image: '/certificates/advanced_flutter.png',
  },
  {
    title: 'Cloud for Application Development',
    subtitle: 'Coding Certificate',
    image: '/certificates/cloud_flutter.png',
  },
  {
    title: 'Fundamental of Java Programming',
    subtitle: 'Coursera Course Certificate',
    image: '/certificates/java_certi.png',
  },
]

export const contact = {
  title: 'If we should build something, or think it through together.',
  text: 'Collaboration, hiring, freelance, and product feedback are all welcome. I usually reply within 24 hours, faster on Telegram.',
}
