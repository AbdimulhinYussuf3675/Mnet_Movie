/**
 * @jest-environment jsdom
 */
// import addReserve from './addReserve.js'
import reserveForm from './reserve.js'

// describe('reserveForm', () => {
//   let pup;

//   beforeEach(() => {
//     pup = document.createElement('div');
//     pup.classList.add('pup');
//     document.body.appendChild(pup);
//   });

//   afterEach(() => {
//     pup.remove();
//   });

//   it('adds the reservation form to the .pup element', () => {
//     reserveForm();

//     const form = pup.querySelector('.addReserve form');
//     expect(form).not.toBeNull();

//     const inputs = form.querySelectorAll('input');
//     expect(inputs).toHaveLength(3);
//   });

//   it('contains inputs for name, start date, and end date', () => {
//     reserveForm();

//     const nameInput = pup.querySelector('#name');
//     expect(nameInput).not.toBeNull();
//     expect(nameInput.getAttribute('placeholder')).toBe('your name');
//     expect(nameInput.getAttribute('required')).toBeDefined();

//     const startDateInput = pup.querySelector('#start-date');
//     expect(startDateInput).not.toBeNull();
//     expect(startDateInput.getAttribute('type')).toBe('date');
//     expect(startDateInput.getAttribute('placeholder')).toBe('start date');
//     expect(startDateInput.getAttribute('required')).toBeDefined();

//     const endDateInput = pup.querySelector('#end-date');
//     expect(endDateInput).not.toBeNull();
//     expect(endDateInput.getAttribute('type')).toBe('date');
//     expect(endDateInput.getAttribute('placeholder')).toBe('end date');
//     expect(endDateInput.getAttribute('required')).toBeDefined();
//   });
// });


describe('Add a reservation to a task', () => {

    test('if the user details is entering the array ', () => {
      const listr = JSON.parse(localStorage.getItem('listr')) || [];
      listr.push({
        'creation_date': 'few minutes ago',
        'name': 'Evans',
        'start_date': '12-02-2023',
        'end_date': '14-02-2023'
      });
      expect(listr).toHaveLength(1);
    });

})