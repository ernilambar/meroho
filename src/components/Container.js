const Container = (props) => {
	return (
		<div style={{ maxWidth: '1040px', width: '100%', margin: '0 auto' }}>
			{props.children}
		</div>
	);
};

export default Container;
