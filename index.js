const saveButtonEl = document.querySelector('#saveButton');

saveButtonEl.addEventListener('click', handleSave);

const handleSave = () => {
  console.log('click');
  modal.colse();
};
