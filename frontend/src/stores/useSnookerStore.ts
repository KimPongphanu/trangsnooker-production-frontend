import { create } from 'zustand'

export interface SnookerTable {
  id: number
  slug: string
  name: string
  shortDescription: string

  sizeFt: number
  playingAreaCm: string
  minRoomSizeM: string

  price: number
  status: 'In Stock' | 'Pre-order' | 'Sold Out'
  productCondition: 'BrandNew' | 'Used'
  mainImageUrl: [string, string]
  galleryImages: string[]
  fullDescriptionHTML: string
}

const generateGalleryUrls = (folderName: string, count: number): string[] => {
  const baseUrl = `/SnookerTable_Images/${folderName}`
  const urls = []

  for (let i = 1; i <= count; i++) {
    // 💡 สำคัญ: Path ที่นี่จะเริ่มจาก / ซึ่งอ้างอิงถึงโฟลเดอร์ public/
    urls.push(`${baseUrl}/${i}.jpg`)
  }
  return urls
}

const allSnookerTables: SnookerTable[] = [
  {
    id: 1,
    slug: '10ft-new-star',
    name: 'โต๊ะสนุกเกอร์ ตรังสนุกเกอร์',
    shortDescription: '10 ฟุต ขาทรง Star เลือกสีได้',
    sizeFt: 10,
    playingAreaCm: '174.21 x 322.8 cm',
    minRoomSizeM: '5 x 6.5 m',
    price: 68000,
    status: 'Pre-order',
    productCondition: 'BrandNew',
    mainImageUrl: [
      '/SnookerTable_Images/10ft_star_gold/1.jpg',
      '/SnookerTable_Images/10ft_star_gold/2.jpg',
    ],
    galleryImages: generateGalleryUrls('10ft_star_gold', 7),
    fullDescriptionHTML: ``,
  },
  {
    id: 2,
    slug: '12ft-second-rooks',
    name: 'โต๊ะสนุกเกอร์ Rooks',
    shortDescription: '12 ฟุต ยี่ห้อ Rooks เลือกสีได้',
    sizeFt: 12,
    playingAreaCm: '204.69 x 383.76 cm',
    minRoomSizeM: '5.3 x 7.2 m',
    price: 89000,
    status: 'Pre-order',
    productCondition: 'Used',
    mainImageUrl: [
      '/SnookerTable_Images/12ft_rooks/1.jpg',
      '/SnookerTable_Images/12ft_rooks/2.jpg',
    ],
    galleryImages: generateGalleryUrls('12ft_rooks', 4),
    fullDescriptionHTML: ``,
  },
  {
    id: 3,
    slug: '12ft-second-riley_renaissance',
    name: 'โต๊ะสนุกเกอร์ Riley',
    shortDescription: '12 ฟุต ยี่ห้อ Riley เลือกสีได้',
    sizeFt: 12,
    playingAreaCm: '204.69 x 383.76 cm',
    minRoomSizeM: '5.3 x 7.2 m',
    price: 89000,
    status: 'Pre-order',
    productCondition: 'Used',
    mainImageUrl: [
      '/SnookerTable_Images/12ft_Railey_Renaissance/1.jpg',
      '/SnookerTable_Images/12ft_Railey_Renaissance/2.jpg',
    ],
    galleryImages: generateGalleryUrls('12ft_Railey_Renaissance', 7),
    fullDescriptionHTML: ``,
  },
  {
    id: 4,
    slug: '12ft-second-snooker_table',
    name: 'โต๊ะสนุกเกอร์',
    shortDescription: '12 ฟุต ไม่ระบุรุ่น/ยี่ห้อ เลือกสีได้',
    sizeFt: 12,
    playingAreaCm: '204.69 x 383.76 cm',
    minRoomSizeM: '5.3 x 7.2 m',
    price: 78000,
    status: 'Pre-order',
    productCondition: 'Used',
    mainImageUrl: [
      '/SnookerTable_Images/12ft_gold/1.jpg',
      '/SnookerTable_Images/12ft_gold/2.jpg',
    ],
    galleryImages: generateGalleryUrls('12ft_gold', 4),
    fullDescriptionHTML: ``,
  },
  {
    id: 5,
    slug: '10ft-second-snooker_table',
    name: 'โต๊ะสนุกเกอร์',
    shortDescription: '10 ฟุต ไม่ระบุรุ่น/ยี่ห้อ เลือกสีได้',
    sizeFt: 10,
    playingAreaCm: '174.21 x 322.8 cm',
    minRoomSizeM: '5 x 6.5 m',
    price: 48000,
    status: 'Pre-order',
    productCondition: 'Used',
    mainImageUrl: [
      '/SnookerTable_Images/10ft_surat/1.jpg',
      '/SnookerTable_Images/10ft_surat/2.jpg',
    ],
    galleryImages: generateGalleryUrls('10ft_surat', 4),
    fullDescriptionHTML: ``,
  },
]

interface Accessory {
  id: number
  title: string
  value: string
}

const accessories = [
  {
    id: 1,
    title: 'ลูกสนุกเกอร์',
    value: '1 ชุด',
  },
  {
    id: 2,
    title: 'ลูกผีลาย / Pool',
    value: '1 ชุด',
  },
  {
    id: 3,
    title: 'ไม้คิว',
    value: '5 อัน',
  },
  {
    id: 4,
    title: 'ไม้เรส',
    value: '3 อัน',
  },
  {
    id: 5,
    title: 'คิวยาว',
    value: '1 คู่',
  },
  {
    id: 6,
    title: 'แปรงปัดโต๊ะ',
    value: '1 คู่',
  },
  {
    id: 7,
    title: 'ผ้าคลุมโต๊ะ',
    value: '1 ผืน',
  },
  {
    id: 8,
    title: 'โคมไฟ',
    value: '1 ชุด',
  },
  {
    id: 9,
    title: 'สามเหลี่ยมตั้งลูก',
    value: '1 อัน',
  },
  {
    id: 10,
    title: 'ที่วางไม้คิว',
    value: '1 ชุด',
  },
  {
    id: 11,
    title: 'ชอร์ค + หัวคิว',
    value: '1 ชุด',
  },
]

interface SnookerStore {
  snookerTables: SnookerTable[]
  accessories: Accessory[]
  getSnookerTableBySlug: (slug: string) => SnookerTable | undefined
}

export const useSnookerStore = create<SnookerStore>((set, get) => ({
  snookerTables: allSnookerTables,
  accessories: accessories,
  getSnookerTableBySlug: (slug: string) => {
    return get().snookerTables.find((table) => table.slug === slug)
  },
}))
