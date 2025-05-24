import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2qSGX2lXL4dAC5IjiMY7me8Z3Qq",
];

export const getIsAdmin = async () => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}