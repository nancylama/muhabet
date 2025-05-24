import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");
        
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Albanian",
                imageSrc: "/alb.webp",
            },
            {
                id: 2,
                title: "Turkish",
                imageSrc: "/turkey.png",
            }
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, //Albanian
                title: "Unit 1",
                description: "Learn the basics of Albanian",
                order: 1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, // Unit 1 (Learn basics...)
                order: 1,
                title: "Nouns",
            },
            {
                id: 2,
                unitId: 1, // Unit 1 (Learn basics...)
                order: 2,
                title: "Verbs",
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Verbs",
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Verbs",
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Verbs",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, // Nouns
                type: "SELECT",
                order: 1,
                question: 'Which one of these is "the man"?',
            },
            {
                id: 2,
                lessonId: 1, // Nouns
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            },
            {
                id: 3,
                lessonId: 1, // Nouns
                type: "SELECT",
                order: 3,
                question: 'Which one of these is "the girl"?',
            },
            
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1, // Which one of these is "the man"
                imageSrc: "/man.png",
                correct: true,
                text: "burrë",
                audioSrc: "/alb_man.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/woman.png",
                correct: false,
                text: "grua",
                audioSrc: "/alb_woman.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/girl.png",
                correct: false,
                text: "vajzë",
                audioSrc: "/alb_girl.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/boy.png",
                correct: false,
                text: "djalë",
                audioSrc: "/alb_girl.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([ // No need for image but should have the audioSrc
            {
                challengeId: 2, // Which one of these is "the man"
                correct: true,
                text: "burrë",
                audioSrc: "/alb_man.mp3",
            },
            {
                challengeId: 2,
                correct: false,
                text: "grua",
                audioSrc: "/alb_woman.mp3",
            },
            {
                challengeId: 2,
                correct: false,
                text: "vajzë",
                audioSrc: "/alb_girl.mp3",
            },
            {
                challengeId: 2,
                correct: false,
                text: "djalë",
                audioSrc: "/alb_girl.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 3, // Which one of these is "the girl"?
                imageSrc: "/man.png",
                correct: false,
                text: "burrë",
                audioSrc: "/alb_man.mp3",
            },
            {
                challengeId: 3,
                imageSrc: "/woman.png",
                correct: false,
                text: "grua",
                audioSrc: "/alb_woman.mp3",
            },
            {
                challengeId: 3,
                imageSrc: "/girl.png",
                correct: true,
                text: "vajzë",
                audioSrc: "/alb_girl.mp3",
            },
            {
                challengeId: 3,
                imageSrc: "/boy.png",
                correct: false,
                text: "djalë",
                audioSrc: "/alb_girl.mp3",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 4,
                lessonId: 2,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is "the man"?',
            },
            {
                id: 5,
                lessonId: 2,
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            },
            {
                id: 6,
                lessonId: 2,
                type: "SELECT",
                order: 3,
                question: 'Which one of these is "the girl"?',
            },
            {
                id: 7,
                lessonId: 2, // Verbs
                type: "SELECT",
                order: 4,
                question: 'Which one of these is "eats"?',
            },
            {
                id: 8,
                lessonId: 2, // Verbs
                type: "ASSIST",
                order: 5,
                question: '"eats"',
            },
            {
                id: 9,
                lessonId: 2, // Verbs
                type: "SELECT",
                order: 3,
                question: 'Which one of these is "drinks"?',
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 7,
                correct: true,
                text: "ha",
                audioSrc: "/alb_eats.mp3",
            },
            {
                challengeId: 7,
                correct: false,
                text: "pi",
                audioSrc: "/alb_drinks.mp3",
            },
            {
                challengeId: 7,
                correct: false,
                text: "vrapon",
                audioSrc: "/alb_runs.mp3",
            },
            {
                challengeId: 7,
                correct: false,
                text: "lexon",
                audioSrc: "/alb_reads.mp3",
            },
            {
                challengeId: 8,
                correct: true,
                text: "ha",
                audioSrc: "/alb_eats.mp3",
            },
            {
                challengeId: 8,
                correct: false,
                text: "pi",
                audioSrc: "/alb_drinks.mp3",
            },
            {
                challengeId: 8,
                correct: false,
                text: "vrapon",
                audioSrc: "/alb_runs.mp3",
            },
            {
                challengeId: 8,
                correct: false,
                text: "lexon",
                audioSrc: "/alb_reads.mp3",
            },
            {
                challengeId: 9,
                correct: true,
                text: "pi",
                audioSrc: "/alb_drinks.mp3",
            },
            {
                challengeId: 9,
                correct: false,
                text: "ha",
                audioSrc: "/alb_eats.mp3",
            },
            {
                challengeId: 9,
                correct: false,
                text: "vrapon",
                audioSrc: "/alb_runs.mp3",
            },
            {
                challengeId: 9,
                correct: false,
                text: "lexon",
                audioSrc: "/alb_reads.mp3",
            },
        ]);

        console.log("Seeding finished");

    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};

main();
