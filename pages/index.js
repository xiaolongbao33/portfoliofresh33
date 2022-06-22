import dynamic from 'next/dynamic';
import { Stack, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const Home = dynamic(() => import('../src/sections/home'));
const ProfileList = dynamic(() => import('../src/sections/profileList'));
const Layout = dynamic(() => import('../src/components/Layout'));

const MotionBox = motion(Box);

const IndexPage = () => {
  return (
    <Layout>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Stack h="100vh" direction={['column', 'column', 'column', 'row']} spacing="50px">
          <Box w={['100%', '100%', '100%', '50%']}>
            <ProfileList />
          </Box>
          <Box
            w={['100%', '100%', '100%', '50%']}
            mr={[0, 0, 0, '3rem !important', '3rem !important']}
          >
            <Home />
          </Box>
        </Stack>
      </MotionBox>
    </Layout>
  );
};

export default IndexPage;
