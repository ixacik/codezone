import Image from "next/image";

const Stats = ({
  likes,
  answers,
  views,
}: {
  likes: number;
  answers: number;
  views: number;
}) => {
  return (
    <div className="text-dark300_light700 flex gap-2">
      <div className="flex gap-2">
        <Image src="/assets/icons/like.svg" alt="like" width={20} height={20} />
        <p>{likes} Likes</p>
      </div>
      <div className="flex gap-2">
        <Image
          src="/assets/icons/message.svg"
          alt="like"
          width={20}
          height={20}
        />
        <p>{answers} Answers</p>
      </div>
      <div className="flex gap-2">
        <Image src="/assets/icons/eye.svg" alt="like" width={20} height={20} />
        <p>{views} Views</p>
      </div>
    </div>
  );
};
export default Stats;
