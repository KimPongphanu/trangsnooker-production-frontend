import { create } from 'zustand'

export interface Post {
  id: number
  slug: string
  title: string
  thumbnail: string
  author: string
  date: string
  excerpt: string
  content: string
}

const allPostsData: Post[] = [
  {
    id: 1,
    slug: 'prepare-the-area',
    title: 'เตรียมขนาดพื้นที่สำหรับติดตั้งโต๊ะสนุกเกอร์',
    thumbnail: '/images/slug_id1/thumbnail.jpg',
    author: 'ตรังสนุกเกอร์',
    date: '14/11/2568',
    excerpt: 'ใครที่ต้องการติดตั้งโต๊ะสนุกเกอร์...',
    content: `
    <div class="space-y-6"> 
    <p class="text-xl md:text-2xl mb-4 font-black">
        คู่มือเลือกขนาดห้องสำหรับติดตั้งโต๊ะสนุกเกอร์
    </p>

    <p class="text-base mb-6 text-gray-700">
        การวางแผนพื้นที่เป็นสิ่งสำคัญที่สุดก่อนการติดตั้งโต๊ะสนุกเกอร์
        เพื่อให้แน่ใจว่าคุณมีพื้นที่เพียงพอสำหรับการสวิงไม้คิวได้อย่างสบายๆ
        รอบด้าน นี่คือคำแนะนำเกี่ยวกับขนาดพื้นที่ขั้นต่ำที่จำเป็นสำหรับโต๊ะขนาดมาตรฐาน
    </p>

    <hr class="my-6 border-t border-gray-300" />

    <h3 class="text-xl md:text-2xl mb-3 font-bold">
        โต๊ะขนาดมาตรฐาน (6 x 12 ฟุต)
    </h3>
    <p class="text-base text-gray-600">
        <span class="font-bold">ขนาดโต๊ะ:</span> 6 ฟุต x 12 ฟุต (ประมาณ 204.69 x 383.76 เซนติเมตร)
    </p>
    <p class="text-lg mb-4 font-bold text-orange-600">
        <span class="font-bold">ขนาดห้องขั้นต่ำที่แนะนำ:</span> กว้าง 5.3 เมตร x ยาว 7.2 เมตร
    </p>
    <img
        src="/images/slug_id1/6x12.svg"
        alt="ผังห้องสำหรับโต๊ะสนุกเกอร์ 12 ฟุต"
        class="w-full h-auto rounded-lg"
    ></img>

    <hr class="my-6 border-t border-gray-300" />
    
    <h3 class="text-xl md:text-2xl mb-3 font-bold">
        โต๊ะขนาดรอง (5 x 10 ฟุต)
    </h3>
    <p class="text-base text-gray-600">
        <span class="font-bold">ขนาดโต๊ะ:</span> 5 ฟุต x 10 ฟุต (ประมาณ 174.21 x 322.8 เซนติเมตร)
    </p>
    <p class="text-lg mb-4 font-bold text-orange-600">
        <span class="font-bold">ขนาดห้องขั้นต่ำที่แนะนำ:</span> กว้าง 5 เมตร x ยาว 6.5 เมตร
    </p>
    <img
        src="/images/slug_id1/5x10.svg"
        alt="ผังห้องสำหรับโต๊ะสนุกเกอร์ 10 ฟุต"
        class="w-full h-auto rounded-lg"
    ></img>


    <hr class="my-6 border-t border-gray-300" />

    <div 
        class="flex p-4 rounded-lg shadow-md border-l-4 border-blue-500" 
        style="background-color: #E3F2FD;" 
    >
        <i class="mdi mdi-information-outline text-2xl text-blue-500 mr-4 mt-1 flex-shrink-0"></i>

        <div class="flex-grow">
            <h4 class="text-lg mb-2 font-bold text-gray-800">ข้อควรพิจารณาเพิ่มเติม</h4>
            <p class="text-sm text-gray-700">
                โปรดทราบว่านี่คือ
                <strong class="font-bold">พื้นที่ขั้นต่ำสำหรับการเล่นเท่านั้น</strong>
                หากคุณต้องการวางเฟอร์นิเจอร์อื่น ๆ เช่น
                ที่นั่งพักผ่อน, ชั้นวางไม้คิว, หรือโต๊ะวางเครื่องดื่ม
                ควรเผื่อพื้นที่เพิ่มเติมจากระยะที่แนะนำไว้อย่างน้อย 1 - 1.5
                เมตรในด้านที่ต้องการ เพื่อความสะดวกสบายและความสวยงามโดยรวมครับ
            </p>
        </div>
    </div>
</div>
  `,
  },
]

interface BlogStore {
  posts: Post[]
  getPostBySlug: (slug: string) => Post | undefined
}

export const useBlogStore = create<BlogStore>((set, get) => ({
  // State
  posts: allPostsData,

  // Actions / Selectors
  // ฟังก์ชันสำหรับดึงบทความตาม Slug
  getPostBySlug: (slug: string) => {
    // get() คือฟังก์ชันของ Zustand เพื่อเข้าถึง state ปัจจุบัน
    return get().posts.find((p) => p.slug === slug)
  },
}))
