import Head from 'next/head'

function HomePage() {
  return (
    <>
      <Head>
        <title>Beranda - Karya Kami Digital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx>{`
        body {
          font-size: 80%;
          padding: 20px;
        }
        
        main {
          height: 80vh;
          width: 60%;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          resize: both;
          overflow: auto;
        }
        main div {
          width: 50%;
          padding: 20px;
          overflow: auto;
        }
      `}</style>
      <main>
        <div>
          <h1>Selamat Datang di Kakadigi!</h1>
          <em>Kami adalah tim pengembang Aplikasi Web dan Mobile Apps</em>
        </div>
      </main>
    </>
  )
}

export default HomePage