import { useEffect, useMemo } from 'react';

export default function WordCount({ text = '' }) {
  const words = useMemo(() => text.split(' '), [text]);

  useEffect(() => {
    console.log('fresh render');
  }, [words]);

  return (
    <>
      <p> {text} </p>{' '}
      <p>
        <strong> {words.length} – words </strong>{' '}
      </p>
    </>
  );
}
