import React from 'react';
import Community from './Community';
import Subscription from './Subscription';
import WhyUs from './WhyUs';

function CardComponent() {
	return (
		<React.Fragment>
			<div className='card__container'>
				<Community />
				<div className='card__group'>
					<Subscription />
					<WhyUs />
				</div>
			</div>
		</React.Fragment>
	);
}

export default CardComponent;
