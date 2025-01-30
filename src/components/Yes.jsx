const Yes = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-3 bg-red-300">
      <div className="hearts-container">
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
      </div>
      <img
        src="/yes.png"
        className="object-center object-cover absolute absolute-center z-1 rounded-2xl"
        alt="yes"
      />
      <div className="z-10 mt-[500px] bg-red-500 rounded-2xl p-5">
        <h1 className="text-2xl font-bold text-center text-white">
          I love you so much my beautiful Fareedat!
        </h1>
      </div>
    </div>
  );
};

export default Yes;
