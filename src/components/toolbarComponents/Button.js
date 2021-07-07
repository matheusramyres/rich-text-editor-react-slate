import React, {Ref} from 'react';
import { cx, css } from '@emotion/css';

export const Button = React.forwardRef(
    (
      {
        className,
        active,
        reversed,
        ...props
      }
      ,
      ref=Ref.createRef()
    ) => (
      <span
        {...props}
        ref={ref}
        className={cx(
          className,
          css`
            margin: 0 5px 5px;
            cursor: pointer;
            color: ${reversed
              ? active
                ? 'white'
                : '#aaa'
              : active
              ? 'black'
              : '#ccc'};
          `
        )}
      />
    )
  )