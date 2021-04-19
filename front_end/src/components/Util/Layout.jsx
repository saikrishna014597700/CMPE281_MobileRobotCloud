
import { Navbar } from "./navbar";
import BodyWrapper from "./BodyWrapper";

export const Sidebar = ({ children }) => {
    return (
        <BodyWrapper>
            <div className="flex h-screen bg-gray-200">
                <Navbar />

                <div className="flex flex-col flex-1 overflow-hidden">
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