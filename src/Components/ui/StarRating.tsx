import { SVGProps } from "react";




 function StarSvg(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"></path></svg>
    )
}



interface StarRatingProps {
  rating: number; // A number between 0 and 5 (or any max value)
  maxStars?: number; // Optional, default is 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= rating;

        return (
          <StarSvg
            key={index}
            style={{
              fill: isFilled ? '#ff8c00' : 'gray', // Filled stars are gold, unfilled are gray
              cursor: 'pointer', // Optional: Add pointer cursor for interactivity
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;