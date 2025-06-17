// Props expected by the Card component
export interface CardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  price: number;
  onClick?: () => void;
}

// Props expected by the Button component
export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description?:string;
}

export interface FooterLinksProps {
  title: string;
  links: {
    first: string;
    second: string;
    third: string;
    fourth?: string;
    fifth?: string;
  }
}