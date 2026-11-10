interface ResultCountProp {
  count: number;
  label?: string
}

function ResultCount({ count, label }: ResultCountProp) {
  return <p>{count} books</p>
}

export default ResultCount;
