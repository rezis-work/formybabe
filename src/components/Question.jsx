const Question = ({ setIsYes }) => {
  const handleYes = () => {
    setIsYes(true);
    localStorage.setItem("isYes", true);
  };
  const handleNo = () => {
    const buttons = document.querySelectorAll("button");
    const noButton = buttons[1];
    noButton.style.position = "absolute";
    noButton.style.top = `${Math.random() * 200}px`;
    noButton.style.left = `${Math.random() * 200}px`;
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-3">
      <img
        src="/valentine.jpg"
        className="w-full h-screen object-center object-cover absolute absolute-center -z-10"
        alt="valentine"
      />
      <h1 className=" text-red-500 text-2xl font-bold text-center">
        For my Beautiful Fareefat
      </h1>
      <p className=" text-2xl font-bold px-10 text-center text-red-800 max-w-2xl">
        I love you more than words can say. You are the most beautiful person I
        know, and I am so lucky to have you in my life. I hope this
        Valentine&apos;s Day will be the best one!
      </p>
      <div className="flex flex-col items-center justify-center gap-3 border-2 border-red-500 rounded-md p-5 px-10">
        <p className="text-2xl font-bold text-center text-red-800">
          Will you be my valentine my Gorgeous?
        </p>
        <div className="flex flex-row items-center justify-center gap-3">
          <button
            onClick={handleYes}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600"
          >
            Yes, I will
          </button>
          <button
            onClick={handleNo}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600"
          >
            No, I won&apos;t
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
