import RenderTag from "./RenderTag";
import Stats from "./Stats";
import UserAvatar from "./UserAvatar";

const QuestionCard = ({
  question,
}: {
  question: {
    time: number;
    title: string;
    tags: { label: string }[];
    author: { imageSrc: string; name: string };
    stats: {
      likes: number;
      answers: number;
      views: number;
    };
  };
}) => {
  return (
    <section className="background-light800_darkgradient text-dark300_light700 flex w-full flex-col gap-8 rounded-xl p-9 shadow-light-300 dark:shadow-none">
      <div className="flex flex-col gap-4">
        <h3 className="h3-bold text-dark100_light900">{question.title}</h3>
        <div className="flex gap-4">
          {question.tags.map((tag) => (
            <RenderTag key={tag.label} label={tag.label} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <UserAvatar
            profileSrc={question.author.imageSrc}
            name={question.author.name}
          />
          <p>
            • asked{" "}
            {question.time > 60
              ? `${Math.floor(question.time / 60)} hours`
              : `${question.time} minutes`}{" "}
            ago
          </p>
        </div>
        <Stats
          likes={question.stats.likes}
          views={question.stats.views}
          answers={question.stats.answers}
        />
      </div>
    </section>
  );
};
export default QuestionCard;
