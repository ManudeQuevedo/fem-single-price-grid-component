import React from 'react';

const Subscription = () => {
	return (
		<React.Fragment>
			<div className='subscription__container'>
				<h3 className='subscription__title'>Monthly Subscription</h3>
				<p className='subscription__big__text'>
					$29 <span className='subscription__span'>per month</span>
				</p>
				<p className='subscription__text'>
					Full access for less than $1 a day
				</p>
				<button className='subscription__btn'>Sign up</button>
			</div>
		</React.Fragment>
	);
};

export default Subscription;
