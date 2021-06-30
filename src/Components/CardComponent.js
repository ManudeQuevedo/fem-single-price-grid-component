import React from 'react';
import Community from './Community';
import Subscription from './Subscription';

function CardComponent() {
	return (
		<React.Fragment>
			<div className='card__container'>
				<Community />
				<Subscription />
			</div>
		</React.Fragment>
	);
}

export default CardComponent;
