const wp = 'https://bsquareglobal.com/wp-content/uploads/'
const photos = [
  `${wp}2025/08/theatre003-1024x628.jpg`,
  `${wp}2025/08/theatre004-1024x628.jpg`,
  `${wp}2025/08/theatre005-1024x628.jpg`,
  `${wp}2025/08/theatre009-1024x628.jpg`,
  `${wp}2025/08/theatre006-1024x628.jpg`,
  `${wp}2025/08/theatre007-1024x628.jpg`,
  `${wp}2025/08/theatre008-1024x628.jpg`,
  `${wp}2025/08/theatre006A-1024x628.jpg`,
  `${wp}2025/05/20220930_181512-1024x485.jpg`,
  `${wp}2025/05/20211001_081358-1024x576.jpg`,
  `${wp}2025/06/943925e4-80e0-4f16-8442-5f0e733a5811-1024x566.jpg`,
  `${wp}2025/06/fd917878-7321-48c6-a2b7-6c1f0b9d8d7f.jpg`,
]
export const services = [
  { title: 'Smart Theatre', text: 'We craft turnkey academic theatres with advanced smart features for learning, seminars, presentations, conferences and video screening.', image: photos[0] },
  { title: 'Home Theatre', text: 'Custom-designed home theatres that deliver beyond what the client envisions.', image: photos[8] },
  { title: '12D Theatre', text: '12D Theatre solutions from BSquare Global.', image: photos[10] },
  { title: 'Smart Home', text: 'Our team custom designs and installs home theatre solutions that go beyond what the client envisions.', image: 'https://bsquareglobal.com/wp-content/uploads/2025/08/smart-theatre-111-1014x1024.png' },
  { title: 'Smart Office', text: 'We design smart workplaces that enhance space and resource usage while boosting productivity.', image: photos[1] },
  { title: 'Home/Office Automation', text: 'Comprehensive automation strategies integrating lighting, security and HVAC systems.', image: photos[5] },
  { title: 'Smart Events', text: 'We are known for turning regular events into remarkable stories.', image: photos[11] },
]
export const packages = [
  { name:'Economic', price:'₹3–5 Lakh', features:['Economic solutions without quality compromise','Compact designs for small spaces','Branded yet affordable audio-visual equipment','Simple but elegant seating options','Easy installation & maintenance'] },
  { name:'Premium', price:'₹5–9 Lakh', features:['Modern interiors with premium seating','Enhanced sound systems with acoustic panels','Smart lighting & ambiance control','4K projection systems for crystal-clear visuals','Comfort-focused layouts with stylish aesthetics'] },
  { name:'Luxury', price:'₹9–15 Lakh', features:['4K projection & Dolby Atmos sound','Luxury recliner seating with massage features','High-end acoustic treatments for perfect sound','Smart automation for lights, sound, and A/C','Cinematic interiors for a true theatre feel'], featured:true },
]
// The source website publishes a gallery, but does not identify individual client projects.
// Keep project records empty rather than inventing client names or project details.
export const starterProjects = []
export const starterGallery = photos.map((url,i)=>({id:`bsquare-gallery-${i+1}`,image_url:url,caption:['Smart Theatre','Smart Theatre','Smart Theatre','Home Theatre','Smart Theatre','Smart Theatre','Smart Theatre','Smart Theatre','Home Theatre','Home Theatre','Theatre Seating','Smart Events'][i],status:'published'}))
