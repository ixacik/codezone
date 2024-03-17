import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const questions = [
  "officia aliqua adipisicing anim proident velit ",
  "adipisicing nostrud enim m elit elit ea eiusmod non",
  "officia aliqua im commodo excepteur  elit elit ea eiusmod non",
  "adipisicing anim proident velit minim ea ",
  "officia aliqua  proident velit minim ea amet laboris ",
];

const tags = [
  { name: "Tag1", _id: "1" },
  { name: "Tag2", _id: "2" },
  { name: "Tag3", _id: "3" },
  // Add more placeholder objects as needed
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky top-0 z-40 flex h-screen w-[330px] flex-col  gap-16 border-l px-6 py-8 pt-32 shadow-light-300 dark:shadow-none max-xl:hidden">
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
              alt="Chevron Right"
              className="invert-colors"
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
            key={tag.name}
          >
            <RenderTag name={tag.name} _id={tag._id} />
            <p className="text-dark100_light900 small-medium">1</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default RightSidebar;
