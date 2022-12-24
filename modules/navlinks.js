const listContact = () => {
  const contact = document.querySelector('.contact-section');
  const container = document.querySelector('.container');
  const can = document.querySelector('.cont-se');

  container.classList.add('show');
  can.classList.add('hide');
  contact.classList.add('hide');
  contact.classList.remove('show');
};

const addList = () => {
  const contact = document.querySelector('.contact-section');
  const container = document.querySelector('.container');
  const can = document.querySelector('.cont-se');
  contact.classList.add('show');
  container.classList.add('hide');
  can.classList.add('hide');
  container.classList.remove('show');
};

export { listContact, addList };