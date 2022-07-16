import React, {ReactNode} from 'react';
import './SlideOutMenu.scss';
import classNames from "classnames";

interface SlideOutMenuProps {
    isOpen: boolean;
    children: ReactNode;
    slideDirection: SlideDirection;
}

export type SlideDirection = 'leftToRight' | 'rightToLeft';

const SlideOutMenu = (props: SlideOutMenuProps) => {
    return (
        <div className={classNames('fullScreenBlock', { isOpen: props.isOpen })}>
            <div
                className={classNames({
                    slideOutMenu: true,
                    isOpen: props.isOpen,
                    leftToRight: props.slideDirection === 'leftToRight',
                    rightToLeft: props.slideDirection === 'rightToLeft'
                })}>{props.children}</div>
        </div>
    )
}

export default SlideOutMenu;