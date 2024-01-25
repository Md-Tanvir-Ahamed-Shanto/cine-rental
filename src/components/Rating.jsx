/* eslint-disable react/prop-types */
import star from "/assets/star.svg";
const Rating = ({ rating }) => {
  const stars = Array(rating).fill(star);
  return (
    <>
      {stars.map((star, index) => (
        <img src={star} width="14" height="14" key={index} alt="star" />
      ))}
    </>
  );
};

export default Rating;
