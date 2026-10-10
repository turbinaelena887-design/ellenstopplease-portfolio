export type FloweryStill = {
  src: string | null;
  alt: string;
  label: string;
  placeholderRatio: string;
  focalPoint: string;
};

// Add a local /media/... path to src. Actual image dimensions are read automatically.
// focalPoint controls alignment; original image proportions are always preserved.
export const floweryCaseStudy = {
  subtitle: 'A Cinematic Floral Story',
  classification: 'Spec Commercial / AI Film / 2026',
  description: 'An independently created cinematic floral spec commercial. A story of anticipation, connection, and the beauty of small gestures.',
  details: [
    ['Project', 'FLOWERY'],
    ['Type', 'Spec Commercial'],
    ['Category', 'Floral / Lifestyle'],
    ['Services', 'Creative Direction, AI Production, Editing'],
    ['Production', 'Independent / End-to-End'],
    ['Year', '2026'],
  ],
  brief: [
    'Create an emotionally engaging cinematic commercial for a contemporary flower studio, moving beyond traditional product-focused advertising.',
    'The goal was to communicate the feeling behind giving flowers through visual storytelling, atmosphere, and authentic human moments.',
  ],
  concept: [
    'A story of anticipation, connection, and the beauty of small gestures.',
    'Built around a single bouquet, the film follows two characters whose stories gradually come together. Warm cinematic lighting, subtle emotions, and carefully crafted details turn a simple floral gift into a meaningful moment.',
  ],
  roleHeading: 'Creative Direction · Concept Development · Full AI Production · Post-Production',
  role: [
    'An independently developed spec commercial, created entirely from concept to final frame.',
    'I was responsible for the original idea, script, storyboarding, visual direction, character and environment development, AI image and video generation, editing, sound design, music curation, and final delivery.',
  ],
  roleStatement: 'Independently conceived, directed, and produced — from the first idea to the final frame.',
  process: [
    'The project was developed through a combination of AI tools and traditional filmmaking principles.',
    'Particular attention was given to character consistency, visual continuity, realistic lighting, natural movement, and cinematic pacing — ensuring that every generated shot contributed to one cohesive visual narrative.',
  ],
  tools: [
    ['Midjourney', 'Image Generation & Visual Development'],
    ['Nano Banana', 'Image Refinement & Consistency'],
    ['Seedance', 'AI Video Generation'],
    ['CapCut', 'Editing, Sound Design & Post-Production'],
  ],
  result: 'A fully AI-produced cinematic spec commercial that combines emotional storytelling, realistic visuals, and a distinct brand atmosphere.',
  resultStatement: '100% independently conceived, directed, produced, and edited.',
  gallery: {
    floweryStill01: { src: null, alt: 'FLOWERY cinematic still', label: 'Gallery Image 01 — Cinematic Still', placeholderRatio: '16 / 9', focalPoint: '50% 50%' },
    floweryStill02: { src: null, alt: 'FLOWERY visual storytelling, first character', label: 'Gallery Image 02 — Visual Storytelling', placeholderRatio: '3 / 4', focalPoint: '50% 50%' },
    floweryStill03: { src: null, alt: 'FLOWERY visual storytelling, second character', label: 'Gallery Image 03 — Visual Storytelling', placeholderRatio: '3 / 4', focalPoint: '50% 50%' },
    floweryStill04: { src: null, alt: 'FLOWERY visual development', label: 'Gallery Image 04 — Visual Development', placeholderRatio: '16 / 9', focalPoint: '50% 50%' },
    floweryStill05: { src: null, alt: 'FLOWERY final film still', label: 'Gallery Image 05 — Final Film Still', placeholderRatio: '16 / 9', focalPoint: '50% 50%' },
  } satisfies Record<string, FloweryStill>,
};
