/* enum OrderStatus {
    PENDING = 10,
    SHIPPED = 20,
    DELIVERED = 30,
    RETURNED = 40
} */
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED 
}

const myStatus = OrderStatus.DELIVERED;


function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED
}

isDelivered(myStatus); // true


enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 235
}

ArrowKeys.LEFT; // "left"
ArrowKeys.RIGHT; // "right"
ArrowKeys.ERROR; // 235

//if move === ArrowsKeys.UP // "up"