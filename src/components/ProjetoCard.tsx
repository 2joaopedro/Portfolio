import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface LinkProps {
  url: string;
  icon: JSX.Element;
}

interface CardProps {
  title: string;
  description: string;
  links: LinkProps[];
  tecs: string[];
  image: StaticImageData;
}

export default function ProjetoCard({ description, title, links, image, tecs }: CardProps) {
  return (
    <div className="flex w-full justify-center mt-16">
      <Image
        src={image}
        alt={title}
        width={776}
        height={392}
        className="shadow-lg rounded-lg left-64 relative"
      />
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-end items-end right-40 mb-4 absolute">
          <h2 className="right-40 font-bold text-[2rem] text-[#F0F0F0] leading-[3.75rem]">{title}</h2>
        </div>
        <div className="flex justify-center items-center w-[43.625rem] h-[15.1875rem] rounded-lg bg-[#9071E9] z-10 right-40 mt-14 absolute">
          <p className="text-end font-semibold text-2xl leading-8 w-[35.5rem] text-[#F0F0F0]">{description}</p>
        </div>
        <div className="flex w-full justify-end items-end gap-10 right-40 mt-[18.75rem] absolute">
          {tecs.map((tec, index) => (
            <h2 key={index} className="right-40 font-medium text-lg text-[#F0F0F0] leading-[3.75rem]">{tec}</h2>
          ))}
        </div>
        <div className="flex w-full justify-end items-end gap-10 right-40 mt-[23.75rem] absolute">
          {links.map((link, index) => (
            <Link href={link.url} key={index}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
