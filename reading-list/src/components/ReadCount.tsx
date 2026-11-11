interface ReadCountProps {
  readCount: number;
  total: number;
}

function ReadCount({ readCount, total }: ReadCountProps) {
  return (
    <p>
      {readCount} of {total} read.
    </p>
  );
}
export default ReadCount;
