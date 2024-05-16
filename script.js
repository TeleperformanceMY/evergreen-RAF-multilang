// Translation function
function translate(language) {
    const translations = {
        // English translations
        english: {
            chooseLanguage: "Choose Your Language:",
            enterBMS: "Enter Your BMS",
            chooseReferralLanguage: "Choose Your referral Language:",
            chooseReferralLocation: "Choose Your referral Location:",
            chooseReferralJob: "Choose Your referral Job :",
            nextButton: "Next",
            thankYou: "Thank you for your referral!",
            referralMessage: "As we grow into Malaysia, become #MoreTogether as we #ElevateAsia, here are the links your friend can use so this is tagged to your profile into our Recruiting System.",
            shareWhatsApp: "Share via WhatsApp",
            shareLine: "Share via Line",
            qrCodeMessage: "or have your friend scanning this code above!",
            vrMessage: "They can visit our locations in VR so they learn of us:",
            teamMessage: "The Talent Attraction Team"
        },
        // Add translations for other languages here
        japanese: {
            chooseLanguage: "あなたの言語を選択してください：",
            enterBMS: "あなたのBMSを入力してください",
            chooseReferralLanguage: "リファラル言語を選択してください：",
            chooseReferralLocation: "リファラルの場所を選択してください：",
            chooseReferralJob: "リファラルの仕事を選択してください：",
            nextButton: "次へ",
            thankYou: "リファラルありがとうございます！",
            referralMessage: "マレーシアに成長するにつれて、#ElevateAsiaとして#MoreTogetherになります。あなたの友達がこのリンクを使用できるように、これは私たちの採用システムにあなたのプロフィールにタグ付けされます。",
            shareWhatsApp: "WhatsAppで共有",
            shareLine: "LINEで共有",
            qrCodeMessage: "または、友達が上記のコードをスキャンしてください！",
            vrMessage: "彼らは私たちのVRロケーションを訪れることができますので、私たちについて学んでください：",
            teamMessage: "タレントアトラクションチーム"
        },
        // Add translations for other languages here
        // Korean, Malay, Mandarin, Thai...
    };

    return translations[language];
}

// Function to update page content based on selected language
function updatePageContent(language) {
    const translations = translate(language);

    // Update labels and texts
    document.querySelector(".language-selection label").textContent = translations.chooseLanguage;
    document.querySelector("#step1 h2").textContent = translations.enterBMS;
    document.querySelector("#step1 h3:nth-of-type(1)").textContent = translations.chooseReferralLanguage;
    document.querySelector("#step1 h3:nth-of-type(2)").textContent = translations.chooseReferralLocation;
    document.querySelector("#step1 h3:nth-of-type(3)").textContent = translations.chooseReferralJob;
    document.querySelector("#step1 button").textContent = translations.nextButton;
    document.querySelector("#step2 h2").textContent = translations.thankYou;
    document.querySelector("#step2 p:nth-of-type(1)").textContent = translations.referralMessage;
    document.querySelector("#share-button-whatsapp").textContent = translations.shareWhatsApp;
    document.querySelector("#share-button-line").textContent = translations.shareLine;
    document.querySelector("#qrBox button").textContent = translations.qrCodeMessage;
    document.querySelector("#step2 h2:nth-of-type(2)").textContent = translations.vrMessage;
    document.querySelector("#step2 p:nth-of-type(2)").textContent = translations.teamMessage;

    // Update options in select elements (if applicable)
    const languageSelect = document.getElementById("language-select");
    languageSelect.innerHTML = '';
    Object.keys(translations).forEach(lang => {
        const option = document.createElement("option");
        option.text = lang;
        option.value = lang;
        languageSelect.add(option);
    });
}
// Call updatePageContent when language selection changes
document.getElementById("emp-lang-select").addEventListener("change", function() {
    const selectedLanguage = this.value;
    updatePageContent(selectedLanguage);
});

 

// Define available locations and job types for each language
const languageData = {
    korean: {
        locations: ['Kuala Lumpur', 'Penang', 'Thailand'],
        jobTypes: {
            'Kuala Lumpur': ['KK1', 'KK2'],
            'Penang': ['KP1'],
            'Thailand': ['KT2']
        }
    },
    japanese: {
        locations: ['Kuala Lumpur', 'Penang', 'Thailand'],
        jobTypes: {
            'Kuala Lumpur': ['JK1'],
            'Penang': ['JP1', 'JP2'],
            'Thailand': ['JT1']
        }
    },
    english: {
        locations: ['Kuala Lumpur', 'Penang', 'Thailand'],
        jobTypes: {
            'Kuala Lumpur': ['EK1', 'EK2'],
            'Penang': ['EP1', 'EP2'],
            'Thailand': ['ET1', 'ET2']
        }
    },
    malay: {
        locations: ['Kuala Lumpur', 'Penang'],
        jobTypes: {
            'Kuala Lumpur': ['MYK1', 'MK2'],
            'Penang': ['MYP1', 'MYP2']
        }
    },
    mandarin: {
        locations: ['Kuala Lumpur', 'Penang', 'Thailand'],
        jobTypes: {
            'Kuala Lumpur': ['MK1'],
            'Penang': ['MP2'],
            'Thailand': ['MT1', 'MT2']
        }
    },
    thai: {
        locations: ['Thailand'],
        jobTypes: {
            'Thailand': ['TT1', 'TT2', 'TT3', 'TT4']
        }
    }
};// Define job offers and their corresponding referral links
const jobOffersReferralLinks = {
    KK1: "www.esssxample.com/",
    KK2: "www.example.com/",
    KP1: "www.example.com/",
    KT2: "www.example.com/",
    JK1: "www.example.com/",
    JP1: "www.example.com/",
    JP2: "www.example.com/",
    JT1: "www.example.com/",
    EK1: "www.example.com/",
    EK2: "www.example.com/",
    EP1: "www.example.com/",
    EP2: "www.example.com/",
    ET1: "www.example.com/",
    ET2: "www.example.com/",
    MYK1: "www.example.com/",
    MK2: "www.example.com/",
    MYP1: "www.example.com/",
    MYP2: "www.example.com/",
    MK1: "www.example.com/",
    MP2: "www.example.com/",
    MT1: "www.example.com/",
    MT2: "www.example.com/",
    TT1: "www.example.com/",
    TT2: "www.example.com/",
    TT3: "www.example.com/",
    TT4: "www.example.com/"
};


// Function to populate location options based on selected language
function populateLocations() {
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;
    var locationSelect = document.getElementById("location-select");
    locationSelect.innerHTML = ''; // Clear previous options

    // Populate locations based on selected language
    languageData[selectedLanguage].locations.forEach(location => {
        var option = document.createElement("option");
        option.text = location;
        option.value = location;
        locationSelect.add(option);
    });

    // Call populateJobTypes when location options are populated
    populateJobTypes();
}

// Function to populate job type options based on selected language and location
function populateJobTypes() {
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;
    var locationSelect = document.getElementById("location-select");
    var selectedLocation = locationSelect.options[locationSelect.selectedIndex].value;
    var jobTypeSelect = document.getElementById("job-type-select");
    jobTypeSelect.innerHTML = ''; // Clear previous options

    // Populate job types based on selected language and location
    languageData[selectedLanguage].jobTypes[selectedLocation].forEach(jobType => {
        var option = document.createElement("option");
        option.text = jobType;
        option.value = jobType;
        jobTypeSelect.add(option);
    });
}

// Function to proceed to Step 2
function nextStep() {
    var bmsId = document.getElementById("bms-id").value;
    var selectedLanguage = document.getElementById("language-select").value;
    var selectedLocation = document.getElementById("location-select").value;
    var selectedJobType = document.getElementById("job-type-select").value;

      // Check if BMS ID contains only numbers
    if (!/^\d+$/.test(bmsId)) {
        alert("Please enter a valid BMS ID (numbers only).");
        return;
    }
    // Generate referral link
var referralLink = jobOffersReferralLinks[selectedJobType] + bmsId;

// Display link and generate QR code
document.getElementById("generated-link").innerHTML = `<a href="${referralLink}" target="_blank">${referralLink}</a>`;
generateQrCode(referralLink);

    // Hide Step 1 and show Step 2
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}
document.getElementById("share-button-whatsapp").addEventListener("click", function() {
    const message = "Your message here"; // Replace with the message you want to share
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
});

document.getElementById("share-button-line").addEventListener("click", function() {
    const message = "Your message here"; // Replace with the message you want to share
    const lineLink = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;
    window.open(lineLink, "_blank");
});

// Function to generate QR code for the link
function generateQrCode(link) {
    const qrImg = document.getElementById('qrImg');
    const qrBox = document.getElementById('qrBox');

    // Construct the URL for the qrserver.com API
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;

    // Generating image
    qrImg.src = apiUrl;
    qrBox.setAttribute("id", "qrBoxGenerated");
}

// Call populateLocations when language selection changes
document.getElementById("language-select").addEventListener("change", populateLocations);

// Call populateJobTypes when location selection changes
document.getElementById("location-select").addEventListener("change", populateJobTypes);

// Initial population of location options based on the default language
populateLocations();
