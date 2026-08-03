import mouseImage from '../assets/mouse.jpg';
import chromeImage from '../assets/chrome-web-store.webp';
import browserImage from '../assets/browser.jpg';
import keyboardImage from '../assets/keyboard.jpg';
import monitorImage from '../assets/monitor.jpg';
import ramImage from '../assets/ram.webp';
import headphoneImage from '../assets/headphones.jpg'
import domainImage from '../assets/domain.jpg'
import hostingImage from '../assets/server.jpg'
import storageImage from '../assets/nvmessd.jpg'
import keeb2Image from '../assets/newkeeb.jpg'

export const shopRegions = [
  { id: 'usa', name: 'USA' },
  { id: 'canada', name: 'Canada' },
  { id: 'mexico', name: 'Mexico' },
  { id: 'brazil', name: 'Brazil' },
  { id: 'uk', name: 'United Kingdom' },
  { id: 'ireland', name: 'Ireland' },
  { id: 'germany', name: 'Germany' },
  { id: 'france', name: 'France' },
  { id: 'italy', name: 'Italy' },
  { id: 'spain', name: 'Spain' },
  { id: 'netherlands', name: 'Netherlands' },
  { id: 'belgium', name: 'Belgium' },
  { id: 'poland', name: 'Poland' },
  { id: 'sweden', name: 'Sweden' },
  { id: 'turkey', name: 'Turkey' },
  { id: 'india', name: 'India' },
  { id: 'japan', name: 'Japan' },
  { id: 'singapore', name: 'Singapore' },
  { id: 'australia', name: 'Australia' },
  { id: 'uae', name: 'United Arab Emirates' },
  { id: 'saudi-arabia', name: 'Saudi Arabia' },
  { id: 'egypt', name: 'Egypt' },
  { id: 'south-africa', name: 'South Africa' },
  { id: 'estonia', name: 'Estonia' },
  { id: 'nz', name: 'New Zealand'}
] as const;

export const shopItems = [
  {
    slug: 'rk-royal',
    name: 'RK Royal KLUDGE N80 Low Profile Mechanical Keyboard',
    hours: { usa: 15,  canada: 20, mexico: 20, uk: 20, ireland: 20, germany: 20, france: 20, italy: 20, spain: 20, netherlands: 20, belgium: 20, poland: 20, sweden: 20, japan: 20, singapore: 20, uae: 20, 'saudi-arabia': 25, egypt: 25, 'south-africa': 20, estonia: 20, nz: 25 },
    tag: 'low-profile keyboard',
    image: keeb2Image,
    desc: 'low profile mechanical keyboard to not get carpal tunnel and type away! :vibepartycat:',
    details: [
      'an extremely cool dynamic display which shows custom GIFs, dates, connection modes, WIN/MAX layouts, and battery status on its compact screen.',
      'control volume, connection modes, and color modes with a simple click or twist of the knob!',
      'has bluetooth 5.0, 2.4ghz wireless, and a usb-c wired mode for all your connectivety needs!',
      'low-profile switches for a faster response time and effortless typing experience',
      'has a top-mounted structure for a firm keystroke and better typing feedback!',
      'very sound heavy duty base with no wobbling!',
      'equipped with a dual layer sound-absorbing foam and a silicon dampening pad for less noise!'
    ],
  },
  {
    slug: 'kingston-ssd',
    name: 'Kingston NV3 1TB 2280 NVMe SSD',
    hours: { usa: 35 , canada: 40, mexico: 50, brazil: 70, uk: 40, ireland: 45, germany: 40, france: 40, italy: 40, spain: 40, netherlands: 40, belgium: 40, poland: 40, sweden: 45, india: 50, japan: 45, singapore: 40, australia: 45, uae: 45, 'saudi-arabia': 50, egypt: 50, 'south-africa': 50, estonia: 40, nz: 35 },
    tag: 'nvme ssd',
    image: storageImage,
    desc: 'super fast and big NVMe for all your storage needs :ultrafastparrot:',
    details: [
      'very fast 6000 MB/s max sequential read and 4000 MB/s max sequential write!',
      'fits in anything with an M.2 NVMe slot!',
      'amazing PCLe 4.0 x4 interface',
      'low power consumption and reduced heat!'
    ],
  },
  {
    slug: 'host',
    name: 'Hosting Credits Grant',
    hours: { all: 2 },
    tag: 'hosting',
    image: hostingImage,
    desc: 'host host host your stuff with a cool service :vercel:',
    details: [
      'gives you 10$ of value to host host host your stuff!'
    ],
  },
  {
    slug: 'domain',
    name: 'Domain Grant',
    hours: { all: 2 },
    tag: 'domain',
    image: domainImage,
    desc: 'reserve your spot on the vast web :cat-woah:',
    details: [
      'gives you 10$ to reserve your domain! enough for a year or so'
    ],
  },
  {
    slug: 'chrome-extension-license',
    name: 'Chrome Extension License',
    hours: { all: 1 },
    tag: 'extension',
    image: chromeImage,
    desc: 'make your own extension and launch it on the chrome web store :O :chrome-unstable:',
    details: [
       'covers the cost of the chrome extension license'
    ],
  },
  {
    slug: 'browser-subscription-grant',
    name: 'Browser Subscription Grant',
    hours: { all: 5 },
    tag: 'browser',
    image: browserImage,
    desc: 'get those cool paid browsers! better features means a better web for you! :vertex-icon-light:',
    details: [
      'grant for buying paid browsers! for example: brave premium',
      '20$ of value!'
    ],
  },
  {
    slug: 'mouse',
    name: 'Razer Basilik V3 X HyperSpeed Mouse',
    hours: { usa: 10, canada: 10, mexico: 10, brazil: 15, uk: 15, ireland: 15, germany: 10, france: 10 },
    tag: 'gear',
    image: mouseImage,
    desc: 'an amazing mouse for serious clicking! click away and dominate with those clicks! :computer_mouse:',
    details: [
      'iconic ergonomic form with 9 customizable controls!',
      'hyperspeed wireless and bluetooth',
      'up to 285 hours of battery life!',
      '5g advanced 18k optical sensor',
      'razer mechanical mouse switches gen-2',
      'powered by razer chroma rgbl with 16.8 million colors!'
    ],
  },
  {
    slug: 'headphones',
    name: 'Soundcore Anker Space One ANC Headphones',
    hours: { usa: 20, canada: 25, mexico: 30, brazil: 45, uk: 15, ireland: 30, germany: 30, france: 30, italy: 30, spain: 30, netherlands: 30, poland: 30, sweden: 35, japan: 30, uae: 10, 'saudi-arabia': 40, egypt: 40, 'south-africa': 30, estonia: 25 },
    tag: 'music',
    image: headphoneImage,
    desc: 'amazing headphones!!! vibe away to that music :vibesock:',
    details: [
      'choose from a few colors to match your taste!',
      'very strong (up to 98%) noise reduction!!!',
      'hi-res audio with the 40mm dynamic customized drivers that support LDAC',
      '40 hours of ANC playtime and 55 hours when off!',
      'crafted for comfort and style!'
    ],
  },
  {
    slug: 'keyboard',
    name: 'AULA F75 PRO Wireless Mechanical Keyboard',
    hours: { usa: 15, canada: 15, mexico: 15, brazil: 15, uk: 20, germany: 20, france: 25, italy: 15, spain: 15, netherlands: 15, belgium: 15, poland: 15, sweden: 20, japan: 15, singapore: 15, australia: 15, uae: 15, 'saudi-arabia': 20, egypt: 20, 'south-africa': 15, estonia: 20, nz: 15 },
    tag: 'gear',
    image: keyboardImage,
    desc: 'very cool keyboard! time to type faster than ever! :meow_code:',
    details: [
      'choose from a few colors to match your taste!',
      'can work with bluetooth, 2.4ghz wireless, or a direct usb wired connection!',
      'a hot-swappable custom base with 3 or 5 pin support, for all your tinkering desires',
      'features 16.8 million rgb lighting color with 16 preset lighting effects as well as others!',
      'has a knob which allows you to switch between gaming mode or office mode seamlessly!',
      'side-prined pbt keycaps to keep up with the trends'
    ],
  },
  {
    slug: 'monitor',
    name: 'AOC Q27G3XMN Gaming Monitor',
    hours: { usa: 50, canada: 70, mexico: 75, uk: 55, ireland: 55, germany: 50, france: 60, italy: 75, spain: 75, netherlands: 70, belgium: 75, poland: 75, sweden: 90, india: 80, japan: 60, singapore: 55, australia: 65, uae: 75, 'saudi-arabia': 90, egypt: 115, 'south-africa': 90, estonia: 110, nz: 55 },
    tag: 'boss tier',
    image: monitorImage,
    desc: 'cool, big monitor for all your browsing needs! more screens more tabs! :earthquakyeyes:',
    details: [
      'one of the best rewards we got in the shop!',
      'super big 2560x1440 size',
      'legendarily fast 1ms gray-to-gray and 180 hertz refresh rate!',
      'impressive 134% srgb color gamut, 96% dci-p3 coverage, and vesa displayhdr 1000!',
      'mini-led backlight with 336 local dimming zones',
      '81-key 75% layout compact!'
    ],
  },
  {
    slug: '16gb-ram',
    name: 'COSAIR Vengeance DDR5 16GB (2x8GB) RAM',
    hours: { usa: 50, canada: 65, mexico: 60, brazil: 95, uk: 55, ireland: 135, germany: 55, france: 55, italy: 60, spain: 60, netherlands: 60, belgium: 60, poland: 60, sweden: 65, india: 65, japan: 55, singapore: 50, australia: 50, uae: 50, 'saudi-arabia': 55, egypt: 55, 'south-africa': 55, estonia: 67, nz: 50 },
    tag: 'boss tier',
    image: ramImage,
    desc: 'extremely hot and fast DDR5! enough to power a good computer :thonkage:',
    details: [
      'one of the best rewards we got in the shop!',
      'nice, gray color with a cool box :D',
      'super fast 5200 Mhz transfer speed!',
      'embedded with the CORSAIR iCUE software for all your monitor and control needs',
      'some other specs: CL40 AMD EXPO Intel XMP 3.0'
    ],
  },
];
