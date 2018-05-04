const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

function mapStateToProps(state) {
  return {
    authUser: state.session.authUser,
  };
}

export default connect(mapStateToProps)(PrivateRoute);