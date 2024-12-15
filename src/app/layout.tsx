import { Flex, Layout } from 'antd';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import Image from 'next/image'

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Layout>
          <Header
          className='main-header'
          >
            <Flex
            align='center'
            justify='center'
            >
              <Image
                src={'/logo.png'}
                alt=''
                width={45}
                height={60}
              />
            </Flex>
          </Header>
          <Content
          className='main'
          >
            {children}
          </Content>
          <Footer>BeerTime</Footer>
        </Layout>
      </body>
    </html>
  );
}
