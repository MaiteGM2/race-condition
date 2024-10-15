let totalEntries = 10;

function ticketPurchase(selectedTickets) {
    return new Promise((resolve) => {
        console.log(`Tickets available:`, totalEntries);
        setTimeout(() => {
            if(0 >= totalEntries){
                console.log(`The tickets were sold out`);
                return
            } else if(totalEntries < selectedTickets){
                console.log(`There are only ${totalEntries} tickets available, that quantity will be sold to you`)
                selectedTickets = totalEntries;
            }
    
            setTimeout(() => {
                updateTickets(selectedTickets);
                console.log(`Purchase of ${selectedTickets} tickets successfully`)
                resolve();
            }, 200);
        }, Math.random() * 200);
    })
}

function updateTickets(selectedTickets) {
    totalEntries -= selectedTickets;
    return
}

async function purchaseFlowControl() {
    try {
        await ticketPurchase(1);
        await ticketPurchase(1);
        await ticketPurchase(5);
        await ticketPurchase(5);
        await ticketPurchase(1);
    } catch (error) {
        console.error(`An error occurred during the purchase flow:`, error);
    } 
}

purchaseFlowControl();