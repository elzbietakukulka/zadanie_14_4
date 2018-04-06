
var movies = [
	{
		id: 1,
		title: 'Żona na niby',
		desc: 'Film o zmyślonej rodzince',
		picture: 'images/zonaNaNiby.jpg'
	},
	{
		id: 2,
		title: 'Do utraty sił',
		desc: 'Film o bokserze, który stracił wszystko',
		picture: 'images/doUtratySil.jpg'
	},
	{
		id: 3,
		title: 'Pamiętnik',
		desc: 'Film o wielkiej miłości',
		picture: 'images/pamietnik.jpg'
	}
];


var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (React.createElement('h2', {}, this.props.title)
			);
	}
});


var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (React.createElement('p', {}, this.props.desc)
			);
	}
});

var MoviePicture = React.createClass({
	propTypes: {
		picture: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('div', {}, 
			React.createElement('img', {src: this.props.picture})
			)
		);
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	
	render: function() {
		return (
			React.createElement('div', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement(MoviePicture, {picture: this.props.movie.picture})
			)
		)
	},
});

var moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key: movie.id, movie: movie});
		
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));