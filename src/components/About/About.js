import React from 'react';
import './About.scss';
function About() {
	return (
		<div id='About'>
			<h1 style={{ textAlign: 'center' }}>About The Application</h1>
			<div className='row'>
			
				<div className='col-md-6'>
					<p>
						This is a school management system in which you can manage the school subjects, teachers,
						students and classes.
						
						We can add Student's details, Subject details, Teacher's details and Class details as well.
					</p>

				</div>
			</div>
		</div>
	);
}

export default About;
