import styles from './App.module.css'
import './global.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


interface Posts {
  id: number;
  author: { 
  avatarUrl: string;
  name: string;
  role: string;
  },
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[],
  publishedAt: Date
}


const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GabrielFerlima.png',
      name: 'Gabriel Fernandes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 Gabriel.webDeveloper/doctorcare' },
    ],
    publishedAt: new Date('2022-08-24'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://ovicio.com.br/wp-content/uploads/2022/03/20220320-ovicio-one-piece-anime-luffy-555x555.jpg',
      name: 'Luffy',
      role: 'Design'
    },
    content: [
      { type: 'paragraph', content: 'Fiz um também ! Que iradooo' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É parecido com o seu porém alterei umas coisas ao meu modo haha 🚀' },
      { type: 'link', content: '👉 Mauricio.design/designcare' },
    ],
    publishedAt: new Date('2022-08-25'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://www.magazine-hd.com/apps/wp/wp-content/uploads/2019/03/mikasa.jpg',
      name: 'Mikasa',
      role: 'Manager'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 fiz um bem parecido também !' },
      { type: 'paragraph', content: 'Acabei de subir um para o meu portifa 🚀' },
      { type: 'link', content: '👉 AndréManager/highpriori' },
    ],
    publishedAt: new Date('2022-08-26'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
        {posts.map(post => {
          return (<Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          )
         
        })}
        </main>
      </div>

    </div>
  )
}

