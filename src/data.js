import tourImg1 from './images/tour-1.jpeg'
import tourImg2 from './images/tour-2.jpeg'
import tourImg3 from './images/tour-3.jpeg'
import tourImg4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: "With us your wallet doesn't have to suffer for you to explore the great outdoors!",
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: "With us you'll never get bored of our many options for amazing hiking experiences!",
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'endless comfort',
    text: 'With us you can stay in your comfort zone while seeing the most incredible sites!',
  },
]

export const tours = [
  {
    id: 1,
    img: tourImg1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'An amazing adventure to the Tibetan region.',
    location: 'Tibet',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: tourImg2,
    date: 'october 12th, 2020',
    title: 'Best of Java',
    text: 'Come visit Java with us; not the coffee or coding language.',
    location: 'Indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: tourImg3,
    date: 'september 15th, 2021',
    title: 'Explore Hong Kong',
    text: 'Enjoy all that Honk Kong has to offer on this cultural trip.',
    location: 'Hong Kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    img: tourImg4,
    date: 'december 5th, 2022',
    title: 'Kenya Highlights',
    text: 'See the incredible hightlights in and around Kenya.',
    location: 'Kenya',
    duration: 20,
    cost: 3300,
  },
]
