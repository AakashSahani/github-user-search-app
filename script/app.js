const userSearchForm = document.getElementById('username-search-form');
const userName = document.getElementById('username');
const githubMainContainer = document.getElementById('github-profile-container');
const themeInput = document.getElementById('theme');
const themeLabel = document.getElementById('theme-label');

userSearchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let userInfo = getUserInfo(userName.value);
	userInfo.then((gitUserData) => {
		let userProfileTemplate = `
			<div id="user-info">
				<!-- User profile -->
				<div id="user-profile"><img src="${
					gitUserData.avatar_url
				}" alt="User profile" /></div>
				<!-- User profile information, handle, date -->
				<div id="user-text">
					<div>
						<strong>${
							gitUserData.name == null ? 'Not available' : gitUserData.name
						}</strong>
						<span>${
							gitUserData.location == null
								? 'Not available'
								: gitUserData.location
						}</span>
					</div>
					<span>${
						gitUserData.created_at == null
							? 'Not available'
							: 'Joined ' + new Date(gitUserData.created_at).toDateString()
					}</span>
				</div>
			</div>
			<!-- User Bio -->
			<div>
				<p>
					${gitUserData.bio == null ? 'Not available' : gitUserData.bio}
				</p>
			</div>
			<!-- User Repos, Followers, Followings -->
			<div id="repo-info">
				<div>
					<span>Repos</span>
					<strong>${
						gitUserData.public_repos == null
							? 'Not available'
							: gitUserData.public_repos
					}</strong>
				</div>
				<div>
					<span>Followers</span>
					<strong>${
						gitUserData.followers == null
							? 'Not available'
							: gitUserData.followers
					}</strong>
				</div>
				<div>
					<span>Following</span>
					<strong>${
						gitUserData.following == null
							? 'Not available'
							: gitUserData.following
					}</strong>
				</div>
			</div>
			<!-- User Location, Twitter, Blog, Work -->
			<div id="location-info>
				<div>
					<img src="./assets/icon-location.svg" alt="Location" />
					<span>${
						gitUserData.location == null
							? 'Not available'
							: gitUserData.location
					}</span>
				</div>
				<div>
					<img src="./assets/icon-website.svg" alt="Website" />
					<a
						href="${gitUserData.blog == null ? '#' : gitUserData.blog}
					"
						>${gitUserData.blog == null ? 'Not available' : gitUserData.blog}</a
					>
				</div>
				<div>
					<img src="./assets/icon-twitter.svg" alt="Twitter" />
					<span>${
						gitUserData.twitter_username == null
							? 'Not available'
							: gitUserData.twitter_username
					}</span>
				</div>
				<div>
					<img src="./assets/icon-company.svg" alt="Company" />
					<span>${
						gitUserData.company == null ? 'Not available' : gitUserData.company
					}</span>
				</div>
			</div>`;
		console.log(gitUserData);
		githubMainContainer.innerHTML = userProfileTemplate;
	});
});

// getUserInfo function
// api endpoint
// https://api.github.com/users/{username}
// input - username - String
// output - gitUserData - a promise
const getUserInfo = async (username) => {
	const response = await fetch(`https://api.github.com/users/${username}`);
	gitUserData = await response.json();
	return gitUserData;
};

// Theme Change Implementation
const moonSVG = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="#697C9A" fill-rule="nonzero"/></svg>`;

const sunSVG = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></g></svg>`;

themeInput.addEventListener('click', () => toggleTheme());

// function to set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-light');
		themeLabel.innerHTML = `Dark ${moonSVG}`;
	} else {
		setTheme('theme-dark');
		themeLabel.innerHTML = `Light ${sunSVG}`;
	}
}

// Immediately invoked function to set the theme on initial load
(function () {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-dark');
	} else {
		setTheme('theme-light');
	}
})();
