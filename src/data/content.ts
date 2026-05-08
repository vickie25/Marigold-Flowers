import heroImg from '../assets/pink flowers.jpg';
import bouquetImg from '../assets/bouquet flowers.jpg';
import valentineImg from '../assets/valentine flowers.jpg';
import weddingImg from '../assets/wedding flowers.jpg';
import pinkFlowersImg from '../assets/pink flowers.jpg';
import yellowFlowersImg from '../assets/yellow flowers.jpg';
import mothersDayImg from '../assets/mothers day flowers.jpg';
import bridalImg from '../assets/bridal flowers.jpg';
import greatInspirationImg from '../assets/great insipration flowers.jpg';
import cakeFlowersImg from '../assets/cake flowers.jpg';
import bridalPortraitsImg from '../assets/bridal potraits.jpg';
import privateWeddingImg from '../assets/private wedding flowers.jpg';

export const HERO_SLIDES = [
  {
    title: "Fresh Flowers, Delivered with Love",
    subtitle: "Hand-crafted bouquets for every occasion. Same-day delivery across Nairobi.",
    cta: "Shop Bouquets",
    secondaryCta: "Order via WhatsApp",
    image: heroImg,
    tagline: "Exquisite Floral Design"
  },
  {
    title: "The Perfect Gift, Every Time",
    subtitle: "From romantic roses to celebration bouquets — we arrange, you amaze.",
    cta: "Browse Occasions",
    image: valentineImg,
    tagline: "Unforgettable Moments"
  },
  {
    title: "Celebrate Every Milestone",
    subtitle: "Birthdays, anniversaries, weddings — beautifully arranged and on time.",
    cta: "View All Arrangements",
    image: weddingImg,
    tagline: "Bespoke Artistry"
  }
];

export const OCCASIONS = [
  { id: 'birthday', name: 'Birthday Flowers', tagline: 'Make their day unforgettable', img: bouquetImg },
  { id: 'anniversary', name: 'Anniversary', tagline: 'Celebrate your love story', img: valentineImg },
  { id: 'wedding', name: 'Wedding Flowers', tagline: 'For your most beautiful day', img: weddingImg },
  { id: 'romance', name: 'Romance & Love', tagline: 'Say it with flowers', img: pinkFlowersImg },
  { id: 'sympathy', name: 'Sympathy & Condolence', tagline: 'Words when words aren\'t enough', img: bridalImg },
  { id: 'get-well', name: 'Get Well Soon', tagline: 'Brighten their recovery', img: yellowFlowersImg },
  { id: 'congratulations', name: 'Congratulations', tagline: 'Celebrate their success', img: cakeFlowersImg },
  { id: 'corporate', name: 'Corporate & Events', tagline: 'Professional floral solutions', img: privateWeddingImg },
  { id: 'new-baby', name: 'New Baby', tagline: 'Welcome the newest arrival', img: pinkFlowersImg },
  { id: 'just-because', name: 'Just Because', tagline: 'Because they deserve it', img: bridalPortraitsImg },
];

export const FLOWER_TYPES = [
  { name: 'Roses', desc: 'Classic beauty, timeless love', meaning: 'Love, passion, admiration', img: valentineImg },
  { name: 'Lilies', desc: 'Elegant, fragrant, refined', meaning: 'Purity, beauty, renewal', img: bridalImg },
  { name: 'Orchids', desc: 'Luxury for any occasion', meaning: 'Strength, elegance, prosperity', img: pinkFlowersImg },
  { name: 'Sunflowers', desc: 'Bright, bold, and joyful', meaning: 'Loyalty, happiness, positivity', img: yellowFlowersImg },
  { name: 'Tulips', desc: 'Seasonal beauty, perfect love', meaning: 'Grace, cheerfulness, devotion', img: pinkFlowersImg },
  { name: 'Mixed Bouquets', desc: 'A little bit of everything', meaning: 'Versatile, colourful, celebratory', img: bouquetImg },
];

export const PRODUCTS = [
  {
    id: 1,
    slug: 'classic-red-roses',
    name: 'Classic Red Roses Bouquet',
    price: '3,500',
    oldPrice: '4,200',
    badge: 'Best Seller',
    img: valentineImg,
    tag: 'Romance & Love',
    categories: ['romance', 'birthday', 'anniversary'],
    shortDesc: 'Twelve long-stem red roses — the timeless declaration of love.',
    longDesc: "There is no bouquet more iconic than a dozen red roses. Our Classic Red Roses Bouquet features hand-selected, long-stem roses with deep velvet petals — each one chosen for its perfect bloom and vivid colour. Wrapped in premium tissue and tied with satin ribbon, this arrangement is a timeless way to say 'I love you' to someone truly special.\n\nRed roses carry centuries of meaning: passion, devotion, and deep romantic love. Whether for Valentine's Day, an anniversary, or a spontaneous gesture that takes her breath away — this bouquet never misses.",
    careInstructions: "Trim stems at a 45° angle. Place in fresh water in a clean vase. Keep away from direct sunlight and fruits. Change water every 2 days. Flowers will stay fresh for 5–7 days.",
    sizes: [
      { label: '6 stems', price: '2,200' },
      { label: '12 stems', price: '3,500' },
      { label: '24 stems', price: '6,500' }
    ]
  },
  {
    id: 2,
    slug: 'sunshine-yellow-sunflowers',
    name: 'Sunshine Yellow Sunflowers',
    price: '2,800',
    badge: 'Customer Favourite',
    img: yellowFlowersImg,
    tag: 'Birthday',
    categories: ['birthday', 'congratulations', 'just-because'],
    shortDesc: 'Bold, bright, and bursting with joy — sunflowers that make any room glow.',
    longDesc: "Sunflowers are the happiest flowers on earth — and our Sunshine Yellow Sunflower bouquet captures that joy perfectly. Each stem stands tall, crowned with a full, golden bloom that radiates warmth and positivity. Wrapped in natural kraft paper with a rustic twine bow, this arrangement is pure, uncomplicated happiness.",
    careInstructions: "Sunflowers love sunlight. Place near a window and change water daily. Trim stems every 2 days for maximum vase life of 7–10 days.",
    sizes: [
      { label: '5 stems', price: '1,800' },
      { label: '10 stems', price: '2,800' },
      { label: '15 stems', price: '3,800' }
    ]
  },
  {
    id: 3,
    slug: 'blush-peonies-garden-roses',
    name: 'Blush Peonies & Garden Roses',
    price: '5,200',
    badge: 'Luxury Collection',
    img: mothersDayImg,
    tag: 'Luxury',
    categories: ['romance', 'wedding', 'anniversary', 'birthday'],
    shortDesc: 'Soft, romantic, and utterly luxurious — peonies and garden roses in full bloom.',
    longDesc: "Nothing captures the spirit of romance and femininity like a bouquet of full-bloom peonies and garden roses. This arrangement features layers of soft blush tones — from pale cream to dusky pink — with lush, ruffled petals that practically overflow with beauty.",
    careInstructions: "Place in cool water immediately upon arrival. Keep away from direct heat. Peonies will continue to open over 2–3 days. Vase life: 5–7 days.",
    sizes: [
      { label: 'Small', price: '3,500' },
      { label: 'Medium', price: '5,200' },
      { label: 'Large', price: '7,500' }
    ]
  },
  {
    id: 4,
    slug: 'white-lily-elegance',
    name: 'White Lily Elegance',
    price: '6,500',
    badge: 'New Arrival',
    img: bridalImg,
    tag: 'Bridal',
    categories: ['sympathy', 'wedding', 'get-well', 'congratulations'],
    shortDesc: 'Pure, serene, and deeply graceful — white lilies for life\'s most meaningful moments.',
    longDesc: "White lilies are among the most meaningful flowers in the world. Each stem carries multiple blooms that open sequentially, extending the beauty of your gift over several days. With their signature fragrance and pristine white petals, they communicate elegance, renewal, and heartfelt sincerity.",
    careInstructions: "Remove any leaves that will sit below the waterline. Add flower food to vase water. Trim stems at an angle every 2–3 days. Vase life: 10–14 days as buds continue to open.",
    sizes: [
      { label: '3 stems', price: '3,500' },
      { label: '6 stems', price: '6,500' },
      { label: '9 stems', price: '9,000' }
    ]
  },
  {
    id: 5,
    slug: 'tropical-paradise-mix',
    name: 'Tropical Paradise Mix',
    price: '3,800',
    badge: 'Kenya Special',
    img: greatInspirationImg,
    tag: 'Collection',
    categories: ['birthday', 'congratulations', 'corporate', 'just-because'],
    shortDesc: 'Bold tropicals and exotic blooms — a vibrant Nairobi statement bouquet.',
    longDesc: "Inspired by the colours and energy of East Africa, our Tropical Paradise Mix is a celebration of bold, exotic beauty. This arrangement features a hand-selected mix of anthuriums, proteas, bird-of-paradise, and seasonal tropical foliage — all sourced from local Kenyan flower farms.",
    careInstructions: "Tropical flowers are hardy and long-lasting. Change water every 3 days. Keep in a bright, well-lit area out of direct sunlight. Vase life: 10–14 days.",
    sizes: [
      { label: 'Medium', price: '3,800' },
      { label: 'Large', price: '5,500' }
    ]
  },
  {
    id: 6,
    slug: 'pink-tulip-bouquet',
    name: 'Pink Tulip Bouquet',
    price: '4,000',
    img: pinkFlowersImg,
    tag: 'Romance',
    categories: ['birthday', 'romance', 'just-because'],
    shortDesc: 'Graceful and cheerful — tulips in soft pinks and creams.',
    longDesc: "Tulips represent perfect love and elegance. Available in pink, white, purple, or a playful mix. Wrapped in tissue with a rustic bow — effortlessly beautiful.",
    sizes: [
      { label: '10 stems', price: '2,500' },
      { label: '20 stems', price: '4,000' }
    ]
  },
  {
    id: 7,
    slug: 'luxury-purple-orchid-plant',
    name: 'Luxury Purple Orchid Plant',
    price: '7,500',
    img: privateWeddingImg,
    tag: 'Corporate',
    categories: ['corporate', 'birthday', 'just-because', 'sympathy'],
    shortDesc: 'A living luxury gift that blooms for weeks.',
    longDesc: "Orchids represent elegance, prosperity, and enduring beauty. Our potted phalaenopsis orchids arrive in premium ceramic pots — ready to display and enjoy for weeks. Perfect corporate gifting or home decor.",
    sizes: [
      { label: 'Single stem', price: '4,500' },
      { label: 'Double stem', price: '7,500' }
    ]
  },
  {
    id: 8,
    slug: 'rainbow-mixed-bouquet',
    name: 'Rainbow Mixed Bouquet',
    price: '4,200',
    img: bouquetImg,
    tag: 'Celebration',
    categories: ['birthday', 'congratulations'],
    shortDesc: 'Every colour of joy in one spectacular bouquet.',
    longDesc: "A riot of colour celebrating every shade of happiness. Roses, gerberas, carnations, and seasonal fillers in a curated rainbow palette — the ultimate birthday bouquet.",
    sizes: [
      { label: 'Small', price: '2,800' },
      { label: 'Medium', price: '4,200' },
      { label: 'Large', price: '6,000' }
    ]
  },
  {
    id: 9,
    slug: 'chocolate-roses-gift-box',
    name: 'Chocolate & Roses Gift Box',
    price: '5,500',
    img: valentineImg,
    tag: 'Gifts',
    categories: ['romance', 'anniversary', 'birthday'],
    shortDesc: 'Roses plus premium chocolates — the ultimate gift combo.',
    longDesc: "Six red roses and a box of imported premium chocolates, presented in a luxury gift box with satin ribbon. The perfect two-in-one gift that says 'I thought of every detail.'",
    sizes: [
      { label: 'Standard', price: '5,500' },
      { label: 'Premium', price: '8,500' }
    ]
  },
  {
    id: 10,
    slug: 'white-wedding-centrepiece',
    name: 'White Wedding Centrepiece',
    price: '8,000',
    img: weddingImg,
    tag: 'Wedding',
    categories: ['wedding'],
    shortDesc: 'Elegant all-white table centrepiece for your perfect day.',
    longDesc: "All-white roses, lilies, and baby's breath in a tall glass vase — a classic wedding centrepiece that photographs beautifully. Contact us for custom wedding packages.",
    sizes: [
      { label: 'Per arrangement', price: '8,000' },
      { label: 'Package of 10', price: '75,000' }
    ]
  }
];

export const TESTIMONIALS = [
  { 
    name: "Amina W.", 
    location: "Westlands", 
    review: "Ordered for my mum's birthday and the flowers arrived beautifully wrapped, perfectly fresh. She was in tears — the good kind! Will definitely be ordering again.",
    stars: 5 
  },
  { 
    name: "Brian O.", 
    location: "Karen", 
    review: "Used them for our anniversary dinner. The roses were stunning and same-day delivery was spot on. Great service, very professional team.",
    stars: 5 
  },
  { 
    name: "Cynthia M.", 
    location: "Kilimani", 
    review: "Ordered sympathy flowers for a colleague. The arrangement was elegant and tasteful — exactly what I wanted. Fast delivery and easy WhatsApp ordering.",
    stars: 5 
  }
];

export const FAQS = [
  {
    category: "Ordering",
    questions: [
      { q: "How do I place an order?", a: "You can order directly on our website, or send us a message on WhatsApp at +254 [NUMBER]. For WhatsApp orders, simply tell us what you'd like, your delivery address, and your preferred date and time." },
      { q: "Can I customise my bouquet?", a: "Absolutely! We love creating custom arrangements. Tell us your preferred flowers, colours, budget, and occasion via WhatsApp and our florists will design something uniquely for you." }
    ]
  },
  {
    category: "Delivery",
    questions: [
      { q: "Do you offer same-day delivery?", a: "Yes — we offer same-day delivery across Nairobi for orders placed before 1:00 PM, Monday to Saturday." },
      { q: "What if no one is home to receive the flowers?", a: "We will contact the recipient before delivery. If no one is available, we will leave the flowers in a safe, shaded location and send photo confirmation." }
    ]
  }
];
