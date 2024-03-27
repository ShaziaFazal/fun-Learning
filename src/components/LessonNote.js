const LessonNote = () => {
  return (
    <div
      className="my-4 bg-repeat-round bg-cover  h-40"
      style={{
        backgroundImage: `url(${require("../images/discriptionBG.png")})`,
      }}
    >
      <p className="py-8 px-10 bg-red">
        For today's lesson, we will try to understand and practice writing the
        setting for our stories. The setting is an important element of every
        fiction story.
      </p>
    </div>
  );
};

export default LessonNote;
