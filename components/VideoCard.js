import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const VideoCard = () => {
	return (
		<>
			<Card
				cover={
					<img
						alt="example"
						src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
					/>
				}
				actions={<EllipsisOutlined key="ellipsis" />}
			>
				<Card.Meta
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					title="Card title"
					description="This is the description"
					// actions={[<EllipsisOutlined key="ellipsis" />]}
				/>
			</Card>
		</>
	);
};

export default VideoCard;
