const userSearchForm = document.getElementById('username-search-form');
const githubMainContainer = document.getElementById('github-main');
const themeInput = document.getElementById('theme');
const themeLabel = document.getElementById('theme-label');

const gitUserData = {
	login: 'manish',
	id: 16161,
	node_id: 'MDQ6VXNlcjE2MTYx',
	avatar_url: 'https://avatars.githubusercontent.com/u/16161?v=4',
	gravatar_id: '',
	url: 'https://api.github.com/users/manish',
	html_url: 'https://github.com/manish',
	followers_url: 'https://api.github.com/users/manish/followers',
	following_url: 'https://api.github.com/users/manish/following{/other_user}',
	gists_url: 'https://api.github.com/users/manish/gists{/gist_id}',
	starred_url: 'https://api.github.com/users/manish/starred{/owner}{/repo}',
	subscriptions_url: 'https://api.github.com/users/manish/subscriptions',
	organizations_url: 'https://api.github.com/users/manish/orgs',
	repos_url: 'https://api.github.com/users/manish/repos',
	events_url: 'https://api.github.com/users/manish/events{/privacy}',
	received_events_url: 'https://api.github.com/users/manish/received_events',
	type: 'User',
	site_admin: false,
	name: 'Manish Sinha',
	company: 'Amazon',
	blog: 'https://manishsinhav.com/',
	location: 'San Franciso Bay Area, CA',
	email: null,
	hireable: null,
	bio: 'Software Engineer @amzn ',
	twitter_username: null,
	public_repos: 14,
	public_gists: 4,
	followers: 38,
	following: 14,
	created_at: '2008-07-06T08:14:46Z',
	updated_at: '2023-10-25T16:55:22Z',
};

userSearchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('Form was submitted.');
	getUserInfo('aakash');
	// githubMainContainer.insertAdjacentElement('beforeend', userProfileTemplate);
	const userinfo = document.createElement('div');
	userinfo.innerHTML = userProfileTemplate;
	githubMainContainer.appendChild(userinfo);
});

// getUserInfo function
// api endpoint
// https://api.github.com/users/{username}
// input - username - String
// output - result - json data
const getUserInfo = async (username) => {
	const response = await fetch(`https://api.github.com/users/john`)
		.then((res) => res.json())
		.then((data) => console.log(data));
};

const userProfileTemplate = `
			<div>
				<div>
					<!-- User profile -->
					<div><img src="./assets/icon-search.svg" alt="User profile" /></div>
					<!-- User profile information, handle, date -->
					<div>
						<div>
							<p>${gitUserData.name}</p>
							<p${gitUserData.location}</p>
						</div>
						<div>Joined ${gitUserData.created_at}</div>
					</div>
				</div>
				<!-- User Bio -->
				<div>
					<p>
						${gitUserData.bio}
					</p>
				</div>
				<!-- User Repos, Followers, Followings -->
				<div>
					<div>
						<div>Repos</div>
						<div>${gitUserData.public_repos}</div>
					</div>
					<div>
						<div>Followers</div>
						<div>${gitUserData.followers}</div>
					</div>
					<div>
						<div>Following</div>
						<div>${gitUserData.following}</div>
					</div>
				</div>
				<!-- User Location, Twitter, Blog, Work -->
				<div>
					<div>
						<img src="./assets/icon-location.svg" alt="Location" />
						<span>${gitUserData.location}</span>
					</div>
					<div>
						<img src="./assets/icon-website.svg" alt="Website" />
						<a
							href="https://github.blog
            "
							>${gitUserData.blog}</a
						>
					</div>
					<div>
						<img src="./assets/icon-twitter.svg" alt="Twitter" />
						<span>Not Available</span>
					</div>
					<div>
						<img src="./assets/icon-company.svg" alt="Company" />
						<span>@github</span>
					</div>
				</div>
			</div>
`;

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
