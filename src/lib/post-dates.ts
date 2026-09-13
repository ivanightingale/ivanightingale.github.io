import type { CollectionEntry } from 'astro:content';
import { getGitDates } from './git-dates';

export interface PostDates {
  created: Date;
  updated: Date;
  showUpdated: boolean;
}

function dayKey(date: Date): string {
  return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
}

export async function getPostDates(post: CollectionEntry<'blog'>): Promise<PostDates> {
  const { created, updated } = await getGitDates(post.filePath);
  const createdDate = created ?? post.data.date;
  const updatedDate = updated ?? post.data.date;
  return {
    created: createdDate,
    updated: updatedDate,
    showUpdated: dayKey(createdDate) !== dayKey(updatedDate),
  };
}

export function formatPostDate(date: Date, style: 'long' | 'short' = 'long'): string {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
