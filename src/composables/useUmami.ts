export function useUmami() {
  const trackEvent = (eventName: string, eventData = {}) => {
    // @ts-ignore
    if (window.umami) {
      // @ts-ignore
      window.umami.track(eventName, eventData)
    } else {
      console.warn('Umami not loaded')
    }
  }

  return { trackEvent }
}