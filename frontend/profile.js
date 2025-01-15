// Function to toggle the Edit Profile form
function toggleEditProfile() {
    const editForm = document.getElementById('editProfile');
    const profileHeader = document.querySelector('.profile-header');
    
    // Toggle visibility of edit form
    if (editForm.style.display === "none") {
        editForm.style.display = "block";
        profileHeader.style.display = "none";
        
        // Prefill the form with current user data
        document.getElementById('editName').value = document.getElementById('userName').innerText;
        document.getElementById('editEmail').value = document.getElementById('userEmail').innerText;
        document.getElementById('editBio').value = document.getElementById('userBio').innerText;
    } else {
        editForm.style.display = "none";
        profileHeader.style.display = "flex";
    }
}

// Function to save profile changes
function saveProfileChanges(event) {
    event.preventDefault(); // Prevent form submission

    // Get the new values from the form
    const newName = document.getElementById('editName').value;
    const newEmail = document.getElementById('editEmail').value;
    const newBio = document.getElementById('editBio').value;

    // Update the profile information
    document.getElementById('userName').innerText = newName;
    document.getElementById('userEmail').innerText = newEmail;
    document.getElementById('userBio').innerText = newBio;

    // Close the edit form and show the updated profile
    toggleEditProfile();
}


document.querySelector('form').addEventListener('submit', function (e) {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (newPassword !== confirmPassword) {
        e.preventDefault(); // Prevent form submission
        passwordError.style.display = 'block'; // Show error message
    } else {
        passwordError.style.display = 'none'; // Hide error message
    }
});

document.getElementById('changePasswordButton').addEventListener('click', function() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (newPassword !== confirmPassword) {
        e.preventDefault(); // Prevent form submission
        passwordError.style.display = 'block'; // Show error message
    } else {
        passwordError.style.display = 'none'; // Hide error message
    }
});