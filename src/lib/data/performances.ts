export interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

export interface Performance {
  id: string;
  title: string;
  artist: string;
  year: string;
  location: string;
  image: string;
  description: string;
  media: MediaItem[];
}

export const performances: Performance[] = [
  {
    id: 'super-bowl-2024',
    title: 'Super Bowl LVIII Halftime Show',
    artist: 'Usher',
    year: '2024',
    location: 'Las Vegas, NV',
    image: '/images/placeholder-1.jpg',
    description: 'Performed at Super Bowl LVIII Halftime Show',
    media: [
      { type: 'image', url: '/images/placeholder-1.jpg' },
      { type: 'image', url: '/images/placeholder-2.jpg' },
      { type: 'video', url: 'https://example.com/video1.mp4' },
    ],
  },
  {
    id: 'coachella-2024',
    title: 'Coachella',
    artist: 'Camila Cabello',
    year: '2024',
    location: 'Indio, CA',
    image: '/images/placeholder-2.jpg',
    description: 'Performance at Coachella Music Festival',
    media: [
      { type: 'image', url: '/images/placeholder-3.jpg' },
      { type: 'image', url: '/images/placeholder-4.jpg' },
    ],
  },
  {
    id: 'video-music-awards-2024',
    title: 'Video Music Awards',
    artist: 'LISA',
    year: '2024',
    location: 'New York, NY',
    image: '/images/placeholder-3.jpg',
    description: 'Performance at MTV Video Music Awards',
    media: [
      { type: 'image', url: '/images/placeholder-3.jpg' },
    ],
  },
  {
    id: 'world-tour-2024',
    title: 'World Tour',
    artist: 'JJ Lin',
    year: '2024',
    location: 'Asia',
    image: '/images/placeholder-4.jpg',
    description: 'Currently on tour with JJ Lin',
    media: [
      { type: 'image', url: '/images/placeholder-4.jpg' },
    ],
  },
  {
    id: 'japan-tour-2023',
    title: 'Japan Tour',
    artist: 'TVXQ',
    year: '2023',
    location: 'Japan',
    image: '/images/placeholder-5.jpg',
    description: 'Tour performances across Japan',
    media: [
      { type: 'image', url: '/images/placeholder-5.jpg' },
    ],
  },
  {
    id: 'live-tour-2023',
    title: 'Live Tour',
    artist: 'GENERATIONS',
    year: '2023',
    location: 'Japan',
    image: '/images/placeholder-6.jpg',
    description: 'Tour performances with GENERATIONS',
    media: [
      { type: 'image', url: '/images/placeholder-6.jpg' },
    ],
  },
  {
    id: 'japan-tour-2023-boa',
    title: 'Japan Tour',
    artist: 'BoA',
    year: '2023',
    location: 'Japan',
    image: '/images/placeholder-7.jpg',
    description: 'Tour performances with BoA',
    media: [
      { type: 'image', url: '/images/placeholder-7.jpg' },
    ],
  },
  {
    id: 'super-bowl-commercial-2020',
    title: 'Super Bowl Commercial',
    artist: 'Pepsi ft. Missy Elliott & H.E.R',
    year: '2020',
    location: 'USA',
    image: '/images/placeholder-8.jpg',
    description: 'Featured in Pepsi Super Bowl Commercial',
    media: [
      { type: 'image', url: '/images/placeholder-8.jpg' },
    ],
  },
  {
    id: 'rosa-music-video-2020',
    title: '"ROSA" Music Video',
    artist: 'J Balvin',
    year: '2020',
    location: 'USA',
    image: '/images/placeholder-9.jpg',
    description: 'Featured dancer in music video',
    media: [
      { type: 'image', url: '/images/placeholder-9.jpg' },
    ],
  },
  {
    id: 'live-event-2019',
    title: 'Live Event',
    artist: 'Puma x Balmain',
    year: '2019',
    location: 'USA',
    image: '/images/placeholder-10.jpg',
    description: 'Performance at brand collaboration event',
    media: [
      { type: 'image', url: '/images/placeholder-10.jpg' },
    ],
  },
]; 