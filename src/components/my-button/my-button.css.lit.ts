import { css } from 'lit';

export const styles = css`.component-container {

    display: flex;

    flex-direction: column;

    border-radius: 0.375rem;

    --tw-bg-opacity: 1;

    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));

    padding: 1rem;

    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.button {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    border-radius: 0.25rem;

    font-weight: 500;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;

    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    transition-duration: 200ms
}

.button:focus {

    outline: 2px solid transparent;

    outline-offset: 2px;

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-opacity: 1;

    --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity, 1));

    --tw-ring-offset-width: 2px
}

.button.small {

    padding-left: 0.75rem;

    padding-right: 0.75rem;

    padding-top: 0.25rem;

    padding-bottom: 0.25rem;

    font-size: 0.875rem;

    line-height: 1.25rem
}

.button.medium {

    padding-left: 1rem;

    padding-right: 1rem;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem;

    font-size: 1rem;

    line-height: 1.5rem
}

.button.large {

    padding-left: 1.5rem;

    padding-right: 1.5rem;

    padding-top: 0.75rem;

    padding-bottom: 0.75rem;

    font-size: 1.125rem;

    line-height: 1.75rem
}

.button.primary {

    --tw-bg-opacity: 1;

    background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity, 1))
}

.button.primary:hover {

    --tw-bg-opacity: 1;

    background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1))
}

.button.secondary {

    --tw-bg-opacity: 1;

    background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1));

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity, 1))
}

.button.secondary:hover {

    --tw-bg-opacity: 1;

    background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1))
}

.button.outline {

    border-width: 1px;

    --tw-border-opacity: 1;

    border-color: rgb(37 99 235 / var(--tw-border-opacity, 1));

    --tw-text-opacity: 1;

    color: rgb(37 99 235 / var(--tw-text-opacity, 1))
}

.button.outline:hover {

    --tw-bg-opacity: 1;

    background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1))
}

.button[disabled] {

    cursor: not-allowed;

    opacity: 0.5
}`;
