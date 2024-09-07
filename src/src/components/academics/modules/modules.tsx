import { useCallback } from "react";
import { useAppDispatch } from "../../../redux/store";
import { setText } from "../../../redux/modalSlice";
import { splitToParagraphs } from "../../../utils/text-processing";

type ModuleType = {
    name: string,
    grade: string,
    sem: string,
    review: string,
}

const data: Array<ModuleType> = [
    {
        name: "CS3263 - Foundation of Artificial Intelligence",
        grade: "A-",
        sem: "AY2324-S2",
        review: "This module builds on what you have learnt about AI in CS2109S. It focuses more on algorithm aspects of AI. Do not be discouraged by the first lecture on ethics, that is only for the first lecture. I thoroughly enjoyed the module. We started out with knowledge representation and how to go about generating knowledge from known statements. Then, we moved on to online search algorithms, those that work in problems where the environment is not fully observable. We then moved on with constraint satisfaction problem - choosing a set of values while satisfying constraints. A lot of lectures were on probability: Bayesian network - representing probabilistic events, Bayesian causal network - representing causality, decision network and decision tree - representing cases where human decisions are part of the situation. We learned about Markov decision process, where probabilistic events are repeated. Finally, we learned about reinforcement learning, which are model-free agents that learn the optimal policy.\nGrade breakdown:\nHomework: 20%\nTutorials: 10%\nQuizzes: 20%\nMidterm exam: 25%\nProject: 25%\nHomework are coding assignments, they are usually only basic application of the concepts in lectures.\nNote that for tutorials, you would need to write up your own answer and submit your answer in teams. It was not a problem for me, because I enjoyed the content. All I needed to do was to listen attentively in tutorials.\nThere are 4 quizzes along the way, they are usually just basic questions on lecture content. I don't agree with all answers, partly on how questions are interpreted.\nWeirdly enough, there is midterm exam but no final exam.\nFor the project, my team did a Xiangqi engine. It was entirely algorithm-based, no machine learning, no learning agent. In fact, we learned after Pikafish, an engine derived from Stockfish, to make our engine. It was a fun being able to make such an engine and showing it to my Xiangqi members.",
    },
    {
        name: "CS3281 - Thematic System I",
        grade: "A+",
        sem: "AY2324-S2",
        review: "This module allows you to work with large-scale projects with real impact under prof Damith. The projects are Teammates, Markbind, Reposense and CATcher. I have worked on WATcher and CATcher. CATcher is the peer-testing software used in CS2103T that allows precise formatting for automated scripts in CS2103T to work. WATcher is a sister application to CATcher that allows users to interactively monitor software development projects.\nI have learnt a lot from working with Angular and GraphQL, and was able to make significant contributions to WATcher. The workload is not too high, it usually own time own target. I usually spend around 5 hours on the projects every week, with the exception in weeks 9 - 11 where our team rushed to make releases. Besides, this module offers a free A grade, because prof only takes in people that can score within the A range for the module.\nIf you want to work on the projects and want to become senior developers/team lead for the projects, I would recommend you try to take the module.",
    },
    {
        name: "CS2100 - Computer Organisation",
        grade: "A+",
        sem: "AY2324-S2",
        review: "The module teaches you how computers work down to the lowest levels. The module starts out with C programming and what are the principles behind underlying data structures, as well as C pointers. It then continues with MIPS, where you would learn about instructions and how that translate to high-level language semantics. Going even to a level lower, you would learn about binary code, of those instructions. You would also learn about various logic gates, devices that are formed from logic gates. Finally, you would learn about pipelining and caching, which are techniques to speed up the processor.\nGrade breakdown:\nTutorial attendance - 5%\nLabs - 10%\nAssignments - 12%\nQuizzes - 3%\nMidterm exam - 20%\nFinal exam - 50%\nThe content is not difficult to absorb. Usually, you just need to understand the lecture material go by the formulae to obtain answers.\nLectures in this module is non-existent - you would need to read lecture slides or watch lecture videos at your own time to then be able to answer the quizzes.\nI have learnt a lot from this module, particularly how C programming works. However, I do not thoroughly enjoy the low-level coding concepts in this module.",
    },
    {
        name: "MA2101 - Linear Algebra II",
        grade: "A-",
        sem: "AY2324-S2",
        review: "This module does not exactly build up from MA2001, but rather gives you a different view of linear algebra. Chapter 1 focuses more on revision of linear algebra concepts, while the rest of the course content focuses on the abstractions away from matrices. The module is quite difficult, I initially had trouble understanding the notation and what exactly is going on. While the tutorials focus on conceptual problems, including proving problems, but the tests focus on application of the concepts. It is of course not easy to put those concepts into application, especially for the whole time I was dealing with abstract concepts.\nGrade breakdown:\n2 tests, each - 25%\nFinal exam: 50%\nOverall, an interesting and difficult module, I would not recommend this module if you are not Math major/second major. Moreover, I would not take 3k-level Math modules in this area of Maths.",
    },
    {
        name: "CS2103T - Software Engineering",
        grade: "A+",
        sem: "AY2324-S1",
        review: "Ah, the teamwork mod. People say you should come in with friends. I would say something slightly different: take this module with friends that you trust. You would not want to take this module with friends that you cannot work with. For me, I took this module with one friend in my team of 5.\nThis module is basically about the concepts and tools in software engineering, not any coding concepts. You would learn things like git, swe cycles, architectural styles, project management.\nTake note that this module is a compulsory module under CS breadth and depth, so there are people of all kinds. For me, I did not leave my grades to fate, so I took leadership and ensured that everyone did work.\nGrade breakdown:\nIndividual project - 15%\nTeam project - 50%\nParticipation - 5%\nFinals - 30%\nClass participation is not very difficult to earn, you just need to dutifully do your work and you do not even need to attend lectures to earn the marks.\nIn this module, you would learn something called UML, and it is extensively tested in the finals. I can't say too much about how useful this is when it comes to working in the industry.\nThere are two projects you need to do: individual project and team project. For individual project, do not spend too much time on perfection, because you would only get an S/U grade for this component (i.e. you receive full marks or a very low score). For team project, make sure that you know all the grading components before launching into doing the project. It does not require a wow-factor, but rather you must demonstrate that you can fulfil all aspects of software engineering.\nI would say that if you want to go into software engineering, you should try to do projects outside alongside this module. You would dread software engineering if this is the only project you do in the semester.\nOn the bright side, I did learn a lot of useful things. Testing in particular, this helps you ensure that other people do not accidentally break what you have built. Project management was another important aspect I learnt in this module that I am applying to my other projects as well.",
    },
    {
        name: "CS2109S - Introduction to Artificial Intelligence",
        grade: "A-",
        sem: "AY2324-S1",
        review: "A very interesting module. I did learn a lot of AI concepts. However, take note that this module is known to be difficult and Math-intensive. Yes it is, to understand some concepts, you need to make sure that your Maths foundation is solid. I did not have any trouble following the course content, until the end ...\nGrade breakdown:\nCA - 30%\nMidterms - 35%\nFinals - 35%\nCA is a given if you do all the problem sets dutifully.\nMidterm does not test you on coding, but it does test you whether you understand the concepts and can code given the problems. I did pretty well for the midterm paper, I scored close to the highest score in the cohort.\nThe finals is a take-home exam. In my year, it was to build a model to learn based on a dataset and make predictions. The prediction determines the score. I would say the two days of the exam was my most horrible experience of my semester. I could not find a way to make the model perform better, it somehow could not predict very well. And looking at the live scoreboard was pretty stressing. In the end, it turns out that the dataset contained a lot of noise, we were supposed to figure that out and removed some features (i.e. columns of the input data) so that the model could perform better. A lot of my friends also could not figure that out, and for me, I scored almost on the other end of the spectrum.\nDo be prepared for the finals, understanding of the concepts is not enough. This modules does make me question whether I can go into machine learning, that I should go into AI without ML.",
    },
    {
        name: "CS2101 - Effective Communication for Computing Professionals",
        grade: "B+",
        sem: "AY2324-S1",
        review: "This module teaches you communication skills alongside what you learn in CS2103T (of course, it is a twin module). I do have a lot of take away from this module, in particular, how I can make my product shine. This might be contrary to what others say about this module, but do try to pay attention, because, ability to code alone is not enough to set yourself apart.\nTake note that there are some components that are intricately linked to CS2103T. CA2 is a pitch on the product you built for your team project in CS2103T, CA3 is the user guide for the product.\nOn the other hand, this module does have some parts that are not necessarily useful. CA1 applies the SCQA framework, which is something I no longer remember. CA4 is a reflection exercise, not something I find very useful.\nIn the end, this is a language module, which I do not generally enjoy.",
    },
    {
        name: "ST2334 - Probability and Statistics",
        grade: "A+",
        sem: "AY2324-S1",
        review: "The module content is not very difficult. The exams are not, too. The bell curve therefore might take you down. When it comes to exams, make sure that you are careful in your calculations. Make sure to use your spare time in the exams to double-check, triple-check your answers.\nGrade breakdown:\nLecture attendance - 10%\nTutorial attendance - 5%\nMidterm - 25%\nFinals - 60%\nYes, there is lecture attendance. The way attendance is recorded is that you need to score in the review quizzes at the end of lectures.\nIn terms of content, a lot has been covered in JC, even towards the end of the course. Since I took Further Maths, I have learnt around 80% of the course content. The content is relatively easy to catch up, you just need to make sure you know which formula to apply in specific situations. Actually, this is my experience in JC Further Maths. The exams in this module are too easy that you do not need to understand everything well. Some more difficult concepts do not even make it into the exam papers, like F-test and chi-squared distribution.",
    },
    {
        name: "CS2040S - Data Structures and Algorithms",
        grade: "A+",
        sem: "AY2223-S2",
        review: "This is known to be a difficult module, and the module that all CS students must love. The difference between this module and CS2030S is, this module teaches you about the concepts to optimise your code, while CS2030S teaches you to write codes that are understandable and editable. You would learnt a lot, a lot of useful concepts. At the end of the day, you might not remember every details that you learnt from the course, but it forms a solid foundation for almost anything else you do in CS. CS2109S is the epitome, you need to make sure that your algorithm concepts are solid so that your algorithms in CS2109S are optimal.\nI took this module under prof Seth Gilbert, he is a prof with a very good vibe and the ability to explain concepts very well. Furthermore, my TA made this module very easy to understand. I had no trouble scoring well as a result.\nIt is right to say that this module is difficult. To me, there are a lot of new concepts that I need to pick up. The workload for this module is somewhat high - you have one problem set per week. However, it does not mean that you cannot do well in this module. Get a solid understanding of the module content, and you are set for a good score in this module.\nNote that if you take this module under prof Halim, you might have a practical exam. In my semester, there were no practical exams, and all exams were MCQ questions.",
    },
    {
        name: "CS2030S - Programming Methodology II",
        grade: "A+",
        sem: "AY2223-S2",
        review: "This is a very useful module, in my opinion. I learnt how to code properly as a programmer. It teaches programming concepts that are basically the foundation for you to do anything else, it being software engineering or artificial intelligence. The concepts in object-oriented programming and functional programming taught make sure that you write code that are easily understandable and editable.\nThe workload for this module is quite high, you have one problem set per week. It is not difficult, is usually doable as long as you understand the course materials well. But it can be quite tedious, you may know how to do the problems but it takes quite some time to code it out.\nThere was one thing that I dislike about the module though, the practical exam. Due to a big marking issue, the marking scheme changed, and my scores were somehow decreased significantly. The practical exam results were only released when the school term has ended and during the period when I had no free time to check. In the end, I got a good grade, but it was not a very memorable experience.",
    },
    {
        name: "CS1101S - Programming Methodology",
        grade: "A+",
        sem: "AY2223-S1",
        review: "The first ever programming module that you would take in your CS journey! You would do programming with a language derived from Javascript - Source. It is constructed by the teaching team themselves. And you would do assignments on their platform - Source Academy.\nGrade breakdown (iirc):\nClass participation - 5%\nReading assessment - 10%\nMidterm - 25%\nPractical - 10%\nFinals - 50%\nAs you can see, there are quite some exams in this module. The workload is the same - it is quite a lot. You get 2 - 3 assignments every week. In the semester I took this module, I spent significantly more time on this module than other modules. Prof did say that if you want to do well, you should attempt the optional quest assignments, that is true. Make sure that you understand the module content well and can apply them in the quests.\nMidterm and final exams are coding on pen and paper. It sounds daunting, but the questions were rather simple in my opinion, they only require a one-line answer. Moreover, profs look out for understanding of the concepts rather the correctness of the syntax, so you do not have to worry to much if your code may not run on a real machine.\nMake sure that you do well in this module. This module is basically the foundation for your entire CS journey. Note that there is no bell curve in this module. You do not have to worry about competing with others in the module.",
    },
    {
        name: "CS1231S - Discrete Structures",
        grade: "A+",
        sem: "AY2223-S1",
        review: "Although coded CS, this is actually a Math module. It teaches you things from logic, set theory to combinatorics and graph theory. Things can get quite abstract, and sometimes doing the assignments feel like you are writing things that work but you do not understand exactly what you are writing.\nOne thing to note, the exams are quite time-tight. Make sure to get some practice before going into the exams.\nA lot of people would say that this module is difficult - yes it is. The key to doing well in this module to know how to apply the theorems, you need to instinctively know what theorem to apply in specific problems.\nIn terms of content, I have not seen its usefulness so far, at least in CS. Logic: I use it to argue in daily conversations. Set theory: it is useful in ST2334. Combinatorics: also ST2334. Graph theory: this is gone through again in CS2040S. So is the module really useful? I'm not sure.",
    },
    {
        name: "MA2001 - Linear Algebra",
        grade: "A+",
        sem: "AY2223-S1",
        review: "This is quite an intensive module. Linear algebra basically revolves around operations on matrices. My final grade consists of 4 assignments and a final exam. I have to say, relative to the lecture, the assignments and the final exam were not very difficult, but the concepts taught itself were quite difficult. In the end, there are quite some theorems that you do not understand the proof, you just have to take it as it is and apply in your assignments and exams.\nTo do well for the module, you need to make sure you do well for the final exam, which means you need to familiarise yourself with the kind of problems given in the exam and the content. You should not have any problem doing the final exams if you understand the lecture materials well. The exam tends to be difficult enough to separate the A-score students from the B-score. But to be fair, I have gone through a big part of the module content in Further Maths in JC.\nOne thing that I did not like about the module is that the assignments are not marked by the prof. I was wrongly deducted a mark, but I decided it was not worth it to go through the paper work to raise the issue. Make sure that you present your answer clearly so that the TAs do not misread.\nThis module, together with the calculus module (MA1521 or MA2002), are very important if you want to go into artificial intelligence, particularly machine learning. You would get what I mean when you start learning neural networks.",
    },
    {
        name: "MA1521 - Calculus for Computing",
        grade: "A+",
        sem: "AY2223-S1",
        review: "As the name of the module says, this module is about calculus - derivatives and integration. A lot of content in this module has been taught in JC Math, and JC Further Maths. However, it should not be the reason for you to zone out. Around the middle of the module, the content starts to be new. Content is built up from topic to topic. If you are lost in one topic, it will be a landslide. So if you do not understand a topic very well, make sure you catch up on it.\nExams tend to be easy, you simply need to apply the concepts taught in class. Understand the concepts taught and practice applying them, you should be able to do well.\nThis module, together with linear algebra (MA2001 or MA1522), are very important if you go into artificial intelligence.",
    },
];

export default function Modules(): JSX.Element {
    return <div className="modules">
        <div className="modules-title">CS-related modules I took</div>
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
            text: splitToParagraphs(module.review),
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
