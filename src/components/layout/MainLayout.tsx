import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

interface IMainLayout {
  children: React.ReactNode;
}

export function MainLayout({ children }: IMainLayout) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
