import React from 'react';
import { Col, Row } from 'antd';
import AppLayout from '../components/AppLayout';
import VideoCard from '../components/VideoCard';

const Home = () => {
	return (
		<AppLayout>
			<Row gutter={16}>
				{[1, 2, 3, 4, 5, 6].map(i => (
					<Col key={`video${i}`} span={8} style={{ marginBottom: 20 }}>
						<VideoCard />
					</Col>
				))}
			</Row>
		</AppLayout>
	);
};

export default Home;
