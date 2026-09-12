export interface GitDates {
  created?: Date;
  updated?: Date;
}

const BLOG_DIR = 'src/content/blog';
const ISO_DATE = /^\d{4}-\d{2}-\d{2}T/;

let cache: Map<string, { created: Date; updated: Date }> | undefined;

async function buildMap(): Promise<Map<string, { created: Date; updated: Date }>> {
  const map = new Map<string, { created: Date; updated: Date }>();
  const { execFileSync } = await import('node:child_process');

  let output: string;
  try {
    output = execFileSync('git', ['log', '--format=%aI', '--name-only', '--', BLOG_DIR], {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return map;
  }

  let current: Date | undefined;
  for (const raw of output.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (ISO_DATE.test(line)) {
      const parsed = new Date(line);
      current = Number.isNaN(parsed.getTime()) ? undefined : parsed;
      continue;
    }
    if (!current) continue;
    const entry = map.get(line);
    if (entry) {
      entry.created = current;
    } else {
      map.set(line, { created: current, updated: current });
    }
  }

  return map;
}

export async function getGitDates(filePath?: string): Promise<GitDates> {
  if (!filePath) return {};
  cache ??= await buildMap();
  const dates = cache.get(filePath);
  return dates ? { created: dates.created, updated: dates.updated } : {};
}
