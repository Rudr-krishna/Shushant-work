
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
    genre: 'Psychological Thriller',
    description: 'This short film script is a psychological thriller exploring guilt, perception, and reality themes. The script was designed for indie filmmakers looking for a production-friendly screenplay with a gripping and atmospheric tone. This is a 2-page excerpt, and the full script is available upon request.',
    image: 'https://raw.githubusercontent.com/Rudr-krishna/Shushant-work/main/public/images/images1.png',
    readMoreLink: '#'
  },
  {
    id: '2',
    title: 'The Pool Club',
    type: 'Short Film',
    genre: 'Slice of Life, Drama, Comedy',
    description: 'I crafted a visually engaging screenplay with minimal dialogue, rich character depth, and a subtle yet powerful emotional arc. This script is perfect for indie filmmakers looking for a simple yet impactful story that resonates with audiences.This is a 2-page excerpt. The full script is available upon request.The dialogues in this script are written in Hindi.',
    image: 'https://raw.githubusercontent.com/Rudr-krishna/Shushant-work/main/public/images/image2.png',
    readMoreLink: '#'
  },
  {
    id: '3',
    title: 'What Does forever stands for?',
    type: 'Short Story',
    genre: 'Drama',
    description: 'When Vasu learns that his wifes cancer has relapsed and there is nothing more the doctors can do, he refuses to accept defeat. Holding onto hope, he fights against the inevitable, unwilling to let go. But as he sits by her hospital bed, Radha tells him a story—one that intertwines their past, their regrets, and the love they once took for granted.',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    readMoreLink: '#'
  },
  {
    id: '4',
    title: 'Red Dust Protocol',
    type: 'Short Story',
    genre: 'Sci-fi, Thriller',
    description: 'It is a Sci-fi Short story where Fani illegally summons his future selves for a quick task. He expects a shortcut, not blood on the floor and their sudden disappearance. This is an excerpt. The full story is available upon request.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    readMoreLink: '#'
  },
  {
    id: '5',
    title: 'Fragments',
    type: 'Feature Idea',
    genre: 'Revenge Tragedy',
    description: 'Two strangers, living miles apart, lead parallel lives. Both have small and happy families. However, their peaceful lives take a dark turn when similar eerie incidents begin to unfold around them and they began to seem more related than mre strangers.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
    readMoreLink: '#'
  }
];

export const writer = {
  name: 'Shushant Sharma',
  tagline: 'Fiction for every frame and page',
  shortBio: 'Crafting stories that blur the line between reality and imagination. Specializing in character-driven narratives across different mediums.',
  about: `I'm a writer with a passion for exploring the human condition through different narrative forms. My work spans short stories, screenplays, and feature film concepts, each designed to immerse readers and viewers in worlds both familiar and strange.

  My writing focuses on character-driven narratives that examine the complexities of human relationships, identity, and the subtle moments that shape our lives. I'm particularly drawn to stories that blend genres and challenge conventional storytelling formats.

  When I'm not writing, you'll find me exploring independent cinemas, playing chess, or engaging in conversations about narrative theory and the evolving landscape of storytelling.`,
  influences: ['Aurther Conan Doyle', 'Imtiaz Ali', 'C Prem Kumar', 'Agatha Christie', 'Christopher Nolan'],
  focus: ['Character-driven narratives', 'Genre-blending stories', 'Mytholocial Folklores', 'Intimate human moments']
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
