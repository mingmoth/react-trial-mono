// Mock API function
const fetchUsers = (page) => {
    const allUsers = [
        { id: 1, name: "Alice", age: 28 },
        { id: 2, name: "Bob", age: 24 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "David", age: 35 },
        { id: 5, name: "Eva", age: 29 },
        { id: 6, name: "Frank", age: 41 },
        { id: 7, name: "Grace", age: 38 },
        { id: 8, name: "Hannah", age: 21 },
        { id: 9, name: "Ivy", age: 33 },
        { id: 10, name: "Jack", age: 30 },
        { id: 11, name: "Katie", age: 27 },
        { id: 12, name: "Liam", age: 32 },
        { id: 13, name: "Mandy", age: 26 },
        { id: 14, name: "Nancy", age: 19 },
        { id: 15, name: "Oscar", age: 45 },
        { id: 16, name: "Paul", age: 55 },
        { id: 17, name: "Quincy", age: 40 },
        { id: 18, name: "Rachel", age: 23 },
        { id: 19, name: "Steve", age: 34 },
        { id: 20, name: "Tina", age: 20 }
    ];

    const startIdx = (page - 1) * 5;
    const endIdx = startIdx + 5;

    return new Promise((resolve) => {
        setTimeout(() => {
            const hasMore = endIdx < allUsers.length;
            resolve({ users: allUsers.slice(startIdx, endIdx), hasMore });
        }, 1000);
    });
};

export { fetchUsers };
