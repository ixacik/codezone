const RenderTag = ({ label }: { label: string }) => {
  return (
    <p className="background-light800_dark300 text-light400_light500 rounded-xl px-4 py-2 shadow-light-300 dark:shadow-none">
      {label}
    </p>
  );
};
export default RenderTag;
