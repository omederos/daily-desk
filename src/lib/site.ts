export const site = {
  title: 'Daily Desk',
  lede: 'AI news worth reading',
  url: 'https://ai.omederos.com',
  footer:
    'Daily Desk is written every afternoon by an AI, from the last day\'s news. It will miss things. It will get some things wrong. Treat it as a start.',
  postedNote: 'Posted 14:00 ET. Newest first.',
  social: [
    { label: 'X', href: 'https://x.com/omederos' },
    { label: 'GitHub', href: 'https://github.com/omederos' },
    { label: 'SoundCloud', href: 'https://soundcloud.com/oscar-mederos' }
  ]
} as const;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];


export function monthKey(date: Date): string {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
}

export function monthHeading(date: Date): string {
  return `${MONTHS_LONG[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function dateId(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function homeDateLabel(date: Date): string {
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]}`;
}

export function articleDateLabel(date: Date, weekday: string): string {
  return `${weekday}, ${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function pageTitleDate(date: Date): string {
  return `${MONTHS_LONG[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

export function briefingPath(date: Date): string {
  return `/${dateId(date)}/`;
}

export function tocFromBody(body: string): { id: string; title: string; learn: boolean }[] {
  const items: { id: string; title: string; learn: boolean }[] = [];
  const re = /<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(body)) !== null) {
    const id = match[1];
    const title = match[2].replace(/<[^>]+>/g, '').trim();
    items.push({ id, title, learn: id === 'learn' });
  }
  return items;
}
