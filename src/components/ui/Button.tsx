import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

type linkType = {
  variant: "link";
  className?: string;
  children: ReactNode;
} & LinkProps;

type buttonType = {
  variant: "button";
  "variant-type"?: "primary" | "danger";
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

function Button(props: linkType | buttonType) {
  if (props.variant === "link") {
    const { className, children, ...otherProps } = props;
    const allClass = className ? `btn btn--link ${className}` : "btn btn--link";
    return (
      <Link {...otherProps} className={allClass}>
        {children}
      </Link>
    );
  }

  if (props.variant === "button") {
    const { className, children, ...otherProps } = props;
    let initialClass = "btn btn--primary";

    if (props["variant-type"] === "danger") {
      initialClass = "btn btn--danger";
    }

    const allClasses = className
      ? `${initialClass} ${className}`
      : initialClass;
    return (
      <button {...otherProps} className={allClasses}>
        {children}
      </button>
    );
  }
}

export default Button;
