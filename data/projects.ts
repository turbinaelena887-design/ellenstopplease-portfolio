export type Project = {
  slug: string; title: string; category: string; year: string;
  description: string; cover: string; coverPosition?: string; previewVideo?: string;
  fullVideo?: string; aspectRatio: string; isPlaceholder?: boolean; gallery: { src: string; alt: string }[];
};
// Demonstration concepts only. Replace these descriptions and local media with your work.
export const projects: Project[] = [
  { slug: 'flowery', aspectRatio: '9 / 16', title: 'FLOWERY', category: 'Cinematic Commercial', year: '2026', description: 'FLOWERY — cinematic commercial.', cover: '/media/Elena_Contemporary_luxury_floral_campaign_photography._Striki_0334a640-4a4c-4535-929c-0e137052855b_1.png', coverPosition: 'center 40%', previewVideo: '/media/flowery-preview.mp4', fullVideo: '/media/flowery-film.mp4', isPlaceholder: false, gallery: [] },
  { slug: 'la-dolce-vita', aspectRatio: '9 / 16', title: 'LA DOLCE VITA', category: 'Wine / Lifestyle / Cinematic Advertising', year: '2026', description: 'An independently conceived and produced cinematic wine spec commercial.', cover: '', previewVideo: '/media/la-dolce-vita-preview.mp4', fullVideo: '/media/la-dolce-vita-film.mp4', isPlaceholder: false, gallery: [] },
  { slug: 'vishni', aspectRatio: '9 / 16', title: 'VISHNI', category: 'Fashion / Luxury Lifestyle', year: '2026', description: 'An independently created cinematic fashion spec commercial inspired by VISHNI, later reposted by the brand.', cover: '/media/vishni.jpg', previewVideo: '/media/vishni-preview.mp4', fullVideo: '/media/vishni-film.mp4', isPlaceholder: false, gallery: [] },
  { slug: 'surreal-visions', aspectRatio: '8 / 5', title: 'SURREAL VISIONS', category: 'Experimental AI Film', year: '2026', description: 'An otherworldly landscape at the edge of recognition. This local demonstration concept is a space for your experimental film.', cover: '/media/surreal-visions.jpg', previewVideo: '/media/surreal-visions.mp4', fullVideo: '/media/surreal-visions.mp4', gallery: [] },
];
