import { Button as MaterialButton, CardActions, CircularProgress, makeStyles } from "@material-ui/core";
import { FC, ReactNode } from "react";
import { noop } from "lodash";

type Props = {
    className: string;
    size: "small" | "medium" | "large";
    onClick: any;
    children: ReactNode;
    isLoading?: boolean;
};

const Button: FC<Props> = ({ className, size, onClick, children, isLoading = false }) => {
    const handleOnClick = !!isLoading ? noop : onClick;
    return (
        <MaterialButton className={className} size={size} onClick={handleOnClick}>
            {isLoading ? <CircularProgress size={22} /> : children}
        </MaterialButton>
    );
};

export default Button;
