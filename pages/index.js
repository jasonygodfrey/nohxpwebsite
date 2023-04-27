import React from 'react';
import Image from 'next/image';

const Index = () => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src="/template.png"
          alt="My Picture"
          layout="responsive"
          width={500} // Replace with the original image width
          height={300} // Replace with the original image height
        />
      </div>
    </div>
  );
};

export default Index;
