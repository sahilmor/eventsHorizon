"use client"
import React,{ HTMLAttributes } from "react"
// import MainHeader from "./mainHeader"
import SideNavigation from "./sideNavigation";

interface MainWrapperProps {
  children?: React.ReactNode;
  parentWrapper: React.HTMLAttributes<HTMLDivElement>;
  mainWrapper: React.HTMLAttributes<HTMLDivElement>;
  externalHeaderElements?:React.ReactNode[]
  name:string
}

const MainWrapper :React.FC<MainWrapperProps> = ({children,parentWrapper,mainWrapper,name,externalHeaderElements}) => {
  return (
    <>
      <div className="flex h-full w-full flex-col bg-muted/40 bg-green-100">
          <SideNavigation></SideNavigation>

        <div {...parentWrapper}>
            <div className="w-full bg-red-500">hlo</div>
          {/* <MainHeader name={name} externalHeaderElements={externalHeaderElements}></MainHeader> */}
          <main {...mainWrapper}>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
export default MainWrapper;