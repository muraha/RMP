import React, { Component, ReactNode } from 'react'

interface ErrorInfo {
  componentStack:string
}

type StateType = {
  hasError: boolean;
  error: Error;
  errorInfo: ErrorInfo;
};

class ErrorBoundary extends Component<any, StateType> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor (props:any) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch (error:Error, errorInfo:ErrorInfo):void {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render ():ReactNode {
    if (this.state.hasError) {
      <>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </>
    }

    return this.props.children
  }
}

// eslint-disable-next-line import/no-default-export
export default ErrorBoundary
