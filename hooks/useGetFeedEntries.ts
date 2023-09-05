import Entry from '@/models/entry';

const useGetFeedEntries = (): Entry[] => {
  const feedEntries: Entry[] = [
    {
      id: 1,
      author: 'Quintessa Williams',
      title: 'Unchecked Treatment: The Anti-Black Hate Crime Epidemic',
      date: 'Aug 30',
      hero: 'https://miro.medium.com/v2/resize:fit:720/0*43abp5DDewmGZjeu',
      url: 'https://williquinn.medium.com/unchecked-treatment-the-anti-black-hate-crime-epidemic-479e33f81f62',
      headline:
        'More silent dangers mount amongst the consistent rise in racial hate crimes against African Americans.',
    },
  ];
  return feedEntries;
};

export default useGetFeedEntries;
