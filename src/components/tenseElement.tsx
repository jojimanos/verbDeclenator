import { JSX } from "react";

const TenseElement = ({
  showMood,
  mood,
  item,
}: {
  showMood: boolean;
  mood: string;
  item: JSX.Element;
}) => {
  return (
    <>
      {showMood && (
        <div className="pt-4 pb-4">
          <h4>{mood}</h4>
          <p>{item}</p>
        </div>
      )}
    </>
  );
};

export default TenseElement;
