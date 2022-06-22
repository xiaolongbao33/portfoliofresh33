import { Box, Heading, Text } from '@chakra-ui/react';
import { profileData } from '../data/profileData';

export default function ProfileList() {
  return (
    <Box
      w="full"
      h="full"
      p={10}
      // mt={0}
      spacing={10}
      alignItems="center"
      overflowY="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          width: '0',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `transparent`,
        },
        overflow: 'auto',
        MsOverflowStyle: 'none' /* IE 11 */,
        scrollbarWidth: 'none' /* Firefox 64 */,
      }}
    >
      {profileData.map((item) => (
        <Box key={item.id} p={5} shadow="md" borderWidth="1px" w="full" my={10}>
          <Heading fontFamily="heading" fontSize="26px" lineHeight="17.6px">
            {item.name}
          </Heading>
          <Text fontFamily="body" fontSize="13px" lineHeight="19.8px" mt={4}>
            {item.desc}
          </Text>
        </Box>
      ))}
    </Box>
  );
}
