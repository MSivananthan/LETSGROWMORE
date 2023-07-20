function showResult() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const skills = document.querySelector('input[name="skills"]:checked');
  const profilePhotoInput = document.getElementById('profilePhoto');
  const profilePhoto = profilePhotoInput.files[0];

  // Check if the passwords match
  if (password !== confirmPassword) {
    document.getElementById('result-container').innerHTML = 'Passwords do not match.';
    document.getElementById('result-container').style.display = 'block';
    return;
  }

  // Prepare the result HTML
  let resultHTML = `
    <h3>Registration Successful</h3>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Skills:</strong> ${skills ? skills.value : 'None selected'}</p>
  `;

  if (profilePhoto) {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      resultHTML += `<p><strong>Profile Photo:</strong></p>
        <img class="preview-image" src="${reader.result}" alt="Profile Photo">`;
      // Display the result in the hidden container
      document.getElementById('result-container').innerHTML = resultHTML;
      document.getElementById('result-container').style.display = 'block';
    });
    reader.readAsDataURL(profilePhoto);
  } else {
    // Display the result in the hidden container
    document.getElementById('result-container').innerHTML = resultHTML;
    document.getElementById('result-container').style.display = 'block';
  }
}
