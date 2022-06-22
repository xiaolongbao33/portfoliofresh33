import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import {
  Container,
  SimpleGrid,
  Box,
  Link,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiOutlineLink } from 'react-icons/ai';
import * as icons from 'react-icons/si';
import { projectData } from '../../src/data/projectData';
const Layout = dynamic(() => import('../../src/components/Layout'));
const ProjectDetailToHomeIcon = dynamic(() =>
  import('../../src/components/ProjectDetailToHomeIcon'),
);

const MotionBox = motion(Box);

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function ProjectPage({ project, gallery }) {
  const iconone = icons[`${project.iconone}`];
  const icontwo = icons[`${project.icontwo}`];
  const iconthree = icons[`${project.iconthree}`];
  return (
    <Layout>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Container maxW={'5xl'} py={6} p={[6, 8, 6, 8]}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Text
                textTransform={'uppercase'}
                color={'#5374fa'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}
              >
                Project Overview
              </Text>
              <Heading fontFamily="Open Sans">{project.title}</Heading>
              <Text
                _hover={{ color: '#5374fa' }}
                _focus={{ boxShadow: 'outline' }}
                color={'gray.500'}
                fontSize={'lg'}
              >
                <NextLink href={project.link} passHref>
                  <a target="_blank">
                    {project.subtitle}
                    <Icon as={AiOutlineLink} color={'#5374fa'} ml={-1} mb={-1} pt={3} w={8} h={8} />
                  </a>
                </NextLink>
              </Text>
              <Stack
                spacing={4}
                divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
              >
                <Feature
                  icon={<Icon as={iconone} color={'green.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  text={project.featureone}
                />
                <Feature
                  icon={<Icon as={icontwo} color={'green.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  text={project.featuretwo}
                />
                <Feature
                  icon={<Icon as={iconthree} color={'purple.500'} w={5} h={5} />}
                  iconBg={useColorModeValue('purple.100', 'purple.900')}
                  text={project.featurethree}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={project.detailimg}
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={15} py={35}>
            <Flex>
              <Text color={'gray.500'} fontFamily="body" fontSize="13px" lineHeight="19.8px">
                {project.description}
              </Text>
            </Flex>
            <Flex>
              <SimpleGrid minChildWidth="120px" spacing="40px" py={15}>
                {gallery.map((item, i) => (
                  <MotionBox
                    key={item.id}
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75, delay: i * 0.15 }}
                  >
                    <NextLink href={`/projects/${encodeURIComponent(item.slug)}`} passHref>
                      <Image
                        style={{ cursor: 'pointer' }}
                        _hover={{ bg: 'blue.900' }}
                        _focus={{ boxShadow: 'outline' }}
                        w="100%"
                        borderRadius="xl"
                        mb={2}
                        p={4}
                        d="block"
                        src={item.detailimg}
                        alt="Alt"
                      />
                    </NextLink>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Flex>
            <Flex justifyContent={'center'} mt={-5}>
              <NextLink href="/" passHref>
                <Link>
                  <ProjectDetailToHomeIcon />
                </Link>
              </NextLink>
            </Flex>
          </SimpleGrid>
        </Container>
      </MotionBox>
    </Layout>
  );
}

export async function getStaticPaths() {
  const projects = projectData;
  const paths = projects.map((project) => ({
    params: { slug: project.slug.toLowerCase().toString() },
  }));
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const projects = projectData;
  const project = projects.find((x) => x.slug === slug);
  const gallery = projects.filter((x) => x.slug !== slug);
  return {
    props: {
      project,
      gallery,
    },
  };
}
