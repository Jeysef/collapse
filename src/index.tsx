import React, { FC, ReactNode, useRef } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./styles.css";

export interface ICollapseProps {
    children?: ReactNode;
    isOpen: boolean;
    className?: string | undefined;
    onRest?: () => void;
    transition?: string | undefined;
    unmountOnExit?: boolean;
}

const Collapse: FC<ICollapseProps> = props => {
    const {
        children,
        isOpen,
        className,
        onRest,
        transition = "height 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        unmountOnExit = false,
    } = props;
    const nodeRef = useRef(null);
    return (
        <CSSTransition
            in={isOpen}
            timeout={250}
            classNames={"collapse collapse"}
            onRest={onRest}
            unmountOnExit={unmountOnExit}
            style={{ "--transition": transition }}
            ref={nodeRef}
            onEntering={(node: HTMLElement) => {
                // Calculate the element"s height
                const height = node.scrollHeight;
                // Set the element"s height
                node.style.height = `${height}px`;
            }}
            onEntered={(node: HTMLElement) => {
                // Remove the height style
                node.style.height = "";
            }}
            onExit={(node: HTMLElement) => {
                // Get the element"s height
                const height = node.scrollHeight;
                // Set the element"s height
                node.style.height = `${height}px`;
            }}
            onExiting={(node: HTMLElement) => {
                // Remove the height style
                node.style.height = "";
            }}
        >
            <div ref={nodeRef} className={className} style={{ transition }}>
                {children}
            </div>
        </CSSTransition>
    );
};

export default Collapse;