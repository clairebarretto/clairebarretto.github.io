// Resume data and configuration object
var data = {
  // About
  "about": {
    "description": "Hey! I'm Claire. I'm a recent graduate of the Computer Science program at the <a target='_blank' class='link' href='https://www.cs.ubc.ca/'>University of British Columbia</a>. I'm primarily a front-end web developer with two co-op positions working client-side under my belt. I am eager to continue expanding my front-end skill set, while also gaining more practical experience in back-end and mobile app development as well. I am passionate about design and technology, and am excited to keep pace with the rapidly evolving tech world we live in today. In my spare time, you can find me keeping up with the <a target='_blank' class='link' href='http://www.seahawks.com/'>Seahawks</a> and especially the <a target='_blank' class='link' href='http://www.mariners.com/'>Mariners</a>. Go M's!",
    "images": [
      { "url": "img/logos/mariners-logo.gif", "className": "mariners" }, 
      { "url": "img/logos/mac.png", "className": "mac" }, 
      { "url": "img/logos/seahawks-logo.jpg", "className": "seahawks"}
    ]
  },

  // Education
  "education": [{
    "id": "ubc",
    "year": "2015",
    "logo": "img/logos/ubc-logo.png",
    "role": "Bachelor of Arts, Computer Science",
    "employer": "University of British Columbia",
    "location": "Vancouver, BC",
    "date": "September 2010 - December 2015",
    "tasks": ["Notable Courses: Advanced Software Engineering, Relational Databases, Algorithm Design & Analysis, Computer Hardware and Operating Systems, Internet Computing, Functional Programming",
              "Notable Electives: Financial Accounting, Money & Banking, International Trade, Microeconomics, Macroeconomics"]
  }],

  // Work experience
  "workExperience": [{
    "id": "bc-cancer",
    "year": "2015",
    "logo": "img/logos/bc-cancer-logo.png",
    "role": "Front End Developer, Co-op",
    "employer": "BC Cancer Agency",
    "location": "Vancouver, BC",
    "date": "May 2015 - August 2015",
    "tasks": ["Implemented components in JavaScript for a web-based visualization tool that allows users to interactively analyze large cancer genomic datasets",
              "Built scalable data visualizations that aggregates millions of data points using d3.js",
              "Created and optimized JSON-based queries using Elasticsearch"]
  }, {
    "id": "galdos",
    "year": "2014",
    "logo": "img/logos/galdos-logo.gif",
    "role": "Junior Front End Developer, Co-op",
    "employer": "Galdos Systems Inc",
    "location": "Vancouver, BC",
    "date": "January 2014 - December 2014",
    "tasks": ["Developed a web application for a registry platform using modern web technologies such as HTML5, CSS3, JavaScript (jQuery, Backbone.js) with extensive AJAX (XML/JSON) usage",
              "Developed reusable JavaScript widgets to be used in future web clients",
              "Integrated Google Maps to view and modify spatial data (GM Drawing Library)",
              "Created an interactive query builder that allows users to build custom complex queries by using logical combinations of free text or spatial filters, with support for nested queries",
              "Built dashboard visualization tools using d3.js, vis.js and Google Charts"]
  }],

  // Tech Skills
  "skills": [
    { "text": "HTML", "weight": "90", "colour": "teal" }, 
    { "text": "CSS3", "weight": "80", "colour": "green" },
    { "text": "JavaScript", "weight": "90", "colour": "blue" }, 
    { "text": "SQL", "weight": "50", "colour": "orange" }, 
    { "text": "Java", "weight": "50", "colour": "red" }, 
    { "text": "PHP", "weight": "40", "colour": "dark-blue" }
  ],

  // Frameworks
  "frameworks": {
    "CSS": ["Bootstrap", "SASS"],
    "JavaScript": ["jQuery", "Backbone.js", "Handlebars.js", "Underscore.js", "AJAX", "XML", "JSON"],
    "Data Visualization (JavaScript)": ["d3.js", "vis.js", "Google Charts"],
    "Tools": ["Grunt", "Git", "SVN", "Stash", "JIRA"],
    "Operating Systems": ["Mac OS X", "Windows"]
  },

  // Currently learning
  "learning": ["Python", "AngularJS", "ECMAScript 2015 / ES6", "Node.js"],

  // Projects
  "projects": [{
    "id": "spotify",
    "projectName": "Spotify Search",
    "date": "February 2016",
    "previewImg": "img/projects/spotify.png",
    "description": "Developed a simple AngularJS application to search for tracks on Spotify using <a target='_blank' class='link' href='https://developer.spotify.com/web-api/'>Spotify's Web API</a>. Has the ability to preview songs for up to 30 seconds. First Angular project!",
    "skills": ["HTML5", "CSS3", "JavaScript", "AngularJS"],
    "links": {
      "Demo": "http://clairebarretto.github.io/angular-spotify-search",
      "GitHub": "https://github.com/clairebarretto/angular-spotify-search"
    }
  }, {
    "id": "bccancer",
    "projectName": "Cancer Genomic Visualization Tool",
    "date": "May 2015 - August 2015",
    "previewImg": "img/projects/bccancer.png",
    "description": "During my co-op term at the <a target='_blank' class='link' href='http://www.bccrc.ca/'>BC Cancer Agency</a>, I worked on developing a web-based visualization tool that allows users to interactively analyze large cancer genomic datasets. The tool is highly flexible and allows users to analyze datasets in many ways, such as analyzing multiple data types in a single view or using multiple views to analyze a single dataset.",
    "skills": ["HTML5", "CSS3", "JavaScript", "d3.js", "Elasticsearch"],
    "links": {
      "Presentation Slides": "http://clairebarretto.github.io/files/bc_cancer_coop_presentation.pdf"
    }
  }, {
    "id": "gobind",
    "projectName": "School Management System",
    "date": "Jan 2015 - April 2015",
    "previewImg": "img/projects/gobind.png",
    "description": "Developed a web application for a local non-profit organization (<a target='_blank' class='link' href='http://www.gobindsarvar.com/'>Gobind Sarvar</a>) which allows administrators, teachers and students to manage all aspects of a school. In addition to typical school management system features, the system also includes an automated student registration process, a mass emailing system, and importing/exporting tools.",
    "skills": ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "Backbone.js", "PHP", "MySQL"],
    "links": {
      "GitHub": "https://github.com/clairebarretto/gsims"
    }
  }, {
    "id": "galdos",
    "projectName": "INdicio Web Application",
    "date": "January 2014 - December 2014",
    "previewImg": "img/projects/galdos.png",
    "description": "During my co-op term at <a target='_blank' class='link' href='http://www.galdosinc.com/'>Galdos Systems</a>, I worked to develop an internal web application that was used to showcase the capabilities of the company's flagship product, INdicio. INdicio is a registry platform that is part database, part geographic information system, and part document management system which allows users to efficiently organize and manage data.",
    "skills": ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "Backbone.js", "d3.js", "vis.js", "JavaScript Google Maps API", "XML"],
    "links": {}
  }, {
    "id": "minecraft",
    "projectName": "Sourcecraft Visualization",
    "date": "September 2013 - December 2013",
    "previewImg": "img/projects/minecraft.png",
    "description": "Used Minecraft to visualize the physical structure of a Java code base. Each building represents a class, and the width and height of each building is determined by the number of methods and attributes within a class. Using static code analysis tools, we also visualize the methods with bugs within a class with coloured bands around the building.",
    "skills": ["Java", "XML"],
    "links": {
      "Quick Demo (1 min)": "https://www.youtube.com/watch?feature=player_embedded&v=bi8AiFnx9pU",
      "Comprehensive Demo": "https://www.youtube.com/watch?feature=player_embedded&v=ZLHB7dXbOGA",
      "GitHub": "https://github.com/clairebarretto/sourcecraft-gen"
    }
  }],

  "contact": [{
    "icon": "envelope",
    "url": "mailto:claireabarretto@gmail.com",
    "text": {
      "Email": "mailto:claireabarretto@gmail.com"
    }
  }, {
    "icon": "linkedin-square",
    "url": "https://www.linkedin.com/in/cbarretto",
    "text": {
      "LinkedIn": "https://www.linkedin.com/in/cbarretto"
    }
  }, {
    "icon": "github",
    "url": "https://github.com/clairebarretto",
    "text": {
      "GitHub": "https://github.com/clairebarretto"
    }
  }],

  "downloadResume": [{
    "icon": "download",
    "url": "http://clairebarretto.github.io/files/resume_no_phone_address.pdf",
  }]
};

var particlesConfig = {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "random" //00ffd1
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 14.617389821424212,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.49705773886831206,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};