export type Project = {
  slug: string; title: string; category: string; year: string;
  description: string; cover: string; coverCaption?: string; coverPosition?: string; previewVideo?: string;
  fullVideo?: string; aspectRatio: string; isPlaceholder?: boolean; gallery: { src: string; alt: string }[];
};
// Demonstration concepts only. Replace these descriptions and local media with your work.
export const projects: Project[] = [
  { slug: 'flowery', coverCaption: 'A CINEMATIC FLORAL STORY', aspectRatio: '9 / 16', title: 'FLOWERY', category: 'Cinematic Commercial', year: '2026', description: 'FLOWERY — cinematic commercial.', cover: '/media/flowery-cover.png', coverPosition: 'center 40%', previewVideo: '/media/flowery-preview.mp4', fullVideo: '/media/flowery-film.mp4', isPlaceholder: false, gallery: [] },
  { slug: 'la-dolce-vita', coverCaption: 'A CINEMATIC WINE STORY', aspectRatio: '9 / 16', title: 'LA DOLCE VITA', category: 'Wine / Lifestyle / Cinematic Advertising', year: '2026', description: 'An independently conceived and produced cinematic wine spec commercial.', cover: '/media/la-dolce-vita-cover.png', previewVideo: '/media/la-dolce-vita-preview.mp4', fullVideo: '/media/la-dolce-vita-film.mp4', isPlaceholder: false, gallery: [] },
  { slug: 'vishni', coverCaption: 'IMPOSSIBLE NOT TO LOOK.', aspectRatio: '9 / 16', title: 'VISHNI', category: 'Fashion / Luxury Lifestyle', year: '2026', description: 'An independently created cinematic fashion spec commercial inspired by VISHNI, later reposted by the brand.', cover: '/media/vishni-cover.png', previewVideo: '/media/vishni-preview.mp4', fullVideo: '/media/vishni-film.mp4', isPlaceholder: false, gallery: [] },
  { slug: 'surreal-visions', coverCaption: 'BEYOND THE ORDINARY.', aspectRatio: '8 / 5', title: 'SURREAL', category: 'Surrealism / Experimental Visuals / AI Filmmaking', year: '2026', description: 'Three independent experimental AI films exploring surrealism, imagination, and cinematic expression.', cover: '/media/surreal-cover.png', previewVideo: '/media/surreal-preview.mp4', fullVideo: '/media/surreal-film-01.mp4', isPlaceholder: false, gallery: [] },
];
