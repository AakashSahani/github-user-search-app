const userSearchForm = document.getElementById('username-search-form');

userSearchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('Form was submitted.');
	getUserInfo('aakash');
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

// <!-- User Layout -->
// 			<div>
// 				<div>
// 					<!-- User profile -->
// 					<div><img src="./assets/icon-search.svg" alt="User profile" /></div>
// 					<!-- User profile information, handle, date -->
// 					<div>
// 						<div>
// 							<p>The Octocat</p>
// 							<p>@octocat</p>
// 						</div>
// 						<div>Joined 25 Jan 2011</div>
// 					</div>
// 				</div>
// 				<!-- User Bio -->
// 				<div>
// 					<p>
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
// 						odio. Quisque volutpat mattis eros.
// 					</p>
// 				</div>
// 				<!-- User Repos, Followers, Followings -->
// 				<div>
// 					<div>
// 						<div>Repos</div>
// 						<div>8</div>
// 					</div>
// 					<div>
// 						<div>Followers</div>
// 						<div>3938</div>
// 					</div>
// 					<div>
// 						<div>Following</div>
// 						<div>9</div>
// 					</div>
// 				</div>
// 				<!-- User Location, Twitter, Blog, Work -->
// 				<div>
// 					<div>
// 						<img src="./assets/icon-location.svg" alt="Location" />
// 						<span>San Francisco</span>
// 					</div>
// 					<div>
// 						<img src="./assets/icon-website.svg" alt="Website" />
// 						<a
// 							href="https://github.blog
//             "
// 							>http://github.blog</a
// 						>
// 					</div>
// 					<div>
// 						<img src="./assets/icon-twitter.svg" alt="Twitter" />
// 						<span>Not Available</span>
// 					</div>
// 					<div>
// 						<img src="./assets/icon-company.svg" alt="Company" />
// 						<span>@github</span>
// 					</div>
// 				</div>
// 			</div>
