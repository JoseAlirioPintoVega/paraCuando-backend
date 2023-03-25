import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ICard {
  title: string;
  short_description: string;
  image: string;
  url: string;
  votes: number;
}

export const Card: React.FC<ICard> = ({
  short_description,
  image,
  url,
  title,
  votes,
}) => {
  return (
    <div className="bg-white rounded-lg w-full">
      <Image
        src={image}
        width={500}
        height={500}
        alt=""
        className="block w-full rounded-t-lg"
      />
      <h1 className="text-center p-5"> {title} </h1>
      <p className="text-center p-3 overflow-hidden">{short_description}</p>
      <Link href={url}></Link>
      <span>{votes}</span>
    </div>
  );
};
