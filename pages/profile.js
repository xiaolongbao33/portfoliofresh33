import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Box,
  Link,
  Text,
  Stack,
  VStack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { profilePageData } from '../src/data/profilePageData';
const ProfileSkills = dynamic(() => import('../src/components/ProfileSkills'));
const Layout = dynamic(() => import('../src/components/Layout'));
const ProjectDetailToHomeIcon = dynamic(() => import('../src/components/ProjectDetailToHomeIcon'));

const MotionBox = motion(Box);

// const Feature = ({ text, icon, iconBg }) => {
//   return (
//     <Stack direction={'row'} align={'center'}>
//       <Flex
//         w={8}
//         h={8}
//         align={'center'}
//         justify={'center'}
//         rounded={'full'}
//         bg={iconBg}>
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   );
// };

export default function ProfilePage() {
  const project = profilePageData[0];

  return (
    <Layout>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Container maxW="2x1" mt={-6}>
          <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack py={3} spacing={4}>
                <Text
                  textTransform={'uppercase'}
                  color={'blue.400'}
                  fontWeight={600}
                  fontSize={'sm'}
                  bg={useColorModeValue('blue.50', 'blue.900')}
                  p={2}
                  alignSelf={'flex-start'}
                  rounded={'md'}
                >
                  Profile
                </Text>
                <Heading
                  bgGradient="linear-gradient(
                    94.23deg
                    ,#5374fa 12.41%,#fd9179 52.55%,#ff6969 89.95%)"
                  bgClip="text"
                >
                  {project.headerdesc}
                </Heading>
                <Text color={'gray.500'} fontSize={'lg'}>
                  {project.description}
                </Text>
              </Stack>
              <Flex mt={20} justifyContent={'center'}>
                <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={project.img}
                  objectFit={'cover'}
                  boxSize={'400px'}
                />
              </Flex>
            </SimpleGrid>
          </Container>
          <Container maxW={'5xl'}>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
              justifyContent="center"
            >
              <Box>
                <Heading>Current Stack:</Heading>
              </Box>
              <Box>
                <ProfileSkills />
              </Box>
            </VStack>
          </Container>
          <Flex justifyContent={'center'} pt={50} pb={50}>
            <NextLink href="/" passHref>
              <Link>
                <ProjectDetailToHomeIcon />
              </Link>
            </NextLink>
          </Flex>
        </Container>
      </MotionBox>
    </Layout>
  );
}
