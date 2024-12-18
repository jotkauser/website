window.onload = () => {
	const aboutmeButton = document.getElementById("aboutme-button");
	const projectsButton = document.getElementById("projects-button");
	const gitButton = document.getElementById("git-button");
	const socialsGithub = document.getElementById("socials-github");
	const socialsTelegram = document.getElementById("socials-telegram");
	const socialsDiscord = document.getElementById("socials-discord");
	const socialsEmail = document.getElementById("socials-email");
	const startpageButtons = document.getElementsByClassName("startpage-button");
	const aboutme = document.getElementsByClassName("aboutme")[0];
	const startpage = document.getElementsByClassName("startpage")[0];
	const projects = document.getElementsByClassName("projects")[0];
	const projectsElements = document.querySelectorAll(".project")

	// about me
	aboutmeButton.addEventListener("click", () => {
		startpage.style.display = "none";
		aboutme.style.display = "block";
	});

	// projects
	projectsButton.addEventListener("click", () => {
		startpage.style.display = "none";
		projects.style.display = "block";
	});

	// go back
	for (let i = 0; i < startpageButtons.length; i++) {
		startpageButtons[i].addEventListener("click", () => {
			startpage.style.display = "block";
			aboutme.style.display = "none";
			projects.style.display = "none";
		});
	}
	// projects handler
	for (let i = 0; i < projectsElements.length; i++) {
		const project = projectsElements[i];
		const projectUrl = document.getElementsByClassName("project-url")[i].value;

		project.addEventListener("click", () => {
			redirect(projectUrl)
		})
	}
	// gitea button
	gitButton.addEventListener("click", () => {
		redirect("https://git.motylek.ovh")
	})

	// socials
	socialsGithub.addEventListener("click", () => {
		redirect("https://github.com/jotkauser")
	})
	socialsTelegram.addEventListener("click", () => {
		redirect("https://t.me/realmotylek")
	})
	socialsDiscord.addEventListener("click", () => {
		redirect("https://discord.com/users/1084489833117917254")
	})
	socialsEmail.addEventListener("click", () => {
		redirect("mailto:me@motylek.ovh")
	})
}

function redirect(url) {
	if (typeof url === "string") {
		window.location = url
	}
}