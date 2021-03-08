import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 16px 20px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 318px;
    color: #FFF;

    &:focus {
      width: 40%;
      outline: 1px solid var(--link);
      -moz-outline-radius: 6px;
      background: var(--primary);
      color: var(--black);
    }

    transition: width .2s ease-out, color .2s ease-out;
  }
`;

export const MoonIcon = styled(IoMdMoon)`
  position: absolute;
  top: 6px;
  left: 6px;
  width: 18px;
  height: 18px;
`;
