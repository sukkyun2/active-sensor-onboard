import "./styles.css";

type DotProps = {
  pageIndex: Number;
  pageCount: Number;
};

const Dots = ({ pageIndex, pageCount }: DotProps) => {
  const numberStream: Array<Number> = Array.from([...Array(pageCount)]);
  const active = (index: Number) => pageIndex == index;

  return (
    <div className="dots">
      {numberStream
        .map((it, index) => (active(index) ? "dot-active" : "dot"))
        .map((className) => (
          <div className={className}></div>
        ))}
    </div>
  );
};

export default Dots;
