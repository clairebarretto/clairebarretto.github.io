module.exports = function(grunt) {
	grunt.initConfig({
		buildDir: "build",

		pkg: grunt.file.readJSON('package.json'),

		concat: {
			js: {
				src: ['js/libs/jquery-2.2.0.min.js', 'js/libs/*.js', 'js/main.js'],
				dest: '<%= buildDir %>/js/scripts.js'
			},
			css: {
				src: ['css/libs/*.css', 'css/main.css'],
				dest: '<%= buildDir %>/css/styles.css'
			}
		},

		uglify: {
			js: {
				files: {
					'<%= buildDir %>/js/scripts.min.js': ['js/scripts.js']
				}
			}
		},

		cssmin: {
			target: {
				files: {
					'<%= buildDir %>/css/styles.min.css': ['css/styles.css']
				}
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'css/sass',
					cssDir: 'css'
				}
			}
		},

		watch: {
			css: {
				files: 'css/sass/*.scss',
				tasks: ['compass']
			}
		},

		copy: {
			build: {
				files: [
					{src: ["index.html", "img/**", "fonts/**", "files/**"], dest: "<%= buildDir %>/"}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

};