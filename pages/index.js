import Head from 'next/head';
import { FaInstagram } from 'react-icons/fa';

function Home() {
    const instagramUrl = 'https://www.instagram.com/ilustlanis';
    return (
        <div className="container">
          <Head>
            <title>Alana Art</title>
            <meta name="description" content="Siga a artista no Instagram!" />
          </Head>
    
          <main className="main">
          <h2>Site em construção</h2>
          <img src="https://ugc.production.linktr.ee/05a94798-a627-4ecd-9bdd-70f95155dd4a_IMG-1916.jpeg?io=true&size=avatar-v3_0"
          className="artist-image"></img>
            <h1 className="title">Me siga no Instagram!</h1>
            <a href={instagramUrl} className="button" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} style={{ marginRight: '10px' }} />
              @ilustlanis
            </a>
          </main>
    
          <style jsx>{`
            .container {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background: #f0f0f0;
              font-family: 'Ubuntu', sans-serif;
            }
            .main {
              text-align: center;
            }
            .artist-image {
              width: 150px;
              height: 150px;
              border-radius: 50%;
              object-fit: cover;
              margin-bottom: 20px;
              border: 5px solid #e1306c;
            }
            .title {
              font-size: 2.5rem;
              color: #333;
              margin-bottom: 20px;
            }
            .button {
              display: inline-flex;
              align-items: center;
              padding: 15px 30px;
              background-color: #e1306c;
              color: white;
              border: none;
              border-radius: 5px;
              text-decoration: none;
              font-size: 1.2rem;
              transition: background-color 0.3s ease;
            }
            .button:hover {
              background-color: #c2285b;
            }
          `}</style>
        </div>
      );
}

export default Home;