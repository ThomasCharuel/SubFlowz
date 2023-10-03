import Entry from '@/models/entry';

const useGetFeedEntries = (): Entry[] => {
  const feedEntries: Entry[] = [
    {
      id: 1,
      author: 'Natassha Selvaraj',
      title: 'Coding was Hard Until I Learned These 2 Things!',
      date: 'Aug 30',
      hero: 'https://miro.medium.com/v2/resize:fit:720/0*43abp5DDewmGZjeu',
      url: 'https://medium.com/towards-data-science/coding-was-hard-until-i-learned-these-2-things-1219840d0a0a',
      headline:
        'Here’s what helped me go from “aspiring programmer” to actually landing a job in the field.',
    },
    {
      id: 2,
      author: 'Natassha Selvaraj',
      title: 'Coding was Hard Until I Learned These 2 Things!',
      date: 'Aug 30',
      hero: 'https://miro.medium.com/v2/resize:fit:720/0*43abp5DDewmGZjeu',
      url: 'https://medium.com/towards-data-science/coding-was-hard-until-i-learned-these-2-things-1219840d0a0a',
      headline:
        'Here’s what helped me go from “aspiring programmer” to actually landing a job in the field.',
    },
    {
      id: 3,
      author: 'Natassha Selvaraj',
      title: 'Coding was Hard Until I Learned These 2 Things!',
      date: 'Aug 30',
      hero: 'https://miro.medium.com/v2/resize:fit:720/0*43abp5DDewmGZjeu',
      url: 'https://medium.com/towards-data-science/coding-was-hard-until-i-learned-these-2-things-1219840d0a0a',
      headline:
        'Here’s what helped me go from “aspiring programmer” to actually landing a job in the field.',
    },
  ];
  return feedEntries;
};

export default useGetFeedEntries;
