'use client'

import { Menu, Transition ***REMOVED*** from '@headlessui/react'
import { Fragment ***REMOVED*** from 'react'

type DropdownProps = {
  trigger: React.ReactElement
  children: React.ReactElement
***REMOVED***

export default function Dropdown({ trigger, children ***REMOVED***: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>{trigger***REMOVED***</Menu.Button>
      </div>
      <Transition
        as={Fragment***REMOVED***
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2">
    ***REMOVED***children***REMOVED***
        </Menu.Items>
      </Transition>
    </Menu>
  )
***REMOVED***
