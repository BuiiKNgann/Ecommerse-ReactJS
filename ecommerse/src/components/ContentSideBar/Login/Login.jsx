import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
function Login() {
  const { container, title, boxRememberMe, LostPw } = styles;
  return (
    <div className={container}>
      <div className={title}>SIGN IN</div>
      <InputCommon label="Email" type="text" isRequired />
      <InputCommon label="Password" type="password" isRequired />
      <div className={boxRememberMe}>
        <input type="checkbox" />
        <span>Remenber in</span>
      </div>
      <Button content={"LOGIN"} />
      <div className={LostPw}>Lost your password</div>
    </div>
  );
}

export default Login;
