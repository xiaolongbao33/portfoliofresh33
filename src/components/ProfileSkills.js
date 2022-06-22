import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import * as icons from 'react-icons/si';
import { profilePageData } from '../../src/data/profilePageData';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'gray'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function ProfileSkills() {
  const project = profilePageData[0];
  const iconone = icons[`${project.iconone}`];
  const icontwo = icons[`${project.icontwo}`];
  const iconthree = icons[`${project.iconthree}`];
  const iconfour = icons[`${project.iconfour}`];
  const iconfive = icons[`${project.iconfive}`];
  const iconsix = icons[`${project.iconsix}`];

  // to do
  return (
    <Box p={4} ml={-3}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={iconone} w={10} h={10} />}
          title={'React'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={icontwo} w={10} h={10} />}
          title={'JavaScript'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={iconthree} w={10} h={10} />}
          title={'GraphQL'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={iconfour} w={10} h={10} />}
          title={'Postgres'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={iconfive} w={10} h={10} />}
          title={'Hasura'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={iconsix} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
