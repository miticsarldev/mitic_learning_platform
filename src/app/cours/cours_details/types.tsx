export interface TestimonialAuthorProps {
    name: string;
    role: string;
    avatarSrc: string;
  }
  
  export interface TestimonialProps {
    subtitle: string;
    title: string;
    content: string;
    author: TestimonialAuthorProps;
    ratingImageSrc: string;
    decorativeImageSrc: string;
    testimonialImageSrc: string;
  }