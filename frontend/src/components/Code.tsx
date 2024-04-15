import React from 'react'
import { Code as NextUICode } from "@nextui-org/react";

interface Props {
    children: React.ReactNode;
}

const Code: React.FC<Props> = ({ children }) => {
  return (
    <NextUICode>{children}</NextUICode>
  )
}

export default Code;
