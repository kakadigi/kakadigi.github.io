import Head from "next/head";

const Header = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${process.env.NEXT_PUBLIC_APP_NAME} | ${title}`
            : process.env.NEXT_PUBLIC_APP_NAME || "Karya Kami Digital"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="og:title"
          property="og:title"
          content={title || "Karya Kami Digital"}
        />
        <meta name="description" content={description || ""} />
        <meta name="robots" content="index, follow" />
      </Head>
      {children || ""}
    </>
  );
};

export default Header;
