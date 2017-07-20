/*
The code to build the resume will go here.
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
    "biopic": "images/devPic.png",
    "welcomeMessage": "Hello web developers lover!!", 
    "skills": ["Systems analysis and design" , "Front-end development" , "LeaderShip" , "Administration" ,"Teamwork" , "English language -Good-"]
    
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
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic); 
	
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedBioPic);
		$("#topContacts, #footerContacts").append(formattedMobile);
		$("#topContacts, #footerContacts").append(formattedEmail);
		$("#topContacts, #footerContacts").append(formattedGithub);
		$("#topContacts, #footerContacts").append(formattedLocation);

    $("#header").append(HTMLskillsStart);
      for (var skillsCount = 0; skillsCount < bio.skills.length; skillsCount++) {
      var formattedSkills = HTMLskills.replace("%data%",bio.skills[skillsCount]);
      $("#skills").append(formattedSkills);
   }
   };

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
		
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);	
			$(".work-entry:last").append(formattedDescription);			
    	}    
};

//here education object
var education = {
	"schools": [{
         "name": "Imam Muhammad Ibn Saud Islamic University",
         "location": "Riyadh, Imam Muhammad Ibn Saud Islamic University",
         "degree": "Bachelor's degrees",
         "majors": ["Computer science department: Information management"],
         "dates": "2011-2015",
         "url": "https://imamu.edu.sa/en/Pages/default.aspx"
     }, {
     	"name": "Al-ola secondry school",
         "location": "Riyadh, Hamzah Ibn Abdul Mutalib, Al Hazm",
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
     	"title": "Programming websites using html5 with CSS3 and JavaScript",
         "school": "rwaq.org",
         "dates": "2015",
         "url":"https://www.rwaq.org/"
     },]
};
    education.schools.display = function() {
      $("#education").append(HTMLschoolStart);
      $("#education").append(HTMLonlineClasses);
    	for (var eduSchool = 0; eduSchool < education.schools.length; eduSchool++) {
    	
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[eduSchool].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[eduSchool].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[eduSchool].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[eduSchool].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[eduSchool].majors);
		var formattedSchoolURL = HTMLschoolURL.replace("%data%",education.schools[eduSchool].url);

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
		$(".education-entry:last").append(formattedSchoolURL);
   	}
   };
   education.onlineCourses.display = function() {
        //$("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        for (var eduCourses = 0; eduCourses < education.onlineCourses.length; eduCourses++) {

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[eduCourses].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[eduCourses].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[eduCourses].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[eduCourses].url);
		$(".education-entry:last").append(formattedOnlineTitle);
    $(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display = function(){
    education.schools.display();
    education.onlineCourses.display();
};

//here projects object
var projects = {
	"projects": [
	     {"title": "Online pharmacy", 
          "dates": "Augast2015",
          "description": "Convert pharmacy to online service as web site",
          "images": ["images/onlinepharmacy.png"]
        },
          {"title": "Hotel database", 
          "dates": "May2014",
          "description": "create DB by sql to storge an information of hotels",
          "images": ["images/db.png"]
        },
          {"title": "Animal trading card", 
          "dates": "March2017",
          "description": "Convert the prototyp design to my trading card",
          "images": ["images/animalcard.png"]
          }]
 };
  projects.display = function(){
          	for (var pro = 0; pro < projects.projects.length; pro++) {
          		$("#projects").append(HTMLprojectStart);

          		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[pro].title));
          		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[pro].dates));
              $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[pro].description));

            for (var image = 0; image < projects.projects[pro].images.length; image++){
              // format projects.projects[pro].images[image]
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[pro].images[image]);
              // display formatted image
              $(".project-entry:last").append(formattedImage);
          	}
          }
    };
education.display();
work.display();
bio.display();
projects.display();

//$("#main").append(internationalizeButton);

//map
$("#mapDiv").append(googleMap);