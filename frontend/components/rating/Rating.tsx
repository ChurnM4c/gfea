import { FC } from "react";
import styles from "./rating.module.css";
import RatingStarCss from "../ratingStar/RatingStarCss";
import { calcStars } from "../../utils/calcStars";

export interface ratingProps {
    rating: number;
    ratingCount: number;
}

const Rating: FC<ratingProps> = ({ rating, ratingCount }) => {
    return (
        <div className={styles.rating}>
            {calcStars(rating).map((fill, index) => (
                <RatingStarCss fill={fill} key={index} />
            ))}
            <span className={styles.ratingCount}>{ratingCount}</span>
        </div>
    );
};

export default Rating;
