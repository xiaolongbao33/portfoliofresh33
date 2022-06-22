import NextLink from 'next/link';
import {
  Box,
  Flex,
  Text,
  Link,
  Img,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const ProfilePic = require('../../public/assets/images/profile-web.webp').default.src;

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     sx={{ cursor: 'pointer' }}
//   >
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <NextLink href={`/`} passHref>
            <Link pl={1}>
              <Text fontFamily="heading" fontSize={14} textTransform={'uppercase'} pl={4}>Home</Text>
            </Link>
          </NextLink>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} aria-label="Menu Button for Light Dark Toggle">
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  aria-label="Menu Button for Profile Menu"
                >
                  <Img
                    borderRadius="full"
                    boxSize="35px"
                    htmlWidth={35}
                    htmlHeight={35}
                    src={ProfilePic}
                    alt="John Milner Profile Photo"
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Img
                      borderRadius="full"
                      boxSize="120px"
                      htmlWidth={120}
                      htmlHeight={120}
                      src={ProfilePic}
                      alt="John Milner Profile Photo"
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Hi! I'm John</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <NextLink href={`/profile`} passHref>
                      <Link>Profile</Link>
                    </NextLink>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href={
                        'https://github.com/Plunky33/resume/blob/8eb5ff9e6456562a9e67c01c14fe7b8971a4ed90/johnmilner_dev_resume.pdf'
                      }
                      isExternal
                    >
                      Resume
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'https://github.com/Plunky33/'} isExternal>
                      Github
                    </Link>
                  </MenuItem>
                  <MenuItem>Programming since 2020</MenuItem>
                  {/* <MenuItem>Logout</MenuItem> */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
