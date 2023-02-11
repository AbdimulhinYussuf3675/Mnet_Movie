import moviecount from '../modules/moviecount.js';
import listlayout from '../modules/listlayout.js';

describe('Tests for comment counter', () => {
  document.body.innerHTML = `

            <div class="comment">
                <h4 class="head">comment()</h4>
                <ul class="test list-test-reserve">
                
                </ul>
            </div>
                `;

  const list = [
    {
      creation_date: 'few minutes ago', username: 'microverse', date_start: 1 - 1 - 2023, date_end: 1 - 1 - 24,
    },
    {
      creation_date: 'few minutes ago', username: 'microverse', date_start: 1 - 1 - 2023, date_end: 1 - 1 - 24,
    },
    {
      creation_date: 'few minutes ago', username: 'microverse', date_start: 1 - 1 - 2023, date_end: 1 - 1 - 24,
    },
    {
      creation_date: 'few minutes ago', username: 'microverse', date_start: 1 - 1 - 2023, date_end: 1 - 1 - 24,
    },
  ];

  const tfee = document.querySelector('.test');
  const head = document.querySelector('.head');

  test('test the number of element in UI ', () => {
    expect(moviecount(tfee, head)).toHaveLength(0);
  });

  test('Should return the number of reservations in the UI after adding to reservation', () => {
    list.map((lists) => {
      listlayout(lists, tfee);
      return list;
    });
    expect(moviecount(tfee, head)).toHaveLength(4);
  });
});