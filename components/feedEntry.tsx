import Entry from '@/models/entry';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Star } from 'lucide-react';
import { FileClock } from 'lucide-react';
import Image from 'next/image';

interface FeedEntryProps {
  entry: Entry;
}

const FeedEntry = ({ entry }: FeedEntryProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative h-52">
        <Image
          src={entry.hero}
          fill={true}
          alt={'Blog post hero'}
          className="object-cover"
        />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Image
            src={entry.author.pictureUrl}
            width={40}
            height={40}
            alt={`${entry.author.name} profile picture`}
            className="rounded-full"
          />
          <p className="">{entry.author.name}</p>
        </div>
        <CardTitle className="mt-4">
          <a href={entry.url}>{entry.title}</a>
        </CardTitle>
        <CardDescription className="mt-2">{entry.headline}</CardDescription>
      </CardContent>
      <CardFooter>
        <a href={entry.url} className="text-center">
          Read more
        </a>
        <div className="flex flex-auto justify-end">
          <button>
            <FileClock />
          </button>
          <button>
            <Star />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeedEntry;
