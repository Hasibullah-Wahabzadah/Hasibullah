import '../styles/globals.css';
import Head from 'next/head';
//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';


// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
       <Head>
        <title>Hasibullah Wahabzdah</title>
        <link rel="icon" href="/v.png" />
      </Head>
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
    </div>
  )
}

export default MyApp;
