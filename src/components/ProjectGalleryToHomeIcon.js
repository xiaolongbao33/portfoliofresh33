import dynamic from 'next/dynamic';
import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useButtonUpdate } from '../../context/ButtonContext';
const ChevronIcon = dynamic(() => import('./ChevronIcon'));

const MotionBox = motion(Box);

export default function ProjectGalleryToHomeIcon() {
  const toggleButton = useButtonUpdate();
  return (
    <MotionBox
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <Flex justifyContent="space-between" alignItems="flex-end" pr={[12, 12, 12, 0, 0]}>
        <Text
          fontFamily="heading"
          fontWeight="700"
          //size='xl'
          fontSize="70px"
          mt={4}
          mb={-7}
          pl={[14, 14, 14, 2, 2]}
          bgGradient="linear-gradient(
            94.23deg
            ,#5374fa 12.41%,#fd9179 52.55%,#ff6969 89.95%)"
          bgClip="text"
        >
          Recent Projects
        </Text>
        <Flex justifyContent={'flex-end'} pb={2} sx={{ cursor: 'pointer' }} onClick={toggleButton}>
          <ChevronIcon />
        </Flex>
      </Flex>
    </MotionBox>
  );
}
