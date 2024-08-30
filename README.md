# Refs
Ref values aren't affected by component re-execution.
Just as state values, React stores them behind the scenes and make sure that they dont get lost

# Forward Ref hook
forward a ref value from one component to another

import like below in receiving component.

import { forwardRef } in 'react'

and then use it.

# useImperativeHandle hook