//Homework
//implement localStorage.clear() //please consider DOM reloading

(function() {
  //Selector
  const profileForm = document.querySelector('.profileForm');
  const profile = document.querySelector('.profile');
  const nameInput = document.querySelector('#name');
  const ageInput = document.querySelector('#age');
  const professionInput = document.querySelector('#profession');

  //Listening event
  function loadEventListener() {
    document.addEventListener('DOMContentLoaded', getProfiles);
    profileForm.addEventListener('submit', profileSubmit);
  }

  loadEventListener();

  function getProfiles() {
    let profiles;
    if (localStorage.getItem('profiles')) {
      profiles = JSON.parse(localStorage.getItem('profiles'));
    } else {
      profiles = [];
    }
    let formattedText = '';
    profiles.forEach(profile => {
      formattedText += formatText(profile);
    });
    profile.innerHTML = formattedText;
  }
  function profileSubmit(evt) {
    evt.preventDefault();
    if (
      nameInput.value === '' ||
      ageInput.value === '' ||
      professionInput.value === ''
    ) {
      alert('Please provide necessary information');
      return;
    }
    const profileData = {
      name: nameInput.value,
      age: ageInput.value,
      profession: professionInput.value
    };
    const formattedText = formatText(profileData);
    saveDataToStorage(profileData);
    profile.innerHTML += formattedText;
    nameInput.value = '';
    ageInput.value = '';
    professionInput.value = '';
  }

  function formatText({ name, age, profession }) {
    return `<div class="profile__section">
          <h3>Name: ${name}</h3>
          <p>Age:${age}</p>
          <p>profession: ${profession}</p>
        </div>
  `;
  }

  function saveDataToStorage(profileData) {
    let profiles;
    if (localStorage.getItem('profiles')) {
      profiles = JSON.parse(localStorage.getItem('profiles'));
    } else {
      profiles = [];
    }
    profiles.push(profileData);
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }
})();
