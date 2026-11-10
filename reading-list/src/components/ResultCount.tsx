interface ResultCountProp {
  count: number;
}

function ResultCount({ count }: ResultCountProp) {
  return <p>{count} books</p>;
}

export default ResultCount;
