var _a;
// Get the HTML elements
var nameElement = document.getElementById("name");
var emailElement = document.getElementById("email");
var phoneElement = document.getElementById("phone");
var addressElement = document.getElementById("address");
var educationElement = document.getElementById("education");
var experienceElement = document.getElementById("experience");
var skillsInput = document.getElementById("Skills");
var addSkillBtn = document.getElementById('addskillbtn');
var removeSkillBtn = document.getElementById('remskillbtn');
var skillsList = document.getElementById('skills-list');
var resumeOutputElement = document.getElementById('resumeOutput');
// Initialize an array to store the skills
var skills = [];
// Add event listener to the Add button
addSkillBtn.addEventListener('click', function () {
    var newSkill = skillsInput.value.trim();
    if (newSkill !== '') {
        skills.push(newSkill);
        skillsInput.value = '';
        updateSkillsList();
        updateResumeOutput();
    }
});
// Add event listener to the Remove button
removeSkillBtn.addEventListener('click', function () {
    var skillToRemove = skillsInput.value.trim();
    if (skillToRemove !== '') {
        var index = skills.indexOf(skillToRemove);
        if (index !== -1) {
            skills.splice(index, 1);
            skillsInput.value = '';
            updateSkillsList();
            updateResumeOutput();
        }
    }
    else if (skills.length > 0) {
        skills.pop();
        updateSkillsList();
        updateResumeOutput();
    }
});
// Function to update the skills list
function updateSkillsList() {
    skillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
}
// Function to update the resume output
function updateResumeOutput() {
    if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsInput) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        // create resume
        var resumeOutput = "\n      <h2>Resume</h2>\n      <P><STrong>Name:</STrong>".concat(name_1, "</P>\n      <P><STrong>Email:</STrong>").concat(email, "</P>\n      <P><STrong>Phone Number:</STrong>").concat(phone, "</P>\n      <P><STrong>Address:</STrong>").concat(address, "</P>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n\n      <h3>Skills:</h3>\n      <ul id=\"skills-list\">\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n      </ul>\n    ");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume Output Element is missing');
        }
    }
    else {
        console.error('One or more elements are missing');
    }
}
// Initialize the skills list
updateSkillsList();
// Add event listener to the form submit
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    updateResumeOutput();
});
