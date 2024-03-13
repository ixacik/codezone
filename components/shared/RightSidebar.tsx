import Image from "next/image";
import Link from "next/link";

const questions = [
  "officia aliqua adipisicing anim proident velit ",
  "adipisicing nostrud enim m elit elit ea eiusmod non",
  "officia aliqua im commodo excepteur  elit elit ea eiusmod non",
  "adipisicing anim proident velit minim ea ",
  "officia aliqua  proident velit minim ea amet laboris ",
];

const tags = ["nextjs", "javascript", "reactjs", "es6", "nextjs"];

const RightSidebar = () => {
  return (
    <section className="placeholder background-light900_dark200 sticky flex h-screen w-[330px] flex-col gap-16 px-6 py-8 pt-32">
      <div className="flex flex-col gap-4">
        <h2 className="h2-semibold text-dark100_light900">Top Questions</h2>
        {questions.map((question) => (
          <Link
            href="/"
            className="flex-between body-medium w-full items-center gap-12"
            key={question}
          >
            <p className="text-dark300_light700 body-medium">{question}</p>
            <Image
              src="/assets/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="Link"
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="h2-semibold text-dark100_light900">Popular Tags</h2>
        {tags.map((tag) => (
          <Link
            href="/"
            className="flex-between body-medium w-full items-center gap-12"
            key={tag}
          >
            <p className="background-light800_dark300 text-dark400_light700 rounded-xl px-4 py-2">
              {tag}
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="Link"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default RightSidebar;
