import React, { Suspense ***REMOVED*** from 'react'

const withSuspense = (
  WrappedComponent: () => JSX.Element | Promise<JSX.Element>,
  FallbackComponent: JSX.Element = <p>Loading...</p>,
) =>
  function () {
    return (
      <Suspense fallback={FallbackComponent***REMOVED***>
        <WrappedComponent />
      </Suspense>
***REMOVED***
***REMOVED***

export default withSuspense
