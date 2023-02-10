/**
 * @jest-environment jsdom
*/

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
    { creation_date: 'few minutes ago', username: 'microverse', comment: 'hello world' },
    { creation_date: 'few minutes ago', username: 'microverse', comment: 'hello world' },
    { creation_date: 'few minutes ago', username: 'microverse', comment: 'hello world' },
    { creation_date: 'few minutes ago', username: 'microverse', comment: 'hello world' },
  ];

  const tfee = document.querySelector('.test');
  const head = document.querySelector('.head');

  test('test the number of element in UI ', () => {
    expect(moviecount(tfee, head)).toHaveLength(0);
  });

  test('Should return the number of comments elements in the UI after adding to comment', () => {
    list.map((lists) => {
      listlayout(lists, tfee);
      return list;
    });
    expect(moviecount(tfee, head)).toHaveLength(4);
  });
});