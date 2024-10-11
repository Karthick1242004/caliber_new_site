import Image from "next/image";
import { FollowerPointerCard } from "./following-pointer";
import cog from '../images/robooo.png'
import Link from "next/link";

interface FollowingPointerDemoProps {
  blogContent: BlogContent;
}

export function FollowingPointerDemo({ blogContent }: FollowingPointerDemoProps) {
  return (
    <div className="w-80 mx-auto max-500:w-96 ">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              layout="fit"
              objectFit="cover"
              src={cog}
              alt="name"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700 ">
              {blogContent.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500 text-justify">
              {blogContent.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              {/* <span className="text-sm text-gray-500">{blogContent.date}</span> */}
              <Link
                href="https://www.github.com/karthick1242004"
                className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs"
              >
                Our Works
              </Link>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}



interface BlogContent {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  authorAvatar: string;
}


const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
