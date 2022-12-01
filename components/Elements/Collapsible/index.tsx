'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { useState ***REMOVED*** from 'react'
import styles from './Collapsible.module.css'

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
      <CollapsiblePrimitive.Content className={styles.CollapsibleContent***REMOVED***>
  ***REMOVED***children***REMOVED***
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  )
***REMOVED***
