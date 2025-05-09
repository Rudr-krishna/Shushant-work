
export type WorkType = 'Short Story' | 'Short Film' | 'Feature Idea';

export interface Work {
  id: string;
  title: string;
  type: WorkType;
  genre: string;
  description: string;
  image: string;
  readMoreLink?: string;
  watchLink?: string;
  downloadLink?: string;
}

export const works: Work[] = [
  {
    id: '1',
    title: 'An Act of a Craven',
    type: 'Short Film',
    genre: 'Drama',
    description: 'This short film script is a psychological thriller exploring guilt, perception, and reality themes. The script was designed for indie filmmakers looking for a production-friendly screenplay with a gripping and atmospheric tone. This is a 2-page excerpt, and the full script is available upon request.',
    image: 'https://github.com/ShushantSharma372/story-script-studio-web/blob/main/public/images/images1.png',
    readMoreLink: '#',
    downloadLink: '#'
  },
  {
    id: '2',
    title: 'Silent Echo',
    type: 'Short Film',
    genre: 'Psychological Thriller',
    description: 'A sound designer becomes obsessed with a strange audio recording that seems to predict future events.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    readMoreLink: '#',
    watchLink: '#'
  },
  {
    id: '3',
    title: 'Memory Lane',
    type: 'Feature Idea',
    genre: 'Science Fiction',
    description: 'In a world where memories can be bought and sold, a woman discovers her childhood memories belong to someone else.',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    readMoreLink: '#'
  },
  {
    id: '4',
    title: 'Coffee & Regrets',
    type: 'Short Story',
    genre: 'Romance',
    description: 'Two former lovers meet by chance at a cafe five years after their breakup.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    readMoreLink: '#',
    downloadLink: '#'
  },
  {
    id: '5',
    title: 'Parallel',
    type: 'Short Film',
    genre: 'Drama',
    description: 'Two strangers living parallel lives in adjacent apartment buildings finally meet during a citywide blackout.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
    readMoreLink: '#',
    watchLink: '#'
  },
  {
    id: '6',
    title: 'The Algorithm',
    type: 'Feature Idea',
    genre: 'Techno Thriller',
    description: 'A programmer creates an algorithm that can predict how people will die, but struggles with the moral implications when it identifies his own death.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    readMoreLink: '#'
  }
];

export const writer = {
  name: 'Shushant Sharma',
  tagline: 'Fiction for every frame and page',
  shortBio: 'Crafting stories that blur the line between reality and imagination. Specializing in character-driven narratives across different mediums.',
  about: `I'm a writer with a passion for exploring the human condition through different narrative forms. My work spans short stories, screenplays, and feature film concepts, each designed to immerse readers and viewers in worlds both familiar and strange.

  My writing focuses on character-driven narratives that examine the complexities of human relationships, identity, and the subtle moments that shape our lives. I'm particularly drawn to stories that blend genres and challenge conventional storytelling formats.

  When I'm not writing, you'll find me exploring independent cinemas, reading everything from classic literature to graphic novels, or engaging in conversations about narrative theory and the evolving landscape of storytelling.`,
  influences: ['Kazuo Ishiguro', 'Charlie Kaufman', 'Kelly Link', 'Wong Kar-wai', 'Zadie Smith'],
  focus: ['Character-driven narratives', 'Genre-blending stories', 'Magical realism', 'Intimate human moments']
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: '#'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: '#'
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    url: '#'
  }
];
