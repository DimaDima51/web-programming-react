import { useContext, useCallback } from "react";
import { AppContext } from "../../App";
import { AsteroidCard } from "../asteroid-card/AsteroidCard";

export const AsteroidCardContainer = ({ id, name, isDanger, distance, diameter, date, isKilometers }) => {
    const { destroyList, setDestroyList } = useContext(AppContext);

    const isAdded = destroyList.some((item) => item.id === id);

    const onDestroymentClick = useCallback(() => {
        setDestroyList((prev) => {
            const exists = prev.some((item) => item.id === id);
            if (exists) {
                return prev.filter((item) => item.id !== id);
            }
            return [...prev, { id, name, isDanger, distance, diameter, date, isKilometers }];
        });
    }, [id, name, isDanger, distance, diameter, date, isKilometers, setDestroyList]);

    return (
        <AsteroidCard id={id} name={name} isDanger={isDanger} distance={distance} diameter={diameter} date={date} isKilometers={isKilometers} isAdded={isAdded} onDestroymentClick={onDestroymentClick} />
    );
};