// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Portfolio {

    
    Skill[] public skillsList;

    constructor() {
        manager = msg.sender;
    }
    modifier onlyManager() {
        require(msg.sender == manager, "You are not the manager");
        _;
    }
    

    struct Project {
        string title;
        string project_desc;
        string lang;
        string contrib;
        string source;
        string demo;
    
    }

    struct Education{
        string title;
        string date;
        string faculty;
    }

    struct Skill{
        string title;
        string level;
        string qual;
    }
    struct Experience{
        string title;
        string company;
        string date;
        string desc;
    }

    uint projectCount;
    uint educationCount;
    uint experienceCount;
    uint skillsCount;
    address public manager;
    string public imageLink = "QmXHsUT8b7zhJghHfWrt458JrUfqhLqwvcEVWWZqUYw7RH";;


    Project[] public projectsList;
    Education[] public educationsList;
    Experience[] public experiencesList;



    function addProject(string memory title, string memory project_desc, string memory lang, string memory contrib, string memory source, string memory demo) external   {
        projectsList.push(Project(title,project_desc, lang, contrib, source, demo));
        projectCount++;

    }
    function editProject(string memory title, string memory project_desc, string memory lang, string memory contrib, string memory source, string memory demo, uint _projectCount) private  {
        projectsList[_projectCount] = Project(title,project_desc, lang, contrib, source, demo);

    }
    
    function getProjects() public view returns(Project[] memory) {
        return projectsList;
    } 
    function addEducation(string memory title, string memory date, string memory faculty) private  {
        educationsList.push(Education(title,date, faculty));
        educationCount++;

    }
    function editEducation(string memory title, string memory date, string memory faculty, uint _educationCount) private  {
        educationsList[_educationCount] = Education(title,date, faculty);

    }
    
    function getEducation() public view returns(Project[] memory) {
        return projectsList;
    } 
    function addSkill(string memory title, string memory level, string memory qual) private  {
        skillsList.push(Skill(title,level, qual));
        skillsCount++;

    }
    function editSkill(string memory title, string memory date, string memory qual, uint _skillsCount) private  {
        skillsList[_skillsCount] = Skill(title,date, qual);

    }
    
    function getSkill() public view returns(Skill[] memory) {
        return skillsList;
    } 
    
    function addExperience(string memory title, string memory company, string memory date, string memory desc) private  {
        experiencesList.push(Experience(title,company, date, desc));
        experienceCount++;

    }
    function editExperience(string memory title, string memory company, string memory date, string memory desc, uint _experiencesCount) private  {
        experiencesList[_experiencesCount] = Experience(title,company, date, desc);

    }
    
    function getExperience() public view returns(Experience[] memory) {
        return experiencesList;
    } 
    
}