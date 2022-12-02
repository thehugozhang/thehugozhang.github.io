//
// Landing nav scroll behavior.
//

document.getElementById("nav-link-about").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
});

document.getElementById("nav-link-experience").addEventListener("click", () => {
    document.getElementById("experience").scrollIntoView({behavior: "smooth"});
});

document.getElementById("nav-link-projects").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
});

document.getElementById("nav-link-contact").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
});

//
// Experience nav behavior.
//

function removeDisplay(id) {
    document.getElementById("role-google").classList.remove("display")
    document.getElementById("role-ccdc").classList.remove("display")
    document.getElementById("role-pqi").classList.remove("display")
    document.getElementById("role-medumo").classList.remove("display")
    document.getElementById("role-jibo").classList.remove("display")
    document.getElementById(id).classList.add("display")
}

document.getElementById("role-google").addEventListener("click", () => {
    document.getElementById("dynamic-experience-headline").innerHTML = `Software Engineer Intern <span class = "company">@ <a class = "underline" href = "https://google.com">Google</a></span>`;
    document.getElementById("dynamic-experience-duration").innerHTML = `June 2022 - September 2022`;
    document.getElementById("dynamic-experience-line-1").innerHTML = `Designed and developed a C++ Service API pipeline on the Google Formats Server that automatically creates image ad layouts by applying machine learning models on advertiser assets.`;
    document.getElementById("dynamic-experience-line-2").innerHTML = `Developed standalone C++ binaries using machine learning models to perform subject detection and extraction on images, natural background replacement, and intelligent image compositing.`;
    document.getElementById("dynamic-experience-line-3").innerHTML = `Researched, tested, and documented existing Google machine learning solutions in a comprehensive Exploration document for reference by future engineers.`;
    removeDisplay("role-google");
});

document.getElementById("role-ccdc").addEventListener("click", () => {
    document.getElementById("dynamic-experience-headline").innerHTML = `Full-stack Web Developer <span class = "company">@ <a class = "underline" href = "http://communityconnectionsdc.org/">Community Connections</a></span>`;
    document.getElementById("dynamic-experience-duration").innerHTML = `October 2020 - August 2021`;
    document.getElementById("dynamic-experience-line-1").innerHTML = `Sole UI/UX website developer for Community Connections' new main website, reducing website maintenance costs by over 90% annually`;
    document.getElementById("dynamic-experience-line-2").innerHTML = `Handled website design including composition, color, illustration, typography, and branding.`;
    document.getElementById("dynamic-experience-line-3").innerHTML = `Features include an online interactive patient/provider referral tool, real-time email notifications.`;
    removeDisplay("role-ccdc");
});

document.getElementById("role-pqi").addEventListener("click", () => {
    document.getElementById("dynamic-experience-headline").innerHTML = `Information Technology Developer <span class = "company">@ <a class = "underline" href = "https://www.pqi.org/">Pittsburgh Quantum Institute</a></span>`;
    document.getElementById("dynamic-experience-duration").innerHTML = `September 2019 - March 2020`;
    document.getElementById("dynamic-experience-line-1").innerHTML = `Built web application to quickly format article publication tweets using Javascript, HTML/CSS.`;
    document.getElementById("dynamic-experience-line-2").innerHTML = `Developed Google Scholars web-scraping application using Python to automate publication updates.`;
    document.getElementById("dynamic-experience-line-3").innerHTML = `Maintained www.pqi.org, provided troubleshooting assistance for lab equipment.`;
    removeDisplay("role-pqi");
});

document.getElementById("role-medumo").addEventListener("click", () => {
    document.getElementById("dynamic-experience-headline").innerHTML = `Software Engineer Intern <span class = "company">@ <a class = "underline" href = "https://www.medumo.com">Medumo</a></span>`;
    document.getElementById("dynamic-experience-duration").innerHTML = `August 2018 - August 2019`;
    document.getElementById("dynamic-experience-line-1").innerHTML = `Developed a new patient lookup tool and user feedback system using React.js to streamline patient communications.`;
    document.getElementById("dynamic-experience-line-2").innerHTML = `Designed and developed an online ROI calculator for medical practices using Javascript, HTML/CSS.`;
    document.getElementById("dynamic-experience-line-3").innerHTML = `Automated, tested, and improved machine learning AI to categorize user feedback in Python.`;
    removeDisplay("role-medumo");
});

document.getElementById("role-jibo").addEventListener("click", () => {
    document.getElementById("dynamic-experience-headline").innerHTML = `Design Intern <span class = "company">@ <a class = "underline" href = "https://jibo.com/">Jibo</a></span>`;
    document.getElementById("dynamic-experience-duration").innerHTML = `July 2016 - August 2016`;
    document.getElementById("dynamic-experience-line-1").innerHTML = `Designed and developed the interface for a new robotic "Skill" creation tool for internal testing use.`;
    document.getElementById("dynamic-experience-line-2").innerHTML = `Edited and produced a promotional video of Jibo's human interaction capabilites that was distributed for sponsorship opportunities.`;
    document.getElementById("dynamic-experience-line-3").innerHTML = ``;
    removeDisplay("role-jibo");
});

//
// Projects' button behavior.
//

document.getElementById("button-1").addEventListener("click", () => {
    location.href = "https://ccdc-main.web.app/";
});

document.getElementById("button-2").addEventListener("click", () => {
    location.href = "https://tracejs.co/";
});

document.getElementById("button-3").addEventListener("click", () => {
    location.href = "#";
});

//
// Ensuring accessibility through tabbable custom elements. 
//

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        switch(document.activeElement) {
            case document.getElementById("nav-link-about"):
                document.getElementById("nav-link-about").click();
                break;
            case document.getElementById("nav-link-experience"):
                document.getElementById("nav-link-experience").click();
                break;
            case document.getElementById("nav-link-projects"):
                document.getElementById("nav-link-projects").click();
                break;
            case document.getElementById("nav-link-contact"):
                document.getElementById("nav-link-contact").click();
                break;
            case document.getElementById("role-google"):
                document.getElementById("role-google").click();
                break;
            case document.getElementById("role-ccdc"):
                document.getElementById("role-ccdc").click();
                break;
            case document.getElementById("role-pqi"):
                document.getElementById("role-pqi").click();
                break;
            case document.getElementById("role-medumo"):
                document.getElementById("role-medumo").click();
                break;
            case document.getElementById("role-jibo"):
                document.getElementById("role-jibo").click();
                break;
            case document.getElementById("button-1"):
                document.getElementById("button-1").click();
                break;
            case document.getElementById("button-2"):
                document.getElementById("button-2").click();
                break;
            case document.getElementById("button-3"):
                document.getElementById("button-3").click();
                break;
        }
    }
});