"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Content {
  // Define the structure of your content here
    id: number;
    display_name: string;
    url_name: string;
    hero_banner1: string;
    hero_banner2: string;
    hero_banner3: string;
    hero_banner4: string;
    resumen: string;
}

const MyComponent: React.FC = () => {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/candidate/nicolasi/');
        const data: Content = await response.json();
        setContent(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      {/* Render your component content here */}
      {content && (
        <div>
          {/* Access and display the fetched content */}
          <h1>{content.id}</h1>
          <p>{content.display_name}</p>
          <Image alt="asd" src={"http://127.0.0.1:8000/"+content.hero_banner1} width={100} height={100}></Image>
        </div>
      )}
    </div>
  );
};

export default MyComponent;