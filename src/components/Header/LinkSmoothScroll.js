import React, { Children } from 'react'
import Router from 'next/router'
import smoothScroll from './smoothScroll'

// this HOC is taken from https://github.com/zeit/next.js/blob/master/lib/link.js and modified
export default class LinkSmoothScroll extends React.Component {
  constructor (props) {
    super(props)
    this.linkClicked = this.linkClicked.bind(this)
  }
  linkClicked (e) {
    e.preventDefault()
    Router
      .push(this.props.href)
      .then(() => {
        return smoothScroll(this.props.href)
      })
      .then(() => {
        this.props.done && this.props.done()
      })
      .catch(err => {
        this.props.onError && this.props.onError(err)
        console.error(err)
      })
  }
  render () {
    let { children } = this.props
    if (typeof children === 'string') {
      children = <a>{children}</a>
    }
    const child = Children.only(children)
    const props = { onClick: this.linkClicked }
    if (child.type === 'a' && !('href' in child.props)) {
      props.href = this.props.href
    }
    return React.cloneElement(child, props)
  }
}