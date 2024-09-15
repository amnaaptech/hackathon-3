
// Get the HTML elements
const nameElement = document.getElementById("name") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const phoneElement = document.getElementById("phone") as HTMLInputElement;
const addressElement = document.getElementById("address") as HTMLInputElement;
const educationElement = document.getElementById("education") as HTMLInputElement;
const experienceElement = document.getElementById("experience") as HTMLInputElement;
const skillsInput = document.getElementById("Skills") as HTMLInputElement;
const addSkillBtn = document.getElementById('addskillbtn') as HTMLButtonElement;
const removeSkillBtn = document .getElementById('remskillbtn') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;
const resumeOutputElement = document.getElementById('resumeOutput') as HTMLElement;

// Initialize an array to store the skills
let skills: string[] = [];

// Add event listener to the Add button
addSkillBtn.addEventListener('click', () => {
  const newSkill = skillsInput.value.trim();
  if (newSkill !== '') {
    skills.push(newSkill);
    skillsInput.value = '';
    updateSkillsList();
    updateResumeOutput();
  }
});

// Add event listener to the Remove button
removeSkillBtn.addEventListener('click', () => {
  const skillToRemove = skillsInput.value.trim();
  if (skillToRemove !== '') {
    const index = skills.indexOf(skillToRemove);
    if (index !== -1) {
      skills.splice(index, 1);
      skillsInput.value = '';
      updateSkillsList();
      updateResumeOutput();
    }
  } else if (skills.length > 0) {
    skills.pop();
    updateSkillsList();
    updateResumeOutput();
  }
});

// Function to update the skills list
function updateSkillsList() {
  skillsList.innerHTML = '';
  skills.forEach((skill) => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });
}

// Function to update the resume output
function updateResumeOutput() {
  if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsInput) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;

    // create resume
    const resumeOutput = `
      <h2>Resume</h2>
      <P><STrong>Name:</STrong>${name}</P>
      <P><STrong>Email:</STrong>${email}</P>
      <P><STrong>Phone Number:</STrong>${phone}</P>
      <P><STrong>Address:</STrong>${address}</P>
      <h3>Education</h3>
      <p>${education}</p>

      <h3>Experience</h3>
      <p>${experience}</p>

      <h3>Skills:</h3>
      <ul id="skills-list">
        ${skills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>
    `;
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error('The resume Output Element is missing');
    }
  } else {
    console.error('One or more elements are missing');
  }
}

// Initialize the skills list
updateSkillsList();

// Add event listener to the form submit
document.getElementById("resume")?.addEventListener('submit', function (event) {
  event.preventDefault();
  updateResumeOutput();
});








