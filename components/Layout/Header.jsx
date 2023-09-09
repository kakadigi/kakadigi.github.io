import Head from 'next/head';

const Header = ({ title, description }) => {
  const pageTitle = title || 'Karya Kami Digital';
  const descriptionText =
    description || 'Karya Kami Digital | IT Consultant based in Purwokerto, Banyumas, Jawa Tengah';
  return (
    <Head>
      <title>{`${process.env.NEXT_PUBLIC_APP_NAME} | ${pageTitle}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="og:title" property="og:title" content={pageTitle} />
      <meta name="description" content={descriptionText} />
      <meta name="robots" content="index, follow" />
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    </Head>
  );
};

export default Header;
