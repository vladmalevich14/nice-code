import {ReactNode} from "react";
import styles from "./post.module.scss";
import {DropDown} from "components/main/account/dropDown/dropDown";

type PropsType = {
    date?: any
    children: ReactNode
}

export const Post = ({date, children}: PropsType) => {
    return (
        <div className={styles.post}>
            <div>
                <span>{date || '20.12.2019'}</span>
                {children}
            </div>
            <DropDown/>
        </div>
    );
};