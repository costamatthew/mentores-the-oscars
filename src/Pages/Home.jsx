import LogoOscars from "../Assets/Images/Logo-Oscars.png";
import { ButtonDropdown } from "../Components/ButtonDropdown";

export const HomePage = () => {
  return (
    <main className="home">
      <header>
        <img src={LogoOscars} alt="Logo Oscars" />
        <ButtonDropdown />
      </header>
      <section className="section-movies">Ok</section>
    </main>
  );
};
