export const services = [
  { title: 'Smart Theatre', text: 'Advanced educational spaces with immersive audio-visual systems for learning, seminars, presentations, conferences and video screening.', image: 'https://images.unsplash.com/photo-1567593810070-7a3d471af022?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Home Theatre', text: 'Personal cinema environments designed around premium projection, immersive sound, acoustics and comfort.', image: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?auto=format&fit=crop&w=1200&q=85' },
  { title: '12D Theatre', text: 'Immersive entertainment experiences integrating motion, visuals and special effects.', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Smart Home', text: 'Connected living experiences with integrated control for lighting, entertainment and everyday convenience.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Smart Office', text: 'Intelligent meeting and collaboration environments with professional AV integration.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Smart Events', text: 'Audio-visual technology and professional systems for presentations, conferences and live experiences.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85' },
]
export const packages = [
  { name:'Economic', price:'₹3–5 Lakh', features:['Compact designs for small spaces','Branded, affordable AV equipment','Simple, elegant seating','Easy installation and maintenance'] },
  { name:'Premium', price:'₹5–9 Lakh', features:['Premium seating and interiors','Enhanced sound with acoustic panels','Smart lighting and ambience control','4K projection options'] },
  { name:'Luxury', price:'₹9–15 Lakh', features:['4K projection and Dolby Atmos options','Luxury recliner seating','High-end acoustic treatments','Smart automation and cinematic interiors'], featured:true },
]
export const starterProjects = [
  { id:'sample-smart-theatre', project_name:'Smart Theatre Environments', location:'India', short_description:'Transforming traditional classrooms into dynamic learning and presentation spaces.', main_image_url:'https://images.unsplash.com/photo-1567593810070-7a3d471af022?auto=format&fit=crop&w=1400&q=85', status:'published', show_on_homepage:true },
  { id:'sample-home-cinema', project_name:'Private Cinema Experiences', location:'India & UAE', short_description:'Immersive home cinema spaces designed for entertainment and comfort.', main_image_url:'https://images.unsplash.com/photo-1608178398319-48f814d0750c?auto=format&fit=crop&w=1400&q=85', status:'published', show_on_homepage:true },
  { id:'sample-av-integration', project_name:'Professional AV Integration', location:'UAE', short_description:'Integrated audio-visual solutions for professional environments.', main_image_url:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85', status:'published', show_on_homepage:false },
]
export const starterGallery = [
  ...services.slice(0,6).map((s,i)=>({id:`sample-${i}`, image_url:s.image, caption:s.title, status:'published'}))
]
