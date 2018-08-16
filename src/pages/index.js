import React, { Fragment } from 'react'
import { recaptchaInvisibleKey } from '../../site-config'
import Form from '../../dist'

export default class HomePage extends React.Component {
	render() {
		return (
			<Form
				name='test'
				recaptcha={{
					size: `invisible`,
					sitekey: recaptchaInvisibleKey,
				}}
			>
				{({loading, error, success, recaptcha}) => (
					<div>
						{loading && `Loading...`}
						{error && `Error.`}
						{success && `Success.`}
						{!loading && !success &&
							<Fragment>
								<div>
									<input type='text' name='Name' required />
								</div>
								<div>
									<textarea name='Message' required />
								</div>
								<div>
									<button>Submit</button>
								</div>
							</Fragment>
						}
						{recaptcha}
					</div>
				)}
			</Form>
		)
	}
}