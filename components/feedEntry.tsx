import Entry from '@/models/entry';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface FeedEntryProps {
  entry: Entry;
}

const FeedEntry = ({ entry }: FeedEntryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{entry.title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{entry.headline}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default FeedEntry;
