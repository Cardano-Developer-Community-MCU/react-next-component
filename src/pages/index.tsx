import ProfileCard from "@/components/ProfileCard";

const avatar = "/girl-avatar-1.png";
const name = "Theresia Abigail";
const career = "Web3 Developer";
const about =
  "A kiddo uses TailwindCSS, ReactJS, and NextJS in web development and also competent in writing smart-contract using Aiken language.";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProfileCard avatar={avatar} name={name} career={career} about={about} />
    </div>
  );
}
