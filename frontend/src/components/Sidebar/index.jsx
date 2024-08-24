import { HiMiniHome } from "react-icons/hi2";
import { ContainerNav, ContainerSidebar, LinkTo, SidebarWrapper } from "./style"
import { LuClipboardList } from "react-icons/lu";

export const Sidebar = () => {
    return (
        <div>
          <SidebarWrapper>
            <ContainerSidebar>
                <ContainerNav>
                    <LinkTo to={"/"}><HiMiniHome color="white"/></LinkTo>
                    <LinkTo to={"/order"}> <LuClipboardList color="white"/> </LinkTo>
                </ContainerNav>
            </ContainerSidebar>
          </SidebarWrapper>
        </div>
      );
}