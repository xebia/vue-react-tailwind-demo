import React, { FC } from "react";
import styles from "./Button.module.css";

const Button: FC<{}> = ({ children }) => <button className={styles.button}>{children}</button>;

export default Button;
