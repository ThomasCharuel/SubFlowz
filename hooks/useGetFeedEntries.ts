import Entry from '@/models/entry';

const useGetFeedEntries = (): Entry[] => {
  const feedEntries: Entry[] = [
    {
      id: 1,
      author: {
        name: 'Natassha Selvaraj',
        pictureUrl:
          'https://miro.medium.com/v2/resize:fill:88:88/1*WHVVSRCz66KUX57Bo8oAWQ.jpeg',
      },
      title: 'Coding was Hard Until I Learned These 2 Things!',
      date: 'Aug 30',
      hero: 'https://miro.medium.com/v2/resize:fit:572/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
      url: 'https://medium.com/towards-data-science/coding-was-hard-until-i-learned-these-2-things-1219840d0a0a',
      headline:
        'Here’s what helped me go from “aspiring programmer” to actually landing a job in the field.',
    },
    {
      id: 2,
      author: {
        name: 'Natassha Selvaraj',
        pictureUrl:
          'https://miro.medium.com/v2/resize:fill:88:88/1*WHVVSRCz66KUX57Bo8oAWQ.jpeg',
      },
      title: 'Coding was Hard Until I Learned These 2 Things!',
      date: 'Aug 30',
      hero: 'https://miro.medium.com/v2/resize:fit:572/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
      url: 'https://medium.com/towards-data-science/coding-was-hard-until-i-learned-these-2-things-1219840d0a0a',
      headline:
        'Here’s what helped me go from “aspiring programmer” to actually landing a job in the field.',
    },
    {
      id: 3,
      author: {
        name: 'Natassha Selvaraj',
        pictureUrl:
          'https://miro.medium.com/v2/resize:fill:88:88/1*WHVVSRCz66KUX57Bo8oAWQ.jpeg',
      },
      title: 'Coding was Hard Until I Learned These 2 Things!',
      date: 'Aug 30',
      hero: 'https://miro.medium.com/v2/resize:fit:572/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
      url: 'https://medium.com/towards-data-science/coding-was-hard-until-i-learned-these-2-things-1219840d0a0a',
      headline:
        'Here’s what helped me go from “aspiring programmer” to actually landing a job in the field.',
    },
  ];
  return feedEntries;
};

export default useGetFeedEntries;
