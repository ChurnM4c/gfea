export type StarFill = "full" | "half" | "empty";

export const calcStars = (rating: number): StarFill[] => {
    const roundedRating = Math.round(rating * 2) / 2;

    return Array.from({ length: 5 }, (_, index) => {
        if (roundedRating >= index + 1) {
            return "full";
        }
        if (roundedRating === index + 0.5) {
            return "half";
        }
        return "empty";
    });
};
