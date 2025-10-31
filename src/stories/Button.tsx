import '../stylesheets/core-3.0.0.scss';

export interface ButtonProps {
  /** Button type variant */
  variant?: 'primary' | 'secondary' | 'text-link' | 'back-to-top';
  /** Button size modifier */
  size?: 'small' | 'medium';
  /** Button theme modifier */
  theme?: 'primary' | 'secondary';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether to show an arrow icon (for text links) */
  showArrow?: boolean;
  /** Custom background color */
  backgroundColor?: string;
  /** Whether this is a primary button */
  primary?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  theme = 'primary',
  backgroundColor,
  label,
  disabled = false,
  showArrow = false,
  ...props
}: ButtonProps) => {
  // Use BEM classes for modern approach
  const useBEM = true; // Toggle to switch between BEM and legacy
  
  if (useBEM) {
    // BEM Implementation using .btn as block
    const baseClass = 'btn';
    const classes = [baseClass];
    
    // Add variant modifiers
    if (variant === 'text-link') {
      // Text links use both classes: btn--text-link btn--text-link--primary
      classes.push(`${baseClass}--${variant}`);
      classes.push(`${baseClass}--${variant}--${theme}`);
    } else if (variant) {
      classes.push(`${baseClass}--${variant}`);
    }
    
    // Add size modifiers
    if (size === 'small') {
      classes.push(`${baseClass}--small`);
    }
    
    // Add disabled modifier
    if (disabled) {
      classes.push(`${baseClass}--disabled`);
    }
    
    const className = classes.join(' ');

    // Handle back-to-top button (special case)
    if (variant === 'back-to-top') {
      return (
        <button
          type="button"
          className={className}
          disabled={disabled}
          style={{ backgroundColor }}
          {...props}
        >
          <i className="bg-icon bg-icon--chevron-up"></i>
          <span className="btn__text">{label}</span>
        </button>
      );
    }

    // Handle text-link buttons
    if (variant === 'text-link') {
      return (
        <button
          type="button"
          className={className}
          disabled={disabled}
          style={{ backgroundColor }}
          {...props}
        >
          <span className="btn__text">{label}</span>
          {showArrow && <i className="bg-icon bg-icon--arrow-right"></i>}
        </button>
      );
    }

    // Handle standard buttons (primary/secondary)
    return (
      <button
        type="button"
        className={className}
        disabled={disabled}
        style={{ backgroundColor }}
        {...props}
      >
        <span className="btn__text">{label}</span>
      </button>
    );
  } else {
    // Legacy Implementation (fallback)
    // Handle back-to-top button (special case)
    if (variant === 'back-to-top') {
      return (
        <button
          type="button"
          className="btn btn--back-to-top"
          disabled={disabled}
          style={{ backgroundColor }}
          {...props}
        >
          <i className="bg-icon bg-icon--chevron-up"></i>
          {label}
        </button>
      );
    }

    // Handle text-link buttons
    if (variant === 'text-link') {
      const linkClasses = theme === 'secondary' 
        ? 'btn btn--text-link btn--text-link-secondary'
        : 'btn btn--text-link btn--text-link-primary';
      
      return (
        <button
          type="button"
          className={linkClasses}
          disabled={disabled}
          style={{ backgroundColor }}
          {...props}
        >
          {label}
          {showArrow && <i className="bg-icon bg-icon--arrow-right"></i>}
        </button>
      );
    }

    // Handle standard buttons (primary/secondary)
    const classes = [
      'btn',
      `btn--${variant}`,
      size === 'small' ? 'btn--small' : '',
    ].filter(Boolean).join(' ');

    return (
      <button
        type="button"
        className={classes}
        disabled={disabled}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    );
  }
};
