const LessonNote = () => {
  return (
    <div
      className=" py-4 px-10 my-4 bg-cover bg-no-repeat w-full h-full "
      style={{
        backgroundImage: `url(${require("../images/discriptionBG.png")})`,
      }}
    >
      <p>
        For today's lesson, we will try to understand and practice writing the
        setting for our stories. The setting is an important element of every
        fiction story.
      </p>
    </div>
  );
};

export default LessonNote;
