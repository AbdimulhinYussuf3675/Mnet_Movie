import moviecount from './moviecount.js';

describe('test if the counter works', () => {
  const lists = [
    {
      score: 0.9087068,
      show: {
        image:
   { medium: 'https://static.tvmaze.com/uploadortrait/31/78286.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg' },
        name: 'Girls',
        id: 13,
      },
    },

    {
      score: 0.9087068,
      show: {
        image:
   { medium: 'https://static.tvmaze.com/uploadortrait/31/78286.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg' },
        name: 'Girls',
        id: 13,
      },
    },

    {
      score: 0.9087068,
      show: {
        image:
   { medium: 'https://static.tvmaze.com/uploadortrait/31/78286.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg' },
        name: 'Girls',
        id: 13,
      },
    },

  ];
  test('should return the length of array', async () => {
    const tee = moviecount(lists);
    expect(tee).toEqual(3);
  });
});
