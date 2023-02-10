/**
 * @jest-environment jsdom
 */

describe('Add a reservation to a task', () => {
  test('if the user details is entering the array and that counter function is updating correct', () => {
    const listr = JSON.parse(localStorage.getItem('listr')) || [];
    listr.push({
      creation_date: 'few minutes ago',
      name: 'Evans',
      start_date: '12-02-2023',
      end_date: '14-02-2023',
    });
    expect(listr).toHaveLength(1);
  });
});