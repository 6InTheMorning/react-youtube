import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const YouTube = ({ Component }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>YouTube</title>
			</Head>
			<Component />
		</>
	);
};

YouTube.propTypes = {
	Component: PropTypes.elementType.isRequired,
};

export default YouTube;
