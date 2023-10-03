import useGetFeedEntries from '@/hooks/useGetFeedEntries';
import FeedEntry from './feedEntry';

const Feed = () => {
  const feedEntries = useGetFeedEntries();

  return (
    <div>
      {feedEntries.map((feedEntry) => (
        <FeedEntry key={feedEntry.id} entry={feedEntry} />
      ))}
    </div>
  );
};

export default Feed;
