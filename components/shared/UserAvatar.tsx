import Image from "next/image";

const UserAvatar = ({
  profileSrc,
  name,
}: {
  profileSrc: string;
  name: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={profileSrc}
        className="rounded-full"
        alt="Avatar"
        width={20}
        height={20}
      />
      <p className="text-dark200_light800">{name}</p>
    </div>
  );
};
export default UserAvatar;
