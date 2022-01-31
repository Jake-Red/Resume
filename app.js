let firstName = "Jacob"; //first name
let lastName = "Watters"; //Last name
let middleName = "Cameron"; //middle name
let fullName = firstName + " " + middleName + " " + lastName;
let nameCaps = fullName.toUpperCase();

displayDescription(nameCaps, "Zoom Expert", "I like sitting at my computer");
//Function to call my name, career, and self description
function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription);
}
//my interests
console.log("My Interests:")
displayInterests("I like Computers.");
displayInterests("I like Music but just listening to it.");
displayInterests("Knives are cool too.");
displayInterests("I like watches as well.");
displayInterests("I think I could get into watchmaking and repair if the tools weren't so expensive.");
//function to call My interests
function displayInterests(myInterests){
    console.log("* " + myInterests);
}
//My previous experiences
console.log("My Previous Experience:")
displayPosition("Pablo's Custom Powdercoating", "Shop Foreman", "Helped customers pick a color that matches their needs among hundreds of colors and implemented several cost-saving and money-making procedures.");
displayPosition("Crocker Moving Services", "Team Lead", "Led small teams of three to four men to accomplish moving customer's houses and coordinated with customer's schedules to accomplish their goals on time.");
displayPosition("Local 92 Union Iron Worker", "Apprentice Iron Worker", "Operated complicated machinery and fabricated several complex parts.");
//function to display Name of company, job title, and job description
function displayPosition(companyName, jobTitle, jobDesc){
    console.log("* " + companyName + ", " + jobTitle + " - " + jobDesc);
}
//My Skills:
console.log("My Skills: ");
//List of skills
displaySkill("Hard Work", true);
displaySkill("Lazy", false);
displaySkill("Likes Music", true);
displaySkill("Plays Music", false);
displaySkill("Welding", true);
displaySkill("HTML", true);
displaySkill("CSS",true);
displaySkill("Javascript",false);
displaySkill("Typing fast",true);
displaySkill("Typing Slow",false);
//Function to call skills
function displaySkill( mySkill, Bool){
    if(Bool == true){
        console.log("* BAM: " + mySkill)
    } else if(Bool == false)
    console.log("* " + mySkill);
}