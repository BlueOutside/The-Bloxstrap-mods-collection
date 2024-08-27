// script.js

async function fetchAndDisplayMods() {
  try {
    const themesResponse = await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO_NAME/contents/themes'); 
    const themesData = await themesResponse.json();

    const utilitiesResponse = await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO_NAME/contents/utilities');
    const utilitiesData = await utilitiesResponse.json();

    // Process themesData and utilitiesData 
    // (They will contain file/folder information)

    displayMods("themes", themesData); 
    displayMods("utilities", utilitiesData);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// (Rest of your displayMods function and other logic)

fetchAndDisplayMods(); 

// Example data (replace with your actual mod data)
const themes = [
    {
        name: "Cool Theme",
        description: "A sleek and modern theme.",
        images: ["themes/24K-gradient-gold-theme/screenshots/screenshot1.jpg", 
                 "themes/24K-gradient-gold-theme/screenshots/screenshot2.jpg"],
        downloadLink: "themes/24K-gradient-gold-theme/24K-gradient-gold-theme.zip",
        rating: 4.5 
    },
    // ... more themes
];

const utilities = [
    // ... your utility data
];

// Function to create mod cards and display them
function displayMods(modType, modData) {
    const container = document.getElementById(`${modType}-container`);

    modData.forEach(mod => {
        // Create mod card elements (div, img, p, etc.)
        // Populate elements with mod data (name, description, images, etc.)
        // Add event listeners for slideshows, ratings, etc.
        // Append the completed mod card to the container
    });
}

// Call the function to display themes and utilities
displayMods("themes", themes);
displayMods("utilities", utilities);