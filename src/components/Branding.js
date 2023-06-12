import avatar from './../images/avatar.png';

const Branding = () => {
	return (
		<div className="branding">
			<img src={avatar} className="App-avatar" alt="avatar" />
			<h1>Nilambar Sharma</h1>
			<p>Since 1985</p>
		</div>
	);
};

export default Branding;
