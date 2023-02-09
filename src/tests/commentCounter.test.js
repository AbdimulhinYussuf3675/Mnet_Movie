/**
 * @jest-environment jsdom
*/

import addCommentCounter from "../modules/__mock__/CommentCountMock";

describe("Tests for comment counter", () => {
  test('check if addcommentcounter exists', () => {
    expect(addCommentCounter).toBeDefined();
  })
  test("test it ruturns the number of comments elements to the page", () => {
    document.body.innerHTML = `<h4 class="head"></h4>
              <h4  class="head"></h4>
              <h4 class="head"></h4>
              <h4 class="head"></h4>
              <h4 class="head"></h4>
                `;

    expect(addCommentCounter()).toBe(5);
  });

  test('Should return the number of comments elements in the UI', () => {
    document.body.innerHTML = "<p class='head'</p>";
    expect(addCommentCounter()).toBe(1);
  });
});