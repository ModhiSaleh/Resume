/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //here bio object
 var bio = {
 	"name" : "Modhi Saleh",
    "role" : "front end Ninja",
    "contacts" : {
          "mobile": "0555555555",
          "email": "modhi_saleh_92@hotmail.com",
          "github": "ModhiSaleh",
          "location": "Saudi Arabia-Riyadh"
      }, 
    "bioPic": "images/modhi.jpg",
    "welcomeMessage": "Hello web developers lover!!", 
    "skills": ["Systems analysis and design" , "Front-end development" , "LeaderShip" , "Administration"]
    
};

    bio.display = function() { 
		var formattedName = HTMLheaderName.replace("%data%",bio.name); 
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role); 
		$("#header").prepend(formattedName + formattedRole);

		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email); 
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github); 
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		var formattedSkills = HTMLskills.replace("%data%",bio.skills);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic); 

		
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedBioPic);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		//var formattedSkills = HTMLskills.replace("%data%",bio.skills);

	formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkills);
   }
};
bio.display();

//here work object
var work = {
	"jobs": [{
         "employer": "ItCompany", 
         "title": "frontend dev",
         "location": "Riyadh", 
         "dates": "May2017",
         "description": "translation of the UI/UX design wireframes to actual code that will produce visual elements of the application"
     }, {
     	"employer": "Jazeel", 
         "title": "Administration",
         "location": "Riyadh", 
         "dates": "Augst2015 - now",
         "description": "responsible for supporting organisation in a variety of ways including bookkeeping, communications, scheduling, data entry, secretarial services and much more."
     }]
 };
    work.display = function() {
    	for (var jobCount = 0; jobCount < work.jobs.length; jobCount++) {
    		$("#workExperience").append(HTMLworkStart);

	    	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[jobCount].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[jobCount].title);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[jobCount].location);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[jobCount].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[jobCount].description);
		
			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);	
			$(".work-entry:last").append(formattedDescription);			
    	}
    }
};
work.display();

//here education object
var education = {
	"schools": [{
         "name": "Imam Mohammad Ibn said university",
         "location": "Saudi Arabia-Riyadh",
         "degree": "Bachelor's degrees",
         "majors": ["Computer science department: Information management"],
         "dates": "2011-2015",
         "url": "https://imamu.edu.sa/en/Pages/default.aspx"
     }, {
     	"name": "Al-ola secondry school",
         "location": "Saudi Arabia-Riyadh",
         "degree": "secondry",
         "majors": ["scientific"],
         "dates": "2009-2011",
         "url": "https://twitter.com/alola_alarabia?lang=ar"
     }],
    "onlineCourses": [{
         "title": "Front-End Web Developer Nanodegree",
         "school": "Udacity",
         "dates": "25-02-2017 Until 20-05-2017",
         "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
     }, {
     	"title": "o	Programming websites using html5 with CSS3 and JavaScript",
         "school": "rwaq.org",
         "dates": "2015",
         "url":
     }]
};
    education.display = function() {
    	for (var eduSchool = 0; eduSchool < education.schools.length; eduSchool++) {
    		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[eduSchool].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[eduSchool].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[eduSchool].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[eduSchool].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[eduSchool].majors);
		var formattedSchoolURL = HTMLschoolURL.replace("%data%",education.schools[eduSchool].url);

		$(".education-entry").prepend(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry").prepend(formattedSchoolDates);
		$(".education-entry").prepend(formattedSchoolLocation);
		$(".education-entry").prepend(formattedSchoolMajor);
		$(".education-entry").prepend(formattedSchoolURL);
   	}
        $("#education").append(HTMLonlineClasses);
        for (var eduCourses; eduCourses < education.onlineCourses.length; eduCourses++) {
        	$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[eduCourses].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[eduCourses].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[eduCourses].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[eduCourses].url);
		$("#education").prepend(formattedOnlineTitle + formattedOnlineSchool);
		$("#education").prepend(formattedOnlineDates);
		$("#education").prepend(formattedSchoolURL);
    }
};
education.display();


//here projects object
//I don't have images for my projects right now, will add it later
var projects = {
	"projects": [
	     {"title": "Online pharmacy", 
          "dates": "Augast2015",
          "description": "Convert pharmacy to online service as web site"},
          {"title": "Hotel database", 
          "dates": "May2014",
          "description": "create DB by sql to storge an information of hotels"},
          {"title": "Animal trading card", 
          "dates": "March2017",
          "description": "Convert the prototyp design to my trading card"
          }]
      };
          projects.display = function(){
          	for (var pro = 0; pro < projects.projects.length; pro++) {
          		$("#projects").append(HTMLprojectStart);

          		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[pro].title));
          		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[pro].dates));
          		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[pro].description));

          	}
    }
};
projects.display();

//Internationlize function
function interName(name) {
	name.name.trim().split("");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + "" + name[1];
}

$("#main").append(InternationlizeButton);

//map
$("#mapDiv").append(googleMap);