import Image from "next/image";

interface ProfileCardProps {
  avatar: string;
  name: string;
  career: string;
  about: string;
}

export default function ProfileCard({
  avatar,
  name,
  career,
  about,
}: ProfileCardProps) {
  return (
    <div className="bg-indigo-900 rounded-2xl border-b-8 border-t-8 border-purple-500 text-gray-100 text-center p-8">
      <div className="flex justify-center items-center rounded-full mb-4 border-b-8 border-pink-400">
        <Image
          src={avatar}
          width="200"
          height="200"
          alt="avatar"
          className="rounded-full"
        />
      </div>

      <p className="font-bold text-2xl">{name}</p>
      <p className="font-semibold text-yellow-400 mb-4">{career}</p>
      <p className="w-72 text-xs">{about}</p>
    </div>
  );
}
