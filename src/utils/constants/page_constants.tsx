import { LuHome, LuUser2, LuLibrary, LuSettings2, LuLogOut, LuBook } from 'react-icons/lu'

const ONBOARDING = {
  SIGN_IN: {
    title: 'Sign In',
    description: 'Sign in to your account to continue',
    href: '/sign-in',
  },
  SIGN_UP: {
    title: 'Sign Up',
    description: 'Create an account to continue',
    href: '/sign-up',
  }
}

const APPLICATION = {
  DASHBOARD: {
    title: 'Home',
    description: 'Welcome to the dashboard',
    href: '/dashboard',
    icon: <LuHome className="mr-3 h-5 w-5" />,
  },
  INVENTORY: {
    title: 'Inventory',
    description: 'Manage your inventory',
    href: '/inventory',
    icon: <LuBook className="mr-3 h-5 w-5" />,
  },
  Users: {
    title: 'Users',
    description: 'Manage your users',
    href: '/users',
    icon: <LuUser2 className="mr-3 h-5 w-5" />,
  },
  REPORTS: {
    title: 'Audit Log',
    description: 'View your audit log',
    href: '/audit-log',
    icon: <LuLibrary className="mr-3 h-5 w-5" />,
  },
}

const APPLICATION_AUTH = {
  SETTINGS: {
    title: 'Settings',
    description: 'Manage your settings',
    href: '/settings',
    icon: <LuSettings2 className="mr-3 h-5 w-5" />,
  },
  SIGN_OUT: {
    title: 'Sign Out',
    description: 'Sign out of your account',
    href: '/sign-out',
    icon: <LuLogOut className="mr-3 h-5 w-5" />,
  },
}

export {
  ONBOARDING,
  APPLICATION,
  APPLICATION_AUTH
}