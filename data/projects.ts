export type Project = {
  slug: string; title: string; category: string; year: string;
  description: string; cover: string; coverPosition?: string; previewVideo?: string;
  fullVideo?: string; isPlaceholder?: boolean; gallery: { src: string; alt: string }[];
};
// Demonstration concepts only. Replace these descriptions and local media with your work.
export const projects: Project[] = [
  { slug: 'flowery', title: 'FLOWERY', category: 'Cinematic Commercial', year: '2026', description: 'FLOWERY — cinematic commercial.', cover: '/media/Elena_Contemporary_luxury_floral_campaign_photography._Striki_0334a640-4a4c-4535-929c-0e137052855b_1.png', coverPosition: 'center 40%', previewVideo: '/media/flowery-preview.mp4', fullVideo: '/media/flowery-film.mp4', isPlaceholder: false, gallery: [] },
  { slug: 'rikky-hype', title: 'RIKKY HYPE', category: 'Fashion Campaign', year: '2026', description: 'An exploration of silhouette, movement, and electric color. This demonstration artwork is a placeholder for your fashion campaign.', cover: '/media/rikky-hype.jpg', previewVideo: '/media/rikky-hype.mp4', fullVideo: '/media/rikky-hype.mp4', gallery: [] },
  { slug: 'vishni', title: 'VISHNI', category: 'Fashion Film', year: '2026', description: 'An imagined editorial in deep red. Texture and sculptural forms set the rhythm. Replace this placeholder with your project narrative.', cover: '/media/vishni.jpg', previewVideo: '/media/vishni.mp4', fullVideo: '/media/vishni.mp4', gallery: [] },
  { slug: 'surreal-visions', title: 'SURREAL VISIONS', category: 'Experimental AI Film', year: '2026', description: 'An otherworldly landscape at the edge of recognition. This local demonstration concept is a space for your experimental film.', cover: '/media/surreal-visions.jpg', previewVideo: '/media/surreal-visions.mp4', fullVideo: '/media/surreal-visions.mp4', gallery: [] },
];
