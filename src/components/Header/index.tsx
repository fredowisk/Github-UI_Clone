import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Switch from "react-switch";

import { Container, GithubLogo, SearchForm, MoonIcon } from "./styles";
import { ThemeName } from "../../styles/themes";

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLowerCase().trim());
    setSearch("");
  }

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <GithubLogo onClick={() => navigate("/")} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Enter a Username or Repo..."
        />
      </SearchForm>
      <Switch
        onChange={toggleTheme}
        checked={themeName === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        checkedHandleIcon={<MoonIcon style={{ fill: "#ffdf5d" }} />}
        uncheckedHandleIcon={<MoonIcon style={{ fill: "#FFF" }} />}
        handleDiameter={30}
        height={23}
        width={50}
        offColor={"#edeeed"}
        onColor={"#edeeed"}
        offHandleColor={"#8257e5"}
        onHandleColor={"#1b1f23"}
      />
    </Container>
  );
};

export default Header;
