import Layout from "@/components/layouts";
import { Button } from '@chakra-ui/react';
function HomePage(props) {
  return (
    <Layout>
      <Layout.Header {...props} />
      <h1>Selamat Datang di Kakadigi!</h1>
    </Layout>
  );
}

HomePage.getInitialProps = () => {
  return {
    title: 'Home',
    description: 'Karya Kami Digital | IT Consultant based on Purwokerto, Banyumas, Jawa Tengah'
  }
}

export default HomePage;
