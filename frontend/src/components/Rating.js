import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as EmptyStar } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rate, numReviews }) => {
  return (
    <div className='my-3'>
      <FontAwesomeIcon
        icon={rate >= 1 ? faStar : rate === 0 ? EmptyStar : faStarHalfAlt}
      />
      <FontAwesomeIcon
        icon={
          rate >= 2 ? faStar : rate > 1 && rate < 2 ? faStarHalfAlt : EmptyStar
        }
      />
      <FontAwesomeIcon
        icon={
          rate >= 3 ? faStar : rate > 2 && rate < 3 ? faStarHalfAlt : EmptyStar
        }
      />
      <FontAwesomeIcon
        icon={
          rate >= 4 ? faStar : rate > 3 && rate < 4 ? faStarHalfAlt : EmptyStar
        }
      />
      <FontAwesomeIcon
        icon={
          rate >= 5 ? faStar : rate > 4 && rate < 5 ? faStarHalfAlt : EmptyStar
        }
      />
      <strong>
        Ocena:
        {rate}/5 ({numReviews})
      </strong>
    </div>
  );
};

export default Rating;
