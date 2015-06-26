## Services requirements:

1. getTicketsForUser/:id -> [{id, status, name}]
2. getProjectForUser/:id -> [{id, name}]
3. getTicketsForProject/:id -> [{id, status, name, asignee}]
4. updateTicketStatus/:ticketId,userId -> Response: 1. Success, 2. Confirmation, 3.Error // Post;
5. getInfoForTicket/:id -> {ticketInfo}
