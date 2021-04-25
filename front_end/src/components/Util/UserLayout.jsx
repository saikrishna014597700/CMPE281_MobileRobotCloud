import { NavbarUser } from "./navbarUser";
import BodyWrapper from "./BodyWrapper";

export const UserSidebar = ({ children }) => {
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <NavbarUser />

        <div className="flex flex-col flex-1 overflow-auto">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
