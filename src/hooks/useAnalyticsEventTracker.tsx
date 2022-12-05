import ReactGA from 'react-ga'

export const useAnalyticsEventTracker = (category = 'Home') => {
  const eventTracker = (action = 'enter home', label = 'Access Home Page') => {
    return ReactGA.event({category, action, label})
  }

  return eventTracker
}
