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
	"bioPic" : "images/fry.jpg",
	"display": function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for(var i = 0; i < bio.skills.length; i++) {
				$("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
			}
		}
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
	      "description": "Yearbooks collaborative editing, communication influence analysis"

	    },
	    {
	      "title": "collection",
	      "dates": "2015.11 - Current",
	      "description": "responsible for yearbooks of the manuscript and related work"

	    },
	    {
	      "title": "cooperation",
	      "dates": "2015.06 - 2015.10",
	      "description": "responsible for yearbooks of cooperation and related work"

	    }
	],
	"display": function() {
		if(projects.projects.length > 0) {
			$("#projects").append(HTMLprojectStart);
			
			for(var i = 0; i < projects.projects.length; i++) {
				$("#projects").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
				$("#projects").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
				$("#projects").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
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
			"majors": "genetics",
			"dates": "2012 - 2015"
		},
		{
			"name": "Sichuan Agricultural Uniersity",
			"location": "Sichuan Ya'an",
			"degree": "bachelor",
			"majors": "Forestry",
			"dates": "2007 - 2011"
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
				$("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
				$("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
				$("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
				$("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
				$("#education").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
			}

			var educationCss = $(".education-entry");
			educationCss.siblings().toggleClass("education-entry");
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			
			for(var i = 0; i < education.schools.length; i++) {
				$("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
				$("#education").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
				$("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
				$("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
			}
		}
	}
};

education.display();

$("#mapDiv").append(googleMap);