import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Form from './AuthForm'
import OAuthOptions from './OAuthOptions'
import ForgotPassButton from './ForgotPassButton'

const useStyles = makeStyles({
  container: {
    margin: '10px auto',
    width: '400px',
    padding: '20px',
  },
  oAuthContainer: {
    marginTop: 10,
  },
})

const SignIn = props => {
  const classes = useStyles()
  return (
    <Paper className={classes.container}>
      <Form
        title="Please Enter Your Email and Password to Continue"
        submitButtonText="Sign In"
        otherAuthOption={{ link: '/auth/signup', text: 'Create a profile' }}
        ForgotPassButton={ForgotPassButton}
        {...props}
      />
      <Grid className={classes.oAuthContainer} direction="column" container>
        {['google', 'facebook'].map(provider => (
          <OAuthOptions key={provider} providerName={provider} />
        ))}
      </Grid>
    </Paper>
  )
}

export default SignIn
