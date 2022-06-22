import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Box, Img, Grid, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { projectData } from '../data/projectData';
const ProjectGalleryToHomeIcon = dynamic(() => import('../components/ProjectGalleryToHomeIcon'));

const MotionBox = motion(Box);

// const postVariants = {
//   initial: { scale: 0.96, y: 30, opacity: 0 },
//   enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
//   exit: {
//     scale: 0.6,
//     y: 100,
//     opacity: 0,
//     transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
//   }
// };

const GridItem = () => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const hovColor = useColorModeValue('gray.300', 'blue.900');
  return (
    <Box
      direction={['column', 'column', 'column', 'row']}
      w="full"
      h="full"
      p={10}
      spacing={10}
      bg={bgColor}
    >
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
      >
        {projectData.map((project, i) => (
          <MotionBox
            key={project.id}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: i * 0.45 }}
            // variants={postVariants}
          >
            <Link href={`/projects/${encodeURIComponent(project.slug)}`} passHref>
              <Img
                style={{ cursor: 'pointer' }}
                _hover={{ bg: hovColor }}
                _focus={{ boxShadow: 'outline' }}
                w="100%"
                //h="200px"
                borderRadius="xl"
                mb={2}
                p={4}
                d="block"
                src={project.detailimg}
                alt="Alt"
              />
            </Link>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default function Projects() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      my={10}
    >
      <ProjectGalleryToHomeIcon />
      <GridItem />
    </MotionBox>
  );
}
