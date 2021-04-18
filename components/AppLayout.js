import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
	vertical-align: middle;
`;

const AppLayout = ({ children }) => {
	return (
		<div style={{ margin: '0 auto' }}>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link href="/">
						<a>YouTube</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/">
						<a>프로필</a>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<SearchInput enterButton></SearchInput>
				</Menu.Item>
				<Menu.Item>
					<Link href="/">
						<a>회원가입</a>
					</Link>
				</Menu.Item>
			</Menu>
			<Row gutter={8}>
				<Col xs={24} md={4}>
					{/* {me ? <UserProfile /> : <LoginForm />} */}
				</Col>
				<Col xs={24} md={20}>
					{children}
				</Col>
			</Row>
		</div>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node.isRequired, //react의 node
};

export default AppLayout;
