import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'
import Loading from './components/Loading'
import { Nav } from './components/Nav'

import './index.css'

const Posts = React.lazy(() => import('./components/Posts'))
const Post = React.lazy(() => import('./components/Post'))
const User = React.lazy(() => import('./components/User'))


class App extends Component {

	state = {
		theme: 'light',
		toggleTheme: () => {
			this.setState(({ theme }) => ({
				theme: theme === 'light' ? 'dark' : 'light'
			}))
		}
	}

	render() {
		return (
			<Router>
				<ThemeProvider value={this.state}>
					<div className={this.state.theme}>
						<div className="container">
							<Nav />

							<React.Suspense fallback={<Loading />}>
								<Switch>
									<Route exact path='/' component={Posts} />
                  <Route path='/post' component={Post} />
                  <Route path='/user' component={User} />
                  <Route render={() => <h1>404</h1>} />
								</Switch>
							</React.Suspense>
						</div>
					</div>
				</ThemeProvider>
			</Router>
		)
	}
}


export default App;
