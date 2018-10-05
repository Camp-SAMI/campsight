//sorts are the defaults. If we want to sort the tables by other categories, can always get rid of the sort part of return statements

function getUnassignedTickets(allTickets) {
    return allTickets.filter(ticket => ticket.priority === 'null').sort((x, y) => x.createdAt - y.createdAt);
}

function getOpenTickets(allTickets) {
    return allTickets.filter(ticket => ticket.priority !== 'null' && ticket.status !== 'close').sort(function(x,y){
        let m = parseInt(x.priority, 10) - parseInt(y.priority, 10);
        if (m !== 0) return m;
        return x.updatedAt - y.updatedAt;
    });
}

function getClosedTickets(allTickets) {
    return allTickets.filter(ticket => ticket.status === 'close').sort((x,y) => x.updatedAt - y.updatedAt);
}

export {getUnassignedTickets, getOpenTickets, getClosedTickets};