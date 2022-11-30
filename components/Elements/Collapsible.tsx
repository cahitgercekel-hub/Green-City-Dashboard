'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { useState ***REMOVED*** from 'react'

type CollapsibleProps = {
  trigger: React.ReactElement
  children: React.ReactElement
***REMOVED***

export default function Collapsible({ trigger, children ***REMOVED***: CollapsibleProps) {
  const [open, setOpen] = useState(false)

  return (
    <CollapsiblePrimitive.Root onOpenChange={setOpen***REMOVED*** open={open***REMOVED***>
      <CollapsiblePrimitive.Trigger asChild>
  ***REMOVED***trigger***REMOVED***
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content>{children***REMOVED***</CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  )
***REMOVED***
