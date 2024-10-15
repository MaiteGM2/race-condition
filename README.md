Imagine you are developing a ticketing platform for an online event. You have a basic system where users can purchase tickets. However, multiple people may try to purchase the same number of tickets at the same time, which can lead to inconsistencies in the number of tickets available due to race conditions.

Requirements:
There are a total of 10 tickets available.
Multiple requests can reach the server at the same time to purchase tickets.
The system must ensure that no more than the 10 available tickets are sold.

Tasks:
Write a simulation in JavaScript (can be in a Node.js environment) where multiple users try to purchase tickets at the same time.
Use the setTimeout function to simulate the concurrent requests. Each user will try to purchase tickets with a random delay.
Create a function that handles the purchase, receives the requested number of tickets, and updates the total number of tickets available.
Detect the problem: See what happens when multiple users try to purchase at the same time and how tickets can be oversold (race condition).

Addressing the race condition:
Propose and implement a solution to prevent available tickets from being oversold. One of the following strategies can be used:
Use locks to ensure that only one request can process the purchase at a time.
Implement some form of synchronization between requests.
Alternatively, you can implement promises that ensure that stock updates are atomic.
