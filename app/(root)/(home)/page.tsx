import AskQuestionButton from "@/components/shared/AskQuestionButton";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/QuestionCard";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { HomePageFilters } from "@/constants/filters";

const questions = [
  {
    title: "How did we get here?",
    tags: [{ label: "poop" }, { label: "butt" }, { label: "fart" }],
    author: { imageSrc: "/assets/icons/avatar.svg", name: "John Doe" },
    stats: { likes: 12, answers: 3, views: 23 },
    time: 120,
  },
  {
    title: "How did we get here?",
    tags: [{ label: "poop" }, { label: "butt" }, { label: "fart" }],
    author: { imageSrc: "/assets/icons/avatar.svg", name: "John Doe" },
    stats: { likes: 12, answers: 3, views: 23 },
    time: 120,
  },
  {
    title: "How did we get here?",
    tags: [{ label: "poop" }, { label: "butt" }, { label: "fart" }],
    author: { imageSrc: "/assets/icons/avatar.svg", name: "John Doe" },
    stats: { likes: 12, answers: 3, views: 23 },
    time: 120,
  },
  {
    title: "How did we get here?",
    tags: [{ label: "poop" }, { label: "butt" }, { label: "fart" }],
    author: { imageSrc: "/assets/icons/avatar.svg", name: "John Doe" },
    stats: { likes: 12, answers: 3, views: 23 },
    time: 120,
  },
];

export default function Home() {
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
        <h1 className="h1-bold text-dark200_light900">All Questions</h1>
        <AskQuestionButton />
      </div>
      <div className="mt-11 flex w-full flex-col items-center justify-between gap-4">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc={"/assets/icons/search.svg"}
          placeholder="Search questions..."
        />
        <Filter filters={HomePageFilters} />
      </div>
      {questions.slice(0, 0).length > 0 ? (
        questions.map((question) => (
          <QuestionCard key={question.title} question={question} />
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
}
