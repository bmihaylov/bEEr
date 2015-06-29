## Services requirements:

1. getTicketsForUser/:id -> [{id, status, name}]
2. getProjectForUser/:id -> [{id, name}]
3. getTicketsForProject/:id -> [{id, status, name, asignee}]
4. updateTicketStatus/:ticketId,userId -> Response: 1. Success, 2. Confirmation, 3.Error // Post;
5. getInfoForTicket/:id -> {ticketInfo}
6. addTask/:projectId, userId, title, description -> Response: 1. Success, 2.Error // Post;
7. changeTaskStatus/:taskId, status -> Response: 1. Success, 2.Error
8. assignTask/:taskId, userId -> Response: 1. Success, 2.Error
9. reassignTask/:taskId, userId -> Response: 1. Success, 2.Error
10. addUserToProject/:userId, projectId -> Response: 1. Success, 2.Error
11. removeUserFromProject/:userId, projectId -> Response: 1. Success, 2.Error
