$(function() {
  renderParticles();
	renderContent();
  initScroll();
});

// Initialize the particles library
function renderParticles() {
  // TEMP FIX: Seems to be slow on mobile browsers
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#canvas").remove();  
  } else {
    particlesJS('canvas', particlesConfig);
  }
}

// Render each section of data individually
function renderContent() {
	// ABOUT ME description
  $("#about .description").html(data.about.description);

  // ABOUT ME images
  $.each(data.about.images, function(i, img) {
    var template = $("#imageTemplate").html();
    var compiled = Handlebars.compile(template);
    var rendered = compiled({
      "url": img.url,
      "className": img.className,
    });
    $("#about .images").append(rendered);
  });

  // RESUME education
  $.each(data.education, function(i, edu) {
    var template = $("#resumeBoxTemplate").html();
    var compiled = Handlebars.compile(template);
    var list = $.map(edu.tasks, function(task) {
      return createListItem(null, task);
    });
    var rendered = compiled({
      "id": edu.id,
      "year": edu.year,
      "logo": edu.logo,
      "role": edu.role,
      "employer": edu.employer,
      "location": edu.location,
      "date": edu.date,
      "tasks": list.join("")
    });

    $("#resume .education .timeline-content").append(rendered);
  });

  // RESUME work experience
  $.each(data.workExperience, function(i, work) {
    var template = $("#resumeBoxTemplate").html();
    var compiled = Handlebars.compile(template);
    var list = $.map(work.tasks, function(task) {
      return createListItem(null, task);
    });    
    var rendered = compiled({
      "id": work.id,
      "year": work.year,
      "logo": work.logo,
      "role": work.role,
      "employer": work.employer,
      "location": work.location,
      "date": work.date,
      "tasks": list.join("")
    });

    $("#resume .work-experience .timeline-content").append(rendered);
  });

  // RESUME tech skills
  $.each(data.skills, function(i, skill) {
    var template = $("#skillsTemplate").html();
    var compiled = Handlebars.compile(template);
    var rendered = compiled({
      "text": skill.text,
      "weight": skill.weight,
      "colour": skill.colour,
    });

    $("#resume .technical-skills .skills-progress").append(rendered);
  });

  var frameworkList = $.map(data.frameworks, function(framework, title) {
    return createListItem(title, framework.join(", "));
  });
  $("#resume .frameworks").append(frameworkList);

  var learningList = $.map(data.learning, function(skill) {
    return createListItem(null, skill);
  });
  $("#resume .learning").append(learningList);

  // PROJECTS
  $.each(data.projects, function(i, proj) {
    var template = $("#projectTemplate").html();
    var compiled = Handlebars.compile(template);
    var links = $.map(proj.links, function(link, title) {
      return createLink(title, link);
    });    
    var rendered = compiled({
      "projectName": proj.projectName,
      "date": proj.date,
      "previewImg": proj.previewImg,
      "id": proj.id,
      "description": proj.description,
      "skills": proj.skills.join(", "),
      "links": links.join(" | ")
    });

    $("#projects .content").append(rendered);
    
    if (Object.keys(proj.links).length === 0) {
      $("#projects .project").last().find(".links").remove();
    }
  });

  // CONTACT
  $.each(data.contact, function(i, contact) {
    var template = $("#buttonTemplate").html();
    var compiled = Handlebars.compile(template);
    var links = $.map(contact.text, function(url, title) {
      return createLink(title, url);
    })
    var rendered = compiled({
      "icon": contact.icon,
      "url": contact.url,
      "text": links.join("")
    });

    $("#contact .content").append(rendered);    
  });

  // RESUME download
  $.each(data.downloadResume, function(i, contact) {
    var template = $("#buttonTemplate").html();
    var compiled = Handlebars.compile(template);
    var rendered = compiled({
      "icon": contact.icon,
      "url": contact.url,
      "text": "Resume"
    });

    $("#resume .download").append(rendered);    
  });
}

// Returns a stringified <a> element
function createLink(text, url) {
  return "<a target='_blank' href='" + url + "' class='link'>" + text + "</a>";
}

// Returns a strinified <li> element
function createListItem(title, item) {
  if (title === null) {
    return "<li>" + item + "</li>";
  }
  return "<li><span class='bolder'>" + title + ": </span>" + item + "</li>";
}

// Returns true if part of the element is visible on the screen
function isInViewport(elem) {
  var top = elem.getBoundingClientRect().top;
  var bottom = elem.getBoundingClientRect().bottom;

  return top < window.innerHeight && bottom >= 0;
}

// Initialize the scroll reveal plugin
function initScroll() {
  window.sr = ScrollReveal();
  sr.reveal(".canvas-text .subtext", {
    origin: "left",
    distance: "50%",
    delay: "200"
  });  
  sr.reveal(".canvas-text .name", {
    origin: "right",
    distance: "50%",
    delay: "200"
  });  
  sr.reveal(".canvas-text .arrow", {
    origin: "bottom",
    delay: "200"
  });  
  sr.reveal(".box, .images, .button", {
    viewFactor: 0.15
  });  
}

// Smoothly scroll to a section when a navigation link is clicked
$(document).on("click", ".anchors a, .arrow", function(evt) {
  evt.preventDefault();

  var canvas = $("#canvas").get(0);
  var parent = $(this).attr("href");
  var padding = isInViewport(canvas) ? 110 : 60;

  $("html, body").animate({
    scrollTop: $(parent).offset().top - padding
  }, 500);
});

// Make the navigation bar sticky after scrolling down past the canvas
$(window).bind("scroll", function() {
  var navHeight = $( window ).height() - 60;
  if ($(window).scrollTop() > navHeight) {
   	$("header").addClass("fixed");
 	}
 	else {
   	$("header").removeClass("fixed");
 	}
});






