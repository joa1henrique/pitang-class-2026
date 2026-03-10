import { useOutletContext } from "react-router";

export default function Login() {
  const context = useOutletContext();

  return <h1>Login {context?.login}</h1>;
}
