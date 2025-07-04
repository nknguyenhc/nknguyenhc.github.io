import { useCallback } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { setText } from '../../../redux/modalSlice';
import { splitToParagraphs } from '../../../utils/text-processing';

type ModuleType = {
  name: string;
  grade: string;
  sem: string;
  review: string;
};

const data: Array<ModuleType> = [
  {
    name: 'CS3264 - Foundations in Machine Learning',
    grade: 'A+',
    sem: 'AY2425-S2',
    review:
      'My favourite module for this semester. The project was amazing: I managed to create an application to categorize a conversation between two people who have just met into three categories: friend - friend, friend - romantic, romantic - romantic. We could not get real-life data, so we generated synthetic data using ChatGPT. Even though the data is AI-generated, the result is shockingly accurate: the F1 score was as high as 0.8. It managed to predict real-life data mostly correct. The underlying architecture is a two-layer LSTM, where the first LSTM runs through each text message, and the second LSTM runs through the results of the first LSTM over all texts. The model also offered explanation, which offers insights into how the model categorizes each conversation. It was a very rewarding experience creating a model on such an interesting topic.\nLecturer Bryan Low was a rather interesting person: it was entertaining coming to his lectures, and debating with him about exams and project timeline, ... oops it was me that convinced him to push the deadline of the project back by 1 day.\nGrade breakdown:\nMidterms: 20%\nProject: 25%\nTutorial homework: 10%\nTutorial attendance: 5%\nFinal exam: 40%\nThe course content was quite easy. Topics include concept learning, Bayesian models, reinforcement learning. Concept learning was rather easy, Bayesian models are repeated in CS4248 which I took in the same semester, and reinforcement learning has been tauhgt in CS3263.\nMidterms were rather easy: I got ample time to check answers back and forth. And the answers were around the same difficulty level as the tutorial questions. Finals were slightly more difficult, due to the time constraint. I managed to only finish the paper when there were 2 minutes left. Nevertheless, the difficulty level was around the same as tutorial questions too.',
  },
  {
    name: 'MA2108 - Mathematical Analysis',
    grade: 'A+',
    sem: 'AY2425-S2',
    review:
      'This module gives me a throwback at the Mathematics I learned in Vietnam. It was interesting: the topics were mostly on proofs of limits. The module dives deep into the properties of real numbers: least-upper-bound theorem, continuity, topology, etc. There were some topics that are quite abstract, you will probably need to be able to visualise it in terms of real numbers in order to fully grasp the concepts.\nGrade breakdown:\nHomework: 40% - choose best 4 out of 6\nMidterms: 20%\nFinals: 40%\nThis module is not for the faint heart. Do consider this module only if you want to go into theoretical Mathematics.',
  },
  {
    name: 'MA3252 - Linear and Network Optimisation',
    grade: 'A',
    sem: 'AY2425-S2',
    review:
      'The module is what it is - finding min/max of a linear expression given linear constraints. The concepts taught in this module can be quite difficult to visualise and understand, they require imagination at times beyond the third dimension. Nevertheless, the homework and exams focus more on the application of these formulae. So, you do not need to fully understand the derivation of these formulae - you just need to apply them. As a result, the exams tend to be quite easy, with highest score expected to be fully marks.\nGrade breakdown:\nHomework: 30%\nMidterms: 30%\nFinals: 30%',
  },
  {
    name: 'CS3282 - Thematic Systems II',
    grade: 'A+',
    sem: 'AY2425-S2',
    review:
      'This is a rather chill mod. Grading criteria include:\nProject management: 50%\nLightning Talks: 20%\nProfessional Conduct: 5%\nExternal Contribution: 25%\nFor me, the highlight was the external contribution! I managed to make two pull requests to VSCode. Yes, the VSCode editor. One was a good-first issue on the UI of the extension window. The other one was a feature to navigate to definition of a built-in key word in javascript within an HTML script. You can actually test this out in VSCode! Simply create a new HTML file with a script tag, and type <code>new Document()</code>. You can now go to definition of <code>Document</code>.\nOther than that, there is a lightning talk component, where you will present on a topic within 7 minutes. I learned quite some presentation techniques! I talked about Google Cloud Run, which is still my current deployment method for most of my projects requiring backend.\nIn terms of project management, it was basically mentoring the juniors. Though they are quite independent, so the work was mostly to review pull requests and make sure they follow coding guidelines of the code base, CATcher and WATcher.',
  },
  {
    name: 'CS4248 - Natural Language Processing',
    grade: 'A-',
    sem: 'AY2425-S2',
    review:
      'I took the module under lecturer Kan Min Yen. He was very engaging and explained the concepts very well. In this module, you will learn all the basics of natural language processing. Topics include: tokenization (with regex and algorithms), n-gram language models, Bayesian models, RNN, LSTM, context, transformer.\nGrade breakdown:\nAssignments: 30% (10% each)\nProject: 30%\nFinal exam: 40%\nThe assignments are fairly interesting. While the first and third assignments are fairly clear, the second assignment requirements were rather vague. I did not really like the assignments though: they rather stick to the very basics taught in lectures.\nThe finals were rather easy: it touches mostly on the basics taught in lecture. The finals were open book, so you can choose to bring in all printed lecture notes.\nProject was rather constrained. We had to choose between a few datasets available, and build a model based on the chosen dataset. My team chose ConceptNet, which is a graph database on the relations of words in the dictionary. There were a lot of possible directions, however, I would recommend you to start early and push the project timeline as early as possible. In that way, if your results are not as expected, you can explore alternative directions.',
  },
  {
    name: 'CS3216 - Software Product Engineering for Digital Markets',
    grade: 'A',
    sem: 'AY2425-S1',
    review:
      "I have to say, this is the module that I miss the most as the semester has ended. I have met and had the chance to work with some of the coolest people in CS. The best teammates I have met in CS.\nGrade breakdown:\nWeekly writeups: 10%\nAssignment 1 (UI): 10%\nAssignment 2 (presentation): 10%\nAssignment 3 (GenAI): 20%\nFinal project: 50%\nYou will get to learn a lot of things that other software engineering modules miss out. Not the proper CI/CD pipelines, or the code quality, this module teaches you the things that really matters: UI/UX, branding, ideation, etc. What would be a better module review than pasting my last reflection here!\nI am glad to have taken this mod (?)\nMake a product. Users are who you should be targeting (obviously?). That decides what you should do to set up your success. Building an app goes beyond just the technical implementation.\nUI/UX is one of the most important factors determining the success of your app. Not what technologies you use, or how cool your idea is. It is UI/UX that forms the first impression and determines whether your users can discover your cool ideas, and whether they will come back the second time. In our final project, our first prototype was built with a rather simple, easy-to-code UI, which did not highlight our app's strengths well. We decided to change to the polaroid UI, with changes to highlight different aspects (from our first prototype) of a photo album, which then made the purpose of our app clearer: memory keepsake.\nGoing beyond the first impression, the idea behind the app is very important. While one may be very clear on an approach to a problem, it is important to verify that the problem exists, and users would make good use of the solution. In our assignment 1, we envisioned our app to be separate from job portals, where one would only find reviews and general application statuses. However, after user interviews, we realised users would not make good use of our app, due to its lack of integration with job application processes. We decided to go beyond a review site and integrate with job portals. Ensuring that your app is what the target user wants is very important in setting up your success.\nKnowing your competitors is an important skill for the survival of your app. As a small group, would your idea be good enough to survive against similar products by tech giants? Practically, CS3216 is not long enough to tell the answer. But we can readily learn from others' stories: Sau Sheong's first startup story is a prime example of how important this is. Maybe your app solves a good problem, your users need it, but it may die out because it is too easily replicable. That sets a caution for GenAI-based apps: are they easily replicable, especially by the LLM authors? Is your idea unique enough to set your app apart?\nAlright, you have a very unique idea, and you know your target users want it. But there needs to be a bridge between your app and your users: marketing. This is what sets apart my final project from my other side projects. Proper marketing sets a leap for the project, from just an idea, to an app with real users and real impact. It involves not just spreading by word of mouth, but also writing social media posts, emails, etc, all of which, as a silent online citizen, I am not too comfortable with. But all these are necessary to ensure that my app reaches where it should be.\nHandling errors is a very important skill, in both big apps and small apps. One would argue that for a small app, spaghetti code has more benefits that proper software engineering processes. It is true to a large extent. For example, ssh and git pull from the VM instance would save more time than setting up proper CI/CD pipelines (especially for teams with no experience in proper CI/CD …), while proper CI/CD pipelines minimises bugs in deployment, which is important for larger applications. However, too much spaghetti code can hamper development. This is one of the aspects I was adamant with my team about: your code has to be ready for deployment. Are you still hardcoding localhost? When your code fails, will I know what went wrong, or did you just use pokemon error catching (one big try-catch block)? Will I have to copy paste your 20 lines of code in the next feature, or will I just need one line to call a function? While some software engineering processes can be skipped for faster speed of development, a baseline code quality must be maintained so that spaghetti code does not actually slow down the speed of development.\nI have to end off with a caution for CS3216: the pressure. Dealing with pressure is not something I just learned in CS3216, but something I must have already had before coming for CS3216. Working tirelessly on something, only to receive some negative feedback. When you think you have finished most of the things and can take a break, something, some bug, pops up. But what drove me through is, first knowing that effort is not what solely determines the outcome. And more importantly, maintaining a cheerful spirit keeps the team going. I'm not sure if our team is truly less overloaded than other teams, or if we are just maintaining good team dynamics, but for sure, happiness is key :). On a related note, handling disagreements is something I have been learning, and still trying to learn through CS3216. I do have to admit, I may appear assertive at times, and sometimes am not so receptive to others' ideas, and this can easily upset others. Maintaining the critical balance between getting the team to move forward and pausing to listen to others' disagreements is still something I am trying to learn.",
  },
  {
    name: 'CS3219 - Software Engineering Principles and Patterns',
    grade: 'A',
    sem: 'AY2425-S1',
    review:
      'Grade breakdown:\nProject: 50%\nFinal exam: 40%\nLecture & tutorial participation: 10%\nThis module teaches what it says - design principles and patterns, not tools and languages. However, there is a very cool project component, where you would have to learn a lot of new tools to tackle it. Personally, I have learnt a lot from doing that project. One thing is the microservice architecture, where each functionality is abstracted out as a microservice. You can then use your own framework of your choice to develop the microservice, instead of being stuck with the same framework for the entire project. Another thing I learnt is the tools used for the project, including Redis for temporary data storage, Nginx as reverse proxy, and RabbitMQ as message broker. In fact, I have applied some of these to my CS3216 projects. I have also learnt the security features necessary to design a code executor.\nWhat I do not enjoy about the module is what the module advertises to teach - the design patterns and principles. I could not bear how boring the content was, and decided to jam the content right before the final exam.\nThe teaching team was unclear about their grading rubrics, especially for milestone 1 of the project. We did not get a good grade for the first milestone, and had to sit down to discuss the grading rubrics with the teaching team.\nFinal word of wisdom: do make sure that manage time well for the project. Make sure that everyone is on the same pace, and plan to finish the milestones early. There tends to be errors and blockers, especially for deployment of the project, so do make sure to give yourselves ample time to debug and fix the errors.',
  },
  {
    name: 'CS3230 - Design and Analysis of Algorithms',
    grade: 'A-',
    sem: 'AY2425-S1',
    review:
      'This module is known for its difficulty. I would say, same goes to any other algo module. But fret not - I have to say this module workload is quite light. There are 4 assignments, each of which takes ~5 hours to complete.\nGrade breakdown:\nContinuous assignments (4 assignments, lecture & tutorial participation): 40%\nMidterm: 20%\nFinals: 40%\nThis module teaches you the frameworks and tools to design and properly analyse your algorithm. I came to realise how useful it is to reason through algorithms, I realised some of the loopholes that my algorithms may fall into, if I did not analyse them enough.\nTopics covered: asymptotic analysis, divide and conquer, randomized algorithm, dynamic programming, greedy algorithms, sorting in linear time.\nExams are tricky though. It is quite time-constrained, giving me mental blockade as I try to think through the problems. Prof Halim gives you free 0.5m if you leave a question blank. That makes you question whether you should attempt the question ...',
  },
  {
    name: 'MA2214 - Combinatorics and Graphs I',
    grade: 'A+',
    sem: 'AY2425-S1',
    review:
      'This is quite an easy module, take it if you want to farm an easy A. Not really! Everyone would think in the same way. The midterm was relatively easy, making me feel anxious about finals, thinking that I would have to be very careful to secure an A.\nTo be fair, I have learnt most of the concepts via Mathematical Olympiads. If you have scored well for SMO round 1, this module should be easy for you, as there are very little new concepts to learn. Two main concepts that I found interesting, that I have not learnt before: generating functions for combinatorics, and number of minimum spanning trees.\nOne thing I did not like about this module is that there are (random) in-lecture quizzes, and there are no lecture recordings. You have no choice other than attending the lectures dutifully.\nGrade breakdown:\nIn-class quizzes: 10%\nTutorial participation: 5%\nMidterm: 25%\nFinals: 60%\nIn the end, the final exam was quite difficult, so that made me feel more secure about an A in this module. But do be prepared that you have to get close to full marks in exams in order to score well in this module.',
  },
  {
    name: 'ST3236 - Stochastic Processes I',
    grade: 'A+',
    sem: 'AY2425-S1',
    review:
      "This module revolves around Markov Chain. More specifically, it is about stationary processes, with discrete time and discrete states. If in JC, you just learned about long-run distribution, here you learn way more than that. You would start out with probabilistic basics, one thing being calculating probabilities of past states given the current state. Then of course long-run distribution, or more formally, limiting distribution, as well as transient states and recurrent states. You would learn about first-step analysis, which can be used to derive a lot of properties in the long run. In fact, first half of the semester revolves around this concept of first-step analysis. You would then learn about one specific application of this: gambler's ruin. In the second half of the semester, you would learn about various applications of Markov process, like branching process, pagerank algorithm, simulations. Regular Markov chain is one of the most important concepts, as you would have to derive a lot of properties based on a regular Markov chain. We then end the course with Poisson distribution, and how it is related to concepts in stochastic processes.\nGrade breakdown:\nTutorial participation: 10%\nHomework: 10%\nMidterm: 30%\nFinals: 50%\nThe content is not really difficult to understand. Do go through the examples in the lectures and make sure you can understand them well. However, do take note that it is quite heavy on probabilistic theories. Make sure you understand different types of probabilities, like conditional probability, joint probability, etc.",
  },
  {
    name: 'CS3263 - Foundation of Artificial Intelligence',
    grade: 'A-',
    sem: 'AY2324-S2',
    review:
      "This module builds on what you have learnt about AI in CS2109S. It focuses more on algorithm aspects of AI. Do not be discouraged by the first lecture on ethics, that is only for the first lecture. I thoroughly enjoyed the module. We started out with knowledge representation and how to go about generating knowledge from known statements. Then, we moved on to online search algorithms, those that work in problems where the environment is not fully observable. We then moved on with constraint satisfaction problem - choosing a set of values while satisfying constraints. A lot of lectures were on probability: Bayesian network - representing probabilistic events, Bayesian causal network - representing causality, decision network and decision tree - representing cases where human decisions are part of the situation. We learned about Markov decision process, where probabilistic events are repeated. Finally, we learned about reinforcement learning, which are model-free agents that learn the optimal policy.\nGrade breakdown:\nHomework: 20%\nTutorials: 10%\nQuizzes: 20%\nMidterm exam: 25%\nProject: 25%\nHomework are coding assignments, they are usually only basic application of the concepts in lectures.\nNote that for tutorials, you would need to write up your own answer and submit your answer in teams. It was not a problem for me, because I enjoyed the content. All I needed to do was to listen attentively in tutorials.\nThere are 4 quizzes along the way, they are usually just basic questions on lecture content. I don't agree with all answers, partly on how questions are interpreted.\nWeirdly enough, there is midterm exam but no final exam.\nFor the project, my team did a Xiangqi engine. It was entirely algorithm-based, no machine learning, no learning agent. In fact, we learned after Pikafish, an engine derived from Stockfish, to make our engine. It was a fun being able to make such an engine and showing it to my Xiangqi members.",
  },
  {
    name: 'CS3281 - Thematic System I',
    grade: 'A+',
    sem: 'AY2324-S2',
    review:
      'This module allows you to work with large-scale projects with real impact under prof Damith. The projects are Teammates, Markbind, Reposense and CATcher. I have worked on WATcher and CATcher. CATcher is the peer-testing software used in CS2103T that allows precise formatting for automated scripts in CS2103T to work. WATcher is a sister application to CATcher that allows users to interactively monitor software development projects.\nI have learnt a lot from working with Angular and GraphQL, and was able to make significant contributions to WATcher. The workload is not too high, it usually own time own target. I usually spend around 5 hours on the projects every week, with the exception in weeks 9 - 11 where our team rushed to make releases. Besides, this module offers a free A grade, because prof only takes in people that can score within the A range for the module.\nIf you want to work on the projects and want to become senior developers/team lead for the projects, I would recommend you try to take the module.',
  },
  {
    name: 'CS2100 - Computer Organisation',
    grade: 'A+',
    sem: 'AY2324-S2',
    review:
      'The module teaches you how computers work down to the lowest levels. The module starts out with C programming and what are the principles behind underlying data structures, as well as C pointers. It then continues with MIPS, where you would learn about instructions and how that translate to high-level language semantics. Going even to a level lower, you would learn about binary code, of those instructions. You would also learn about various logic gates, devices that are formed from logic gates. Finally, you would learn about pipelining and caching, which are techniques to speed up the processor.\nGrade breakdown:\nTutorial attendance - 5%\nLabs - 10%\nAssignments - 12%\nQuizzes - 3%\nMidterm exam - 20%\nFinal exam - 50%\nThe content is not difficult to absorb. Usually, you just need to understand the lecture material go by the formulae to obtain answers.\nLectures in this module is non-existent - you would need to read lecture slides or watch lecture videos at your own time to then be able to answer the quizzes.\nI have learnt a lot from this module, particularly how C programming works. However, I do not thoroughly enjoy the low-level coding concepts in this module.',
  },
  {
    name: 'MA2101 - Linear Algebra II',
    grade: 'A-',
    sem: 'AY2324-S2',
    review:
      'This module does not exactly build up from MA2001, but rather gives you a different view of linear algebra. Chapter 1 focuses more on revision of linear algebra concepts, while the rest of the course content focuses on the abstractions away from matrices. The module is quite difficult, I initially had trouble understanding the notation and what exactly is going on. While the tutorials focus on conceptual problems, including proving problems, but the tests focus on application of the concepts. It is of course not easy to put those concepts into application, especially for the whole time I was dealing with abstract concepts.\nGrade breakdown:\n2 tests, each - 25%\nFinal exam: 50%\nOverall, an interesting and difficult module, I would not recommend this module if you are not Math major/second major. Moreover, I would not take 3k-level Math modules in this area of Maths.',
  },
  {
    name: 'CS2103T - Software Engineering',
    grade: 'A+',
    sem: 'AY2324-S1',
    review:
      "Ah, the teamwork mod. People say you should come in with friends. I would say something slightly different: take this module with friends that you trust. You would not want to take this module with friends that you cannot work with. For me, I took this module with one friend in my team of 5.\nThis module is basically about the concepts and tools in software engineering, not any coding concepts. You would learn things like git, swe cycles, architectural styles, project management.\nTake note that this module is a compulsory module under CS breadth and depth, so there are people of all kinds. For me, I did not leave my grades to fate, so I took leadership and ensured that everyone did work.\nGrade breakdown:\nIndividual project - 15%\nTeam project - 50%\nParticipation - 5%\nFinals - 30%\nClass participation is not very difficult to earn, you just need to dutifully do your work and you do not even need to attend lectures to earn the marks.\nIn this module, you would learn something called UML, and it is extensively tested in the finals. I can't say too much about how useful this is when it comes to working in the industry.\nThere are two projects you need to do: individual project and team project. For individual project, do not spend too much time on perfection, because you would only get an S/U grade for this component (i.e. you receive full marks or a very low score). For team project, make sure that you know all the grading components before launching into doing the project. It does not require a wow-factor, but rather you must demonstrate that you can fulfil all aspects of software engineering.\nI would say that if you want to go into software engineering, you should try to do projects outside alongside this module. You would dread software engineering if this is the only project you do in the semester.\nOn the bright side, I did learn a lot of useful things. Testing in particular, this helps you ensure that other people do not accidentally break what you have built. Project management was another important aspect I learnt in this module that I am applying to my other projects as well.",
  },
  {
    name: 'CS2109S - Introduction to Artificial Intelligence',
    grade: 'A-',
    sem: 'AY2324-S1',
    review:
      'A very interesting module. I did learn a lot of AI concepts. However, take note that this module is known to be difficult and Math-intensive. Yes it is, to understand some concepts, you need to make sure that your Maths foundation is solid. I did not have any trouble following the course content, until the end ...\nGrade breakdown:\nCA - 30%\nMidterms - 35%\nFinals - 35%\nCA is a given if you do all the problem sets dutifully.\nMidterm does not test you on coding, but it does test you whether you understand the concepts and can code given the problems. I did pretty well for the midterm paper, I scored close to the highest score in the cohort.\nThe finals is a take-home exam. In my year, it was to build a model to learn based on a dataset and make predictions. The prediction determines the score. I would say the two days of the exam was my most horrible experience of my semester. I could not find a way to make the model perform better, it somehow could not predict very well. And looking at the live scoreboard was pretty stressing. In the end, it turns out that the dataset contained a lot of noise, we were supposed to figure that out and removed some features (i.e. columns of the input data) so that the model could perform better. A lot of my friends also could not figure that out, and for me, I scored almost on the other end of the spectrum.\nDo be prepared for the finals, understanding of the concepts is not enough. This modules does make me question whether I can go into machine learning, that I should go into AI without ML.',
  },
  {
    name: 'CS2101 - Effective Communication for Computing Professionals',
    grade: 'B+',
    sem: 'AY2324-S1',
    review:
      'This module teaches you communication skills alongside what you learn in CS2103T (of course, it is a twin module). I do have a lot of take away from this module, in particular, how I can make my product shine. This might be contrary to what others say about this module, but do try to pay attention, because, ability to code alone is not enough to set yourself apart.\nTake note that there are some components that are intricately linked to CS2103T. CA2 is a pitch on the product you built for your team project in CS2103T, CA3 is the user guide for the product.\nOn the other hand, this module does have some parts that are not necessarily useful. CA1 applies the SCQA framework, which is something I no longer remember. CA4 is a reflection exercise, not something I find very useful.\nIn the end, this is a language module, which I do not generally enjoy.',
  },
  {
    name: 'ST2334 - Probability and Statistics',
    grade: 'A+',
    sem: 'AY2324-S1',
    review:
      'The module content is not very difficult. The exams are not, too. The bell curve therefore might take you down. When it comes to exams, make sure that you are careful in your calculations. Make sure to use your spare time in the exams to double-check, triple-check your answers.\nGrade breakdown:\nLecture attendance - 10%\nTutorial attendance - 5%\nMidterm - 25%\nFinals - 60%\nYes, there is lecture attendance. The way attendance is recorded is that you need to score in the review quizzes at the end of lectures.\nIn terms of content, a lot has been covered in JC, even towards the end of the course. Since I took Further Maths, I have learnt around 80% of the course content. The content is relatively easy to catch up, you just need to make sure you know which formula to apply in specific situations. Actually, this is my experience in JC Further Maths. The exams in this module are too easy that you do not need to understand everything well. Some more difficult concepts do not even make it into the exam papers, like F-test and chi-squared distribution.',
  },
  {
    name: 'CS2040S - Data Structures and Algorithms',
    grade: 'A+',
    sem: 'AY2223-S2',
    review:
      'This is known to be a difficult module, and the module that all CS students must love. The difference between this module and CS2030S is, this module teaches you about the concepts to optimise your code, while CS2030S teaches you to write codes that are understandable and editable. You would learnt a lot, a lot of useful concepts. At the end of the day, you might not remember every details that you learnt from the course, but it forms a solid foundation for almost anything else you do in CS. CS2109S is the epitome, you need to make sure that your algorithm concepts are solid so that your algorithms in CS2109S are optimal.\nI took this module under prof Seth Gilbert, he is a prof with a very good vibe and the ability to explain concepts very well. Furthermore, my TA made this module very easy to understand. I had no trouble scoring well as a result.\nIt is right to say that this module is difficult. To me, there are a lot of new concepts that I need to pick up. The workload for this module is somewhat high - you have one problem set per week. However, it does not mean that you cannot do well in this module. Get a solid understanding of the module content, and you are set for a good score in this module.\nNote that if you take this module under prof Halim, you might have a practical exam. In my semester, there were no practical exams, and all exams were MCQ questions.',
  },
  {
    name: 'CS2030S - Programming Methodology II',
    grade: 'A+',
    sem: 'AY2223-S2',
    review:
      'This is a very useful module, in my opinion. I learnt how to code properly as a programmer. It teaches programming concepts that are basically the foundation for you to do anything else, it being software engineering or artificial intelligence. The concepts in object-oriented programming and functional programming taught make sure that you write code that are easily understandable and editable.\nThe workload for this module is quite high, you have one problem set per week. It is not difficult, is usually doable as long as you understand the course materials well. But it can be quite tedious, you may know how to do the problems but it takes quite some time to code it out.\nThere was one thing that I dislike about the module though, the practical exam. Due to a big marking issue, the marking scheme changed, and my scores were somehow decreased significantly. The practical exam results were only released when the school term has ended and during the period when I had no free time to check. In the end, I got a good grade, but it was not a very memorable experience.',
  },
  {
    name: 'CS1101S - Programming Methodology',
    grade: 'A+',
    sem: 'AY2223-S1',
    review:
      'The first ever programming module that you would take in your CS journey! You would do programming with a language derived from Javascript - Source. It is constructed by the teaching team themselves. And you would do assignments on their platform - Source Academy.\nGrade breakdown (iirc):\nClass participation - 5%\nReading assessment - 10%\nMidterm - 25%\nPractical - 10%\nFinals - 50%\nAs you can see, there are quite some exams in this module. The workload is the same - it is quite a lot. You get 2 - 3 assignments every week. In the semester I took this module, I spent significantly more time on this module than other modules. Prof did say that if you want to do well, you should attempt the optional quest assignments, that is true. Make sure that you understand the module content well and can apply them in the quests.\nMidterm and final exams are coding on pen and paper. It sounds daunting, but the questions were rather simple in my opinion, they only require a one-line answer. Moreover, profs look out for understanding of the concepts rather the correctness of the syntax, so you do not have to worry to much if your code may not run on a real machine.\nMake sure that you do well in this module. This module is basically the foundation for your entire CS journey. Note that there is no bell curve in this module. You do not have to worry about competing with others in the module.',
  },
  {
    name: 'CS1231S - Discrete Structures',
    grade: 'A+',
    sem: 'AY2223-S1',
    review:
      "Although coded CS, this is actually a Math module. It teaches you things from logic, set theory to combinatorics and graph theory. Things can get quite abstract, and sometimes doing the assignments feel like you are writing things that work but you do not understand exactly what you are writing.\nOne thing to note, the exams are quite time-tight. Make sure to get some practice before going into the exams.\nA lot of people would say that this module is difficult - yes it is. The key to doing well in this module to know how to apply the theorems, you need to instinctively know what theorem to apply in specific problems.\nIn terms of content, I have not seen its usefulness so far, at least in CS. Logic: I use it to argue in daily conversations. Set theory: it is useful in ST2334. Combinatorics: also ST2334. Graph theory: this is gone through again in CS2040S. So is the module really useful? I'm not sure.",
  },
  {
    name: 'MA2001 - Linear Algebra',
    grade: 'A+',
    sem: 'AY2223-S1',
    review:
      'This is quite an intensive module. Linear algebra basically revolves around operations on matrices. My final grade consists of 4 assignments and a final exam. I have to say, relative to the lecture, the assignments and the final exam were not very difficult, but the concepts taught itself were quite difficult. In the end, there are quite some theorems that you do not understand the proof, you just have to take it as it is and apply in your assignments and exams.\nTo do well for the module, you need to make sure you do well for the final exam, which means you need to familiarise yourself with the kind of problems given in the exam and the content. You should not have any problem doing the final exams if you understand the lecture materials well. The exam tends to be difficult enough to separate the A-score students from the B-score. But to be fair, I have gone through a big part of the module content in Further Maths in JC.\nOne thing that I did not like about the module is that the assignments are not marked by the prof. I was wrongly deducted a mark, but I decided it was not worth it to go through the paper work to raise the issue. Make sure that you present your answer clearly so that the TAs do not misread.\nThis module, together with the calculus module (MA1521 or MA2002), are very important if you want to go into artificial intelligence, particularly machine learning. You would get what I mean when you start learning neural networks.',
  },
  {
    name: 'MA1521 - Calculus for Computing',
    grade: 'A+',
    sem: 'AY2223-S1',
    review:
      'As the name of the module says, this module is about calculus - derivatives and integration. A lot of content in this module has been taught in JC Math, and JC Further Maths. However, it should not be the reason for you to zone out. Around the middle of the module, the content starts to be new. Content is built up from topic to topic. If you are lost in one topic, it will be a landslide. So if you do not understand a topic very well, make sure you catch up on it.\nExams tend to be easy, you simply need to apply the concepts taught in class. Understand the concepts taught and practice applying them, you should be able to do well.\nThis module, together with linear algebra (MA2001 or MA1522), are very important if you go into artificial intelligence.',
  },
];

export default function Modules(): JSX.Element {
  return (
    <div className="modules">
      <div className="modules-title">CS-related modules I took</div>
      <div className="modules-body">
        {data.map((module) => (
          <Module module={module} key={module.name} />
        ))}
      </div>
    </div>
  );
}

const Module = ({ module }: { module: ModuleType }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleReview = useCallback(() => {
    dispatch(
      setText({
        text: splitToParagraphs(module.review),
      })
    );
  }, [dispatch, module.review]);

  return (
    <div className="module">
      <div className="module-name">{module.name}</div>
      <div className="module-body">
        <div>Grade: {module.grade}</div>
        <div>Semester: {module.sem}</div>
        <div className="module-review" onClick={handleReview}>
          Review
        </div>
      </div>
    </div>
  );
};
