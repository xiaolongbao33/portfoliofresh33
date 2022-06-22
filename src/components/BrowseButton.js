import { Flex, Button, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function BrowseButton(props) {
  return (
    <MotionBox
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Button colorScheme="teal" size="lg" onClick={props.toggleButton}>
          Browse Projects
        </Button>
      </Flex>
    </MotionBox>
  );
}
