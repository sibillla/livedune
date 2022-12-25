import {SignIn} from 'pages/SignIn/SignIn'
import {SignUp} from 'pages/SignUp/SignUp'
import {ForgetPassword} from 'pages/ForgetPassword/ForgetPassword'
import {ConfirmEmail} from 'pages/ConfirmEmail/ConfirmEmail'
import {NoEmail} from 'pages/NoEMail/NoEmail'
import {Home} from 'pages/Home/Home'

export const routes = [
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />
  },
  {
    path: '/confirm-email',
    element: <ConfirmEmail />,
    requireAuth: true
  },
  {
    path: '/',
    element: <Home />,
    requireAuth: true
  },
  {
    path: '/no-email',
    element: <NoEmail />,
    requireAuth: true
  }
]
