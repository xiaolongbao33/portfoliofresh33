import dynamic from 'next/dynamic';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const ChevronIcon = dynamic(() => import('./ChevronIcon'));

const MotionBox = motion(Box);

export default function ProjectDetailToHomeIcon() {
  return (
    <MotionBox
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Flex justifyContent={'flex-end'} pb={3}>
          <ChevronIcon />
        </Flex>
      </Box>
    </MotionBox>
  );
}
