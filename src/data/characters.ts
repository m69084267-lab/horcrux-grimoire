export interface Character {
  id: string
  name: string
  faName: string
  description: string
  role: string
  house?: string
  image: string
  theme: {
    bgColor: string
    accentColor: string
  }
}

export const characters: Character[] = [
  {
    id: 'harry-potter',
    name: 'Harry Potter',
    faName: 'هری پاتر',
    description: 'قهرمان داستان و ستاره سیاه',
    role: 'جادوگر',
    house: 'Gryffindor',
    image: 'https://via.placeholder.com/300x400?text=Harry+Potter',
    theme: {
      bgColor: 'from-red-900 to-gold-600',
      accentColor: 'text-red-400',
    },
  },
  {
    id: 'hermione-granger',
    name: 'Hermione Granger',
    faName: 'هرمیون گرنجر',
    description: 'دانشمند و دوست وفادار',
    role: 'جادوگر',
    house: 'Gryffindor',
    image: 'https://via.placeholder.com/300x400?text=Hermione',
    theme: {
      bgColor: 'from-amber-900 to-yellow-600',
      accentColor: 'text-amber-400',
    },
  },
  {
    id: 'ron-weasley',
    name: 'Ron Weasley',
    faName: 'رون ویزلی',
    description: 'دوست بهترین و شجاع',
    role: 'جادوگر',
    house: 'Gryffindor',
    image: 'https://via.placeholder.com/300x400?text=Ron',
    theme: {
      bgColor: 'from-orange-900 to-orange-600',
      accentColor: 'text-orange-400',
    },
  },
  {
    id: 'albus-dumbledore',
    name: 'Albus Dumbledore',
    faName: 'الباس دامبلدور',
    description: 'جادوگر حکیم و قدرتمند',
    role: 'معلم و رهبر',
    house: 'Gryffindor',
    image: 'https://via.placeholder.com/300x400?text=Dumbledore',
    theme: {
      bgColor: 'from-purple-900 to-blue-600',
      accentColor: 'text-purple-400',
    },
  },
  {
    id: 'lord-voldemort',
    name: 'Lord Voldemort',
    faName: 'لرد ولدمورت',
    description: 'دشمن تاریکی جادو',
    role: 'شرور',
    image: 'https://via.placeholder.com/300x400?text=Voldemort',
    theme: {
      bgColor: 'from-gray-900 to-black',
      accentColor: 'text-red-600',
    },
  },
  {
    id: 'severus-snape',
    name: 'Severus Snape',
    faName: 'سیویروس اسنیپ',
    description: 'معلم غامض و پنهان',
    role: 'معلم',
    house: 'Slytherin',
    image: 'https://via.placeholder.com/300x400?text=Snape',
    theme: {
      bgColor: 'from-gray-800 to-green-900',
      accentColor: 'text-green-400',
    },
  },
]