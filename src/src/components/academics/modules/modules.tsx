import { useCallback } from "react";
import { useAppDispatch } from "../../../redux/store";
import { setText } from "../../../redux/modalSlice";

type ModuleType = {
    name: string,
    grade: string,
    sem: string,
    review: string,
}

const data: Array<ModuleType> = [
    {
        name: "CS1101S - Programming Methodology",
        grade: "A+",
        sem: "AY2223-S1",
        review: "A good module",
    },
    {
        name: "CS1231S - Discrete Structures",
        grade: "A+",
        sem: "AY2223-S1",
        review: "Another good module",
    },
];

export default function Modules(): JSX.Element {
    return <div className="modules">
        <div className="modules-title">Modules I took</div>
        <div className="modules-body">
            {data.map((module) => (
                <Module module={module} key={module.name} />
            ))}
        </div>
    </div>;
};

const Module = ({ module }: {
    module: ModuleType,
}): JSX.Element => {
    const dispatch = useAppDispatch();
    const handleReview = useCallback(() => {
        dispatch(setText({
            text: module.review,
        }));
    }, [dispatch, module.review]);

    return <div className="module">
        <div className="module-name">{module.name}</div>
        <div className="module-body">
            <div>Grade: {module.grade}</div>
            <div>Semester: {module.sem}</div>
            <div className="module-review" onClick={handleReview}>Review</div>
        </div>
    </div>;
}
