import { Button, Flex, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <Flex className='container items-center'>
        <h1>
          <Link href={'/'}>Logo</Link>
        </h1>
        <Spacer />
        <div>
          <Button colorScheme='teal' variant='ghost'>
            알림
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            검색
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            나의정보
          </Button>
        </div>
      </Flex>
    </header>
  );
};

export default Header;
