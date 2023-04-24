import { cx ***REMOVED*** from 'class-variance-authority'
import { HTMLAttributes ***REMOVED*** from 'react'

export function TileSplitView(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="flex flex-col gap-10 lg:flex-row" {...props***REMOVED*** />
***REMOVED***

TileSplitView.Left = function LeftView(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props***REMOVED*** className={cx(props.className, 'min-h-[30rem] flex-1')***REMOVED*** />
  )
***REMOVED***

TileSplitView.Right = function Rightiew(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props***REMOVED*** className="lg:max-w-[272px]" />
***REMOVED***
