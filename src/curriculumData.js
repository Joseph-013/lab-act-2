const curriculumData = [
    {
        term: "1st Year, 1st Term",
        courses: [
            {
                subject: "ICS2604",
                description: "VALUES EDUCATION",
                lec: 2,
                lab: 0,
                prerequisite: " ",
            },
            {
                subject: "ICS2601",
                description: "INTRODUCTION TO COMPUTING	",
                lec: 3,
                lab: 0,
                prerequisite: " ",
            },
            {
                subject: "ICS2602",
                description: "COMPUTER PROGRAMMING I (FUNDAMENTALS OF PROGRAMMING - IMPERATIVE)",
                lec: 4,
                lab: 1,
                prerequisite: " ",
            },
            {
                subject: "THY 1",
                description: "CHRISTIAN VISION OF THE HUMAN PERSON",
                lec: 3,
                lab: 0,
                prerequisite: " ",
            },
            {
                subject: "PATH-FIT",
                description: "PHYSICAL ACTIVITIES TOWARDS HEALTH AND FITNESS IN SPORTS",
                lec: 2,
                lab: 0,
                prerequisite: " ",
            },
            {
                subject: "NSTP 1",
                description: "NSTP 1",
                lec: 0,
                lab: 3,
                prerequisite: " ",
            },
            {
                subject: "UND_SELF",
                description: "UNDERSTANDING THE SELF",
                lec: 3,
                lab: 0,
                prerequisite: " ",
            },
        ]
    },
    {
        term: "1st Year, 2nd Term",
        courses: [
            {
                subject: "ICS2603",
                description: "COMPUTER PROGRAMMING II (INTERMEDIATE PROGRAMMING - OBJECT-ORIENTED)",
                lec: 3,
                lab: 1,
                prerequisite: "ICS2602",
            },
            {
                subject: "ICS2606",
                description: "DISCRETE STRUCTURES",
                lec: 3,
                lab: 0,
                prerequisite: "MATH_MW",
            },
        ]
    }
];

export {curriculumData};