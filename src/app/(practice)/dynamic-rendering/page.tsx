import Box from '@/components/Box';
import DynamicServerComponent from '@/components/DynamicServerComponent';
import StaticClientComponent from '@/components/StaticClientComponent';
import Link from 'next/link';
import React from 'react';

const DynamicRenderingPage = () => {
  return (
      <Box>
        <h1>Dynamic Rendering Page</h1>
        <DynamicServerComponent text="Dynamic Server Componentへのprops" />
        <StaticClientComponent text="Static Client Componentへのprops" />
        <Link href="/static-rendering" prefetch={true}>
          Go to Static Rendering
        </Link>
      </Box>
  );
};

export default DynamicRenderingPage;

