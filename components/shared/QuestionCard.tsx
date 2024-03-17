import Link from "next/link";
import RenderTag from "./RenderTag";
import Metric from "./Metric";
import { formatNumber, getTimestamp } from "@/lib/utils";

interface QuestionProps {
  _id: string;
  title: string;
  tags: { _id: string; name: string }[];
  author: { _id: string; profileSrc: string; name: string };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <section className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col gap-4">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
        </div>
        <Link href={`/question/${_id}`}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1">
            {title}
          </h3>
        </Link>

        {/* If signed in add edit and delete actions */}

        <div className="flex gap-4">
          {tags.map((tag) => (
            <RenderTag key={tag.name} name={tag.name} _id={tag._id} />
          ))}
        </div>
        <div className="flex-between mt-6 w-full flex-wrap gap-3">
          <Metric
            imgUrl={author.profileSrc || "/assets/icons/avatar.svg"}
            alt={`${author.name}'s avatar`}
            value={author.name}
            title={` - asked ${getTimestamp(createdAt)}`}
            href={`/user/${author._id}`}
            isAuthor
            textStyles="body-medium text-dark400_light700"
          />

          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="upvotes"
            value={formatNumber(upvotes)}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="answers"
            value={formatNumber(answers.length)}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="views"
            value={formatNumber(views)}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </section>
  );
};
export default QuestionCard;
