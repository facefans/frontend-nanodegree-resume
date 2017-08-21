/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name" : "Scarlett",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "18610600000",
		"email" : "xuyan.7311@163.com",
		"github" : "facefans",
		"location" : "Beijing"
	},
	"welcomeMessage" : "Thanks for my friends who helped me!",
	"skills" : ["HTML","CSS","JS","jQuery"],
	"biopic" : "images/fry.jpg",
	"display": function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for(var i = 0; i < bio.skills.length; i++) {
				$("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
			}
		}	
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	}
};

bio.display();

var work = {
	"jobs": [
	    {
	      "employer": "CNKI",
	      "title": "collection",
	      "location": "Beijing",
	      "dates": "2015.06 - Current",
	      "description": "Mainly responsible for yearbooks of the manuscript and related work"
	    }
	],
	"display": function() {
		if(work.jobs.length > 0) {
			$("#workExperience").append(HTMLworkStart);
			
			for(var i = 0; i < work.jobs.length; i++) {
				$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
				$("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
				$("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[i].location));
				$("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[i].dates));
				$("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));

			}

			var workCss = $(".work-entry");
			workCss.siblings().toggleClass("work-entry");
		}
	}
};

work.display();

var projects = {
  	"projects": [
	    {
	      "title": "Network Yearbook related products",
	      "dates": "2016.01 - 2017.04",
	      "description": "Yearbooks collaborative editing, communication influence analysis",
	      "images": ["images/forestry.png"]
	    },
	    {
	      "title": "collection",
	      "dates": "2015.11 - Current",
	      "description": "responsible for yearbooks of the manuscript and related work",
	      "images": ["images/guo.png"]
	    },
	    {
	      "title": "cooperation",
	      "dates": "2015.06 - 2015.10",
	      "description": "responsible for yearbooks of cooperation and related work",
	      "images": ["images/sewing.png"]
	    }
	],
	"display": function() {
		if(projects.projects.length > 0) {
			$("#projects").append(HTMLprojectStart);
			
			for(var i = 0; i < projects.projects.length; i++) {
				$("#projects").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
				$("#projects").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
				$("#projects").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
				for(var j = 0; j < projects.projects[i].images.length; j++) {
					$("#projects").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
				}
			}

			var projectsCss = $(".project-entry");
			projectsCss.siblings().toggleClass("project-entry");
		}
	}
};

projects.display();

var education = {
	"schools": [
		{
			"name": "University of Chinese Academy of Sciences",
			"location": "Beijing",
			"degree": "master",
			"majors": ["genetics"],
			"dates": "2012 - 2015",
			"url": "http://www.gucas.ac.cn"
		},
		{
			"name": "Sichuan Agricultural Uniersity",
			"location": "Sichuan Ya'an",
			"degree": "bachelor",
			"majors": ["Forestry"],
			"dates": "2007 - 2011",
			"url": "http://www.sicau.edu.cn"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end development",
			"school": "Udacity",
			"dates": "2017",
			"url": "http://www.udacity.com"
		}
	],
	"display": function() {
		if(education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);
			
			for(var i = 0; i < education.schools.length; i++) {
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
				var formattedSchoolNameUrl = formattedSchoolName.replace("#", education.schools[i].url); 
				$(".education-entry:last").append(formattedSchoolNameUrl);
				$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
				for(var j = 0; j < education.schools[i].majors.length; j++) {
					$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
				}
			}
		}

		if(education.onlineCourses.length > 0) {
			$(".education-entry:last").append(HTMLonlineClasses);

			for(var i = 0; i < education.onlineCourses.length; i++) {
				$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
				$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
			}
		}
	}
};

education.display();

$("#mapDiv").append(googleMap);
