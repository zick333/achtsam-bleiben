export interface PageFrontmatter {
  slug: string;
  title: string;
  description?: string;
  template: string;
  images?: Record<string, string>;
  featuredImage?: string;
}

export interface BlogFrontmatter {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  description?: string;
  featuredImage?: string;
  heroBackground?: string;
  relatedImages?: string[];
}

export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: 'upcoming' | 'recurring' | 'archive';
  cost?: string;
  organizer?: string;
  category?: string;
  tags?: string[];
  images?: {
    featured?: string;
    thumbnail?: string;
  };
  calendarExport?: boolean;
  isActiveEvent?: boolean;
}

export interface EventsData {
  events: Event[];
}
