$(function() {
	// Fetch wordcloud file and initialize cloud plugin
	$.get("files/wordcloud.txt").then(function(data) {
		var skills = data.split("\n");
		var words = skills.map(function(skill, i) {
			var word = skill.split(",");
			return {
				text: word[0], 
				weight: parseInt(word[1])
			}
		});
		// Wordcloud initialization
		$("#wordcloud").jQCloud(words, {	
			autoResize: true
		});
	});
});

// Smooth scroll to div
$(document).on("click", ".anchors a", function(evt) {
	evt.preventDefault();

	var parent = $(this).attr("href");
	$("html, body").animate({
		scrollTop: $(parent).offset().top - 60
	}, 500);
});

// Toggle between list/wordcloud for technical skills
$(document).on("click", "#toggle-skills", function() {
	var show = $(this).data("show");
	if (show === "list") {
		$("#wordcloud").fadeOut("slow", function() {
			$("#skills-list").removeClass("hide").fadeIn("slow");
		});
		$(this).data("show", "cloud");
		$(this).text("View as Cloud");
	} 
	else {
		$("#skills-list").fadeOut("slow", function() {			
			$("#wordcloud").removeClass("hide").fadeIn("slow");
		});
		$(this).data("show", "list");
		$(this).text("View as List");
	}
});