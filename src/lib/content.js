const wp = 'https://bsquareglobal.com/wp-content/uploads/2025/08/'
const photos = [
  `${wp}theatre003-1024x628.jpg`,
  `${wp}theatre004-1024x628.jpg`,
  `${wp}theatre005-1024x628.jpg`,
  `${wp}theatre009-1024x628.jpg`,
  `${wp}theatre006-1024x628.jpg`,
  `${wp}theatre007-1024x628.jpg`,
  `${wp}theatre008-1024x628.jpg`,
  `${wp}theatre006A-1024x628.jpg`,
]
export const services = [
  { title: 'Smart Theatre', text: 'Build a revolutionary education space for learning, seminars, presentations, conferences, and video screening.', image: photos[0] },
  { title: 'Home Theatre', text: 'Create a private cinema experience with immersive visuals, powerful sound and thoughtfully designed interiors.', image: photos[3] },
  { title: '12D Theatre', text: 'Bring entertainment to life with immersive theatre experiences and special effects.', image: photos[6] },
  { title: 'Smart Home', text: 'Connected living experiences with integrated control for lighting, entertainment and everyday convenience.', image: 'https://bsquareglobal.com/wp-content/uploads/2025/08/smart-theatre-111-1014x1024.png' },
  { title: 'Smart Office', text: 'Intelligent meeting and collaboration environments with professional AV integration.', image: photos[1] },
  { title: 'Smart Events', text: 'Audio-visual technology and professional systems for presentations, conferences and live experiences.', image: photos[4] },
]
export const packages = [
  { name:'Economic', price:'₹3–5 Lakh', features:['Economic solutions without quality compromise','Compact designs for small spaces','Branded yet affordable audio-visual equipment','Simple but elegant seating options','Easy installation & maintenance'] },
  { name:'Premium', price:'₹5–9 Lakh', features:['Modern interiors with premium seating','Enhanced sound systems with acoustic panels','Smart lighting & ambiance control','4K projection systems for crystal-clear visuals','Comfort-focused layouts with stylish aesthetics'] },
  { name:'Luxury', price:'₹9–15 Lakh', features:['4K projection & Dolby Atmos sound','Luxury recliner seating with massage features','High-end acoustic treatments for perfect sound','Smart automation for lights, sound, and A/C','Cinematic interiors for a true theatre feel'], featured:true },
]
export const starterProjects = [
  { id:'sample-smart-theatre', project_name:'Smart Theatre', location:'India & UAE', short_description:'An advanced educational space for learning, seminars, presentations, conferences and video screening.', main_image_url:photos[0], status:'published', show_on_homepage:true },
  { id:'sample-home-cinema', project_name:'Home Theatre', location:'India & UAE', short_description:'Private cinema environments designed for immersive entertainment and comfort.', main_image_url:photos[3], status:'published', show_on_homepage:true },
  { id:'sample-av-integration', project_name:'Smart Theatre Auditorium', location:'India', short_description:'Transforming traditional classrooms into dynamic learning environments.', main_image_url:photos[5], status:'published', show_on_homepage:false },
]
export const starterGallery = photos.map((url,i)=>({id:`bsquare-gallery-${i+1}`,image_url:url,caption:['Smart Theatre','Smart Theatre Auditorium','Presentation & Conference','Home Theatre','Learning Environment','Smart Theatre','Theatre Seating','Immersive Theatre'][i],status:'published'}))
