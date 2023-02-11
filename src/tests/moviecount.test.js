import moviecount from '../modules/moviecount.js';
import layout from '../modules/pagelayout.js';

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

  document.body.innerHTML = ` <header>
                                 <nav>
                                    <div class="logo">
                                    <h2>Mnet</h2>
                                    </div> 
                                    <ul>
                                    <li>
                                          <a href="">movies(<span class="total">0</span>)</a>
                                    </li>
                                    <li>
                                          <a href="">new movies</a>
                                    </li>
                                    <li>
                                          <a href="">old movies</a>
                                    </li>            
                                    </ul>
                                 </nav>
                              </header>
                              <main>
                                 <ul class="wrap">
                                    
                                 
                                 </ul>    
                              </main>

                              <footer>
                                 <h3>created by Microverse under CC license</h3>
                              </footer>`;

  const wrapper = document.querySelector('.wrap');
  const num = document.querySelector('.total');

  test('expect length to be zero', () => {
    expect(moviecount(wrapper, num)).toHaveLength(0);
  });

  test('expect length to be three', () => {
    lists.map((list) => {
      layout(list);
      return list;
    });
    expect(moviecount(wrapper, num)).toHaveLength(3);
  });
});

// two(wrapper) line 17 and import two
